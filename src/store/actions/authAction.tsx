import axios from "axios";
import { Dispatch } from "redux";
const API_BASE_URL_AUTH = import.meta.env.VITE_API_ENDPOINT;

interface UpdateNickNameData {
  nickname: string;
}

interface ApiResponse {
  message: string;
}



export const updateNickName = (
  data: UpdateNickNameData,
  callback: (response: ApiResponse | string) => void
) => async (dispatch: Dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.post<ApiResponse>(
      `${API_BASE_URL_AUTH}update-nickname`,
      data,
      config
    );

    dispatch({
      type: "UPDATE",
      payload: res.data,
    });

    return callback(res.data);
  } catch (e) {
  
    if (axios.isAxiosError(e)) {
      return callback(e.response ? e.response.data : "Unknown error");
    }


    return callback("An unexpected error occurred");
  }
};

interface RegisterData {
  email: string;
  username?: string; // Optional
  password: string;
  accountType?: number; // Optional
  confirmpassword?: string; // Optional
}


interface RegisterResponse {
  status: number;
  data: 1; 
  responseCode: number;
  responseMessage: string;
}


interface RegisterError {
  response?: {
    status: number;
    data: {
      responseMessage: string;
    };
  };
}

/*** Register User */
export const register =
  (
    data: RegisterData,
    callback: (
      error: RegisterError | null,
      response: RegisterResponse | null
    ) => void
  ) =>
  async (dispatch: Dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post<RegisterResponse>(
        `${API_BASE_URL_AUTH}/User/register`,
        data,
        config
      );

      dispatch({
        type: "REGISTER",
        payload: res.data,
      });

      if (callback) {
        return callback(null, res.data);
      }
    } catch (e: unknown) { 
      console.log("Error occurred:", e);


      if (axios.isAxiosError(e) && e.response) {
        const errorResponse: RegisterError = {
          response: e.response,
        };

        dispatch({
          type: "REGISTER_ERROR",
          payload: e.response.data.responseMessage || "Unknown error",
        });

        return callback(errorResponse, null);
      } else {
        dispatch({
          type: "REGISTER_ERROR",
          payload: "Unexpected error occurred",
        });

        return callback(null, null); 
      }
    }
  };
