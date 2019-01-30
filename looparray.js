const studentsName = [
    {firstname: 'adewale', lastname:'james'},
    {firstname: 'jubril', lastname:'marvis'},
    {firstname: 'thomas', lastname:'wale'}
]
const printArrayvalue = function (array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
       console.log(element);
    }
}
console.log(printArrayvalue(studentsName));
