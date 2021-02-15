const companies = [
{name:"Company One", category:"Finance", start: 1981, end:2003},
{name:"Company Two", category:"Retail", start: 1992, end:2008},
{name:"Company Three", category:"Auto", start: 1999, end:2007},
{name:"Company Four", category:"Retail", start:1989, end:2010},
{name:"Company Five", category:"Technology", start: 2009, end:2014},
{name:"Company Six", category:"Finance", start: 1987, end:2010},
{name:"Company Seven", category:"Auto", start: 1986, end:1996},
{name:"Company Eight", category:"Technology", start: 2011, end:2016},
{name:"Company Nine", category:"Retail", start: 1981, end:1989}
];

const ages =[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i=0; i< companies.length; i++) {
//     console.log(companies[i])
// }

// companies.forEach((company) => {
//     console.log(company)
// })

// let canDrink = [];
// for(let i=0; i< ages.length; i++) {
//         if (ages[i]>= 21){
//             canDrink.push(ages[i]);
//         }
//     }

//  console.log(canDrink)

//////////////////////////////
//////////  FILTER   /////////
//////////////////////////////

let canDring = ages.filter(age => age >= 21)
console.log(canDring)


//all retail companies
const retailCompanie = companies.filter(company => company.category === "Retail");
console.log(retailCompanie)

//all companies startet in eighties
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
console.log(eightiesCompanies)

//all companies lasted for 10 years and over
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears)

//////////////////////////////
//////////  MAP   /////////
//////////////////////////////

//create array of company names
let companyNames = companies.map(company => company.name)
console.log(companyNames);

//create array with all names and start and end year using TEMPLATE STRING
let testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(testMap);

//ages array and square the routh and multipy with 2

const ageMap = ages
        .map(age => Math.sqrt(age))
        .map(age => age * 2)

console.log(ageMap)

//////////////////////////////
//////////  SORT   /////////
//////////////////////////////
//by started year

///longer version

const sortedCompLonger = companies.sort((a,b) => {
    if(a.start > b.start){
        return 1
    }else return -1
    
});

///shorter version with TERNARY opertors
const sortedComp = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedComp)

//sort ages asending
const sortAgesAsc = ages.sort((a,b)=>a-b);
console.log(sortAgesAsc)

//sort ages descending
const sortAgesDes = ages.sort((a,b)=>b-a);
console.log(sortAgesDes)

//////////////////////////////
//////////  REDUCE   /////////
//////////////////////////////

///sum all ages with for loop
let ageSum = 0;
for(let i =0; i<ages.length; i++){
    ageSum += ages[i]
}
console.log(`Sum of all ages with for loop: ${ageSum}`)

//sum all ages with reduce
const ageReduce = ages.reduce((total, age) => total + age, 0);
console.log(`Sum of all ages with reduce ${ageReduce}`);

///get total years for all companies

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0 );
console.log(`All company year sum is ${totalYears}`);

//combine methods

const combinedAge = ages
    .map(age => age *2) 
    .filter(age => age >= 40)
    .sort((a,b)=> a-b)
    .reduce((a,b)=> a+b, 0)

console.log(combinedAge)


const combinedCompanies = companies
    .filter (company => (company.end - company.start >= 10))
    .sort ((a,b) => a-b)
    .map (company => company.name)
    


console.log(combinedCompanies)