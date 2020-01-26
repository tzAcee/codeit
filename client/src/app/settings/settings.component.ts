import { Component, OnInit } from '@angular/core';
import { SETTINGSTATE } from '../enums/SETTINGSTATE';
import { StreamService } from '../stream.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  streaming: boolean;
  state: SETTINGSTATE = 0;

  constructor(private streamService: StreamService)
  {
    
  }

  ngOnInit() {
  }

  change_state(a: number)
  {
    this.state = a as SETTINGSTATE;
  }

  manage_stream()
  {
    if (this.streaming)
    {
    }
    else
    {
    }
  }

}
