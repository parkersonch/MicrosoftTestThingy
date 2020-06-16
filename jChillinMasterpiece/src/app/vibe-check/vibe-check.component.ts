import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-vibe-check',
  templateUrl: './vibe-check.component.html',
  styleUrls: ['./vibe-check.component.scss']
})
export class VibeCheckComponent implements OnInit {

  calendar: any;

  constructor(private restService: RestService) {
    this.restService.getCalenderSubject().subscribe(
      (newCalendar) => (
        this.calendar = newCalendar
      )
    );
   }

  ngOnInit(): void {
    this.restService.getCalender();
    console.log(this.calendar);
  }

  click() {
    console.log(this.calendar);
  }

}
