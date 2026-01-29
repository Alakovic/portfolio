import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleReferenceComponent } from './single-reference/single-reference.component';
import { Reference } from '../../interfaces/reference_interface/reference.interface';
import { MatCardModule } from '@angular/material/card';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [
    CommonModule,
    SingleReferenceComponent,
    MatCardModule,
    TranslateModule,
  ],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent {
  references$ = this.translate.stream('REFERENCES.REFERENCE');
  references: Reference[] = [];

  constructor(private translate: TranslateService) {
    this.references$.subscribe((references: Reference[]) => {
      this.references = references;
    });
  }

  activeIndex = 0;

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.references.length;
  }

  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.references.length) % this.references.length;
  }

  setIndex(i: number) {
    this.activeIndex = i;
  }

  getSlideClass(index: number): string {
    if (index === this.activeIndex) return 'active';
    if (
      index ===
      (this.activeIndex - 1 + this.references.length) % this.references.length
    ) {
      return 'left';
    }
    if (index === (this.activeIndex + 1) % this.references.length) {
      return 'right';
    }
    return 'hidden';
  }
}
