import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from '../dog.service';
import { DogListCardComponent } from './dog-list-card.component';


@Component({
  selector: 'app-dog-list',
  standalone: true, // no requiere modulos
  imports: [CommonModule, DogListCardComponent], //usar ng for y otrs de forma autmatica
  template: `
    <section class="hero-section">
      <h2 class="hero-text">Discover Pets to walk near you</h2>
    </section>
    <article class="pet-list">
      <app-dog-list-card *ngFor="let dog of dogService.dogs" [doguito]="dog"></app-dog-list-card>
    </article>
  `,
  styles: [
    `
      .pet-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
      }

      .hero-text {
        font-size: 25pt;
        padding: 10px;
      }
    `,
  ],
})
export class DogListComponent {
  constructor(readonly dogService: DogsService) {
    
  }
}
