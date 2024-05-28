
//davaleba 1
const twoMemberArray = (a, b, ...arr) => {
    let sum = a + b
    let multiply = arr.reduce((accumulator, num) => (
        accumulator *= num
    ), 1)
    return [sum, multiply]
} 

//davaleba 2
const findAddress = (myObj) => {
    const {banks:[, , {bank:{address:{city = undefined}}} ]} = myObj
    return city
}
const user = {
    fName: 'Saba',
    lName: 'Kidevertishvili',
    banks: [
        {
            bank:
            {
                name:'TBC',
                address: {
                    city: 'Tbilisi'
                }
        }
    },
        {
            bank: 
            {
                name:'BOG',
                address: {
                    city: 'Batumi'
                }
        }
    },
        {
            bank: 
            {
                name:'Cartu',
                address: {
                    city: 'Kutaisi'
                }
        }
    },
]

}

//davaleba 3
const car = {
    manufacturer: 'BMW',
    topSpeed: 280,
    workDone: {
        light: true,
        chassis: true,
        paint: false
    }
}
const cloneObj = (myObj) => {
    let clonedObj = {}
    for (let prop in myObj){
        if (typeof myObj[prop] === 'object' && !(Array.isArray(myObj[prop]))){
            clonedObj[prop] = {...myObj[prop]}
        }
        else if (Array.isArray(myObj[prop])) {
            clonedObj[prop] = myObj[prop].map(item => item)
        }
        else {
            clonedObj[prop] = myObj[prop]
        }
    }
    return clonedObj
}
console.log(document.querySelectorAll('#france'))



