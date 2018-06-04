import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { BaseDictionaryModel as BaseModel } from './models/base';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class DictionaryService {

  private apiUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET items from the server */
  getData (): Observable<BaseModel[]> {
    return this.http.get<BaseModel[]>(this.apiUrl)
      .pipe(
        tap(items => this.log(`fetched items`)),
        catchError(this.handleError('getItemes', []))
      );
  }

  /** GET item by id. Return `undefined` when id not found */
  getSingleNo404<Data>(id: number): Observable<BaseModel> {
    const url = `${this.apiUrl}/?id=${id}`;
    return this.http.get<BaseModel[]>(url)
      .pipe(
        map(items => items[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} item id=${id}`);
        }),
        catchError(this.handleError<BaseModel>(`getItem id=${id}`))
      );
  }

  /** GET item by id. Will 404 if id not found */
  getSingle(id: number): Observable<BaseModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<BaseModel>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<BaseModel>(`getItem id=${id}`))
    );
  }

  /* GET items whose name contains search term */
  search(term: string): Observable<BaseModel[]> {
    if (!term.trim()) {
      // if not search term, return empty item array.
      return of([]);
    }
    return this.http.get<BaseModel[]>(`${this.apiUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found items matching "${term}"`)),
      catchError(this.handleError<BaseModel[]>('searchItemes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new item to the server */
  add(item: BaseModel): Observable<BaseModel> {
    return this.http.post<BaseModel>(this.apiUrl, item, httpOptions).pipe(
      tap((item: BaseModel) => this.log(`added item w/ id=${item.id}`)),
      catchError(this.handleError<BaseModel>('addItem'))
    );
  }

  /** DELETE: delete the item from the server */
  delete(item: BaseModel | number): Observable<BaseModel> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<BaseModel>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted item id=${id}`)),
      catchError(this.handleError<BaseModel>('deleteItem'))
    );
  }

  /** PUT: update the item on the server */
  update(item: BaseModel): Observable<any> {
    return this.http.put(this.apiUrl, item, httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ItemService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DictionaryService: ' + message);
  }
}
