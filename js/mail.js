// const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//         .sendForm(
//             "service_uyjwp6i",
//             // "template_8gl7g2l",
//             "template_3630dni",
//             form.current,
//             "N6P1Hwi1M93-WJDzf"
//         )
//         .then(
//             (result) => {
//                 if (result.text) {
//                     console.log(
//                         "Thanks for reaching out, we'll be connecting with you shortly!!!"
//                     );
               
//                     form.current.reset();
//                 }
//             },
//             (error) => {
//                 if (error) {
//                     console.log("Error! Unable to send the mail.");
                 
//                     form.current.reset();
//                 }
//             }
//         );
// };



$('#sendEmail').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'service_uyjwp6i');
    formData.append('template_id', 'template_3630dni');
    formData.append('user_id', 'N6P1Hwi1M93-WJDzf');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});