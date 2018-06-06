import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { BaseDataModel, BaseDictionaryModel } from '../models/base';

@Injectable()
export class RelationService {
  public data: object = {};

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET items from the server */
  getData(dataModel: BaseDataModel): Observable<BaseDictionaryModel[]> {
    const result = this.http.get(dataModel.apiUrl)
      .pipe(
        // map(items => this.data[dataModel.modelName] = items),
        tap(items => this.log(`fetched items for ${dataModel.modelName}`)),
        catchError(this.handleError('getItemes', []))
      );
    return result as Observable<BaseDictionaryModel[]>;
  }

  /* GET items whose name contains search term */
  search(dataModel: BaseDataModel, term: string): Observable<BaseDictionaryModel[]> {
    if (!term.trim()) {
      // if not search term, return empty item array.
      return of([]);
    }
    return this.http.get<BaseDictionaryModel[]>(`${dataModel.apiUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found items matching "${term}"`)),
      catchError(this.handleError<BaseDictionaryModel[]>('searchItemes', []))
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
    this.messageService.add('HeroService: ' + message);
  }
}
