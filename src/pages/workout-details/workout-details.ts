import { WorkoutsPage } from './../workouts/workouts';
import { WorkoutService } from './../../app/services/workout.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'workout-details',
    templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
    workout: any;
    result: any;
    constructor(public navCtrl: NavController, private params: NavParams, public workoutservice: WorkoutService) {
        this.workout = params.get('workout');
    }

    DeleteWorkout(workoutId) {
        this.workoutservice.deleteWorkout(workoutId)
            .subscribe(data => {
                this.result = data;
                this.navCtrl.push(WorkoutsPage);
            })
    }

}
