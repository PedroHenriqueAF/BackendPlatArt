curl --request POST \
  --url 'http://localhost:3000/users/login' \
  --header 'Content-Type: application/json' \
  --data '{
    "id": 1,
    "nome": "novo_usuario"
  }'

// source ./requests/login/POST_Login_User.sh