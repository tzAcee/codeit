import { Injectable } from '@angular/core';
import * as RecordRTC from 'recordrtc';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  record;

  constructor() { }

  start(stream: MediaStream)
  {
    var options = {
      mimeType: "audio/wav",
      numberOfAudioChannels: 1

    };

    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }

  stopRecording() {
    this.record.stop(this.process.bind(this));
  }

  process(blob) {
    // Do whatever Â you got the blob
    console.log(URL.createObjectURL(blob));
}
}

