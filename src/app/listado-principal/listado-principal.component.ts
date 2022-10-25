import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-listado-principal',
  templateUrl: './listado-principal.component.html',
  styleUrls: ['./listado-principal.component.css']
})
export class ListadoPrincipalComponent implements OnInit {

  lastMovie: any;
  popularMovies !: Movie;


  constructor(private dataService: DataService){}
  


  ngOnInit(): void {
    this.getLastMovie();
    this.getPopularMovies();
    this.getTopRated();
  }


  getLastMovie(){
    this.dataService.getLastMovie().subscribe(resultado =>{
      this.lastMovie = resultado;
      console.log(this.lastMovie);
    })
    
  }
  

  getPopularMovies(){
    this.dataService.getPopularMovies().subscribe(resultado =>{
      this.popularMovies = this.modifyData(resultado);
      console.log(this.popularMovies)
    })
  }

  getTopRated(){
    this.dataService.getTopRated().subscribe(resultado =>{
      this.popularMovies = this.modifyData(resultado);
    })
  }

  modifyData(movies: Movie): Movie{
    if(movies.results){
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original'+ element.backdrop_path+'?api_key='+ environment.api_key;
        if(!element.title){
          element.title = 'desconocido';
        
        }
      })

    }
    return movies;

  }


}
