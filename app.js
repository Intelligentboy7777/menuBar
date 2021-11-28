let clock=document.querySelector('.clock');
let hour=document.getElementById('hours');
let min=document.getElementById('minutes');
let secund=document.getElementById('seconds');
let timeStatus=document.getElementById('timeStatus');

function clockFunc(){
    let date=new Date();
    let h=96-date.getHours();
    let m=60-date.getMinutes();
    let s=60-date.getSeconds();
    hour.innerHTML=h<10?'0'+h:h;
    min.innerHTML=m<10?'0'+m:m;
    secund.innerHTML=s<10?'0'+s:s;
}
// clockFunc()
setInterval(clockFunc,1000);
// setTimeout(salom,1000);


