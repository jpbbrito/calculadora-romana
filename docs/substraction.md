# 4. Divisão

<div id='4'>

## Recurso para subtração de números romanos
[Voltar para Pagina Principal](../../README.md)

**Endpoint:** `http://{{baseUrl}}/api/subtracao`

**Description:** Calcular substração de números romanos.

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
    "minuendo": "X",
    "subtraendo": "II"
}
```
<details>
<summary>200 - OK</summary>

**Status:** OK - **Code:** 200

``` 
{
    "resultado": "VIII"
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
