import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  transform(value: any, param?: string): string {
    if (value == null) return null;
    const spaceRegEx = new RegExp(/\s+/g);
    let camelCaseOutput = '';
    if (spaceRegEx.test(value)) {
      const splittedWords = value.split(/\s+/);
      for (let i = 0; i < splittedWords.length; i++) {
        camelCaseOutput +=
          splittedWords[i].substring(0, 1).toUpperCase() +
          splittedWords[i].substring(1);
      }
    } else {
      camelCaseOutput +=
        value.substring(0, 1).toUpperCase() + value.substring(1);
    }
    return camelCaseOutput;
  }
}
