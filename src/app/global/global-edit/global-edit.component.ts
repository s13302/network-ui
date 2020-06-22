import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/configuration.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-global-edit',
  templateUrl: './global-edit.component.html',
  styleUrls: ['./global-edit.component.sass']
})
export class GlobalEditComponent implements OnInit {

  globalSessionMapper: string;
  success: boolean = false;
  error: boolean = false;

  constructor(
    private configurationService: ConfigurationService
  ) { }

  async ngOnInit() {
    this.globalSessionMapper = await this.configurationService.globalSessionMapper;
  }

  async onSubmit(form) {
    try {
      this.globalSessionMapper = await this.configurationService.saveGlobalSessionMapper(this.globalSessionMapper);
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

}
