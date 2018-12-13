import { Component, OnInit, Inject, Input } from '@angular/core';
import { Oefening } from '../oefening/oefening.model';
import { Sessie } from '../sessie/sessie.model';
import { MatDialogRef } from '@angular/material';
import { OefeningDataService } from '../oefening-data.service';
import { FormGroup, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { GebruikerDataService } from '../gebruiker-data.service';

@Component({
  selector: 'app-oefening-empty',
  templateUrl: './oefening-empty.component.html',
  styleUrls: ['./oefening-empty.component.css']
})
export class OefeningEmptyComponent implements OnInit {
  @Input() public sessie: Sessie;
  public oefeningFormGroup: FormGroup;
  public _file: File;

  private _gebruikers: Observable<any[]>;
  public groepNummers = [];
  public selectedGroepnummers = [];

  constructor(public dialogRef: MatDialogRef<OefeningEmptyComponent>, @Inject(MAT_DIALOG_DATA) public data: Sessie,
    private _oefDataService: OefeningDataService, public gService: GebruikerDataService, private fb: FormBuilder) {
    this._gebruikers = this.gService.getUsers();
    this._gebruikers.subscribe(result => {
      this.setGroepen(result);
    });
  }

  setGroepen(result: any[]) {
    result.forEach(gebruiker => {
      if (this.groepNummers.indexOf(gebruiker.groepnr) === -1) {
        if (gebruiker.groepnr !== '0') {
          this.groepNummers.push(gebruiker.groepnr);
        }
      }
    });
    this.groepNummers.sort();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.oefeningFormGroup = this.fb.group({
      oefeningNaam: ['', [Validators.required, Validators.minLength(4)]],
      oefeningBeschrijving: ['', [Validators.required]]
    });
  }

  checkGroep(result, nummer) {
    if (result.checked) {
      this.selectedGroepnummers.push(nummer);
    } else {
      const index: number = this.selectedGroepnummers.indexOf(nummer);
      if (index !== -1) {
        this.selectedGroepnummers.splice(index, 1);
      }
    }
  }

  oefeningOpslaan() {
    if (this.oefeningFormGroup.valid) {
      const oefening = new Oefening(this.oefeningFormGroup.value.oefeningNaam,
        this.oefeningFormGroup.value.oefeningBeschrijving, this.data.sessieId);
      let groepen = '';
      this.selectedGroepnummers.forEach(element => {
        groepen = groepen + element + ',';
      });
      groepen = groepen.slice(0, -1);
      oefening.groepen = groepen;
      oefening.file = this._file;
      this.dialogRef.close(this._oefDataService.voegNieuweOefeningToe(oefening).subscribe());
    }
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this._file = file;
    }
  }
}
