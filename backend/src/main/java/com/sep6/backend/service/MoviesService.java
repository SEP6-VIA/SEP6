package com.sep6.backend.service;

import com.sep6.backend.models.Movie;

import java.util.List;

public interface MoviesService {
    Movie createMovie(Movie movie);
    List<Movie> getMovies();

    List<Movie> getMoviesBySearch(String search);
}
