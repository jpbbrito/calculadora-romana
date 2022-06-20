
# 2. Usuarios

<div id='2.1'>

## 2.1 Criar Usuario
[Voltar para Pagina Principal](../../README.md)

**Endpoint:** `http://{{baseUrl}}/api/usuarios`

**Description:** Criação de novo usuario.

**Method:** POST

**Headers:** 
```
{ 
    Authorization: Bearer {{TOKEN}}
    Content-Type: application/json
 }
 ```

**Body Params Type:** raw


``` 
{   
    "userName": "novo_usuario",
    "fullName": "Novo Usuario",
    "email": "novo_usuario@email.com"
}
```
<details>
<summary>201 - Created</summary>

**Status:** Created - **Code:** 201

``` 
{
    "uuid": "5e3aa78a-9749-4252-ab14-16611c2fae23",
    "userName": "novo_usuario",
    "fullName": "Novo Usuario",
    "createdAt": "2022-03-29T10:02:44.072Z",
    "updatedAt": "2022-03-29T10:02:44.072Z"
}
```
</details>

<details>
<summary>403 - Forbidden</summary>

**Status:** Forbidden - **Code:** 403

``` 
{
    "error": "Já existe um usuario com esse userName"
}
```
</details>

<details>
<summary>401 - Unathorized</summary>

**Status:** Forbidden - **Code:** 401

``` 
{
    "error": "Usuario não tem privilegio para tal tarefa"
}
```
</details>

</div>


<!-- **************************************************************************** -->

<br/>
<div id='2.2'>

## 2.2 Recuperar Usuario Logado

**Endpoint:** `http://{{baseUrl}}/api/usuarios`

**Description:** Recuperação de Informações de Usuario Logado.

**Method:** GET

**Headers:** 
```
{ 
    Authorization: Bearer {{TOKEN}}
    Content-Type: application/json
 }
 ```

**Body Params Type:** sem body.

<details>
<summary>200 - Success</summary>

**Status:** Success - **Code:** 200

``` 
{
    "uuid": "5e3aa78a-9749-4252-ab14-16611c2fae23",
    "userName": "novo_usuario",
    "fullName": "Novo Usuario",
    "createdAt": "2022-03-29T10:02:44.072Z",
    "updatedAt": "2022-03-29T10:02:44.072Z"
}
```
</details>

<details>
<summary>401 - Unathorized</summary>

**Status:** Forbidden - **Code:** 401

``` 
{
    "error": "token invalido!"
}
```
</details>

</div>

<br/>
<!---------------------------------------------------------------------------------------------------->