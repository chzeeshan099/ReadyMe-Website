import  axios from "axios";

export const createPreRegisterUserApi = async (payload) => {
    try {
        const res = await axios.post(`/api/pre-register/create-pre-register-user`, payload);
        console.log(res,'res_createPreRegisterUserApi')
        return { data: res?.data, error: null };
    } catch (err) {
        const error = err;
        return { data: null, error: error.response?.data?.message ?? "error try again." };
    }
};
