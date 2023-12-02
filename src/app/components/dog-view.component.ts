import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Dog, DogsService } from '../dog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dog-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="details-panel" *ngIf="(dogObs$ | async) as dog">
      <img class="main-img" src="{{dog.photoUrl}}" alt="Photo of {{dog.name}}">
      <article>
        <h1 class="main-text">Hi, I'm {{dog.name}}</h1>
        <h2>My owner's name is <span class="emphasize">{{dog.ownerName}}</span></h2>
        <p>{{dog.longDescription}}</p>
        <p>I live in <span class="emphasize">{{dog.location}}</span></p>
      </article>
    `,
  styles: [`
 .details-panel {
   display: flex;
   padding: 10px;
   gap: 50px;
 }
 .main-img {
   border-radius: 10px;
   width: 400px;
 }
 .main-text {
   font-size: 34pt;
   margin-bottom: 20px;
 }
 .emphasize {
   font-weight: bold;
 }
 h2 {

 }
`]
})
export class DogViewComponent implements OnInit{
  dogObs$!: Observable<Dog | undefined>; //me estoy suscribiendo a un observable, el
  //Dog es del Service, la itnerface, typo o unidfine si no pasa, el ! es para que no se queje
  //porque no esta definido, el $ es para que sepa que es un observable
  //OBSERVABLE: CAMBIAR ID< cambiar data when navigate between apges


  constructor(private dogService: DogsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dogObs$ = this.route.paramMap.pipe(map((params) => {
      return this.dogService.dogs[Number(params.get('index'))];
    }));
  }
}
