import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRichJsonCsvParserComponent } from './ngx-rich-json-csv-parser.component';

describe('NgxRichJsonCsvParserComponent', () => {
  let component: NgxRichJsonCsvParserComponent;
  let fixture: ComponentFixture<NgxRichJsonCsvParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxRichJsonCsvParserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRichJsonCsvParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
