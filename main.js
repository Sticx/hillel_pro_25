let object = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

object[Symbol.iterator] = function () {
    this.a = 0;
    return {
        current: this.a,
        last: this.d,
        next: function () {
            if (this.current < this.last) {
                return {value: this.current += 10, done: false}
            } else {
                return {value: undefined, done: true}
            }
        }
    }
}

const iterObj = object[Symbol.iterator]()
console.log(iterObj.next())
console.log(iterObj.next())
console.log(iterObj.next())
console.log(iterObj.next())