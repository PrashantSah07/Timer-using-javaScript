let timeH = document.querySelector('#hour').firstElementChild;
let timeM = document.querySelector('#hour').firstElementChild.nextElementSibling;
let timeS = document.querySelector('#hour').firstElementChild.nextElementSibling.nextElementSibling;
let date = document.querySelector('#date');

setInterval(function () {
    let hours = new Date().getHours();
    timeH.innerHTML = hours
    let minutes = new Date().getMinutes();
    timeM.innerHTML = minutes
    let seconds = new Date().getSeconds();
    timeS.innerHTML = seconds


    let dates = new Date().getDate();
    date.innerHTML = "Current: " + dates

    let months = new Date().getMonth();
    date.innerHTML = date.innerHTML + "/" + (months + 1)

    let year = new Date().getFullYear();
    date.innerHTML = date.innerHTML + "/" + year

});


let stopWBtn = document.querySelector('#stopWBtn');
let stopWMinuteCount = document.querySelector('#stopWcount').firstElementChild;
let stopWSecondCount = document.querySelector('#stopWcount').firstElementChild.nextElementSibling;
let stopWMillisecondCount = document.querySelector('#stopWcount').firstElementChild.nextElementSibling.nextElementSibling;

let playbtn = document.querySelector('#play');
let pausebtn = document.querySelector('#pause');

let isOn = false;
let A;
let B;
let C;

stopWBtn.addEventListener('click', function () {
    if (!isOn) {
        playbtn.style.display = 'none'
        pausebtn.style.display = 'block'
        let ms = 0;
        let s = 0;
        let m = 0;
        A = setInterval(function () {
            if (ms <= 98) {
                ms++;
                stopWMillisecondCount.innerHTML = ms;
            }
            else {
                ms = 0;
                stopWMillisecondCount.innerHTML = '00';
            }
        }, 10)

        B = setInterval(function () {
            if (s <= 58) {
                s++
                stopWSecondCount.innerHTML = s
            }
            else {
                s = 0;
                stopWSecondCount.innerHTML = '00'
            }
        }, 1000)

        C = setInterval(function () {
            m++;
            stopWMinuteCount.innerHTML = m;
        }, 60000);
    }
    else {
        clearInterval(A);
        clearInterval(B);
        clearInterval(C);
        stopWMillisecondCount.innerHTML = '00';
        stopWSecondCount.innerHTML = '00'
        stopWMinuteCount.innerHTML = '00';

        playbtn.style.display = 'block'
        pausebtn.style.display = 'none'
    }

    isOn = !isOn;

})



let navbar = document.querySelector('.navbar');
let selectbtn = document.querySelector('.switch');

let isOn2 = false

navbar.addEventListener('click', function () {
    if (!isOn2) {
        selectbtn.style.display = 'flex'
    }
    else {
        selectbtn.style.display = 'none'
    }

    isOn2 = !isOn2;
})


let Stpwatch = document.querySelector('#Stpwatch');
let stpwtch = document.querySelector('.stopwatch');
let clock = document.querySelector('.clock');
let Timer = document.querySelector('#Timer');
let timer = document.querySelector('.timer')

let isOn3 = false;
Stpwatch.addEventListener('click', function () {
    if (!isOn3) {
        Stpwatch.innerHTML = "Clock"
        clock.style.display = 'none'
        timer.style.display = 'none';
        stpwtch.style.display = 'flex'
    } else {
        Stpwatch.innerHTML = "Stopwatch"
        clock.style.display = 'flex'
        stpwtch.style.display = 'none'
        timer.style.display = 'none';
    }

    isOn3 = !isOn3;

})


let isOn4 = false;

Timer.addEventListener('click', function () {
    if (!isOn4) {
        // Stpwatch.innerHTML = "Clock"
        timer.style.display = 'flex';
        clock.style.display = 'none';
        stpwtch.style.display = 'none';
    } else {
        // Stpwatch.innerHTML = "Stopwatch"
        timer.style.display = 'none';
        clock.style.display = 'flex'
        stpwtch.style.display = 'none'
    }

    isOn4 = !isOn4;

})



let isOn5 = false;

let tmrBtn = document.querySelector('#tmrBtn');
let playbtn2 = document.querySelector('#play2');
let pausebtn2 = document.querySelector('#pause2');
let userInput = document.querySelector('#userInput');
let stopExecution = false;
let timers = [];

let timerS = document.querySelector('#timerCount').firstElementChild.nextElementSibling.nextElementSibling;

tmrBtn.addEventListener('click', function () {

    if (userInput.value == '') {
        alert('Please set the timer first!');
        console.warn('Please set the timer first!');
        return;
    } else if (/[^0-9]/.test(userInput.value)) {
        alert('Only numbers are allowed! Letters and special characters are not permitted.');
        console.warn('Only numbers are allowed! Letters and special characters are not permitted.');
        return;
    }

    let inputValue = parseInt(userInput.value, 10);

    if (!isOn5) {
        playbtn2.style.display = 'none';
        pausebtn2.style.display = 'block';

        stopExecution = false;

        for (let a = inputValue; a >= 0; a--) {
            let timeoutId = setTimeout(function () {
                if (stopExecution) return;
                timerS.innerHTML = a;
            }, (inputValue - a) * 1000);
            timers.push(timeoutId);
        }
    } else {
        stopExecution = true;

        timers.forEach(timeoutId => clearTimeout(timeoutId));
        timers = [];

        playbtn2.style.display = 'block';
        pausebtn2.style.display = 'none';
        timerS.innerHTML = '00';
    }

    isOn5 = !isOn5;
});
