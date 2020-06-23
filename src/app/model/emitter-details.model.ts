export class EmitterDetailsModel {

  type: string;
  active: boolean = false;
  collectMetrics: boolean = false;

  static validateModel(model: EmitterDetailsModel) {
    if (! model.type) {
      throw new Error("Type is required");
    }
    model.type = model.type.trim();
    if (model.type.length <= 0) {
      throw new Error("Type is required");
    }
  }

}