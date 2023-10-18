// Wait for page to load
document.addEventListener('DOMContentLoaded', function () {

    // Select the submit button and input to be used later
    const submit = document.querySelector('#enviar');
    const newTask = document.querySelector('#tarea');

    // Disable submit button by default:
    submit.disabled = true;

    // Listen for input to be typed into the input field
    newTask.onkeyup = () => {
        if (newTask.value.length > 0) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }
    }

    // Listen for submission of form
    document.querySelector('form').onsubmit = () => {

       
        const task = newTask.value; 

        
        if (confirm('Estás de acuerdo?')) {
            const li = document.createElement('li');
            li.innerHTML = task;
            document.querySelector('#tareas').append(li);
        }

        newTask.value = '';
        submit.disabled = true;



        // Stop form from submitting
        return false;
    }
});