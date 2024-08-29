// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string){


    const check = array.filter(element => element.toLowerCase() === string.toLowerCase()  )

    return check
}


function fuzzyMatch(array, string) {
    const check = array.filter(element => element.slice(0,string.length ) === string) 
    return check
}


const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "N/A"},
    { year: "2009", result: "N/A"},
    { year: "2008", result: "N/A"}, 
]



function matchName(array, string) {
    const check = array.filter(element => element.name === string)
    return check
}

console.log(matchName(record, "2009"))

