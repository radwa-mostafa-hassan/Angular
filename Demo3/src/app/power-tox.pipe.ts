import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTox'
})
export class PowerToxPipe implements PipeTransform {

  transform(value: number, power:number=1): unknown {
    return Math.pow(value,power);
  }

}
