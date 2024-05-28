/*
Clan: Clan Gates
Grupo: Charlie
Fecha: 16/05/2024
*/

// ES6 Modules
import Swal from 'sweetalert2'

//alert for login positive
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true, 
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export function alert(msg){
    Toast.fire({
        icon:"success",
        title: msg
    })
}

//alert for login negative
const ToastNegative = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true, 
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export function alertNegative(msg){
    ToastNegative.fire({
        icon:"error",
        title: msg
    })
}

