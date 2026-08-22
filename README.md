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

## De dónde sale cada dato

Ninguna cifra de esta web está inventada. Cada una tiene una fuente, y las fuentes **no
siempre coinciden entre sí**, así que aquí queda escrito cuál gana y por qué.

| Fuente | Fecha | Qué aporta |
|---|---|---|
| Ficha RUC de la SUNAT | 21/08/2026 | RUC, partida, actividades CIIU, domicilio normalizado |
| Escritura pública de constitución | 11/02/2026 | razón social, objeto social, capital, socios, gerente, domicilio literal |
| El dueño, por escrito | 21/08/2026 | teléfono comercial y correo de contacto |

### La dirección: manda la escritura, no la SUNAT

La escritura dice **«JR. MARSELLA 255 INT. PISO 4»** y **«ASOC. PRO VIVIENDA BUENOS AIRES»**.
La ficha RUC lo traduce a su propia taxonomía —«CAL. MARSELLA», «URB. BUENOS AIRES»,
«Dpto 4»— porque sus formularios solo admiten esas abreviaturas. No son dos direcciones
distintas: es la misma escrita en dos sistemas. La web usa la de la escritura, que es el
documento constitutivo, **y añade el distrito** (San Juan de Lurigancho), que dicen los dos y
que es lo primero que busca quien verifica.

### La fecha de constitución NO se publica, y es a propósito

Hay una contradicción real entre dos documentos oficiales:

- La ficha RUC da como **«Fecha Inscripción RR.PP.» el 30/01/2026**.
- La **escritura pública lleva fecha del 11/02/2026**, sus firmas son del 11/02/2026 y el
  testimonio se expidió el 19/02/2026.

No se puede inscribir en enero una escritura firmada en febrero. Una de las dos fechas está
mal y desde aquí no se puede saber cuál, así que la web **no elige**: publica el número de
partida y el registro, que son firmes, y la escritura con la fecha que lleva el propio
documento. Publicar una fecha que otro papel desmiente es exactamente lo que una tienda de
aplicaciones llama representación inexacta — y es una de las dos cosas por las que ya
rechazaron la app.

Conviene aclararlo con el notario o en SUNARP y, cuando se sepa, ponerla.

---

## LO QUE HAY QUE ARREGLAR FUERA DE ESTE REPOSITORIO

### 1. El correo `anahiytiti@connectadigital.org` no recibe correo ahora mismo

Comprobado el 21/08/2026 por DNS:

```
connectadigital.org   MX  ->  errdomain   (no resuelve)
connectadigital.org   TXT ->  v=spf1 include:_spf.mail.hostinger.com ~all
```

`errdomain` es el marcador que deja Hostinger cuando el correo del dominio **no está
configurado**: no es un servidor, no resuelve, y no hay ningún otro registro MX. Cualquier
mensaje enviado a esa dirección rebota. El SPF sí está puesto, o sea que el dominio está
preparado para **enviar** pero no para **recibir**.

Se arregla en el panel de Hostinger activando el correo del dominio, que sustituye ese MX por
los servidores reales. **Hay que hacerlo antes de que nadie use esa dirección**, porque el
primero que la va a usar es un revisor de tienda.

> Aviso al medir: el DNS de este equipo devuelve una IP inventada para cualquier nombre que no
> existe. La comprobación de arriba se repitió con un nombre de control para descartarlo.

### 2. El correo está en un dominio y la web en otro

La web va a `connectadigitalsolutions.com` (GoDaddy) y el correo es `@connectadigital.org`
(Hostinger). Son **dos dominios distintos**, y eso debilita justo la comprobación que viene:
la verificación de cuenta Company de Microsoft, y la de Apple, piden un correo **del dominio
de la empresa**, y con dos dominios no está claro cuál lo es.

Lo limpio es crear `contacto@connectadigitalsolutions.com` —el dominio que va a aparecer en
la web y en la ficha de la tienda— y usar ese. `connectadigitalsolutions.com` **no tiene
ningún registro MX** hoy, así que hay que contratar el correo en GoDaddy o apuntar el MX a
otro proveedor.

### 3. El DNS de GoDaddy: HECHO el 21/08/2026

Estaba pendiente y ya está aplicado. Antes había **un solo** registro `A` de `@` cuyo valor
era literalmente `Parked`. Ahora:

| Tipo | Nombre | Valor | TTL |
|---|---|---|---|
| A | @ | `185.199.108.153` | 600 s |
| A | @ | `185.199.109.153` | 600 s |
| A | @ | `185.199.110.153` | 600 s |
| A | @ | `185.199.111.153` | 600 s |
| CNAME | www | `blasmani.github.io` | 1 h |

No se tocó nada más: los dos `NS`, el `SOA`, el `CNAME _domainconnect` y el `TXT _dmarc`
siguen como estaban. Y se comprobó la pestaña **Reenvío**: «Dominio: no configurado» y
«Subdominios: no configurado». Eso importa porque un reenvío activo manda **por encima** de
la zona DNS y habría dejado los cuatro registros nuevos sin efecto.

Verificado contra dos resolutores públicos —`1.1.1.1` y `8.8.8.8`, no el del equipo, que
inventa respuestas— y de punta a punta sobre HTTPS: portada, `privacidad.html`, la hoja de
estilos y la captura, las cinco con `200`. El certificado lo emitió GitHub y el **HTTPS
obligatorio está activado**.

