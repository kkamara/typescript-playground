type ObjType = {
    response?: {
        test: string;
    };
};
type bool = true|false;
type func = () => {};
class Test {}

const run = () => {
    let obj: ObjType = {};
    if (obj.response?.test) {
        console.log("response there");
    } else {
        console.log("response not there");
    }

    const myBool: bool = undefined;
    console.log("myBool", myBool);

    const myFunc: func = undefined;
    console.log("myFunc", myFunc);

    const myClass: Test = undefined;
    console.log("myClass", myClass);

    const myNewClass: Test = new Test();
    console.log("myNewClass", myNewClass);
};

run();