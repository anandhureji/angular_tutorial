import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  appointment : Appointment = {
    id: 1,
    title: "Consult the doctor",
    date: new Date("2023-07-12")
  }

}