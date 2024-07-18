function digitalClock(){
    let datefunction = new Date();
    let hours = datefunction.getHours();
    let minutes = datefunction.getMinutes();
    let seconds = datefunction.getSeconds();
    let timeFormat = 'AM';
    timeFormat = hours >= 12 ? 'PM' : 'AM';
    hours = hours == 0 ? 12 : hours;
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    document.querySelector('.format').innerHTML = timeFormat;
}

setInterval(digitalClock, 1000);

let newDataFuction = new Date();
function randerDate(){
    newDataFuction.setDate(1);
    let day = newDataFuction.getDay();

    let currentDate = new Date(
        newDataFuction.getFullYear(),
        newDataFuction.getMonth()+ 1,0
    ).getDate();

    let addNextDate = new Date(
        newDataFuction.getFullYear(),
        newDataFuction.getMonth()+ 1,0
    ).getDate();


    let prevDate = new Date(
        newDataFuction.getFullYear(),
        newDataFuction.getMonth(),0
    ).getDate();

    console.log(currentDate, addNextDate, prevDate);
    let addNext = addNextDate +7;

    let month = newDataFuction.getMonth();
    let year = newDataFuction.getFullYear();
    let monthArr = ['january','february','March','April','May','June','July','August','September','October','November','December'];
    document.getElementById("month").innerHTML = monthArr[month] + " - " + year;

    let today = new Date();
    let weekday = today.getDay();

    document.getElementById("date").innerHTML = today.toDateString();
    document.querySelector(`.week :nth-child(${weekday + 1})`).classList.add("active");

    let DATES = "";

    for(let x = day; x > 0; x--){
        DATES += "<div class='prev'>" + (prevDate - x + 1) + "</div>";
        console.log(DATES);
    }

    for(let i = 1; i<= currentDate; i++ ){
        if(i === today.getDate() && newDataFuction.getMonth() == today.getMonth() && newDataFuction.getFullYear() === today.getFullYear()){
            DATES += "<div class='today'>" + i +"</div>";
        }
        else{
            DATES += "<div >" + i +"</div>";
        }
    }

    for(let k = 1;k <= addNextDate; k++){
        DATES += " <div class='next'>" + k +"</div>";
    }


    document.querySelector('.dates').innerHTML = DATES;



}

function moveDate(para){
    if(para == 'prev'){
        newDataFuction.setMonth(newDataFuction.getMonth() - 1);
    }
    else if(para == 'next'){
        newDataFuction.setMonth(newDataFuction.getMonth() + 1);
    }

    randerDate();
}


