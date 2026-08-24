# connectadigitalsolutions.com

Sitio institucional de **CONNECTA DIGITAL SOLUTIONS S.A.C.**

Es un sitio estático —sin framework, sin compilación— servido por GitHub Pages en el dominio
`connectadigitalsolutions.com`.

```
index.html       portada
privacidad.html  política de privacidad
404.html         página de error
assets/          estilos, el selector de idioma y la marca
```

## Cómo se ve en local

Cualquier servidor estático vale. Abrir los ficheros con `file://` **no** funciona: el selector
de idioma carga por módulo y el navegador lo bloquea.

```bash
npx serve .
```

## Cómo se publica

`git push` a `main`. GitHub Pages lo recoge solo; el dominio va en `CNAME`.

## Dos cosas que rompen la página sin dar ningún error

1. **`404.html` usa rutas absolutas** (`/assets/...`) y no relativas. GitHub Pages sirve esa
   página desde cualquier profundidad de URL, así que una ruta relativa apunta a un sitio
   distinto según dónde se equivoque el visitante, y la página de error sale sin estilos.

2. **El texto bilingüe va en atributos `data-en` / `data-es`**, con el inglés también como
   contenido del elemento. Si se añade un texto y se olvida uno de los dos atributos, ese
   trozo se queda congelado en un idioma al cambiar de idioma — y no da ningún aviso.

---

Las notas internas del proyecto —constitución, trámites y decisiones de negocio— **no viven
aquí**: este repositorio es público. Están en el repositorio privado del producto.
