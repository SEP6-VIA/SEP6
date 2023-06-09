package com.sep6.backend.repository;

import com.sep6.backend.security.token.Token;

import java.util.List;
import java.util.Optional;

public interface TokenRepository
{

    List<Token> findAllValidTokenByUser(Integer id);

    Optional<Token> findByToken(String token);

    Token save(Token storedToken) throws IllegalArgumentException;

    List<Token> saveAll(List<Token> validUserTokens) throws IllegalArgumentException;
    List<Token> getAllExpiredTokens();

    void deleteAll(List<Token> expiredTokens);
}
