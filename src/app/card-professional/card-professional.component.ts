import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-professional',
  templateUrl: './card-professional.component.html',
  styleUrls: ['./card-professional.component.css']
})
export class CardProfessionalComponent implements OnInit {

  title = "Professional"

  @Input() professionalPrice!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
