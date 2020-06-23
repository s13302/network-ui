import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EmitterDetailsModel } from 'src/app/model/emitter-details.model';

@Component({
  selector: 'app-emitter-type',
  templateUrl: './emitter-type.component.html',
  styleUrls: ['./emitter-type.component.sass']
})
export class EmitterTypeComponent implements OnInit {

  @Input("emitter-details")
  emitterDetails: EmitterDetailsModel;

  @Input("parent-form")
  parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
