package com.example.blog;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class CreatePostActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_post);

        EditText titleEditText = findViewById(R.id.editTextTitle);
        EditText contentEditText = findViewById(R.id.editTextContent);
        Button submitButton = findViewById(R.id.submit_button);

        submitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String title = titleEditText.getText().toString();
                String content = contentEditText.getText().toString();

                if (title.isEmpty() || content.isEmpty()) {
                    Toast.makeText(CreatePostActivity.this, "Please fill in both fields", Toast.LENGTH_SHORT).show();
                    return;
                }

                Intent resultIntent = new Intent();
                resultIntent.putExtra("title", title);
                resultIntent.putExtra("content", content);
                setResult(RESULT_OK, resultIntent);
                finish();
            }
        });
    }
}
