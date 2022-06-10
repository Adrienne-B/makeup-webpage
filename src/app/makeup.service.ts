import { Injectable } from '@angular/core';
import { Makeup } from './makeup';
import { MAKEUP } from './mock-makeup';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  getMakeup(): Observable<Makeup[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(MAKEUP);
  }

  constructor(private messageService: MessageService) { }
}