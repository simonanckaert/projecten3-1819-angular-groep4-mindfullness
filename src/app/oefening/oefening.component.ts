import { Component, OnInit, Inject } from '@angular/core';
import { Oefening } from './oefening.model';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Sessie } from '../sessie/sessie.model';


@Component({
  selector: 'app-oefening',
  templateUrl: './oefening.component.html',
  styleUrls: ['./oefening.component.css']
})
export class OefeningComponent implements OnInit {
  editMode = false;
  oefeningFormGroup: FormGroup;
  file: File;
  groepNummers = [];
  selectedGroepnummers = [];
  url: string = 'test';

  constructor(public dialogRef: MatDialogRef<OefeningComponent>,
              @Inject(MAT_DIALOG_DATA) public oef: Oefening, private fb: FormBuilder,
              private dataService: DataService) {
    this.dataService.getGebruikers().subscribe(result => {
      this.setGroepen(result);
      this.setSelectedGroepen()
    });
  }

  // Set available groupnrs
  setGroepen(result: any[]) {
    result.forEach(gebruiker => {
      if (this.groepNummers.indexOf(gebruiker.groepnr) === -1) {
          this.groepNummers.push(gebruiker.groepnr);
      }
    });
    this.voegOvergeslagenNummersToe();
    this.groepNummers.sort();
  }

  voegOvergeslagenNummersToe() {
    for(let index = 0; index < this.groepNummers.length; index++) {
      if(!this.groepNummers.includes(index)) {
        this.groepNummers.push(index);
      }
    }
  }

  // Set groupnrs of selected exercise
  setSelectedGroepen() {
    this.selectedGroepnummers = this.oef.groepen.split(',');
  }

  // Close dialog after cancel
  onNoClick(): void {
    this.dialogRef.close();
  }

  // Exercise validation
  ngOnInit() {
    this.oefeningFormGroup = this.fb.group({
      oefeningNaam: [this.oef.naam, [Validators.required, Validators.minLength(4)]],
      oefeningBeschrijving: [this.oef.beschrijving, [Validators.required]],
    });
  }

  // Toggle editmode on/off
  public toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  // Add to group (set checked)
  checkGroep(result, nummer) {
    if (result.checked) {
      this.selectedGroepnummers.push(nummer);
    } else {
      const index: number = this.selectedGroepnummers.indexOf(nummer.toString());
      if (index !== -1) {
        this.selectedGroepnummers.splice(index, 1);
      }
    }
    this.selectedGroepnummers.sort();
  }

  // Remove exercise
  oefeningVerwijderen() {
    if (confirm('Ben je zeker dat je ' + this.oef.naam + ' wilt verwijderen?')) {
      var sessieObservable = this.dataService.getSessie(this.oef.sessieId);
      sessieObservable.subscribe(
        data => {
          const index : number = data.oefeningen.map(oefening => oefening.oefeningId).indexOf(this.oef.oefeningId);
          data.oefeningen.splice(index, 1);
          this.dataService.verwijderOefening(data, this.oef);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
      this.dialogRef.close();
    }
  }

  // Save exercise
  oefeningOpslaan() {
    if (this.oefeningFormGroup.valid) {
      this.oef.naam = this.oefeningFormGroup.value.oefeningNaam;
      this.oef.beschrijving = this.oefeningFormGroup.value.oefeningBeschrijving;
      let groepen = '';
      this.selectedGroepnummers.forEach(element => {
        groepen = groepen + element + ',';
      });
      groepen = groepen.slice(0, -1);
      this.oef.groepen = groepen;
      this.oef.file = this.file;

      this.dataService.getSessie(this.oef.sessieId).subscribe(
        data => {
          data = new Sessie(data['id'],
          data['naam'],
          data['beschrijving'],
          data['sessieCode'],
          data['oefeningen'] !=  undefined ? data['oefeningen'].map(oef => Oefening.fromJSON(oef)) : [])
          var index = data.oefeningen.map(oef => oef.oefeningId).indexOf(this.oef.oefeningId)
          if(index !== -1) {
            data.oefeningen[index] = this.oef
            this.dataService.uploadSessie(data);
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
      this.dialogRef.close();
    }
  }

  // If file is uploaded set current _file
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
    }
  }

  // Select a new file
  openBestand() {
    window.open(this.oef.url);
  }

  isChecked(oef: Oefening, nummer): boolean {
    if (oef.groepen && oef.groepen.indexOf(nummer) > -1) {
      return true;
    }
    return false;
  }
}
