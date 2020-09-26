import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: number, vatValue = 1.23): unknown {
    console.log('pipe for ' + value)
    return value * vatValue;
  }

}
