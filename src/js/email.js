// email.js
import emailjs from 'emailjs-com';

const sendCustomEmail = (plantilla) => {


    if(
        plantilla.clientName == '' || plantilla.clientName == null || plantilla.clientName == undefined ||
        plantilla.clientPhone == '' || plantilla.clientPhone == null || plantilla.clientPhone == undefined ||
        plantilla.clientEmail == '' || plantilla.clientEmail == null || plantilla.clientEmail == undefined ||
        plantilla.message == '' || plantilla.message == null || plantilla.message == undefined
    ){
        Swal.fire({
            title: 'Error!',
            text: 'Todos los campos son obligatorios',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

        return
    }


    emailjs.init(import.meta.env.VITE_PUBLIC_KEY_ID);
    emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
            subject: 'Mensaje plataforma virtual',
            companyName: 'ReservaYa',
            clientName: plantilla.clientName,
            clientPhone: plantilla.clientPhone,
            clientEmail: plantilla.clientEmail,
            message: plantilla.message
        }
    ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
            title: 'Envío exitoso!',
            text: 'Mensaje enviado exitosamente',
            icon: 'success',
            confirmButtonText: 'Excelente!'
          })

    }).catch((err) => {
        console.log('FAILED...', err);
    });
};

let details = {
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    message: ''
};

document.getElementById('nameInput').addEventListener('change', (e) => {
    details.clientName = e.target.value;
    console.log(details);
});

document.getElementById('phoneInput').addEventListener('change', (e) => {
    details.clientPhone = e.target.value;
    console.log(details);
});

document.getElementById('emailInput').addEventListener('change', (e) => {
    details.clientEmail = e.target.value;
    console.log(details);
});

document.getElementById('messageInput').addEventListener('change', (e) => {
    details.message = e.target.value;
    console.log(details);
});

document.getElementById('sendButton').addEventListener('click', () => {
    sendCustomEmail(details);
});
