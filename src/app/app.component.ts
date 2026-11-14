import { Component } from '@angular/core';
import "./training";
import { Colors } from "../enums/Color";
import "./collection";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName = 'РУМТИБЕТ';
  isBasicColor(color: Colors): boolean {
  return color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE
  }
  
  saveLastVisit(): void {
    const currentDate = new Date();
    localStorage.setItem('saveLastVisit', currentDate.toISOString());
  }
    constructor() {
      this.saveLastVisit();
      this.saveVisitPage();
      setInterval(() => {
      this.currentDate = new Date();
      }, 1000);
      setTimeout(() => {  // для 8 задания 
      this.isLoading = false;
      }, 2000);
    }
  
  saveVisitPage():void {
    const savedVisit = localStorage.getItem('visit');
    const numberVisit = Number(savedVisit);
    localStorage.setItem('visit',String(numberVisit + 1))
  }

  offers = [
  {
    title: 'Опытный гид',
    description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    image: '/images/group_favicon.svg',
  },
  {
    title: 'Безопасный поход',
    description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    image: '/images/safety_favicon.svg',
  },
  {
    title: 'Лояльные цены',
    description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    image: '/images/price_favicon.svg',
  },
  ];
  
  selectedLocation = '';
  selectedDate = '';
  selectedParticipants = '';

  currentDate = new Date();

  clickCount = 0;  // Счетчик кликов
  addCount(): void {
  this.clickCount++;
  }

  removeCount(): void {
  if (this.clickCount > 0) {
    this.clickCount--;
  }
  }
  
  showTimer = true; //таймер

  toggleDisplay(): void {
  this.showTimer = !this.showTimer;
  }
  
  liveText = ''; //Лайв текст 

  isLoading = true;

  }

