#!/bin/bash

TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDlkNmQ5OTE3ZjZiNTA2OGIzMjc1MiIsImlhdCI6MTc0OTY2OTYwMH0.Q-sKgzzXWMMmaUt66ZIrSOznkvYCaPg8dEFZoQrxRcw"

curl --request GET \
  --url http://localhost:3000/produtos \
  --header "Authorization: Bearer $TOKEN"

// source ./requests/produtos/Get_produto.sh