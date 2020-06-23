import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors-component',
  templateUrl: './errors-component.component.html',
  styleUrls: ['./errors-component.component.sass']
})
export class ErrorsComponentComponent implements OnInit {

  @Input() errors: any[]

  constructor() { }

  ngOnInit() {
  }

}
