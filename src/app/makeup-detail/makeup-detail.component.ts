import { Component, OnInit, Input } from '@angular/core';

import { Makeup } from '../makeup';

@Component({
  selector: 'app-makeup-detail',
  templateUrl: './makeup-detail.component.html',
  styleUrls: ['./makeup-detail.component.css']
})
export class MakeupDetailComponent implements OnInit {

  @Input() makeup?: Makeup;
  //An @Input decorator allows a parent to update data in the child.
  //In this case, we'll be giving a Makeup to our Makeup-Detail component.

  constructor() { }

  ngOnInit(): void {
  }

}