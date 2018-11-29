import { Component, OnInit, Inject} from '@angular/core';
import { Oefening } from './oefening.model';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { OefeningDataService } from '../oefening-data.service';
import { FormGroup, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import * as globals from '../../globals/globals';


@Component({
  selector: 'app-oefening',
  templateUrl: './oefening.component.html',
  styleUrls: ['./oefening.component.css']
})
export class OefeningComponent implements OnInit {
  public editMode = false;
  public oefeningFormGroup: FormGroup;
  public _file: File;

  constructor(private _oefDataService: OefeningDataService,
    public dialogRef: MatDialogRef<OefeningComponent>,
    @Inject(MAT_DIALOG_DATA) public oef: Oefening, private fb: FormBuilder) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.oefeningFormGroup = this.fb.group({
      oefeningNaam: [this.oef.naam, [Validators.required, Validators.minLength(4)]],
      oefeningBeschrijving: [this.oef.beschrijving, [Validators.required]]
    });
  }

  public toggleEditMode(): void {
    this.editMode = !this.editMode;
    console.log(this.editMode);
  }

  oefeningVerwijderen() {
    if (confirm('Ben je zeker dat je ' + this.oef.naam + ' wilt verwijderen?')) {
      this._oefDataService.verwijderOefening(this.oef);
      this.dialogRef.close();
    }
  }

  oefeningOpslaan(): void {
    if (this.oefeningFormGroup.valid) {
        this.oef.naam = this.oefeningFormGroup.value.oefeningNaam;
        this.oef.beschrijving = this.oefeningFormGroup.value.oefeningBeschrijving;
        // this.oef.file = this._file;

        this.dialogRef.close(this._oefDataService.updateOefening(this.oef));
    }
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this._file = file;
    }
  }

  openBestand() {
    window.open(globals.backendUrl + '/oefeningen/files/' + this.oef.fileName);
  }
}
