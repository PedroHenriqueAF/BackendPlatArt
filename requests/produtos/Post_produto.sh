#!/bin/bash

# Substitua abaixo pelo token real de um usuário do tipo "vendedor"
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDlmNzIyM2MwOWNjNzRjYjA4YzU0NyIsImlhdCI6MTc0OTY3NzkzNn0.5Vgd5IXs0QJuOHDGMZlP8aYHCfA2ZpbcyNNaDYUo8aw"

# Substitua abaixo pelo ID real da loja já cadastrada no banco
LOJA_ID="6849fd7fa50ade0c820ce4ed"

curl --request POST \
  --url http://localhost:3000/produtos \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $TOKEN" \
  --data "{
    \"nome\": \"Camiseta Preta\",
    \"preco\": 59.90,
    \"imagem\": \"https://exemplo.com/camiseta.jpg\",
    \"lojaId\": \"$LOJA_ID\"
  }"

// source ./requests/produtos/Post_produto.sh