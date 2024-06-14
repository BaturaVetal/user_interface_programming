package com.example.blog;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface APIService {

    @POST("/api/register")
    Call<UserResponse> registerUser(@Body User user);

    @POST("/api/login")
    Call<UserResponse> loginUser(@Body User user);
}
