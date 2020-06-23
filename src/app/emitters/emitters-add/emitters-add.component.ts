import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { EmitterDetailsModel } from 'src/app/model/emitter-details.model';
import { EmitterDetailsWizardServiceService } from 'src/app/emitter-details-wizard-service.service';

@Component({
  selector: 'app-emitters-add',
  templateUrl: './emitters-add.component.html',
  styleUrls: ['./emitters-add.component.sass']
})
export class EmittersAddComponent implements OnInit {

  emitterDetails: EmitterDetailsModel;

  constructor(
    private emitterDetailsWizardServiceService: EmitterDetailsWizardServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.emitterDetails = new EmitterDetailsModel();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.emitterDetailsWizardServiceService.emitterDetails = this.emitterDetails;
      this.router.navigate(['emitters/edit']);
    }
  }

}
