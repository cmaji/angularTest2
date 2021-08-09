import { Component, Input } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { CamelCasePipe } from './camel-case.pipe';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
    <br />
    <input type="button" value="Test" (click)="doWork()" /><br />
    <input type="button" value="Check" (click)="check()" /> <br />
    <input type="text" id="testtb" [(ngModel)]="camelCaseExemple" />
    <p>{{ camelCaseExemple | camelCase }}</p>
    <p>{{ camelCaseExemple }}</p>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  camelCaseExemple = '';
  doWork(): void {
    const myNumber = of(1, 2, 3, 4, 5);

    const doSquareNum = map((v: number) => v * v);
    const setSquareNum = doSquareNum(myNumber);
    setSquareNum.subscribe(v => console.log(v));

    const setSquareNum2 = of(1, 3, 6).pipe(
      filter((f: number) => f % 2 == 0),
      map((v: number) => v * v)
    );
    setSquareNum2.subscribe(v => console.log(v));

    const str = 'All is well and good';
    const splitted = str.split(/\s+/);
    for (let i = 0; i < splitted.length; i++) {
      console.log(splitted[i]);
    }
  }

  check(): void {
    const spaceRegEx = new RegExp(/\s+/g);
    let value = 'my name is chanchal maji';
    let camelCaseOutput = '';
    console.log('test ' + spaceRegEx.test(value));
    if (spaceRegEx.test(value)) {
      const splittedWords = value.split(/\s+/);
      for (let i = 0; i < splittedWords.length; i++) {
        camelCaseOutput +=
          splittedWords[i].substring(0, 1).toUpperCase() +
          splittedWords[i].substring(1);

        console.log(camelCaseOutput);
      }
    }
  }
}
