import { Component } from '@angular/core';
import "./training";
import { Colors } from "../enums/Color";
import "./collection";
@Component({
  selector: 'app-root',
  imports: [],
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
    }
  
  saveVisitPage():void {
    const savedVisit = localStorage.getItem('visit');
    const numberVisit = Number(savedVisit);
    localStorage.setItem('visit',String(numberVisit + 1))
  }
  }

