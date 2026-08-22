/*
 * El conmutador ES / EN de connectadigitalsolutions.com.
 *
 * ## Por qué así y no con dos webs
 *
 * Dos ficheros por página —`index.html` e `index-en.html`— se desincronizan al segundo
 * cambio: alguien corrige el domicilio en español, se olvida del inglés, y la página acaba
 * declarando dos direcciones distintas según el idioma. En una web corporativa que existe
 * para que alguien VERIFIQUE unos datos, eso no es un detalle: es el fallo entero. Aquí
 * cada texto lleva sus dos versiones en el mismo sitio (`data-es` y `data-en`), así que
 * editar uno tiene el otro delante.
 *
 * ## Español por defecto, y por qué
 *
 * Al revés que en `autotradep2p.com`, donde el visitante medio no es peruano y arranca en
 * inglés. Aquí es una S.A.C. peruana y su identidad legal es en español: la razón social,
 * la partida registral, el domicilio fiscal y las actividades CIIU son cadenas en español
 * que no se traducen aunque se pulse EN. El inglés está a un clic y se recuerda, para el
 * revisor de una tienda de aplicaciones que no lee español.
 *
 * ## Lo que NO hace
 *
 * No adivina el idioma del navegador. Un sitio que se pinta distinto según desde dónde se
 * abra es imposible de compartir: mandas un enlace, lo abren y ven otra cosa. Manda lo que
 * el visitante eligió y, si no eligió, español.
 */
;(function () {
  var CLAVE = 'connecta-idioma'
  var POR_DEFECTO = 'es'
  var idiomas = ['es', 'en']

  function guardado() {
    try {
      var v = localStorage.getItem(CLAVE)
      return idiomas.indexOf(v) >= 0 ? v : POR_DEFECTO
    } catch (e) {
      // Modo privado o almacenamiento bloqueado: no es motivo para dejar la página sin idioma.
      return POR_DEFECTO
    }
  }

  function aplicar(idioma) {
    document.documentElement.lang = idioma

    // Textos. `innerHTML` y no `textContent` porque varias frases llevan <b> o <br> dentro.
    // El contenido sale de este mismo repositorio, nunca de nadie de fuera.
    var nodos = document.querySelectorAll('[data-es]')
    for (var i = 0; i < nodos.length; i++) {
      var texto = nodos[i].getAttribute('data-' + idioma)
      if (texto !== null) nodos[i].innerHTML = texto
    }

    // Atributos que también cambian: el `alt` de las imágenes y el `aria-label`.
    var conAlt = document.querySelectorAll('[data-alt-es]')
    for (var j = 0; j < conAlt.length; j++) {
      conAlt[j].alt = conAlt[j].getAttribute('data-alt-' + idioma) || ''
    }
    var conEtiqueta = document.querySelectorAll('[data-aria-es]')
    for (var m = 0; m < conEtiqueta.length; m++) {
      var e = conEtiqueta[m].getAttribute('data-aria-' + idioma)
      if (e) conEtiqueta[m].setAttribute('aria-label', e)
    }

    // La captura de AutoTrade P2P tiene una versión por idioma: la app sale rotulada dentro.
    var capturas = document.querySelectorAll('[data-img-es]')
    for (var n = 0; n < capturas.length; n++) {
      capturas[n].src = capturas[n].getAttribute('data-img-' + idioma)
    }

    var botones = document.querySelectorAll('.idioma button')
    for (var k = 0; k < botones.length; k++) {
      botones[k].setAttribute('aria-pressed', String(botones[k].dataset.idioma === idioma))
    }

    try {
      localStorage.setItem(CLAVE, idioma)
    } catch (e) {
      /* nada que hacer */
    }
  }

  function arrancar() {
    aplicar(guardado())
    var botones = document.querySelectorAll('.idioma button')
    for (var i = 0; i < botones.length; i++) {
      botones[i].addEventListener('click', function () {
        aplicar(this.dataset.idioma)
      })
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancar)
  } else {
    arrancar()
  }
})()
