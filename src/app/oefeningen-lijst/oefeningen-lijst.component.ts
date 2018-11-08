import { Component, OnInit } from '@angular/core';
import { Oefening } from '../oefening/oefening.model';
import { OefeningDataService } from '../oefening-data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-oefeningen-lijst',
  templateUrl: './oefeningen-lijst.component.html',
  styleUrls: ['./oefeningen-lijst.component.css']
})
export class OefeningenLijstComponent implements OnInit {
  public oefening: FormGroup;
  private _file: File;

  constructor(private _oefDataService: OefeningDataService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.oefening = this.fb.group({
      oefeningNaam: ['', [Validators.required, Validators.minLength(4)]],
      oefeningBeschrijving: ['', [Validators.required]],
      oefeningSessie: [''],
      oefeningBestand: ['', Validators.required]
    });
  }

  onSubmit() {
    const oefening = new Oefening(this.oefening.value.oefeningNaam,
      this.oefening.value.oefeningBeschrijving, this.oefening.value.oefeningSessie);
    
      this._oefDataService.voegNieuweOefeningToe(oefening, this._file);
  }

  onFileChange(event) {
    
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this._file = file;
    }
    
  }
}
