import axios, { AxiosError } from 'axios';
import { toast } from 'sonner'; // or your preferred toast library

export const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response) {
            const status = error.response.status;
            const data = error.response.data as { message?: string };

            switch (status) {
                case 401:
                    toast.error('Unauthorized access');
                    break;
                case 403:
                    toast.error('Permission denied');
                    break;
                case 404:
                    toast.error('Resource not found');
                    break;
                case 500:
                    toast.error('Server error');
                    break;
                default:
                    toast.error(data.message || 'An error occurred');
            }
        } else if (error.request) {
            toast.error('Network error. Please check your connection.');
        } else {
            toast.error('An unexpected error occurred');
        }

        return Promise.reject(error);
    }
);