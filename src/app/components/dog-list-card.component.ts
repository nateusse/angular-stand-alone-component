import { Component, Input } from '@angular/core';
import { Dog } from '../dog.service';

@Component({
  selector: 'app-dog-list-card',
  standalone: true,
  template: `
  <article class="pet-card">
    <img class="pet-img" src="{{doguito.photoUrl}}" alt="Photo of {{doguito.name}}">
    <p class="pet-headline">Meet <span class="pet-name">{{doguito.name}}</span></p>
    <p class="pet-description"> 
      <span class="pet-name">{{doguito.ownerName}}</span> wants you to know this about {{doguito.name}}:
      {{doguito.description}}
    </p>
    <p class="pet-learn-more"><a href="/details/{{index}}">Learn More</a></p>
  <article>
`,
  styles: [`
  .pet-card {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    width: 300px;
  }

  .pet-img {
    border-radius: 10px 10px 0 0;
    width: 300px;
  }

  .pet-name {
    font-weight: bolder;
  }

  .pet-description, .pet-headline, .pet-learn-more {
    padding: 10px;
  }

  .pet-headline {
    font-size: 18pt;
  }
`]
})
export class DogListCardComponent {
  @Input() doguito!: Dog;
  @Input() index!: Number;

  constructor() { }

  ngOnInit(): void {
  }
}
