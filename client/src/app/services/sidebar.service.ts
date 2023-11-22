// sidebar.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarVisible = new BehaviorSubject<boolean>(true);

  getSidebarVisibility() {
    return this.sidebarVisible.asObservable();
  }

  setSidebarVisibility(isVisible: boolean) {
    this.sidebarVisible.next(isVisible);
  }
}

