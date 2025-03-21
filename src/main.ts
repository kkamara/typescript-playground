type ObjType = {
    response?: {
        test: string;
    };
};

const run = () => {
    let obj: ObjType = {};

    if (obj.response?.test) {
        console.log("response there");
    } else {
        console.log("response not there");
    }
};

run();