//Print the following details name, capital, flag, using forEach function

var countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.com/v2/all");
countries.send();
countries.onload = function () {
    var result = JSON.parse(countries.response);
    result.forEach((element)=>{
            console.log("name:"+element.name+";","Capital:"+element.capital+";","Flag:"+element.flag);
        
    })}