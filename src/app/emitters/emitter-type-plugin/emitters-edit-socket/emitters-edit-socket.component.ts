import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmitterDetailsSocketModel } from 'src/app/model/emitter-details-socket.model';

@Component({
  selector: 'app-emitters-edit-socket',
  templateUrl: './emitters-edit-socket.component.html',
  styleUrls: ['./emitters-edit-socket.component.sass']
})
export class EmittersEditSocketComponent implements OnInit {

  @Input("emitter-details")
  emitterDetails: EmitterDetailsSocketModel;

  @Input("parent-form")
  parentForm: FormGroup;

  childForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.childForm = this.formBuilder.group({
      connectionTimeout: [this.emitterDetails.connectionTimeout, [
        Validators.required,
        Validators.min(60000),
        Validators.max(600000),
      ]]
    });
    this.parentForm.addControl('childForm', this.childForm);
  }

}
