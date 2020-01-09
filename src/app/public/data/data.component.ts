import { Component, OnInit } from '@angular/core';
// import { arrests } from './arrests';
// import { Arrest } from '../../arrest.model';
import { ArrestService } from '../../services/arrest.service';
import { Arrest } from '../../services/arrest.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [ArrestService]
})

export class DataComponent implements OnInit {
  arrests: Arrest[];

  constructor(private arrestService: ArrestService) { }

  ngOnInit() {
    // return this.arrestService.getArrests()
    //   .subscribe(data => this.arrests = data)

    return this.arrestService.getArrests()
    //   .subscribe((data: Arrest) => this.arrestService = {
    //     Team: (data as any).Team,
    //     Team_preffered_name: (data as any).Team_preffered_name,
    //     Team_name: (data as any).Team_name,
    //     Team_city: (data as any).Team_city,
    //     Team_Conference: (data as any).Team_Conference,
    //     Team_Conference_Division: (data as any).Team_Conference_Division,
    //     Team_logo_id: (data as any).Team_logo_id,
    //     arrest_count: (data as any).arrest_count
    // });
  }

}
