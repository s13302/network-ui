import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

import { EmitterDetailsModel } from 'src/app/model/emitter-details.model';
import { EmitterDetailsWizardServiceService } from 'src/app/emitter-details-wizard-service.service';
import { ConfigurationService } from 'src/app/configuration.service';

@Component({
  selector: 'app-emitters-add',
  templateUrl: './emitters-add.component.html',
  styleUrls: ['./emitters-add.component.sass']
})
export class EmittersAddComponent implements OnInit {

  emitterDetails: EmitterDetailsModel;

  emitterTypeForm: FormGroup;

  constructor(
    private emitterDetailsWizardServiceService: EmitterDetailsWizardServiceService,
    private configurationService: ConfigurationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.emitterDetails = new EmitterDetailsModel();
    this.emitterTypeForm = this.formBuilder.group({
      type: [this.emitterDetails.type, [
        Validators.required,
      ], this.duplicatedTypesValidationFunction()],
    });
  }

  onSubmit() {
    if (this.emitterTypeForm.valid) {
      this.emitterDetails.type = this.emitterTypeForm.value.type;
      this.emitterDetailsWizardServiceService.emitterDetails = this.emitterDetails;
      this.emitterDetailsWizardServiceService.isEdit = false;
      this.router.navigate(['emitters/edit']);
    }
  }

  private duplicatedTypesValidationFunction(): AsyncValidatorFn {
    return async (control) => {
      let emitters = await this.configurationService.emitters;
      let isDuplicated = emitters.map(emitter => emitter.type).includes(control.value);
      return isDuplicated ? {
        duplicated: true,
      } : null;
    };
  }

}
