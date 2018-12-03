import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { OefeningDataService } from '../oefening-data.service';
import { Oefening } from '../oefening/oefening.model';
import { HttpParams } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-oefeningdetail',
  templateUrl: './oefeningdetail.component.html',
  styleUrls: ['./oefeningdetail.component.css']
})
export class OefeningdetailComponent implements OnInit {
  private _id: number;
  private _naam: string;
  private _beschrijving: string;


  constructor(private route: ActivatedRoute, private _oefDataService: OefeningDataService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._id = params['oefeningId'];
   });
  }

  get oefening(): Oefening {
    return this._oefDataService.geefOefening(this._id);
  }

  speelGeluidAf(): void {
    const audio = new Audio();
    audio.src = '../../assets/audio.aac';
    audio.load();
    audio.play();
  }
}
