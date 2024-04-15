import { Component } from '@angular/core';
import { HomePageComponent } from '../../views/home-page/home-page.component';
import { HeroSectionComponent } from '../../components/home/hero-section/hero-section.component';
import { CardItemComponent } from '../../components/general/card-item/card-item.component';
import { CardItem } from '../../helpers/CardItem';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, CardItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards: CardItem[] = [
    {
      'headline': "Text 1", 
      'subheadline': "Subtext 1",
      'text': 'Das ist ein Beispiel Text für die erste Card der Homekomponente',
      'date': '11:09 pm - 1 Jan 2016'
    },
    {
      'headline': "Text 2", 
      'subheadline': "Subtext 2",
      'text': 'Das ist ein Beispiel Text für die zweite Card der Homekomponente',
      'date': '11:09 pm - 1 Jan 2016'
    },
    {
      'headline': "Text 3", 
      'subheadline': "Subtext 3",
      'text': 'Das ist ein Beispiel Text für die dritte Card der Homekomponente',
      'date': '11:09 pm - 1 Jan 2016'
    },
  ];
}
