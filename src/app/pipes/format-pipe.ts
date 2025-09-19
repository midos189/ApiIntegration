import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: string): string {
    if(!value)return "";
    return value.replace(/(.{4})(?=.)/g, "$1-");
  }

}
