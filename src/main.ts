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

async function run() {
  await axios.get<HttpResponse<SuccessBody>>(
    "http://localhost:8000/api/v1/success",
    {
      timeout: 5000, // 5 second timeout
    }
  )
    .then(res => {
      console.log("Result:", res.data.data?.message);
    })
    .catch((err: Error) => {
      if (axios.isAxiosError<ErrorBody>(err)) {
        if (
          err.code &&
          ["ERR_NETWORK", "ECONNREFUSED"].includes(err.code)
        ) {
          console.log("Server unavailable.");
        } else {
          console.log("HTTP error:", err.response?.data.message);
        }
      } else {
        console.log("Error:", err.message);
      }
    });
};

run();
