import { Component } from '@angular/core';
import { HeaderCaseMode, HeaderSortMode, NgxRichJsonCsvParserService } from 'ngx-rich-json-csv-parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'csv-demo';
  jsonData = [
    {
      name: "Anil Singh",
      age: 33,
      average: 98,
      approved: true,
      description: "I am active blogger and Author."
    },
    {
      name: 'Reena Singh',
      age: 28,
      average: 99,
      approved: true,
      description: "I am active HR."
    },
    {
      name: 'Aradhya',
      age: 4,
      average: 99,
      approved: true,
      description: "I am engle."
    },
  ];
  constructor(private _ngxRichJsonCsvParserService: NgxRichJsonCsvParserService) {

  }
  download() {
    const c = this._ngxRichJsonCsvParserService.ConvertToCSV(this.jsonData, [], true, 'mySl', HeaderSortMode.DESC, HeaderCaseMode.StartCase);
    console.log(c)
  }
}
