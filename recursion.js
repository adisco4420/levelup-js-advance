function sumUp(num){
    if (num === 0) {
        return 0;
    } else {
        return num + sumUp(num - 1)
    }
}
console.log(sumUp(2));
