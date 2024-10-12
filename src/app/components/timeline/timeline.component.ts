import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IllustrationEmptyComponent } from '../illustration-empty/illustration-empty.component';
import { CommonModule } from '@angular/common';
import { ActionBtnsComponent } from '../action-btns/action-btns.component';
import { LoaderComponent } from '../loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    IllustrationEmptyComponent,
    CommonModule,
    ActionBtnsComponent,
    LoaderComponent,
    RouterLink,
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  @Input() data: any;
  @Output() deleteEmitter = new EventEmitter();
  @Input() page!: string;

  @Input() isLoading: boolean = true;

  delete(id: number) {
    this.deleteEmitter.emit(id);
  }
  @Output() dialogEmitter = new EventEmitter();
  showDialog(dialogState: boolean) {
    this.dialogEmitter.emit(dialogState);
  }
}
