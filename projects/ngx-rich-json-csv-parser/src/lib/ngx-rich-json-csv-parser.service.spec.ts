import { TestBed } from '@angular/core/testing';

import { NgxRichJsonCsvParserService } from './ngx-rich-json-csv-parser.service';

describe('NgxRichJsonCsvParserService', () => {
  let service: NgxRichJsonCsvParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRichJsonCsvParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
