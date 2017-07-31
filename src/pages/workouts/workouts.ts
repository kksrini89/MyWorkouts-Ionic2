import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";

import { WorkoutService } from './../../app/services/workout.service';
import { WorkoutDetailsPage } from "../workout-details/workout-details";

@Component({
    selector: 'Workouts',
    templateUrl: 'Workouts.html'
})
export class WorkoutsPage {
    workouts: any;

    private subscription: Subscription;
    constructor(public navCtrl: NavController,
        private workoutService: WorkoutService) {
        this.subscription = new Subscription();
    }

    ngOnInit() {
        this.subscription = this.workoutService.getWorkouts().subscribe(result => {
            this.workouts = result;
            console.log(result)
        });
    }

    ionViewWillEnter() {
        this.subscription = this.workoutService.getWorkouts().subscribe(result => {
            this.workouts = result;
            console.log(result)
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    workoutSelected(event, workout) {
        this.navCtrl.push(WorkoutDetailsPage, {
            workout: workout
        });
    }

}
