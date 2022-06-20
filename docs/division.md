# 5. Divisão

<div id='5'>

## Recurso para divisão de numeros romanos
[Voltar para Pagina Principal](../../README.md)

**Endpoint:** `http://{{baseUrl}}/api/divisao`

**Description:** Calcular divisão de dois numeros romanos.

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
    "dividendo": "X",
    "divisor": "II"
}
```
<details>
<summary>202 - OK</summary>

**Status:** OK - **Code:** 200

``` 
{
    "resultado": "V"
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
            "dividendo": "Esse campo deve ter preenchido corretamene"
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
