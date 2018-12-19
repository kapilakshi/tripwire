import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pdfSrc: string = '/assets/pdf/sdlc_tutorial.pdf';
  constructor(private _getData : GetDataService) { }
  public link = [];
  ngOnInit() {
    this._getData.getJson().subscribe(data => this.link = data);
  }

}
