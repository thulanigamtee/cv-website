import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-action-btns',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './action-btns.component.html',
  styleUrl: './action-btns.component.scss',
})
export class ActionBtnsComponent {
  @Input() id!: number;
  @Input() page!: string;

  @Output() deleteEmitter = new EventEmitter();

  delete() {
    this.deleteEmitter.emit(this.id);
  }
}
