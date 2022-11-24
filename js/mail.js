// $("#sendEmail").on("submit", function (event) {
// 	event.preventDefault(); // prevent reload

// 	var formData = new FormData(this);
// 	formData.append("service_id", "service_jmdu3y8");
// 	formData.append("template_id", "template_ghv259h");
// 	formData.append("user_id", "YJLLkPTLAVg-vCoL_");

// 	$.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
// 		type: "POST",
// 		data: formData,
// 		contentType: false, // auto-detection
// 		processData: false, // no need to parse formData to string
// 	})
// 		.done(function () {
// 			alert("Your mail is sent!");
// 		})
// 		.fail(function (error) {
// 			alert("Oops... " + JSON.stringify(error));
// 		});
// });

(function () {
	emailjs.init("YJLLkPTLAVg-vCoL_");
})();

function sendmail(event) {
	event.preventDefault();
	let name = document.getElementById("name_web").value;
	let mail = document.getElementById("mail_web").value;
	let subject = document.getElementById("subject_web").value;
	let mesaage = document.getElementById("web_message").value;

	dataForm = {
		form_name: name,
		from_email: mail,
		from_subject: subject,
		from_message: mesaage,
	};

	emailjs
		.send("service_jmdu3y8", "template_ghv259h", dataForm)
		.then(function () {});

	document.getElementById("name_web").value = "";
	document.getElementById("mail_web").value = "";
	document.getElementById("subject_web").value = "";
	document.getElementById("web_message").value = "";
}
