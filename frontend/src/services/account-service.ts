import axios from '../api/axios';
import { getUserId } from "./user-service";
import authHeader from "./auth-header";
import { IProfile } from '../utils/types';

const userId = getUserId();

const getProfile = async () => {
    try {
        const response = await axios.get(`/accounts/${userId}`);
        const profile = response.data;
        return profile;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
};

const addFavourite = (userId: number, movieId: number) => {
    return axios
        .post(`/accounts/${userId}/favourites`, {
            userId,
            movieId
        }, {
            headers: {
                ...authHeader()
            }
        })
        .then((response: { data: {}; }) => {
            return response.data;
        });
};

const updateProfile = async (profileData: IProfile) => {
    try {
        const response = await axios.put(`/accounts/${userId}`, profileData, {
            headers: {
                ...authHeader(),
                'Content-Type': 'application/json',
            },
        });
        const updatedProfile = response.data;
        return updatedProfile;
    } catch (error) {
        console.error('Error updating profile:', error);
        throw error;
    }
};

const getFavoriteMovies = async () => {
    try {
        const response = await axios.get(`/accounts/${userId}/favourites`, {
            headers: {
                ...authHeader()
            }
        });
        const favoriteMovies = response.data;
        return favoriteMovies;
    } catch (error) {
        console.error('Error fetching favorite movies:', error);
        throw error;
    }
};

const getUserReviews = async () => {
    try {
        const response = await axios.get(`/accounts/${userId}/reviews`);
        const userReviews = await response.data;
        return userReviews;
    } catch (error) {
        console.error('Error fetching favorite reviews:', error);
        throw error;
    }
}

const deleteFavoriteMovie = async (movieId: number) => {
    try {
        await axios.delete(`/accounts/${userId}/favourites/${movieId}`, {
            headers: {
                ...authHeader()
            }
        });
    } catch (error) {
        console.error('Error deleting favorite movie:', error);
        throw error;
    }
};

const profileService = {
    getProfile,
    getFavoriteMovies,
    getUserReviews,
    deleteFavoriteMovie,
    addFavourite,
    updateProfile
};

export default profileService;
