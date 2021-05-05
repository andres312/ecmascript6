const obj = {
    name: 'andres',
    age: '35',
    country: 'mx'
}

let {name, ...all} = obj;
console.log(name, all)

let {country, ...all} = obj;
console.log( all)

const obj2 = {
    name: 'andres',
    age: 35
}

const obj1 = {
    ...obj2,
    country: 'mx'
}
console.log(obj1)

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('hello world'),2000)
            : reject (new Error('test error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month =  match[2]
const day = match[3]
console.log(match)
console.log(year)
