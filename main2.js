let object = {
    name: 'Stanley',
    Job: 'Web dev',
    age: 28,
}

object[Symbol.iterator] = function () {
    let values = Object.values(this);
    let index = 0;
    return {
        next() {
            if (index < values.length) {
                let valuesIndex = values[index];
                index++;
                return {value: valuesIndex, done: false};
            } else {
                return {value: undefined, done: true};
            }
        }
    }
}
const iterObj = object[Symbol.iterator]()
console.log(iterObj.next())
console.log(iterObj.next())
console.log(iterObj.next())
console.log(iterObj.next())