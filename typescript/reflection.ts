import 'reflect-metadata';

// Class Decorator
function SetMetadata(): ClassDecorator {
    return (target) => {
        console.log('Decorator Activated');
        Reflect.defineMetadata('random', 'value', target)
    };
}

// Parameter Decorator
function PMetadata(): ParameterDecorator {
    return (target: object, key, index) => {
        console.log(target)
    }
}
@SetMetadata()
class Person {
    name: string = "Vansham";

    getName(@PMetadata() name?: string) {
        console.log(name)
    }
}


const p1 = new Person()
p1.getName()
