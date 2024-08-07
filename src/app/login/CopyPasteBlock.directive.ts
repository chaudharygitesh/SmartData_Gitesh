import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[CopyPasteBlock]'
})
export class CopyPasteBlockDirective {

  constructor() { }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }
  @HostListener('keydown', ['$event'])
  public onKeydownHandler(e: KeyboardEvent): void {
  if(e.keyCode===13){
    alert("enter")
  }
  }
}