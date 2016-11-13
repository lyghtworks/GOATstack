import { Component, AfterViewInit, ElementRef } from '@angular/core';

import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mountain-goat',
  templateUrl: './mountain-goat.component.html',
  styleUrls: ['./mountain-goat.component.scss']
})

export class MountainGoatComponent implements AfterViewInit{

  @select('timeOfDay') toda$: Observable<any>;

  constructor(private hostRef: ElementRef){ }

  ngAfterViewInit() {
    this.toda$.subscribe(x => {
      this.hostRef.nativeElement.children[0].src = x.get('mountainGoatSvg');
    });
  }

}
