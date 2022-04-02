function GetAdvice(){
    fetch("https://api.adviceslip.com/advice").then(data => data.json()).then((data)=>{
        document.querySelector("#id").innerHTML = 'ADVICE #'+data["slip"]["id"];
        document.querySelector("#advice").innerHTML = '"'+data["slip"]["advice"]+'"';
    })
}