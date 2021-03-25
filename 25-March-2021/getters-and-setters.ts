class User {
    constructor(
        private readonly name: string,
        private readonly age: number
    ) {
        
    }
    address;
    get details() {
        return this.name
    }

    set location(val) {
        this.address = val 
    }

}

const user1 = new User('Vansham', 24)

console.info(user1.details)

user1.location = 'Amritsar'
console.info('address: ', user1.address)