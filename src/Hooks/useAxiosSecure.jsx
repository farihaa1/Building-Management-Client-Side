

export const axiosSecure = axios.create({
    baseurl:"http://localhost:5000"
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;