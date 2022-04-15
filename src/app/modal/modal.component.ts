import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @Input() header: TemplateRef<void>;
  @Input() footer: TemplateRef<void>;
  @Output() modalClose = new EventEmitter<void>();

  constructor() {
  }

  closeModal(): void {
    this.modalClose.emit();
  }
}
