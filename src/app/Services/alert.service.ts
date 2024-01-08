import { Injectable } from "@angular/core";
import { notificationIcon } from "../Shared/helpers/enums/enums";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
})

export class AlertService{
    showAlert(message: string, icon: notificationIcon){
        Swal.fire({
            icon: icon,
            title: message,
            showConfirmButton: false,
            timer: 2000,
            confirmButtonColor: '#2BBEF9'
        })
    }
}