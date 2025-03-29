import axios from "axios";

interface HttpResponse<T> {
    data?: T;
}

interface SuccessBody {
    message?: string;
}

interface ErrorBody {
    message?: string;
}

const run = async () => {
    try {
        await axios.get<HttpResponse<SuccessBody>>("http://localhost:3000/api/v1/success")
            .then(res => {
                console.log("Result:", res.data.data?.message);
            })
            .catch(err => {
                throw err;
            });
    } catch (err) {
        if (axios.isAxiosError<ErrorBody>(err)) {
            console.log("Axios error:", err.response?.data.message);
        } else {
            console.log("Error:", (err as Error).message);
        }
    }
};

run();
