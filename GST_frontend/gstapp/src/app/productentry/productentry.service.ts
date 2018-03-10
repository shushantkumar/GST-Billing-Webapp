import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductentryService {
  private serverURL ='http://localhost:8000/';

  constructor(private http:HttpClient) { }



  getAllProducts(){
    let specificUrl = this.serverURL + 'productget';
    return this.http.get(specificUrl)
    .map(this.extractData)
    .catch(this.handleError);
  }

  postNewProduct(data){
    let specificUrl = this.serverURL + 'productpost';
    let headers =  {headers: new  HttpHeaders({ 'Content-Type':  'application/json'})};
    return this.http.post(specificUrl,data,headers)
    .map(this.extractData)
    .catch(this.handleError);
  }

  updateProduct(data,params){ 
    let specificUrl = this.serverURL + 'productpost/'+params;
    let headers =  {headers: new  HttpHeaders({ 'Content-Type':  'application/json'})};
    return this.http.put(specificUrl,data,headers)
    .map(this.extractData)
    .catch(this.handleError);
  }





  private extractData(res: Response) {
    return res;
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
