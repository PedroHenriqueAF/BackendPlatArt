#!/bin/bash
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDlmNzIyM2MwOWNjNzRjYjA4YzU0NyIsImlhdCI6MTc0OTY3NzkzNn0.5Vgd5IXs0QJuOHDGMZlP8aYHCfA2ZpbcyNNaDYUo8aw"
LOJA_ID="6849fd7fa50ade0c820ce4ed"  # Substitua pelo ID da loja correspondente

curl --request PUT \
  --url http://localhost:3000/lojas/$LOJA_ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $TOKEN" \
  --data '{
    "nome": "Loja Atualizada",
    "categoria": "Eletrônicos",
    "imagem": "https://exemplo.com/loja-nova.jpg"
  }'

// source ./requests/loja/Put.sh