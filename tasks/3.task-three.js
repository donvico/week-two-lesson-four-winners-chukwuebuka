const profile = {
    firstName: 'Okoli',
    secondName: 'Cynthia',
    age: 29,
    city: 'Awka',
  }
  
  for (const key in profile) {
    console.log(`${key}:${profile[key]}`) // output is firstName:Okoli, secondName:Cynthia, age:29, city:Awka
  }