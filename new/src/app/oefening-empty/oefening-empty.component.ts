import { Component, OnInit, Inject, Input } from '@angular/core';
import { Oefening } from '../oefening/oefening.model';
import { Sessie } from '../sessie/sessie.model';
import { MatDialogRef } from '@angular/material';
import { OefeningDataService } from '../oefening-data.service';
import { FormGroup, Validators, FormBuilder } from '../../../node_modules/@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-oefening-empty',
  templateUrl: './oefening-empty.component.html',
  styleUrls: ['./oefening-empty.component.css']
})
export class OefeningEmptyComponent implements OnInit {
  @Input() public sessie: Sessie;
  public oefeningFormGroup: FormGroup;
  public _file: File;

  constructor(public dialogRef: MatDialogRef<OefeningEmptyComponent>, @Inject(MAT_DIALOG_DATA) public data: Sessie,
    private _oefDataService: OefeningDataService, private fb: FormBuilder) {
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

  oefeningOpslaan() {
    if (this.oefeningFormGroup.valid) {
      const oefening = new Oefening(this.oefeningFormGroup.value.oefeningNaam,
        this.oefeningFormGroup.value.oefeningBeschrijving, this.data.sessieId);
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
