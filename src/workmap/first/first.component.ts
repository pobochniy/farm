import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public map: Map;

  constructor() {
  }

  ngOnInit(): void {
    this.fillMap();
  }

  private fillMap() {
    this.map = new Map();
    this.map.cells =
      [['p', 'p', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'p', 'p']]
  }
}

export class Map {
  public cells: string[][];
}
