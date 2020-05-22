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
    var parentHeight = el.clientHeight / 2 - this.map.medianaY * 55;
    var parentWidth = el.clientWidth / 2;

    for (let i = 0; i < this.map.cells.length; i++) {
      for (let j = 0; j < this.map.cells[0].length; j++) {
        //let cssLeft = parentWidth + i * 29 - j * 29;
        //let cssTop = parentHeight + i * 29 + j * 29;
        var div = document.createElement('div');
        div.style.backgroundImage = `url('/assets/ground/${this.map.cells[i][j]}.png')`;
        //img.style.left = cssLeft + 'px';
        //img.style.top = cssTop + 'px';
        div.classList.add('back-tile');
        div.draggable = true;
        div.ondragstart = function (e) {
          e.preventDefault();
        };

        el.append(div);
      }
    }
  }

  private fillMap() {
    this.map = new Map();
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 30; j++) {
        if (!this.map.cells[i]) this.map.cells[i] = [];
        this.map.cells[i][j] = 'z';
      }
    }
    //this.map.cells =
    //  [['yt', 'p', 'p', 'p', 'yl'],
    //  ['p', 'p', 'p', 'p', 'p'],
    //  ['p', 'p', 'p', 'p', 'p'],
    //  ['p', 'p', 'p', 'p', 'p'],
    //  ['yr', 'p', 'p', 'p', 'yb']]
  }
}

export class Map {
  public cells: string[][] = [];

  public get medianaX(): number {
    if (!this.cells) return 0;
    return Math.floor(this.cells.length / 2);
  }
  public get medianaY() {
    if (!this.cells || !this.cells[0]) return 0;
    return Math.floor(this.cells[0].length / 2);
  }
}
