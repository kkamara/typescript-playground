type ObjType = {
    response?: {
        test: string;
    };
};
type Bool = true|false;
type Func = () => {};
class Test {}
type Arr = Array<string>;
type Num = Number;
type Str = string;

const run = () => {
    let obj: ObjType = {};
    if (obj.response?.test) {
        console.log("response there");
    } else {
        console.log("response not there");
    }

    const myBool: Bool = undefined;
    console.log("myBool", myBool);

    const myFunc: Func = undefined;
    console.log("myFunc", myFunc);

    const myClass: Test = undefined;
    console.log("myClass", myClass);

    const myNewClass: Test = new Test();
    console.log("myNewClass", myNewClass);

    const myArray: Arr = undefined;
    console.log("myArray", myArray);

    const myNumber: Num = undefined;
    console.log("myNumber", myNumber);

    const myString: Str = undefined;
    console.log("myString", myString);
};

run();