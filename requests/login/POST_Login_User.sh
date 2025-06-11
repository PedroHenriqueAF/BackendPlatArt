
curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "nome": "novo_usuario",
    "password": "senha123"
  }'

// source ./requests/login/POST_Login_User.sh