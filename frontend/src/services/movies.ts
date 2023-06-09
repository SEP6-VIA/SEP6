import { IMovie, IReview } from "../utils/types";
import axios from '../api/axios';
import authHeader from "./auth-header";

const API_URL = "/movies";

const getMovies = async (pageNumber?: number, genreId?: number | "", movieName?: string): Promise<IMovie[]> => {
    try {
        const response = await axios.get(`${API_URL}`, {
            params: {
                page: pageNumber,
                genreId: genreId,
                search: movieName
            },
            headers: {
                'Accept': 'application/json',
            },
        });

        const movies = response.data;
        return movies as IMovie[];
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};


const getMovieById = async (id: number): Promise<IMovie> => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        const movie = response.data;
        return movie as IMovie;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

const addReview = (movieId: number, rating: number, comment: string, createdOn: string, accountId: number, movieTitle: string) => {
    return axios
        .post(`${API_URL}/${movieId}/reviews`, {
            movieId,
            rating,
            comment,
            createdOn,
            accountId,
            movieTitle
        })
        .then((response: { data: {}; }) => {
            return response.data;
        });
};

const deleteReview = async (movieId: number, reviewId: number) => {
    try {
        await axios.delete(`${API_URL}/${movieId}/reviews/${reviewId}`, {
            headers: {
                ...authHeader()
            }
        });
    } catch (error) {
        console.error('Error deleting review:', error);
        throw error;
    }
};
const MovieService = {
    getMovies,
    getMovieById,
    addReview,
    deleteReview
};

export default MovieService;
