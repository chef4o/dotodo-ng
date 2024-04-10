import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shrinkToFit'
})
export class ShrinkToFitPipe implements PipeTransform {

  transform(value: string, cutOff: number): string {
    if (value.length > cutOff) {
      return `${value.substring(0, cutOff)} ...`;
    }
    return value;
  }

}
