import { Injectable } from '@angular/core';
import axios from 'axios';
import config from '../../../server/config/default';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  live_streams: [];
  state;

  constructor()
  {
    this.state = {
      life_streams: []
    }
  }

  getLiveStreams()
  {
    let url = 'http://127.0.0.1:' + config.rtmp_server.http.port + '/api/streams'; 
    console.log(url);
    axios.get(url)
      .then(res => {
        let streams = res.data;
        if (typeof (streams['live'] !== 'undefined')) {
          console.log(streams['live']);
        }
      });
  }

  setState(st, a)
  {
    this.state = st;
    console.log(this.state);
  }

  getStreamsInfo(live_streams)
  {
    axios.get('/streams/info', {
      params: {
          streams: live_streams
      }
  }).then(res => {
      this.setState({
          live_streams: res.data
      }, () => {
          console.log(this.state);
      });
  });
  }

}

