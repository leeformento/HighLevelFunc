const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  // =============ForEach; better way to loop thru array and data
  for (let i=0; i < companies.length; i++) {
    console.log(companies[i]);
  }
  
  //synchronous
  // currentvalue, index, array
  // this is whole list
  companies.forEach(function(company) {
    console.log(company);
  });
  
  // just get the name
  companies.forEach(function(company) {
  companies.forEach(function(company) {
    console.log(company.name);
  });
  
  // ============= filter() allows us to filter things from array
  // get ages 21 and over
  // let canDrink = [];
  for (let i=0; i < ages.length; i++) {
    if(ages[i] >= 21) {
      canDrink.push(ages[i]);
    }
  }
  console.log(canDrink);
  
  const canDrink = ages.filter(function(age) {
    if(age >= 21) {
      return true;
    }
  });
  console.log(canDrink);
  
  // ES6
  const canDrink = ages.filter(age => age >= 21);
  console.log(canDrink);
  
  // // Filter retail companies ES5
  const retailCompanies = companies.filter(function(company) {
    if (company.category === 'Retail') {
      return true;
    }
  });
  
  console.log(retailCompanies);
  
  // Filter retail companies ES6
  const retailCompanies = companies.filter(company => company.category === 'Retail');
  console.log(retailCompanies);
  
  // Filter companies that started in the 80s ES5
  const startEighties = companies.filter(function(company) {
    if (company.start >= 1980) {
      return true;
    }
  });
  console.log(startEighties);
  
  // ES6 way
  const startEighties = companies.filter(company => (company.start >= 1980 && company.start < 1990));
    console.log(startEighties);
  
  // Filter companies that lasted 10 years. 1999 to 2000
  
  
  const tenYears = companies.filter(company => (company.end - company.start >= 10))
  console.log(tenYears);
  
  // ============= map() create new arrays of anything from current array
  // all company names into all arrays
  const companyNames = companies.map(function(company) {
    return company.name;
  });
  console.log(companyNames);
  
  const companyNames = companies.map(company => company.name);
  console.log(companyNames);
  
  const testMap = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`;
    console.log(testMap);
  });
  
  const testMap = companies.map(company =>`${company.name} [${company.start} - ${company.end}]`);
  console.log(testMap);
  
  // Take age and square root
  const agesSquare = ages.map(age => Math.sqrt(age));
  console.log(agesSquare);
  
  // Multiply by 2
  const agesTimesTwo = ages.map(age => age *2);
  console.log(agesTimesTwo);
  
  // Square root age and multiply by 2
  const agesSquaredTimesTwo = ages
  .map(age => Math.sqrt(age))
  .map(age => age *2);
  
  console.log(agesSquaredTimesTwo);
  
  // =============SORT
  // // Sort companies by start year
  // const sortCompanies = companies.sort(function(c1,c2) {
    if(c1.start > c2.start) {
      return 1;
    } else {
      return -1;
    }
  
  });
  console.log(sortCompanies);
  
  
  //'?' return 1. ':' else return -1
  const sortCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
  console.log(sortCompanies);
  
  // SORT ages
  const sortAges = ages.sort((a,b) => a -b); // b - a descending order
  console.log(sortAges);
  
  // REDUCE
  Add ages altogether for loop
  let ageSum = 0;
  for (let i = 0; i< ages.length; i++) {
    ageSum += ages[i];
  
  }
  console.log(ageSum);
  
  // const ageSum = ages.reduce(function(total, age) {
    return total + age;
  }, 0);
  console.log(ageSum);
  
  const ageSum = ages.reduce((total,age) => total + age, 0);
  console.log(ageSum);
  
  // Total years for all companies
  const totalAge = companies.reduce(function(total, company) {
    return total + (company.end - company.start);
  },0);
  console.log(totalAge);
  
  const totalAge = companies.reduce((total,company) => total + (company.end - company.start),0);
  console.log(totalAge);
