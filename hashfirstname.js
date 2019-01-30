const studentsName = [
    {firstname: 'adewale', lastname:'james'},
    {firstname: 'jubril', lastname:'marvis'},
    {firstname: 'thomas', lastname:'wale'}
]
const info = {name: "Luke Skywalker", occupation: "Jedi", powers: "The force"}
const encodeFristname = function(array) {
    let hash = '*'
    const result = []
    array.forEach(element => {
        const len = element.firstname.length;
        const hashFirstname = hash.repeat(len)
        result.push({firstname: hashFirstname, lastname: element.lastname})
    });
    return result;
}
console.log(encodeFristname(studentsName));

