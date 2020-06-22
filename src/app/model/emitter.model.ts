export class EmitterModel {

  sessionMapper: string;

  static validateModel(model: EmitterModel) {
    if (! model.sessionMapper) {
      throw new Error("Session Mapper is required");
    }
    model.sessionMapper = model.sessionMapper.trim();
    if (model.sessionMapper.trim().length <= 0) {
      throw new Error("Session Mapper is required");
    }
  }

}