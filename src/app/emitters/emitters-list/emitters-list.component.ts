import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from 'src/app/configuration.service';
import { EmitterDetailsModel } from 'src/app/model/emitter-details.model';
import { EmitterDetailsWizardServiceService } from 'src/app/emitter-details-wizard-service.service';

@Component({
  templateUrl: './emitters-list.component.html',
  styleUrls: ['./emitters-list.component.sass']
})
export class EmittersListComponent implements OnInit {

  emitters: Array<EmitterDetailsModel>;

  constructor(
    private configurationService: ConfigurationService,
    private router: Router,
    private emitterDetailsWizardServiceService: EmitterDetailsWizardServiceService,
  ) { }

  async ngOnInit() {
    await this.loadEmitters();
  }

  async doDelete(emitter: EmitterDetailsModel) {
    await this.configurationService.deleteEmitterDetails(emitter.type);
    await this.loadEmitters();

  }

  async doEdit(emitter: EmitterDetailsModel) {
    this.emitterDetailsWizardServiceService.emitterDetails = emitter;
    this.emitterDetailsWizardServiceService.isEdit = true;
    this.router.navigate(['emitters', 'edit']);
  }

  private async loadEmitters() {
    this.emitters = await this.configurationService.emitters;
  }

}
