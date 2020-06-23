import { Injectable } from '@angular/core';
import { EmitterDetailsModel } from './model/emitter-details.model';

@Injectable({
  providedIn: 'root'
})
export class EmitterDetailsWizardServiceService {

  emitterDetails: EmitterDetailsModel;
  isEdit: boolean;

  constructor() { }
}
