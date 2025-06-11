#!/bin/bash

# Substitua abaixo por seu token real
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDlmNzIyM2MwOWNjNzRjYjA4YzU0NyIsImlhdCI6MTc0OTY3NzkzNn0.5Vgd5IXs0QJuOHDGMZlP8aYHCfA2ZpbcyNNaDYUo8aw"

curl --request POST \
  --url http://localhost:3000/produtos \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $TOKEN" \
  --data '{
    "nome": "Camiseta Preta",
    "preco": 59.90,
    "imagem": "https://exemplo.com/camiseta.jpg"
  }'


// source ./requests/produtos/Post_produto.sh