import { Component } from '@angular/core';
import { HeaderCaseMode, HeaderSortMode, NgxRichJsonCsvParserService } from 'projects/ngx-rich-json-csv-parser/src/lib/ngx-rich-json-csv-parser.service';

@Component({
  selector: 'nrjcp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  jsonData = [];
  constructor(private _ngxRichJsonCsvParserService: NgxRichJsonCsvParserService) {

  }
  download() {
    this._ngxRichJsonCsvParserService.ConvertToCSV(this.jsonData, [], true, 'mySl', HeaderSortMode.DESC, HeaderCaseMode.StartCase);
  }
}
