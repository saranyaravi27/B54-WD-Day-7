//Get all the countries with a population of less than 2 lakhs using Filter function

var countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.com/v2/all");
countries.send();
countries.onload = function () {
    var result = JSON.parse(countries.response);
    var population = result.filter((element)=>{
            return element.population<200000;
        
    })
    console.log(population);

}