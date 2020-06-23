import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emitter-type-description',
  templateUrl: './emitter-type-description.component.html',
  styleUrls: ['./emitter-type-description.component.sass']
})
export class EmitterTypeDescriptionComponent implements OnInit {

  @Input('emitter-type')
  emitterType: string;

  constructor() { }

  ngOnInit() {
  }

}
