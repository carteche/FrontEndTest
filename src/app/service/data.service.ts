import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, ResultsEntity } from '../Model/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }


  getMovieById(id: number) : Observable<ResultsEntity>{
    return this.http.get<ResultsEntity>(this.url + '/movie/' + id + '?api_key=' + environment.api_key);
  }

  getLastMovie() : Observable<any>{
    return this.http.get<any>(this.url + '/movie/latest?api_key=' + environment.api_key);
  }


  getPopularMovies() : Observable<Movie>{
    return this.http.get<Movie>(this.url + '/movie/popular?api_key=' + environment.api_key);
  }

  getTopRated() : Observable<Movie>{
    return this.http.get<Movie>(this.url + '/movie/top_rated?api_key=' + environment.api_key);
  }

  


}
