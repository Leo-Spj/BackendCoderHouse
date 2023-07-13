

# Expresiones regulares en JavaScript

- Una expresión regular es un patrón que se utiliza para buscar o reemplazar una cadena.
- Una expresión regular consiste en un patrón encerrado entre barras y opcionalmente algunas banderas que modifican la búsqueda.
- Se pueden usar caracteres especiales para hacer coincidir diferentes tipos de caracteres o secuencias de caracteres, como dígitos, espacios en blanco, límites de palabras, etc.
- Se pueden usar paréntesis para recordar subcoincidencias dentro de un patrón y usarlas en la cadena de reemplazo.
- Algunas banderas comunes son g (global), i (sin distinción de mayúsculas y minúsculas), m (multilínea) y y (pegajoso).

## Ejemplos de expresiones regulares

| Expresión regular | Descripción |
| ----------------- | ----------- |
| /Ap*/ | Coincide con A seguido de cero o más p |
| /Ap+/ | Coincide con A seguido de uno o más p |
| /Ap{2}/ | Coincide con A seguido de dos p |
| /Ap{2,4}/ | Coincide con A seguido de dos a cuatro p |
| /\bapp\b/ | Coincide con app solo si no es parte de una palabra más larga |
| /^A/ | Coincide con A solo al principio de la cadena |
| /p$/ | Coincide con p solo al final de la cadena |
| /(\w+) (\w+)/g | Coincide con dos palabras separadas por un espacio y las recuerda como subcoincidencias |
| /Ap*/i | Coincide con A seguido de cero o más p sin distinción de mayúsculas y minúsculas |

