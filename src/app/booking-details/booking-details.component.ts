import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { offer } from '../offers';


@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.sass']
})
export class BookingDetailsComponent implements OnInit {
  offer;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(offer) {
    window.alert('Your adventure has been added to the cart!');
    this.cartService.addToCart(offer);
  }

  ngOnInit() {this.route.paramMap.subscribe(params => {
    this.offer = offer[+params.get('offerId')];
    });
  }


}
