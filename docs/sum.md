# 3. Divisão

<div id='3'>

## Recurso para soma de números romanos
[Voltar para Pagina Principal](../../README.md)

**Endpoint:** `http://{{baseUrl}}/api/soma`

**Description:** Calcular soma de dois numeros romanos.

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
    "valor1": "X",
    "valor2": "X"
}
```
<details>
<summary>202 - OK</summary>

**Status:** OK - **Code:** 200

``` 
{
    "resultado": "XX"
}
```
</details>

<details>
<summary>400 - Bad Request</summary>

**Status:** Bad Request - **Code:** 400

``` 
{
    "errors": [
        {
            "subtraendo": "Esse campo deve ter preenchido corretamene"
        }
    ]
}

```
</details>

</div>

<!-- ********************************************************** -->


<details>
<summary>401 - Unauthorized</summary>

**Status:** Unauthorized - **Code:** 401

``` 
{
    "error": "token invalido!"
}

```
</details>

</div>
