import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naPipe'
})
export class NaPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(value != null && value!=undefined && value!= '')
    {
      return value;
    }
    else{
    return null;
    }
  }

}
