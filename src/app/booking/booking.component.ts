import { Component, OnInit } from '@angular/core';
import { offer } from '../offers';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {
  offers= offer;

  constructor() { }

  ngOnInit(): void {
  }

}
