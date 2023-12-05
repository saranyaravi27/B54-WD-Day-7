//Print the total population of countries using reduce function

var countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.com/v2/all");
countries.send();
countries.onload = function () {
    var result = JSON.parse(countries.response);
    var population = result.reduce((acc,element)=>{
            return +acc+element.population;
        
    },0)
    console.log("Total Population is: "+population);

}