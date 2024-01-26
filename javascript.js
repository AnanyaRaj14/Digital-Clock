setInterval(()=>{
    let d=new Date();
    let day=d.getDay();
    let date=d.getDate();
    let month=d.getMonth()+1;
    let year=d.getFullYear();
    
    let hour=d.getHours();
    let minutes=d.getMinutes();
    let seconds=d.getSeconds();

    if(day==0){
        document.getElementById("daynum").innerHTML="Sunday"
    }
    else if(day==1){
        document.getElementById("daynum").innerHTML="Monday"
    }
    else if(day==2){
        document.getElementById("daynum").innerHTML="Tuesday"
    }
    else if(day==3){
        document.getElementById("daynum").innerHTML="Wednesday"
    }
    else if(day==4){
        document.getElementById("daynum").innerHTML="Thursday"
    }
    else if(day==5){
        document.getElementById("daynum").innerHTML="Friday"
    }
    else if(day==6){
        document.getElementById("daynum").innerHTML="Saturday"
    }

    if(hour>12){
        document.getElementById("hour").innerHTML=hour-12;
        document.getElementById("period").innerHTML="PM"
    }
    else if(hour=12){
         document.getElementById("hour").innerHTML=12;
         document.getElementById("period").innerHTML="AM"
    }
    else{
        document.getElementById("hour").innerHTML=hour;
    }

    

    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
    document.getElementById("daynum").innerHTML="Saturday"
    if(minutes<10){
        document.getElementById("minutes").innerHTML="0"+minutes;
    }
    else{
        document.getElementById("minutes").innerHTML=minutes;
    }
    if(seconds<10){
        document.getElementById("seconds").innerHTML="0"+seconds;
    }
    else{
        document.getElementById("seconds").innerHTML=seconds;
    }
    
    document.getElementById("year").innerHTML=year;
    
    document.getElementById("year").innerHTML=year;
    if(date<10){
        document.getElementById("date").innerHTML="0"+date;
    }
    else{
        document.getElementById("date").innerHTML=date;
    }
    
    document.getElementById("year").innerHTML=year;
    if(month<10){
        document.getElementById("month").innerHTML="0"+month;
    }
    else{
        document.getElementById("month").innerHTML=month;
    }
    document.getElementById("year").innerHTML=year;    
},1000)


