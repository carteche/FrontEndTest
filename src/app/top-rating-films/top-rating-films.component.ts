import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-top-rating-films',
  templateUrl: './top-rating-films.component.html',
  styleUrls: ['./top-rating-films.component.css']
})
export class TopRatingFilmsComponent implements OnInit {

  topRated!: Movie;

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.getTopRated();
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
