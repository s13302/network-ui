import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ConfigurationService } from '../configuration.service';

@Directive({
  selector: 'custom-validator',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: MyCustomValidator,
    multi: true,
  }]
})
export class MyCustomValidator implements AsyncValidator {

  constructor(
    private configurationService: ConfigurationService
  ) {  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(async (resolve, reject) => {
      try {
        let value = control.value;
        let emitters = await this.configurationService.emitters;
        let isDuplicate = emitters.map(emitter => emitter.type).includes(value);
        resolve(isDuplicate ? {
          duplicate: true,
        } : null);
      } catch (error) {
        reject();
      }
    });
  }

}