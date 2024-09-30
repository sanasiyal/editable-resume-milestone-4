var resume = document.getElementById('resume');
var resumeoutput = document.getElementById('resumeoutput');
var generatebutton = document.getElementById('generatebutton');
if (resume && resumeoutput && generatebutton) {
    resume.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var number = document.getElementById('number').value;
        var education = document.getElementById('education').value;
        var workexperience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var resumeHTML = "\n        <h1>generated resume</h1>\n        <p><strong>name:</strong> ".concat(name, "</p> \n         <p><strong>email:</strong> ").concat(email, "</p>\n          <p><strong>number:</strong> ").concat(number, "</p>\n           <p><strong>education:</strong> ").concat(education, "</p>\n            <p><strong>experience:</strong> ").concat(workexperience, "</p>\n             <p><strong>skills:</strong> ").concat(skills, "</p>\n        ");
        resumeoutput.innerHTML = resumeHTML;
    });
}
else {
    console.error("form or output div not found in this page");
}
