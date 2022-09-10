function getClass(classname) { return Function('return (' + classname + ')')(); }

console.log(getClass("Test"))

// 型宣言をできるようにしたい
class Type {
    #value
    /**
     * 
     * @param {string} types 
     * @param {any} value 
     * @returns 
     */
    constructor(types, value) {
        this.types = types.split("|");
        if (this.judgeType(value)) {
            this.#value = value;
            return value;
        }
    }

    get value() {
        return this.#value;
    }

    judgeType(value) {
        for (const type of this.types) {
            if (typeof value === type) return true;
            // if (value instanceof getClass(type)) return true;
        }
        throw new Error("Invalid type.");
    }

    update(value) {
        if (this.judgeType(value)) {
            this.#value = value;
        }
    }
}

class Test {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

// 数値型
const n = new Type("string|number|Test", "testString");
console.log(n.value);
n.update(100);
console.log(n.value);
n.update(new Test(10, 10));
conso

