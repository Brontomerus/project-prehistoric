import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
// import { Arrest } from '../arrest.model';

export interface Arrest {
  Team: any;
  Team_preffered_name: any;
  Team_name: any;
  Team_city: any;
  Team_Conference: any;
  Team_Conference_Division: any;
  Team_logo_id: any;
  arrest_count: any;
}

@Injectable()


export class ArrestService {
  apiUrl = 'http://nflarrest.com/api/v1/team/&start_date=2019-01-01&limit=10';
  
  constructor(private http: HttpClient) { }

  getArrests() {
    // return this.http.get<Arrest[]>(this.apiUrl);
    return this.http.jsonp(this.apiUrl, 'callback')
    
  }

}




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Arrest } from '../arrest.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ArrestService {
//   apiUrl = 'http://nflarrest.com/api/v1/team/&start_date=2019-01-01&limit=10';
//   constructor(private _http: HttpClient) { }

//   getArrests() {
//     console.log(this._http.get(this.apiUrl));
//     return this._http.get<Arrest[]>(this.apiUrl);
//   }

// }
