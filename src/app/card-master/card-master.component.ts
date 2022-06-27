import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-master',
  templateUrl: './card-master.component.html',
  styleUrls: ['./card-master.component.css']
})
export class CardMasterComponent implements OnInit {

  title = "Master"

  @Input() masterPrice!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
