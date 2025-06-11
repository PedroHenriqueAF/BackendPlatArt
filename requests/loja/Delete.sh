#!/bin/bash
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDlmNzIyM2MwOWNjNzRjYjA4YzU0NyIsImlhdCI6MTc0OTY4MjM5OX0.QEA0gIzcbWuva28wOixHPMAuZLwW9Y-8bYfmx5J5Ht4"
LOJA_ID="684a0ab3aeb05da29533b0b7"  # Substitua pelo ID da loja correspondente


curl --request DELETE \
  --url http://localhost:3000/lojas/$LOJA_ID \
  --header "Authorization: Bearer $TOKEN"

// source ./requests/loja/Delete.sh