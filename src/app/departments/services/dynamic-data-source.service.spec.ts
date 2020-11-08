import { DynamicDataSourceService } from './dynamic-data-source.service';
import { DepartmentDataModel } from '../models/department-data.model';
import { async, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DynamicDataSourceService', () => {
  let service: DynamicDataSourceService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const expectedData: DepartmentDataModel = {departments: [{ name: 'A', employees: []}]};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DynamicDataSourceService]
    });
    injector = getTestBed();
    service = injector.inject(DynamicDataSourceService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected data', async(() => {
    service.getJSON().subscribe(data => {
      expect(data.departments.length).toBe(1);
      expect(data).toEqual(expectedData);
    });

    const httpMockRequest = httpMock
      .expectOne(request => request.method === 'GET');
    expect(httpMockRequest.request.url).toEqual(service.API_URL);
    httpMockRequest.flush(expectedData);
  }));

});
