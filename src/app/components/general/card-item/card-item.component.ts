import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardItem } from '../../../helpers/CardItem';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  @Input() cardCollection: CardItem[] = [];
  
  

}
