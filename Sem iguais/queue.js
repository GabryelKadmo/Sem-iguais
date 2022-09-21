class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    enqueue(element) {
        let verify;
        if (element == "") {
            return Swal.fire({
                icon: 'error',
                title: 'Uepa',
                text: 'Digite algo...',
            })
        }
        for (let listinha in this.items) {
            if (this.items[listinha].toLowerCase() == element.toLowerCase()) {
                verify = true;
            }
        }
        if (verify == true) {
            return Swal.fire({
                icon: 'error',
                title: 'vish',
                text: 'Este item já existe',
            })
        } else {
            this.items[this.count] = element;
            this.count++;
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    };
    isEmpty() {
        return this.count - this.lowestCount === 0;
    };
    size() {
        return this.count - this.lowestCount;
    };
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        };
        return objString;
    }
}