package com.sep6.backend.service;

import com.sep6.backend.models.Account;

import java.util.List;
import java.util.Set;

import com.sep6.backend.models.FavouriteRequest;
import com.sep6.backend.models.Movie;
import com.sep6.backend.models.Review;
import com.sep6.backend.projections.AccountProjection;
import com.sep6.backend.projections.FavouriteMovieProjection;

public interface AccountsService {

    Account editAccount(int id, Account account);
    void deleteAccount(int id);
    FavouriteRequest addMovieToAccountFavourites(FavouriteRequest request);
    Set<FavouriteMovieProjection> getAccountFavourites(int id);
    void deleteAccountFavourite(int accountId, int movieId);
    List<Review> getAccountReviews(int id);
    AccountProjection getAccountById(int id);
}
