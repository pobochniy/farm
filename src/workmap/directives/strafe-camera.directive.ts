import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrafeCamera]'
})
export class StrafeCameraDirective {
  private el: any;
  private isDragabble = false;
  private startX = 0;
  private startY = 0;
  private startTransformX = 0;
  private startTransformY = 0;

  constructor(private element: ElementRef) {

  }

  ngAfterViewInit() {
    this.el = document.getElementById('farm-camera');
    this.el.addEventListener('mousedown', this.onDown.bind(this));
    this.el.addEventListener('mouseup', this.onUp.bind(this));
    document.addEventListener('mousemove', this.onMove.bind(this));
    //this.startHeight = (this.element.nativeElement as HTMLElement).offsetHeight;
  }

  ngOnDestroy() {
    this.el.removeEventListener('mousedown');
    this.el.removeEventListener('mouseup');
  }

  onDown(e: MouseEvent) {
    this.isDragabble = true;
    this.startX = e.pageX;
    this.startY = e.pageY;

    let workspace = this.el.getElementsByTagName('div')[0];
    let style = window.getComputedStyle(workspace);
    let matrix = new WebKitCSSMatrix(style.webkitTransform);

    this.startTransformX = matrix.m41; //translateX
    this.startTransformY = matrix.m42; //translateY
  }

  onUp(e) {
    this.isDragabble = false;
    //this.startHeight = (this.element.nativeElement as HTMLElement).offsetHeight;
    //this.startHeightPosition = e.pageY;
  }

  onMove(e) {
    if (this.isDragabble) {
      let workspace = this.el.getElementsByTagName('div')[0];
      workspace.style.transform = "translate(" + (this.startTransformX + e.pageX - this.startX) + "px," + (this.startTransformY + e.pageY - this.startY) + "px) ";

      //(this.element.nativeElement as HTMLElement).style.height = this.startHeight + this.startHeightPosition - e.pageY + 'px';
    }
  }
}
