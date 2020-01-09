import { Component, OnInit } from '@angular/core';
// import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  page = 'About';

  constructor(
    // private bpo: BreakpointObserver
  ) { }

  ngOnInit() {
    // Listen to changes in screen width
    // this.bpo.observe(['(min-width: 800px)'])
    // .subscribe(result => {
    //     if (result.matches) {
    //     // Navigate to larger view
    //     } else {
    //     // Navigate to smaller view
    //     }
    // });
  }

}
