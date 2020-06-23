import { Injectable } from '@angular/core';

import { EmitterModel } from './model/emitter.model';
import { environment } from 'src/environments/environment';
import { EmitterDetailsModel } from './model/emitter-details.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  get globalSessionMapper(): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        let emitterModel = await this.emitterModel;
        if (emitterModel) resolve(emitterModel.sessionMapper);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  get emitters(): Promise<Array<EmitterDetailsModel>> {
    return new Promise(async (resolve, reject) => {
      try {
        let emitterModel = await this.emitterModel;
        resolve(emitterModel.emitters);
      } catch (error) {
        reject(error);
      }
    });
  }

  saveGlobalSessionMapper(valueToSave: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        let emitterModel = await this.emitterModel;
        emitterModel.sessionMapper = valueToSave;
        EmitterModel.validateModel(emitterModel);
        this.saveEmitterModel(emitterModel);
        resolve(emitterModel.sessionMapper);
      } catch (error) {
        reject(error);
      }
    });
  }

  addEmitterDetails(valueToSave: EmitterDetailsModel): Promise<EmitterModel> {
    return new Promise(async (resolve, reject) => {
      try {
        let emitterModel = await this.emitterModel;
        if (! emitterModel.emitters) {
          emitterModel.emitters = new Array();
        }
        if (emitterModel.emitters.map(emitter => emitter.type).includes(valueToSave.type)) {
          throw new Error('Cannot add more than 1 emitter of the same type');
        }
        emitterModel.emitters.push(valueToSave);
        this.saveEmitterModel(emitterModel);
        resolve(emitterModel);
      } catch (error) {
        reject(error);
      }
    });
  }

  deleteEmitterDetails(emitterType: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        let emitterModel = await this.emitterModel;
        let elementNumber = emitterModel.emitters.findIndex(emitter => emitter.type == emitterType);
        emitterModel.emitters.splice(elementNumber, 1);
        this.saveEmitterModel(emitterModel);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  private get emitterModel(): Promise<EmitterModel> {
    return new Promise((resolve, reject) => {
      try {
        let emitterJson = localStorage.getItem(environment.localStorageKey);
        let emitterModel : EmitterModel;
        if (emitterJson) {
          emitterModel = JSON.parse(emitterJson);
        } else {
          emitterModel = new EmitterModel();
        }
        resolve(emitterModel);
      } catch (error) {
        reject(error);
      }
    });
  }

  private saveEmitterModel(emitterModel: EmitterModel) {
    localStorage.setItem(environment.localStorageKey, JSON.stringify(emitterModel));
  }

}
