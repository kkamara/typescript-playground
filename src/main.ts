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
    await axios.get<HttpResponse<SuccessBody>>("http://localhost:3000/api/v1/success")
        .then(res => {
            console.log("Result:", res.data.data?.message);
        })
        .catch((err: Error) => {
            if (axios.isAxiosError<ErrorBody>(err)) {
                console.log("HTTP error:", err.response?.data.message);
            } else {
                console.log("Error:", err.message);
            }
        });
};

run();
