document.addEventListener('DOMContentLoaded', function() {
    const roles = ['A STUDENT', 'AN INTERN', 'A TECH ENTHUSIAST', 'A LEARNER','A PROGRAMMER'];
    let index = 0;
    const roleElement = document.getElementById('role');
    setInterval(function() {
        roleElement.textContent = roles[index];
        index = (index + 1) % roles.length;
    }, 1000);
});
document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('form');
    form.addEventListener('submit',function (event){
        event.preventDefault();
        const formData = new FormData(form);
        fetch('submit_form.php',{
            method: 'POST',
            body: formData
        })
        .then(response => {
            if(response.ok)
            {
                alert('Message sent successfully!');
                form.reset();
            }
            else
            {
                throw new Error('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send message. Please try again later.');
        });
    });
});
