import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Movie, ResultsEntity } from '../Model/movie';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {


  lastMovie: any;
  popularMovies !: Movie;
  movie!: ResultsEntity;

  constructor(private dataService: DataService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.getMovieById(params['id'])
      console.log(this.movie)
    });
  }

  

  getMovieById(id: number){
    this.dataService.getMovieById(id).subscribe(data => {
      this.movie = this.modifyData(data)
      console.log(this.movie)
    })
    
    
  }


  modifyData(movies: ResultsEntity): ResultsEntity{
    
    movies.backdrop_path = 'https://image.tmdb.org/t/p/original'+ movies.backdrop_path+'?api_key='+ environment.api_key;

    return movies;
  }

}
