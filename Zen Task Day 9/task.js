function xmlreq(){
    
    var xhr=new XMLHttpRequest()
    xhr.open("GET","https://restcountries.com/v3.1/all")
    xhr.send()
    xhr.responseType="json"
    xhr.onload=()=>{
        var data=xhr.response
    
    //----- a. Get all the countries from Asia continent /region using Filter function

    var getasia=(value)=>value.continents[0]=="Asia"
    var foo=data.filter(getasia)
    var getcontinent=(value)=>value.name.common
    var res=foo.map(getcontinent)
    console.log(res);

// --------

//-----b.Get all the countries with a population of less than 2 lakhs using Filter function

// let pop = data.filter((p)=> p.population < 200000).map((s)=> s.name);
// console.log(pop);
// -------

   //--------c.Print the following details name, capital, flag using forEach function
            
//    data.forEach(ele => console.log(`${ele.name} - ${ele.capital},${ele.flag}`));

// -------

//------d. Print the total population of countries using reduce function

// var getpopulation=(value)=>value.population
// var res=data.map(getpopulation)
// var totalpopulation=(value,value1)=>value+value1
// var res1=res.reduce(totalpopulation)
// console.log(res1);
// -------

 //-------e.Print the country which uses US Dollars as currency.

//  var getcurrencies=(value)=>value.currencies && value.currencies.USD
//  var res=data.filter(getcurrencies)
//  var getname=(value)=>value.name.common
//  var foo=res.map(getname)
//  console.log(foo);
//  ------

    }
}
xmlreq()