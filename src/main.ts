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
enum EnumType{ apple, pear, };
type BigNum = bigint;
type VoidType = void;
type NeverType = never;
type UnknownType = unknown;
type TupleType = [string, number];
type NullType = null;

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

    const myEnum: EnumType = undefined;
    console.log("myEnum", myEnum);

    const myBigNum: BigNum = undefined;
    console.log("myBigNum", myBigNum);

    const myVoid: VoidType = undefined;
    console.log("myVoid", myVoid);

    // This throws an error.
    // const myNever: NeverType = undefined;
    // console.log("myNever", myNever);

    const myUnknown: UnknownType = undefined;
    console.log("myUnknown", myUnknown);

    const myTuple: TupleType = undefined;
    console.log("myTuple", myTuple);

    const myNull: NullType = undefined;
    console.log("myNull", myNull);
};

run();