# connectadigitalsolutions.com

Sitio corporativo de **CONNECTA DIGITAL SOLUTIONS S.A.C.** Estático, sin dependencias y sin
proceso de compilación: se sirve tal cual desde GitHub Pages.

```
index.html        la página
privacidad.html   política de privacidad (la enlaza el pie)
404.html          error, con rutas ABSOLUTAS a propósito — ver abajo
assets/styles.css el sistema de diseño entero
assets/idioma.js  el conmutador ES / EN
assets/marca.svg  el monograma; hace de favicon
CNAME             connectadigitalsolutions.com
```

---

## ANTES DE PUBLICAR: lo que hay que decidir

Nada de la web está inventado salvo lo que aparece en esta lista. Los datos registrales
salen de la **ficha RUC de la SUNAT del 21/08/2026**, no de un texto de marketing.

### 1. El correo `contacto@connectadigitalsolutions.com` todavía no existe

Es el único dato **ficticio** de la página, y aparece en cinco sitios: la ficha de datos, el
pie, los datos estructurados de `<head>` y dos veces en `privacidad.html`.

La propuesta original decía `anahiytiti@connectadigitalsolutions.com`. Se cambió a un buzón
de función por dos razones: el nombre personal no tiene por qué estar a la vista en una web
pública, y un correo de rol sobrevive a que la persona cambie de puesto. Si se prefiere el
otro, es buscar y reemplazar.

Hace falta crear el buzón en el dominio antes de publicar. **Un correo del dominio propio no
es opcional para lo que viene después**: la verificación de cuenta Company de Microsoft y la
de Apple no aceptan Gmail.

### 2. Hay DOS teléfonos distintos y hay que elegir uno

| Fuente | Número |
|---|---|
| Ficha RUC de la SUNAT | **940 342 693** |
| La propuesta de diseño | 973 060 599 |

La web usa **el de la SUNAT**, porque quien verifica la empresa compara la web contra el
registro público y un número que no coincide es una discrepancia gratuita. Si el bueno es el
otro, lo correcto es **actualizarlo primero en la SUNAT** y luego aquí, no al revés.

### 3. La dirección de la propuesta tampoco coincide con el registro

La propuesta decía *«Jr. Marsella N 255, Piso 4, Asoc. Pro Viv. Buenos Aires, Lima 15423»*.
La SUNAT registra **CAL. MARSELLA Nro 255, Dpto 4, URB. BUENOS AIRES, SAN JUAN DE
LURIGANCHO, LIMA**. La web usa la del registro. Diferencias: `Jr.` contra `Calle`, `Asoc.
Pro Viv.` contra `Urb.`, y sobre todo que **faltaba el distrito**, que es lo que un
verificador busca primero.

### 4. La actividad económica principal registrada es la 6499, no una de informática

Esto no es un detalle de la web: **conviene mirarlo antes de la verificación de Microsoft.**

En la ficha RUC, la actividad **principal** es `6499 — Otras actividades de servicios
financieros, excepto seguros y fondos de pensiones`, y las de informática (`6202` consultoría
y `6201` programación) están como **secundarias**.

El rechazo de Microsoft Store se apoya en la política 10.2.6, que trata a los productos de
criptomoneda como asunto financiero. Que el registro público de la empresa la describa
**principalmente como servicios financieros** empuja en esa misma dirección, justo cuando el
argumento que se quiere sostener es «somos una empresa de software».

La web no lo maquilla: lista las tres actividades sin decir cuál es la principal, que es
exactamente lo que dice el registro. Pero **cambiar la principal a 6201 en la SUNAT** —un
trámite de actualización de datos del RUC— alinearía el registro con lo que la empresa hace
de verdad. Decisión del dueño y de su contador, no mía.

### 5. El nombre de la gerente general NO está en la web, a propósito

La propuesta lo ponía en la sección «Sobre nosotros». Se dejó fuera por dos motivos:

- Ni Apple ni Microsoft piden el nombre del representante legal **en el sitio web**. Lo que
  comprueban es razón social, identificador fiscal, domicilio y contacto, y eso está todo.
- Es la misma preferencia que ya se aplicó en `autotradep2p.com`: nada público lleva un
  nombre personal.

Si se quiere añadir, es una frase en la sección «Nosotros». **Lo que no debe entrar nunca**
es lo demás que trae la ficha RUC: número de DNI, fecha de nacimiento y porcentaje de
participación de los socios. Eso es dato personal y no ayuda a ninguna verificación.

### 6. «Marca registrada» no se dice hasta que lo sea

El pie dice *«AutoTrade P2P es un producto de CONNECTA DIGITAL SOLUTIONS S.A.C.»*. La
propuesta decía *«es una marca registrada de»*. La diferencia no es de estilo: afirmar un
registro de marca que INDECOPI todavía no ha concedido es una declaración falsa sobre la
empresa, y es justo el tipo de frase que una tienda de aplicaciones marca como
representación inexacta —que es una de las dos cosas por las que ya rechazaron la app—.
Cuando el registro se conceda, se cambia la línea y se pone el número de certificado.

