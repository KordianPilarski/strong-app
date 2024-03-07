import { Component } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent {
  workoutName = 'First workout';
  workoutNote = 'First workout note';
  exercises = [];
}
