package com.sep6.backend.models.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String username;
    private String password;
    private String email;
    private String name;
    private String country;
    private String profilePictureUrl;
    private String dateOfBirth;
    private String gender;
}
