import { Component, OnInit, Input } from '@angular/core';
import { EmitterDetailsPCAPModel } from 'src/app/model/emitter-details-pcap.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-emitters-edit-pcap',
  templateUrl: './emitters-edit-pcap.component.html',
  styleUrls: ['./emitters-edit-pcap.component.sass']
})
export class EmittersEditPcapComponent implements OnInit {

  @Input("emitter-details")
  emitterDetails: EmitterDetailsPCAPModel;

  @Input("parent-form")
  parentForm: FormGroup;

  childForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.childForm = this.formBuilder.group({
      device: [this.emitterDetails.device, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]\w+$/),
      ]],
      bufferSize: [this.emitterDetails.bufferSize, [
        Validators.required,
        Validators.min(1024),
        Validators.max(10240),
      ]],
    });
    this.parentForm.addControl('childForm', this.childForm);
  }

}
