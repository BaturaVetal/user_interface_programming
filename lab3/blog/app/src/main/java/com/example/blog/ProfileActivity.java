package com.example.blog;

import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import org.json.JSONObject;
import java.io.IOException;

public class ProfileActivity extends AppCompatActivity {

    private TextView tvUsername, tvEmail;
    private OkHttpClient client;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        tvUsername = findViewById(R.id.tvUsername);
        tvEmail = findViewById(R.id.tvEmail);
        client = new OkHttpClient();

        loadProfile();
    }

    private void loadProfile() {
        Request request = new Request.Builder()
                .url("YOUR_API_URL/profile")
                .get()
                .build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                e.printStackTrace();
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        // Handle error
                    }
                });
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.isSuccessful()) {
                    try {
                        JSONObject json = new JSONObject(response.body().string());
                        final String username = json.getString("username");
                        final String email = json.getString("email");

                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                tvUsername.setText(username);
                                tvEmail.setText(email);
                            }
                        });
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                } else {
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            // Handle error
                        }
                    });
                }
            }
        });
    }
}
