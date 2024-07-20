const date= new Date();
const belownav=document.getElementsByClassName("belownav")[0];
const banner= document.createElement("div");
banner.setAttribute("id","banner");
banner.style.display="flex";
banner.style.flexWrap="wrap";
banner.style.justifyContent="space-between";
banner.style.marginRight="4%";
banner.style.marginLeft="1%";
banner.style.borderRadius="10px";
banner.style.alignItems='center';
banner.style.fontSize='14px';
banner.innerHTML+=`<div id="b" style='display:flex'><img width="26" height="26" src="https://img.icons8.com/color/48/alarm-clock--v1.png" id="alarm-clock--v1"alt="alarm-clock--v1"/><p> limited time offer </p></div>`

const b2= document.createElement("div");
b2.setAttribute("id","b2");
banner.appendChild(b2);

const b3= document.createElement("div");
b3.style.display="flex"
b3.setAttribute("id","b3");
b3.style.alignItems='center';
b3.style.justifyContent="space-around"
b3.innerHTML=`<div>GET 10% OFF </div><div> Use Code: <b>EXAM START</b></div>`;
banner.appendChild(b3);

belownav.appendChild(banner);

function startTimer(duration) {
    let timer = duration;
    const interval = setInterval(() => {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;
        b2.innerHTML=`Ends in : <b>${hours<10?"0"+hours:hours} : ${minutes<10?"0"+minutes:minutes} : ${seconds<10?"0"+seconds:seconds}</b>`;
        --timer;

        if (timer < 0) {
            clearInterval(interval);
            startTimer(duration);
        }
    }, 1000);
}

startTimer( 3*60*60);


const day=document.getElementById("day");
let month;
switch(date.getMonth()+1){
    case 1:
       month="Jan";
       break;
    case 2:
        month="Feb";
        break;
    case 3:
       month="Mar";
       break;
    case 4:
        month="Apr";
        break;
    case 5:
        month="May";
        break;
    case 6:
        month="Jun";
        break;
    case 7:
        month="Jul";
        break;
    case 8:
        month="Aug";
        break;
    case 9:
        month="Sep";
        break;
    case 10:
        month="Oct";
        break;
    case 11:
        month="Nov";
        break;
    case 12:
        month="Dec";
        break;   
    default:
        month="";
        break;
        
}
day.innerText=`${date.getDate()}-${month}`;
