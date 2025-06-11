#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDlmNzIyM2MwOWNjNzRjYjA4YzU0NyIsImlhdCI6MTc0OTY4MjM5OX0.QEA0gIzcbWuva28wOixHPMAuZLwW9Y-8bYfmx5J5Ht4"

curl --request POST \
  --url http://localhost:3000/lojas \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $TOKEN" \
  --data '{
    "nome": "Loja Pooo",
    "categoria": "Eletrônicos",
    "imagem": "https://exemplo.com/imagem.jpg",
    "avaliacao": 4.5
  }'

// source ./requests/loja/Post.sh