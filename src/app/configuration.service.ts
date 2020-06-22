import { Injectable } from '@angular/core';

import { EmitterModel } from './model/emitter.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  get globalSessionMapper(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        let emitterJson = localStorage.getItem(environment.localStorageKey);
        let emitterModel: EmitterModel = JSON.parse(emitterJson);
        if (emitterModel) resolve(emitterModel.sessionMapper);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  saveGlobalSessionMapper(valueToSave: string): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        let emitterJson = localStorage.getItem(environment.localStorageKey);
        let emitterModel: EmitterModel;
        if (emitterJson) {
          emitterModel = JSON.parse(emitterJson);
        } else {
          emitterModel = new EmitterModel();
        }
        emitterModel.sessionMapper = valueToSave;
        EmitterModel.validateModel(emitterModel);
        localStorage.setItem(environment.localStorageKey, JSON.stringify(emitterModel));
        resolve(emitterModel.sessionMapper);
      } catch (error) {
        reject(error);
      }
    });
  }

}
