import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscription } from "rxjs/Subscription";

import { WorkoutService } from './../../app/services/workout.service';

@Component({
    selector: 'Workouts',
    templateUrl: 'Workouts.html'
})
export class WorkoutsPage {
    private subscription: Subscription;
    constructor(public navCtrl: NavController,
        private workoutService: WorkoutService) {
        this.subscription = new Subscription();
    }

    ngOnInit() {
        this.subscription = this.workoutService.getWorkouts().subscribe(result => console.log(result));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
