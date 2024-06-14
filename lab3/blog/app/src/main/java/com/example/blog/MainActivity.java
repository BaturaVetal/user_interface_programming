package com.example.blog;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    private static final int CREATE_POST_REQUEST_CODE = 1;
    private ArrayList<Post> posts;
    private PostAdapter postAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        posts = new ArrayList<>();
        postAdapter = new PostAdapter(posts);

        RecyclerView recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(postAdapter);

        Button createPostButton = findViewById(R.id.create_post_button);
        createPostButton.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, CreatePostActivity.class);
            startActivityForResult(intent, CREATE_POST_REQUEST_CODE);
        });

        findViewById(R.id.btn_register).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MainActivity.this, RegisterActivity.class));
            }
        });

        findViewById(R.id.btn_login).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MainActivity.this, LoginActivity.class));
            }
        });

        findViewById(R.id.btn_profile).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(MainActivity.this, ProfileActivity.class));
            }
        });

        // Метод для завантаження постів з сервера
        loadPosts();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == CREATE_POST_REQUEST_CODE && resultCode == RESULT_OK && data != null) {
            String title = data.getStringExtra("title");
            String content = data.getStringExtra("content");
            Post newPost = new Post(title, content);
            posts.add(newPost);
            postAdapter.notifyDataSetChanged();
        }
    }

    // Метод для завантаження постів з сервера
    private void loadPosts() {
        // Логіка для завантаження постів з сервера
    }

    // Button click listeners
    public void onRegisterClicked(View view) {
        startActivity(new Intent(this, RegisterActivity.class));
    }

    public void onLoginClicked(View view) {
        startActivity(new Intent(this, LoginActivity.class));
    }

    public void onProfileClicked(View view) {
        startActivity(new Intent(this, ProfileActivity.class));
    }

    public void onCreatePostClicked(View view) {
        startActivity(new Intent(this, CreatePostActivity.class));
    }
}
