//Print the country that uses US dollars as currency

var request = new XMLHttpRequest();
request.open('Get','https://restcountries.com/v3.1/all');
request.send();
request.onload = function () {
     var result = JSON.parse(this.response);
    var cur = result.filter((element)=>{
        for (var i in element.currencies){
            if(i === "USD"){
                return true;
            }
        }
    }).map((result)=>result.name);
console.log(cur)
}