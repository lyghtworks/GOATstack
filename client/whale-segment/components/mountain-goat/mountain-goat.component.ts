import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mountain-goat',
  templateUrl: './mountain-goat.component.html',
  styleUrls: ['./mountain-goat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MountainGoatComponent {

  @select('timeOfDay') toda$: Observable<any>;

}
