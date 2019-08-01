import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Duta asri',
      'rumah',
      'https://i1.wp.com/jempolkaki.com/wp-content/uploads/2018/02/cgi-rumah-minimalis.jpg?zoom=2.625&w=282&h=191&ssl=1',
      200
    ),
    new Place(
      'p2',
      'Kemenangan',
      'kos',
      'https://1.bp.blogspot.com/-gVtwAdv5DQY/W3JU2qkquII/AAAAAAAADIs/BMMJXWUKeYk8vFGr1pFu1tFBag0EOPgpACK4BGAYYCw/s1600/gambar%2Brumah.jpg',
      200
    ),
    new Place(
      'p3',
      'Keadilan',
      'kos juga',
      'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1509029494/rumah-minimalis-zaman-sekarang_d4oal1.jpg',
      200
    )
  ];

  constructor () { }

  get places () {
    return [...this._places];
  }

  getPlace (id: string) {
    return { ...this._places.find(p => p.id === id) };
  }
}
