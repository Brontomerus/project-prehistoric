import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(
    private location: Location
    ) {}

  ngOnInit() {

  }
  menuCheck() {
    return !(this.location.isCurrentPathEqualTo('') || this.location.isCurrentPathEqualTo('/home'));
  }

}
