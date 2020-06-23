import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(
    private router: Router,
    private configurationService: ConfigurationService,
    private emitterDetailsWizardServiceService: EmitterDetailsWizardServiceService,
  ) { }

  ngOnInit() {
    this.emitterDetails = this.emitterDetailsWizardServiceService.emitterDetails;
  }

  async onSubmit(form: NgForm) {
    if (form.valid) {
      try {
        await this.configurationService.addEmitterDetails(this.emitterDetails);
        this.router.navigate(['emitters']);
      } catch (error) {
        this.errorMessage = error.message;
      }
    }
  }

}
