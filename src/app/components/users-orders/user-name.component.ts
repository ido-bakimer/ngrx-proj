import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-name',
  standalone: true,
  imports: [CommonModule],
  template: `<p *ngIf="summary">Selected User: {{ summary.userName }}</p>`,
})
export class UserNameComponent {
  @Input() summary: { userName: string; total: number } | null = null;
}
