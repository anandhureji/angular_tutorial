import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  newAppointmentTitle : string = "";
  newAppointmentDate : Date = new Date();

  appointments : Appointment[] = []

  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointmentDate : Appointment = {
        id:Date.now(),
        title:this.newAppointmentTitle,
        date:this.newAppointmentDate
      }

      this.appointments.push(newAppointmentDate)

      this.newAppointmentDate= new Date();
      this.newAppointmentTitle = "";

      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }

  }

  deleteAppointment(index: number){
    this.appointments.splice(index,1)
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }

}
