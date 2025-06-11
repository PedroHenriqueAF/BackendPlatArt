#!/bin/bash

#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDlmNzIyM2MwOWNjNzRjYjA4YzU0NyIsImlhdCI6MTc0OTY3NzkzNn0.5Vgd5IXs0QJuOHDGMZlP8aYHCfA2ZpbcyNNaDYUo8aw"
PRODUTO_ID="6849fefa4168ad9150bccd9a"
LOJA_ID="6849f87fa92c73c9c4bce791"  # Substitua pelo ID da loja correspondente

curl --request PUT \
  --url http://localhost:3000/produtos/$PRODUTO_ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $TOKEN" \
  --data "{
    \"nome\": \"Produto Atualizado\",
    \"preco\": 220,
    \"imagem\": \"nova-imagem.jpg\",
    \"lojaId\": \"$LOJA_ID\"
  }"


// source ./requests/produtos/Put_produto.sh