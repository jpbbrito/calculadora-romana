<div id='1.1'> 

# 1 Autenticação e Recuperação de Senha
[Voltar para Pagina Principal](../../README.md)
## 1.1 Autenticação


**Endpoint:** `http://{{baseUrl}}/api/v1/authenticate`

**Description:** Autenticação para acesso aos recursos da API

**Method:** POST

**Headers:** 
```
{ 
    api_key: d01890f2-8ebf-4771-9331-e366a949638e,
    Content-Type: application/json
 }
 ```

**Body Params Type:** raw

``` 
{
    "userName": "usuario",
    "password": "senha"
}
```
<details>
<summary>200 - Success</summary>

**Status:** OK - **Code:** 200

``` 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJOYW1lIjoiYWRtaW4iLCJsZXZlbCI6ImFkbWluaXN0cmF0b3IifSwiaWF0IjoxNjQ4MTk5MTI1LCJleHAiOjE2NDgyMDA5MjV9.qo-t28pvU4QTYiVRlJPrkMkFMq-U4SLvRu3uogKplTY"
}
```
</details>

<details>
<summary>400 - Bad Request</summary>

**Status:** Bad Request - **Code:** 400

``` 
{
    "error": "userName e/ou password não foram enviados!"
}
```
</details>

<details>
<summary>403 - Forbidden</summary>

**Status:** Forbidden - **Code:** 403

``` 
{
    "error": "userName or password is wrong"
}
```
</details>

<details>
<summary>401 - Unathorized</summary>

**Status:** Forbidden - **Code:** 401

``` 
{
    "error": "API_KEY invalid."
}
```
</details>

</div>

<!------------------------------------------------------------------------------------------------------>