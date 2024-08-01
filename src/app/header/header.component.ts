import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() searchEmitter: EventEmitter<string> = new EventEmitter<string>();

  onSearch(searchTerm:string): void {
    this.searchEmitter.emit(searchTerm.trim().toLowerCase());
  }
}
