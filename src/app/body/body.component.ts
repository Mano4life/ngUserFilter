import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgClass],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  @Input() searchTerm: string = '';
  users = [
    {
      id: 1,
      username: 'Bret',
      email: 'Sinclair.tate@example.org',
      phone: '806-375-8602',
      avatar: 'https://i.pravatar.cc/400?u=1',
      verified: true
    },
    {
      id: 2,
      username: 'Theodore',
      email: 'Kovacek@geovany.biz',
      phone: '1-651-103-7496',
      avatar: 'https://i.pravatar.cc/400?u=2',
      verified: false
    },
    {
      id: 3,
      username: 'Mariana',
      email: 'Buford@shawna_fisher.com',
      phone: '(781) 917-5355',
      avatar: 'https://i.pravatar.cc/400?u=3',
      verified: true
    },
    {
      id: 4,
      username: 'Lacy',
      email: 'Golden.carter@jarred.biz',
      phone: '(415) 505-0205',
      avatar: 'https://i.pravatar.cc/400?u=4',
      verified: false
    }
  ]
  filteredUsers: any[] = this.users;

  ngOnChanges(): void {
    this.filterUsers();
  }

  filterUsers(): void {
    if (this.searchTerm) {
      this.filteredUsers = this.users.filter(user =>
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }

}
