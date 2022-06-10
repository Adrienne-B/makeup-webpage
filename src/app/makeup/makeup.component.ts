import { Component, OnInit } from '@angular/core';
import { Makeup } from '../makeup';

import { MAKEUP } from '../mock-makeup';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {
  makeup = MAKEUP;

  selectedMakeup?: Makeup;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(makeup: Makeup): void {
    this.selectedMakeup = makeup;
  }
}