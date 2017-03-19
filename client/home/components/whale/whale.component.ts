import{ Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'blue-whale',
  templateUrl: './whale.component.html',
  styleUrls: ['./whale.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WhaleComponent { 

  @select('timeOfDay') toda$: Observable<any>;

  getStarted() {
  	window.location.href = "https://github.com/projectSHAI/GOAT-stack";
  }

}
