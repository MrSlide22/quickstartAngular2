import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[EjemplosDirectivasAtributo]'
})
export class EjemplosDirectivasAtributoDirective {

    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer
    ) { };

    @HostListener('mouseenter')
    cambiarEstilo(){
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'color', 'red');
    }

    @HostListener('mouseleave')
    restaurarEstilo(){
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'color', '');
    }
}   