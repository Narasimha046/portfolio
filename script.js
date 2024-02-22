// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle active class for navigation controls
document.querySelectorAll('.control').forEach(control => {
    control.addEventListener('click', function () {
        document.querySelector('.control.active-btn').classList.remove('active-btn');
        this.classList.add('active-btn');
    });
});

//project
function showDetails(title, objective, description) {
    var detailedDescriptionContent = document.getElementById('detailedDescriptionContent');
    var content = `
        <h2>${title}</h2>
        <p><strong>Objective:</strong> ${objective}</p>
        <p><strong>Description:</strong> ${description}</p>
    `;
    detailedDescriptionContent.innerHTML = content;
    document.getElementById('detailedDescription').style.display = 'block';
}

document.querySelector('.detailed-description').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
//hire-btn
function copyEmail() {
    var email = "vaddenarasimha46@gmail.com";
    navigator.clipboard.writeText(email)
    .then(function() {
        alert("Email address copied to clipboard. Please compose an email manually in your email client.");
    })
    .catch(function(err) {
        console.error('Failed to copy: ', err);
    });
}
 function downloadResume() {
        var resumePath = 'images/resume.pdf';
        window.open(resumePath, '_blank');
    }
//contact
function contactSub() {
            alert("Submited succesfully.");
        }

        function contactSub() {
            var form = document.getElementById('myForm');
            var formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Handle success response
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        }