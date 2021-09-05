import { Injectable } from '@angular/core';
import { startCase, capitalize } from 'lodash';

export enum HeaderCaseMode {
  Default = 'Default',
  UpperCase = 'Uppercase',
  LowerCase = 'Lowercase',
  Capitalize = 'Capitalize',
  StartCase = 'StartCase'
}
export enum HeaderSortMode {
  NONE = 'NONE',
  ASC = 'ASC',
  DESC = 'DESC'
}
@Injectable({
  providedIn: 'root'
})
export class NgxRichJsonCsvParserService {

  private _formatText(text: string, caseMode: HeaderCaseMode): string {
    switch (caseMode) {
      case HeaderCaseMode.LowerCase: return text.toLowerCase();
      case HeaderCaseMode.UpperCase: return text.toUpperCase();
      case HeaderCaseMode.Capitalize: return capitalize(text);
      case HeaderCaseMode.StartCase: return startCase(text);
      default: return text;
    }
  }
  private _sortHeaderList(list: string[], sortMode: HeaderSortMode): string[] {
    if (sortMode === HeaderSortMode.ASC) {
      return list.sort();
    }
    if (sortMode === HeaderSortMode.DESC) {
      return list.sort().reverse();
    }
    return list;
  }
  private _getHeaderList(jsonData: any[], sortMode: HeaderSortMode, caseMode: HeaderCaseMode, headerList?: string[]): string[] {
    const hList = headerList && headerList.length > 0 ? headerList : Object.keys(jsonData[0]);
    const mappedHList = hList.map(item => this._formatText(item, caseMode));
    return this._sortHeaderList(mappedHList, sortMode);
  }
  private _removeDuplicate(data: string[]): string[] {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  downloadFile(
    jsonData: any[],
    headerList?: string[],
    isAutoGenerateSlNo: boolean = false,
    filename = 'data',
    slHeaderName = 'SL.No',
    headerSortMode: HeaderSortMode = HeaderSortMode.NONE,
    headerCaseMode: HeaderCaseMode = HeaderCaseMode.Default) {
    let csvData = this.ConvertToCSV(jsonData, headerList, isAutoGenerateSlNo, slHeaderName, headerSortMode, headerCaseMode);
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let downloadLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {
      downloadLink.setAttribute("target", "_blank");
    }
    downloadLink.setAttribute("href", url);
    downloadLink.setAttribute("download", filename + ".csv");
    downloadLink.style.visibility = "hidden";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  public ConvertToCSV(jsonData: any[], headerList?: string[], isAutoGenerateSlNo: boolean = false, slHeaderName = 'SL.No', headerSortMode: HeaderSortMode = HeaderSortMode.NONE,
    headerCaseMode: HeaderCaseMode = HeaderCaseMode.Default) {
    const headerFields = this._removeDuplicate(this._getHeaderList(jsonData, headerSortMode, headerCaseMode, headerList));
    const baseHeaderList: any[] = this._removeDuplicate(this._sortHeaderList(Object.keys(jsonData[0]), headerSortMode));
    let mappedJsonData: any[] = jsonData;
    if (isAutoGenerateSlNo) {
      headerFields.splice(0, 0, slHeaderName);
      baseHeaderList.splice(0, 0, slHeaderName);
      mappedJsonData = jsonData.map((item, index: number) => {
        item[slHeaderName] = index + 1;
        return item;
      })
    }
    let replacer = (key: string, value: any) => { return value === null ? '' : value }
    let csv: string[] = mappedJsonData.map((row) => {
      return baseHeaderList.map((fieldName) => {
        return JSON.stringify(row[fieldName], replacer)
      }).join(',')
    })
    csv.unshift(headerFields.join(',')) // add header column
    let csvData = csv.join('\r\n');
    return csvData;
  }
}

