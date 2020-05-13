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
  private scale = 1;

  constructor(private element: ElementRef) {

  }

  ngAfterViewInit() {
    this.el = document.getElementById('farm-camera');
    this.el.addEventListener('mousedown', this.onDown.bind(this));
    this.el.addEventListener('mouseup', this.onUp.bind(this));
    this.el.addEventListener('mouseout', this.onMouseout.bind(this));
    this.el.addEventListener('wheel', this.onWheel.bind(this));
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
  }

  onMove(e) {
    if (this.isDragabble) {
      let workspace = this.el.getElementsByTagName('div')[0];
      workspace.style.transform = `translate(${this.startTransformX + e.pageX - this.startX}px, ${this.startTransformY + e.pageY - this.startY}px) scale(${this.scale})`;
    }
  }

  onMouseout(e) {
    this.isDragabble = false;
  }

  onWheel(e) {
    let workspace = this.el.getElementsByTagName('div')[0];
    let style = window.getComputedStyle(workspace);
    let matrix = new WebKitCSSMatrix(style.webkitTransform);

    this.scale = matrix.a + (e.wheelDeltaY > 0 ? 0.1 : -0.1);

    workspace.style.transform = `translate(${this.startTransformX}px, ${this.startTransformY}px) scale(${this.scale})`;
  }
}
