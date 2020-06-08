import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'br',
})
export class BrPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]) {
    if (!value) {
      return value;
    } // NOTE: value の値が存在しない場合は何もせず終了

    return value.trim().replace(/\n/g, '<br/>');
  }
}
