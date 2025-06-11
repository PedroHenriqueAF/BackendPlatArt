#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDlkNmQ5OTE3ZjZiNTA2OGIzMjc1MiIsImlhdCI6MTc0OTY2OTYwMH0.Q-sKgzzXWMMmaUt66ZIrSOznkvYCaPg8dEFZoQrxRcw"
PRODUTO_ID="6849d709917f6b5068b32755"

curl --request DELETE \
  --url http://localhost:3000/produtos/$PRODUTO_ID \
  --header "Authorization: Bearer $TOKEN"

// source ./requests/produtos/Delete_produto.sh