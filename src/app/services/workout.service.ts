
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class WorkoutService {
    http: any;
    apiKey: string;
    mongoAPIUrl: string;
    constructor(http: Http) {
        this.http = http;
        this.apiKey = "8Iy3O_Doz4ecfdQfQ__ovLndRqVU-mlS";
        this.mongoAPIUrl = 'https://api.mlab.com/api/1/databases/myworkouts-ionic2/collections/workouts';
    }

    getWorkouts() {
        return this.http.get(this.mongoAPIUrl + "?apiKey=" + this.apiKey)
            .map(data => data.json());
    }

    addWorkout(workout) {
        var headers = new Headers();
        headers.append('Content-Type', "application/json");
        return this.http.post(this.mongoAPIUrl + "?apiKey=" + this.apiKey, workout, { headers: headers })
            .map(data => data.json())
    }

    deleteWorkout(id) {
        return this.http.delete(this.mongoAPIUrl + '/' + id + "?apiKey=" + this.apiKey)
            .map(data => data.json());
    }

}