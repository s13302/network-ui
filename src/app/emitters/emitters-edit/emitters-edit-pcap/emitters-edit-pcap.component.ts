import { Component, OnInit, Input } from '@angular/core';
import { EmitterDetailsModel } from 'src/app/model/emitter-details.model';

@Component({
  selector: 'app-emitters-edit-pcap',
  templateUrl: './emitters-edit-pcap.component.html',
  styleUrls: ['./emitters-edit-pcap.component.sass']
})
export class EmittersEditPcapComponent implements OnInit {

  @Input("emitter-details")
  emitterDetails: EmitterDetailsModel

  constructor() { }

  ngOnInit() {
  }

}
