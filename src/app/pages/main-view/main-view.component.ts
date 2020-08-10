import { Column } from './../../models/Column.model';
import { Board } from './../../models/Board.model';
import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  board: Board = new Board('My Life Board', [
    new Column('Ideas', [
      'Some random Idea',
      'Register domain ajspeller.com',
      'Build a new application',
      'Special super secret idea',
      'Write a book',
      'Start a new YouTube Channel',
      'Design my new home',
    ]),
    new Column('Research', [
      'How to buy a home',
      'How to build a super computer',
      'How to make a PWA',
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep',
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog',
    ]),
  ]);

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
