let object =
{
    a: 10,
    b: 20,
    c: 30,
    d: 40,
}
object[Symbol.iterator] = function () {
    this.a = 0
    return {
        current: this.a,
        last: this.d,

        next: function () {
            if (this.current < this.last) {
                return {
                    done: false,
                    value: this.current += 10
                }
            } else {
                return {
                    done: true,
                    value: undefined
                }
            }
        }
    }
}

const iterObj = object[Symbol.iterator]()
console.log(iterObj.next())
console.log(iterObj.next())
console.log(iterObj.next())
console.log(iterObj.next())

for (let [key, value] of object) {
    const p = document.createElement("p");
    const b = document.createElement("strong");
    const s = document.createElement("span");

    b.innerText = key.toUpperCase() + ": ";
    s.innerText = value;

    p.appendChild(b);
    p.appendChild(s);
    document.body.appendChild(p);
}