//Get all the countries from Asia continent /region using Filter function

var countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.com/v2/all");
countries.send();
countries.onload = function () {
    var result = JSON.parse(countries.response);
    var asia = result.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);

}