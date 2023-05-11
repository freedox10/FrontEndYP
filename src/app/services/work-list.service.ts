import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { WORKS } from 'src/assets/files/mock-works';
import { WorkModel } from 'src/app/models/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

  // works: WorkModel[] = WORKS;
  private worksUrl = 'api/works'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.status}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

/**
 * Lucas Salvatori
 *  */
  getWorks(): Observable<WorkModel[]>{
    return this.http.get<WorkModel[]>(this.worksUrl).pipe(
      catchError(
        this.handleError<WorkModel[]>('getWorks', [])
      )
    );
  }

  add(workAdd: WorkModel) {
    // this.works.push(workAdd);
    return this.http.post<WorkModel>(this.worksUrl, workAdd, this.httpOptions).pipe(
      tap((newWork: WorkModel) => console.log(newWork.title)),
      catchError(this.handleError<WorkModel>('addWork'))
      )
  }

  remove(id: number): Observable<WorkModel>{
    const url = `${this.worksUrl}/${id}`;

    return this.http.delete<WorkModel>(url, this.httpOptions).pipe(
      tap(() => console.log(`delete work id=${id}`)),
      catchError(this.handleError<WorkModel>(`deleteWork`))
    );
  }
}
