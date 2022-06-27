import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.css']
})
export class CardBasicComponent implements OnInit {

  title = "Basic"

  @Input() basicPrice!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
