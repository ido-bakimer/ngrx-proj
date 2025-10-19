import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-total',
  standalone: true,
  imports: [CommonModule], 
  template: `<p *ngIf="summary">Total Orders: $ {{ summary.total }}</p>`,
})
export class UserTotalComponent {
  @Input() summary: { userName: string; total: number } | null = null;
}
