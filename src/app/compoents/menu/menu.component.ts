import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuModule, CommonModule, ToastModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {

      this.items = [
        {
          label: 'Documents',
          items: [
            {
              label: 'New',
              items: [{ label: 'New Update' }],
              icon: 'pi pi-plus',
            },
            {
              label: 'Search',
              icon: 'pi pi-search',
            },
          ],
        },
        // {
        //   separator: true,
        // },
        {
          label: 'Profile',
          items: [
            {
              label: 'Settings',
              icon: 'pi pi-cog',
            },
            {
              label: 'Logout',
              icon: 'pi pi-sign-out',
            },
          ],
        },
      ];
  }
}
