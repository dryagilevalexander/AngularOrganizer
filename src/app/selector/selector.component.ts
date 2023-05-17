import { Component} from '@angular/core';
import { DateService } from '../shared/date.service';
import { MomentPipe } from '../shared/moment.pipe';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  providers: [DateService, MomentPipe]
})

export class SelectorComponent {
 
constructor(public dateService: DateService){}

  go(dir: number){
    this.dateService.changeMonth(dir)
  }
}
