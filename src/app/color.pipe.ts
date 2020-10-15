import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: string, color:string): any {
    return '<h5 style = color" Tomato">' +color+ '</h5>'
  }

}
