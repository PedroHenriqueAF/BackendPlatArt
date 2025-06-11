#!/bin/bash
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDlkNmQ5OTE3ZjZiNTA2OGIzMjc1MiIsImlhdCI6MTc0OTY2OTYwMH0.Q-sKgzzXWMMmaUt66ZIrSOznkvYCaPg8dEFZoQrxRcw"
PRODUTO_ID="6849d709917f6b5068b32755"

curl --request PATCH \
  --url http://localhost:3000/produtos/$PRODUTO_ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer $TOKEN" \
  --data '{
    "preco": 160
  }'

// source ./requests/produtos/Patch_produto.sh