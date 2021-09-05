# ngx-rich-json-csv-parser

Ngx-rich-json-csv-parser help you to convert JSON to CSV file and Download it in the .csv format.

## Features
1. Convert JSON to CSV
2. Download JSON data in CSV format file.
3. Insert serial number
4. Customize CSV file Header text
5. Sort the CSV file data based on Header text
6. Customize CSV file name


## Installation

Start by installing the Angular Rich JSON CSV Parser library from `npm`

`npm i -s ngx-rich-json-csv-parser`

Next, you'll need to import the NgxRichJsonCsvParserModule module in your app's module.

**app.module.ts**

```ts

import { NgxRichJsonCsvParserModule } from '@angular/flex-layout';
...

@NgModule({
    ...
    imports: [NgxRichJsonCsvParserModule],
    ...
});
```
Next, To consume this library, create a instance of this library service in component ts file. eg
**csv-download-example.component.ts**
```ts
import { Component } from '@angular/core';
import { HeaderCaseMode, NgxRichJsonCsvParserService, SortMode } from 'projects/ngx-rich-json-csv-parser/src/public-api';

...

export class CSVDownloadExampleComponent {

  jsonData = []; //your JSON data to convert CSV
  constructor(private _ngxRichJsonCsvParserService: NgxRichJsonCsvParserService) {

  }
  download() { // Sample function to covert JSON data to CSV and download CSV file 
    this._ngxRichJsonCsvParserService.downloadFile(this.jsonData, [], true, 'test', 'mySl', SortMode.DESC, HeaderCaseMode.StartCase);
  }
}
```

## Usages and API details
#### To download JSON data as a CSV file format, use downloadFile() function, eg:
```
this._ngxRichJsonCsvParserService.downloadFile(<Your JSON Data>,<Custom Header List>,<show Serial Number(boolean)>,<Your CSV File Name>,< your Serial Number Header Name>, < Sort Header list>,<Format your CSV headers text cases> );
```
#### Argument Details

| Order 	|                    Name 	|                Type 	|                                                                                                                                                                                       Details 	|
|------:	|------------------------:	|--------------------:	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|
|     1 	| JSON Data               	| An array of objects 	| JSON data which is used to convert into CSV                                                                                                                                                   	|
|     2 	| Custom Header           	|  An array of String 	| You can provide custom csv header name, please note <br>number of element in this header array should be equal to <br>number of property in single JSON array object data                     	|
|     3 	| IsGenerateSerial Number 	| Boolean             	| This flag is used to generate  Numerical serial number start from 1                                                                                                                           	|
|     4 	| CSV File Name           	| string              	| Your custom CSV file name                                                                                                                                                                     	|
|     5 	| Sort CSV Header list    	| enum                	| To sort CSV Header list, available options are<br>- without Sorting : HeaderSortMode.NONE<br>- to sort ascending order: HeaderSortMode.ASC<br>- to sort descending order: HeaderSortMode.DESC 	|
|     6 	| Header Text format      	| enum                	| To format CSV all header text to uppercase or lowercase or capitalize or startcase(title case)<br>eg: HeaderCaseMode.StartCase                                                                	|

```
this._ngxRichJsonCsvParserService.downloadFile(jsonData, [], true, 'test', 'mySl', SortMode.DESC, HeaderCaseMode.StartCase);
```

#### To convert JSON to CSV data format without downloading, use ConvertToCSV() function, eg:
```
this._ngxRichJsonCsvParserService.ConvertToCSV(this.jsonData, [], true, 'mySl', HeaderSortMode.DESC, HeaderCaseMode.StartCase);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT