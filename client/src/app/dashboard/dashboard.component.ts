import { Component, OnInit } from '@angular/core';
import { StreamService } from '../stream.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private streamService: StreamService) { }

  ngOnInit() {
    this.streamService.getLiveStreams();
  }

}
