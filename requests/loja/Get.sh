#!/bin/bash

curl --request GET \
  --url http://localhost:3000/lojas \
  --header "Content-Type: application/json"

// source ./requests/loja/Get.sh