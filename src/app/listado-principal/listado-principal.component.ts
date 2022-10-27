import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Movie, ResultsEntity } from '../Model/movie';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-listado-principal',
  templateUrl: './listado-principal.component.html',
  styleUrls: ['./listado-principal.component.css']
})
export class ListadoPrincipalComponent implements OnInit {

  popularMovies !: Movie;
  topRated!: Movie;


  movie : ResultsEntity | undefined;

  


  constructor(private dataService: DataService, public router: Router){}


  gotoDetail(id: number): void {
    this.router.navigate(['/detail', id]);
  }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getTopRated();
  }

  getMovieById(id: number){
    this.dataService.getMovieById(id).subscribe(data => {
      this.movie = data
      console.log("ID***********" )
      console.log(this.movie)
    })
  }


  getPopularMovies(){
    this.dataService.getPopularMovies().subscribe(resultado =>{
      this.popularMovies = this.modifyData(resultado);
      console.log("POPULARES")
      console.log(this.popularMovies)
    })
  }

  getTopRated(){
    this.dataService.getTopRated().subscribe(resultado =>{
      this.topRated = this.modifyData(resultado);
      console.log("mejores reseñas")
      console.log(this.topRated)
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
