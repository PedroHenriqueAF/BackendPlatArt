#!/bin/bash

# Substitua abaixo por seu token real
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDlkNmQ5OTE3ZjZiNTA2OGIzMjc1MiIsImlhdCI6MTc0OTY2OTYwMH0.Q-sKgzzXWMMmaUt66ZIrSOznkvYCaPg8dEFZoQrxRcw"

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