### 4. El objeto social de la escritura no menciona el software

Esto es lo más importante del documento, y conviene leerlo entero.

El **artículo primero** de la escritura dice que la sociedad

> «tendrá como objeto principal dedicarse a realizar actividades de: **otros tipos de
> intermediación monetaria, PSAV**»

**PSAV es Proveedor de Servicios de Activos Virtuales.** Para el registro público, CONNECTA
DIGITAL SOLUTIONS S.A.C. es una empresa de intermediación monetaria y de servicios sobre
criptoactivos. El desarrollo de software no aparece.

Tres consecuencias, y ninguna es teórica:

1. **La web sí puede decir que desarrolla software**, y no es un truco: la escritura añade
   que «podrá desarrollar todas las actividades anexas y conexas al objeto social», y sobre
   todo la empresa **registró en la SUNAT las actividades 6201 (programación informática) y
   6202 (consultoría de informática)**. Eso es un acto propio ante la administración, no una
   interpretación. Por eso la ficha de la web lista las tres actividades CIIU tal cual.
2. **Pero si alguien pide la escritura, lee «PSAV».** Las «Notes for Certification» enviadas a
   Microsoft argumentan que la app no es una plataforma de trading, ni un monedero, ni
   minería. Eso sigue siendo cierto de la APP. De la EMPRESA, el papel dice otra cosa. Si la
   publicación se va a apoyar en «somos una empresa de software», lo limpio es **modificar el
   objeto social** para incluir el desarrollo de software: junta de accionistas, escritura e
   inscripción en SUNARP.
3. **Ser PSAV en Perú: no hace falta autorización, pero sí hay obligaciones.** Aquí ponía
   «hay que preguntarle al contador o al abogado qué implica». Ya está preguntado y
   respondido por la propia SBS, así que se sustituye por el dato: **Oficio N.º
   22712-2026-SBS, del 15 de abril de 2026** (expediente 2026-00024661), en respuesta a la
   consulta que presentó la empresa el 13/02/2026. Dice dos cosas, y las dos importan.

   **La buena:** *«la constitución y funcionamiento de las PSAV no se rige por las
   disposiciones emitidas por esta Superintendencia […] ni requieren autorización o registro
   previo ante la misma»*. No hace falta permiso de la SBS para operar.

   **La otra:** *«Sin perjuicio de ello, en su calidad de sujetos obligados a reportar a la
   UIF, conforme a lo dispuesto en el Decreto Supremo N.º 006-2023-JUS, los PSAV deben
   cumplir con la normativa sectorial específica en materia de prevención del lavado de
   activos y del financiamiento del terrorismo»*. Esa normativa es la aprobada por
   **Resolución SBS N.º 2648-2024**, y el propio oficio señala que sus **artículos 5 al 13**
   regulan la designación, los requisitos y las funciones del **Oficial de Cumplimiento**,
   cuya designación **debe comunicarse a la UIF-Perú por la plataforma SISDEL**
   (`plaft.sbs.gob.pe/sisdel`).

   O sea: *no necesita autorización previa* y *sí es sujeto obligado* son las dos frases del
   mismo papel, y la segunda no desaparece porque la primera sea cierta. El oficio añade
   además que sus opiniones **no son vinculantes** y no sustituyen a la norma.

   Nada de esto afecta a lo que dice la web. Se anota aquí porque es el contexto de la
   empresa que la web representa, y porque el papel está guardado con su código de
   verificación (`XKLAGS-001`) por si hay que acreditarlo ante Microsoft o ante un banco.

### 5. El nombre de la gerente general sí está en la web

Se añadió porque vino en el bloque de datos que mandó el dueño: aparece como «Representante
legal — Anahiy Marilyn Titi Quispe, Gerente General» en la ficha y en los datos estructurados.
Ayuda a la verificación y es información pública en SUNARP.

**Lo que NO está y no debe estar nunca**: los números de DNI de los socios, sus fechas de
nacimiento y sus porcentajes de participación. Todo eso viene en la ficha RUC y en la
escritura, no ayuda a ninguna verificación y expone a personas reales.

### 6. «Marca registrada» no se dice hasta que lo sea

El pie dice *«AutoTrade P2P es un producto de CONNECTA DIGITAL SOLUTIONS S.A.C.»*. La
propuesta original decía *«es una marca registrada de»*. Afirmar un registro que INDECOPI
todavía no ha concedido es una declaración falsa sobre la empresa, y es justo el tipo de frase
que una tienda marca como representación inexacta. Cuando se conceda, se cambia la línea y se
pone el número de certificado.

### 7. El teléfono de la web no es el de la SUNAT

La web usa **+51 973 060 599**, el que indicó el dueño como teléfono comercial. La ficha RUC
registra **940 342 693**. Los dos son suyos, pero quien verifica compara la web con el
registro. Lo ordenado es **actualizar el teléfono en la SUNAT** para que digan lo mismo.

---

## Publicar en GitHub Pages

1. Crear el repositorio en GitHub y subir esta carpeta.
2. En `Settings → Pages`, origen: rama `main`, carpeta `/ (root)`.
3. En el dominio, apuntar `connectadigitalsolutions.com` a GitHub Pages: cuatro registros `A`
   a `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, y un `CNAME`
   de `www` a `blasmani.github.io`.
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
