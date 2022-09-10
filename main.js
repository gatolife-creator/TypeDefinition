// 型宣言をできるようにしたい
const Type = function (type, value) {
    this.type = type;
    if (this.judgeType(value)) {
        this.value = value;
        return value;   
    }
    // return this.value;

}

Type.prototype.judgeType = function (value) {
    if (typeof value === this.type) return true;
    throw new Error("Invalid type.");
}

Type.prototype.update = function (value) {
    if (this.judgeType(value)) {
        this.value = value;
    }
}
// 数値型
const n = new Type("number", 10);
console.log(n);
n.update(100);
console.log(n);

