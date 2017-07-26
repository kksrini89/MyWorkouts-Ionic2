import { WorkoutService } from './../../app/services/workout.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'workout-details',
    templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
    workout: any;
    constructor(public navCtrl: NavController, private params: NavParams, workoutservice: WorkoutService) {
        this.workout = params.get('workout');
    }

}