---

## Publicar en GitHub Pages

1. Crear el repositorio en GitHub y subir esta carpeta.
2. En `Settings → Pages`, origen: rama `main`, carpeta `/ (root)`.
3. En el dominio, apuntar `connectadigitalsolutions.com` a GitHub Pages: cuatro registros `A`
   a `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, y un `CNAME`
   de `www` a `<usuario>.github.io`.
4. En `Settings → Pages`, marcar **Enforce HTTPS** cuando el certificado esté emitido.

El fichero `CNAME` ya está en el repositorio: no hay que escribir el dominio a mano en la
interfaz de GitHub, y si se escribe, no se debe borrar el fichero.

---

## Decisiones de diseño que conviene no deshacer

**La página es CLARA y la del producto es oscura, a propósito.** `autotradep2p.com` vende una
herramienta que se usa mirando precios: fondo negro, acento amarillo, aire de instrumento.
Esto es la empresa, y aquí llega sobre todo quien viene a comprobar que existe. Lo que
convence en ese caso es que la página se lea como un documento bien compuesto.

**La franja de datos registrales va ANTES de cualquier discurso**, justo debajo del titular.
Quien viene a verificar encuentra el RUC y la partida sin bajar ni una pantalla.

**Ni un emoji.** Iconos SVG de trazo dibujados a mano, caja 24×24, trazo 1,5, `currentColor`,
en una hoja de `<symbol>` al principio del `<body>`.

**Todos los contrastes están medidos, no estimados**, y están escritos al lado de cada color
en `styles.css`. El cian de la propuesta (`#008DDA`) da 3,61:1 sobre blanco, así que hay
**tres** azules y no uno, y la diferencia entre ellos no es estética:

| Token | Valor | Para qué | Medido |
|---|---|---|---|
| `--acento` | `#008dda` | trazos y bordes (objetos gráficos, WCAG 1.4.11 pide 3:1) | 3,61:1 |
| `--acento-texto` | `#0a6ca6` | todo texto azul (1.4.3 pide 4,5:1) | 5,66:1 |
| `--acento-relleno` | `#0a6ca6` | fondo del botón primario, con texto blanco encima | 5,66:1 |

El botón primario nació con `--acento` de fondo y era un fallo: la razón de contraste es la
misma se use el color como tinta o como fondo, así que blanco sobre `#008dda` son los mismos
3,61:1. Lo peor era que su `:hover` (`#0079bd`, 4,70:1) **sí** cumplía — el botón solo era
accesible mientras el ratón estaba encima, y en un móvil no hay ratón nunca.

Lo mismo pasaba con los bordes: `--linea-fuerte` (1,52:1) vale para el contorno de un panel,
que no es un control, pero identificaba el **botón fantasma**, cuyo borde es lo único que lo
distingue del fondo —no tiene relleno y su texto es del mismo color que los titulares—. Por
eso existe `--linea-control` (`#7d8b9c`, 3,47:1), solo para controles.

### La regla que rompe la página sin dar ningún error

`idioma.js` hace `n.innerHTML = n.getAttribute('data-' + idioma)` sobre **cada** elemento con
`[data-es]`. Cualquier `<svg>` que quede DENTRO de un elemento traducido desaparece la
primera vez que alguien pulsa EN, y no vuelve hasta recargar. **El SVG va siempre como
hermano del `<span>` traducido, jamás dentro.**

```html
<!-- BIEN --> <li><svg class="i">…</svg><span data-es="…" data-en="…">…</span></li>
<!-- MAL  --> <li data-es="…" data-en="…"><svg>…</svg>texto</li>
```

Comprobado en el navegador: 21 `<svg>` antes de cambiar de idioma, 21 después y 21 al volver,
y 0 `<svg>` dentro de un `[data-es]` en las tres páginas.

### Lo demás que se comprobó midiendo

| Comprobación | Resultado |
|---|---|
| Traducción completa (104 elementos en tres páginas) | 0 con `data-es` y sin `data-en` |
| Desbordamiento horizontal, 2 páginas × 11 anchos de 320 a 2560 px | 0 problemas |
| Contraste del botón primario | 5,66:1 |
| Contraste del borde de los controles | 3,47:1 |
| Al imprimir: 10 piezas de las bandas oscuras | las 10 en negro sobre blanco, 21:1 |
| Alineación de `privacidad.html` con cabecera y pie | desfase 0 px (eran 215) |
| Anclas rotas y `<use>` sin `<symbol>` | ninguno |

### Por qué `404.html` usa rutas absolutas

GitHub Pages sirve el mismo `404.html` para cualquier ruta que no exista, incluida
`/lo/que/sea/aqui`. Con `assets/styles.css` el navegador buscaría
`/lo/que/sea/assets/styles.css` y la página de error saldría sin estilos.

---

## Ver el sitio en local

```bash
python -m http.server 4189 --directory C:/Users/ADMIN/web-connecta
```

Y en `http://localhost:4189`. No hace falta compilar nada.
