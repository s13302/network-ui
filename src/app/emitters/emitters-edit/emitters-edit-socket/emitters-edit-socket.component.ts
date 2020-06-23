import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmitterDetailsModel } from 'src/app/model/emitter-details.model';

@Component({
  selector: 'app-emitters-edit-socket',
  templateUrl: './emitters-edit-socket.component.html',
  styleUrls: ['./emitters-edit-socket.component.sass']
})
export class EmittersEditSocketComponent implements OnInit {

  @Input("emitter-details")
  emitterDetails: EmitterDetailsModel;

  @Input("parent-form")
  parentForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

}
