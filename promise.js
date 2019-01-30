const favouriteFruit = ['apple', 'banana', 'watermelon', 'orange'];

const checkFruit = function (fruit) {
    if (favouriteFruit.indexOf(fruit) !== -1) {
        console.log('fond');
    } else {
        console.log('not found'); 
    }
}
const promiseFunction = () => (
    new Promise((resolve, reject)=> {})
)
promiseFunction()
.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.error(error, 2)
});
const passwordSystem = (fruit) => {
    const favouriteFruit = ['apple', 'banana', 'watermelon', 'orange'];
    if (favouriteFruit.indexOf(fruit) !== -1) {
        return Promise.resolve(`${fruit}: is found in the list`)
    } else {
        return Promise.reject(`${fruit}: no found in the list`); 
    }
}
passwordSystem('apple')
.then(result => console.log(result))
.catch(error=>console.error(error))

passwordSystem('band')
.then(result => console.log(result))
.catch(error=>console.error(error))


