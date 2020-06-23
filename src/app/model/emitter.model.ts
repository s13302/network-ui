import { EmitterDetailsModel } from './emitter-details.model';

export class EmitterModel {

  sessionMapper: string;
  emitters: Array<EmitterDetailsModel>;

  static validateModel(model: EmitterModel) {
    if (! model.sessionMapper) {
      throw new Error("Session Mapper is required");
    }
    model.sessionMapper = model.sessionMapper.trim();
    if (model.sessionMapper.trim().length <= 0) {
      throw new Error("Session Mapper is required");
    }
  }

  static validateEmitters(model: EmitterModel) {
    if (! model.emitters) {
      throw new Error("At least one emitter is required");
    }
    if (model.emitters.length < 1) {
      throw new Error("At least one emitter is required");
    }
    console.log(model.emitters.map(emitter => emitter.type));
  }

}