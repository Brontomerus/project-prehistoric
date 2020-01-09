import { Component, OnInit } from '@angular/core';

// import { Arrest } from './arrest.model';
// import { ArrestService } from './services/arrest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ArrestService]
})
export class AppComponent {
  title = 'project-pterodactyl';

  constructor() { }

}

// export class AppComponent implements OnInit {
//   title = 'project-pterodactyl';

//   arrests: Arrest[];

//   constructor(private arrestService: ArrestService) { }

//   ngOnInit() {
//     return this.arrestService.getArrests()
//       .subscribe(data => this.arrests = data)
//   }

// }
