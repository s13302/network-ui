import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EmitterDetailsWizardServiceService } from 'src/app/emitter-details-wizard-service.service';
import { ConfigurationService } from 'src/app/configuration.service';
import { EmitterDetailsModel } from 'src/app/model/emitter-details.model';

@Component({
  selector: 'app-emitters-edit',
  templateUrl: './emitters-edit.component.html',
  styleUrls: ['./emitters-edit.component.sass']
})
export class EmittersEditComponent implements OnInit {

  emitterDetails: EmitterDetailsModel;
  errorMessage: string;

  emitterDetailsForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private configurationService: ConfigurationService,
    private emitterDetailsWizardServiceService: EmitterDetailsWizardServiceService,
  ) { }

  ngOnInit() {
    this.emitterDetails = this.emitterDetailsWizardServiceService.emitterDetails;

    this.emitterDetailsForm = this.formBuilder.group({
      type: [{
        value: this.emitterDetails.type,
        disabled: true,
      }],
      active: [this.emitterDetails.active],
      collectMetrics: [this.emitterDetails.collectMetrics]
    });
  }

  async onSubmit() {
    if (this.emitterDetailsForm.valid) {
      try {
        let toSave = this.emitterDetailsForm.getRawValue();
        toSave = {
          ...toSave,
          ...toSave.childForm
        };
        delete toSave.childForm;
        if (this.emitterDetailsWizardServiceService.isEdit) {
          await this.configurationService.editEmitterDetails(toSave.type, toSave);
        } else {
          await this.configurationService.addEmitterDetails(toSave);
        }
        this.router.navigate(['emitters']);
      } catch (error) {
        this.errorMessage = error.message;
      }
    }
  }

}
