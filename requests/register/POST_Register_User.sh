
curl --request POST \
  --url 'http://localhost:3000/users/register' \
  --header 'Content-Type: application/json' \
  --data '{
    "id": 1,
    "nome": "joao",
    "tipo": "vendedor",
    "password": "senha123"
  }'

  
// source ./requests/register/POST_Register_User.sh