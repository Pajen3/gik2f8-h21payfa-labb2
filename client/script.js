
todoForm.title.addEventListener("input", (e) => validateField(e.target));
todoForm.title.addEventListener("blur", (e) => validateField(e.target));
todoForm.description.addEventListener("input", (e) => validateField(e.target));
todoForm.description.addEventListener("blur", (e) => validateField(e.target));
todoForm.duoDate.addEventListener("input", (e) => validateField(e.target));
todoForm.duoDate.addEventListener("blur", (e) => validateField(e.target));

todoForm.addEventListener("submit" , onSubmit);

let titleValid = true;
let descriptionValid = true;
let duoDateValid = true;


function validateField(field){
    const {name, value} = field;

    let = validationMessage = "" ;

    switch(name) {
        case "title": {
            if(value.length < 2) {
                titleValid = false;
                validationMessage = "Fältet  'Titel' måste innehålla minst 2 tecken";
            } else if(value > 100){
                titleValid = false;
                validationMessage = "Fältet  'Titel' får inte innehålla mer än 100 tecken";
        }

        break;
        }
        case "description": {
            if(value.length > 500){
                descriptionValid = false;
                validationMessage = "Fältet  'beskrivning' får inte innehålla mer än 500 tecken";
            }
            break;
        }
        case "dueDate": {
            if(value.length == 0 ){
                descriptionValid = false;
                validationMessage = "Fältet  'utfört senast' får inte lämnas tomt";
            }
        break;

        }

    }

    field.previousElementSibling.innerText = validationMessage;
    field.previousElementSibling.classList.remove("hidden");

    

}

function onSubmit(e) {
    e.preventDefault();
};