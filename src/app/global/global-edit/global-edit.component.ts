import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationService } from 'src/app/configuration.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-global-edit',
  templateUrl: './global-edit.component.html',
  styleUrls: ['./global-edit.component.sass']
})
export class GlobalEditComponent implements OnInit {

  globalForm: FormGroup;
  success: boolean = false;
  error: boolean = false;

  constructor(
    private configurationService: ConfigurationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loadData();
    this.globalForm = this.formBuilder.group({
      sessionMapper: ['', [
        Validators.required,
      ]]
    });
  }

  async onSubmit() {
    try {
      await this.configurationService.saveGlobalSessionMapper(this.globalForm.value.sessionMapper);
      this.success = true;
      this.error = false;
    } catch (error) {
      if (! environment.production) {
        console.error(error);
      }
      this.success = false;
      this.error = true;
    }
  }

  private async loadData() {
    let globalSessionValue = await this.configurationService.globalSessionMapper;
    this.globalForm.controls.sessionMapper.setValue(globalSessionValue);
  }

}
