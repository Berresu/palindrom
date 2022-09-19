let kelimeler=["mum","ada","yapay","kazak","küçük","neden","niçin"];
let duz=document.getElementById("duzgun");
let ters=document.getElementById("ters");
let sec=document.getElementById("btnSec");
let random=Math.floor(Math.random()*7);

sec.addEventListener("click", ()=>{
    duz.innerHTML=kelimeler[random];
    console.log(kelimeler[random]);
    ters.innerHTML=kelimeler.reverse()[random];
    console.log(kelimeler[random]);
});
