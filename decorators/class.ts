// Simple
function Important(constructor: Function) {
    console.log('triggerd')
}

// changing the constructor signature
function ReplacementDecorator<T extends new (...args: any[]) => {}>(ctor: T) {
    console.log('replacement decorator triggered')
    return class extends ctor {
        age: number = 25
    }
}

// method decorator
function SomeMethodDecorator() {
    console.log('Method Decorator called')
    return function (target: Manager, name: string, propertyDescriptor: PropertyDescriptor) {
        console.info('target: ', target)
        console.info('name: ', name)
        console.info('propertyDescriptor: ', propertyDescriptor)

        propertyDescriptor.value = function () { return 'You got hacked son' }
        console.log(typeof propertyDescriptor.value)
    }
}
@Important
@ReplacementDecorator
class Manager {
    constructor(
        private readonly name: string
    ) { }

    @SomeMethodDecorator()
    getDetails() {
        console.log('get name called')
        return this.name;
    }
}

const m1 = new Manager('Vansham')
// console.log(m1)

console.log(m1.getDetails())
console.table(m1)