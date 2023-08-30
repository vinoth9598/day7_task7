let xmlHttpRequest=require('xhr2');
let xhr=new xmlHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');

// a.)Get all the countries from Asia continent/region using filter function.
xhr.onload=function(){
     console.log(xhr.responseText);
    
    let data=JSON.parse(xhr.responseText);
    
    
    let country=data.filter((value)=>{
        if((value.region=='Asia')&(value.continent=='Asia')){
            return value.name
        }
    })
    console.log(country);

}
xhr.send();

 console.log("____________________________________________________________");

let request=require('xhr2');
let xhr=new request();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
// 2.Get all the countries with a population of lessthan 2 lakhs using filter function.
xhr.onload=function(){
    let string=JSON.parse(xhr.responseText);

    let pop=string.filter(element=>{
        return element.population<200000;
    })
    console.log(pop);

}
console.log('________________________________________________');
// 3.print the following details name,capital,flag using foreach function.
let res=require('xhr2');
let xhr=new res();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function(){
    let each=JSON.parse(xhr.responseText);

    each.forEach(element => {
        console.log(element.name,element.capital,element.flag);
        
    });

}
console.log('_____________________________________________________________');

// // 4.Print the total population of countries using reduce function.
let res=require('xhr2');
let xhr=new res();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function(){
    let  Data=JSON.parse(this.response);
    let population=Data.reduce((acc,element)=>{
        return acc+element.population;
    },0);
    console.log(population);
       

}

console.log('__________________________________________________________________');
// 5.Print the country which uses US dollars as currency.
let request=require('xhr2');
let xhr=new request();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function(){
    let coun=JSON.parse(xhr.responseText);

    coun.forEach(value=>{
        if(value.currencies==={ USD: [Object] }){
            console.log(value.name);
         
        }
        
    });
}