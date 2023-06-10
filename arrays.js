// const names = ["Alfredo", "Angel", "Ana"];

class ProptotypeArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    getAll() {
        return this.data;
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        if(this.length > 0) {
            const prevItem = this.data[this.length - 1];
            delete this.data[this.length - 1];
            this.length--;
            return prevItem;
        }
    }

    unshift(item) {
        if(!item) return this.length;

        if(this.length !== 0) {
            for(let i = this.length - 1; i >= 0; i--) {
                this.data[i + 1] = this.data[i];
            }
        }

        this.data[0] = item;
        this.length++;
        return this.length;
    }

    // Delete an specific data
    delete(index) {
        if(index > this.length) return "❌ Error";

        const itemDeleted = this.data[this.length - 1];
        this.shiftIndex(index);
        return itemDeleted;
    }

    shiftIndex(index) {
        for(let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }
}

const names = new ProptotypeArray();

names.push("Alfredo");
names.push("Angel");
names.push("Andres");
console.log(names.push("Ana"));

console.log(names.pop());
names.unshift("Aldo"); 
names.unshift("Armando");
names.unshift("Araceli");

console.log(names.delete(2));

console.log(names.getAll());
