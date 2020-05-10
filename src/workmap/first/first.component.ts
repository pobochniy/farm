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
    var el = document.getElementById('farm-workspace');
    var parentHeight = 100;
    var parentWidth = 300;

    for (let i = 0; i < this.map.cells.length; i++) {
      for (let j = 0; j < this.map.cells[0].length; j++) {
        let cssLeft = parentWidth + i * 55 - j * 55;
        let cssTop = parentHeight + i * 21 + j * 21;
        var img = document.createElement('img');
        img.src = `/assets/ground/${this.map.cells[i][j]}.png`;
        img.style.left = cssLeft + 'px';
        img.style.top = cssTop + 'px';
        img.style.position = 'absolute';
        el.append(img);
        img.classList.add('back-tile');
      }
    }
  }

  private fillMap() {
    this.map = new Map();
    this.map.cells =
      [['yt', 'p', 'p', 'p', 'yl'],
      ['p', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'p'],
      ['p', 'p', 'p', 'p', 'p'],
      ['yr', 'p', 'p', 'p', 'yb']]
  }
}

export class Map {
  public cells: string[][];

  public get medianaX(): number {
    if (!this.cells) return 0;
    return Math.floor(this.cells.length / 2);
  }
  public get medianaY() {
    if (!this.cells || !this.cells[0]) return 0;
    return Math.floor(this.cells[0].length / 2);
  }
}
