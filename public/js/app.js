console.log('Client side javascript file is loaded!')

let weatherForm = document.querySelector('form');
let search = document.querySelector('input');
let message1 = document.querySelector('#m1');
let message2 = document.querySelector('#m2');
weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(search.value);
    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.innerText = data.error;
                message2.innerText = '';
            } else {
                message1.innerText = data.location;
                message2.innerText = data.forecast;
            }
        })
    })
})

    

    