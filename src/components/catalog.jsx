import React from 'react'

const Catalog = () => {
  return (
    <main>
      <div id="catalogo">
          <div id="barraLateral">
              <div class="categoria">
                  <span>Descuentos</span>
                  <div class="subCategoria"><span>5% OFF</span></div>
                  <div class="subCategoria"><span>10% OFF</span></div>
                  <div class="subCategoria"><span>15% OFF</span></div>
              </div>
              <br/>
              <div class="categoria">
                  <span>Ubicacion</span>
                  <div class="subCategoria"><span>Argentina</span></div>
                  <div class="subCategoria"><span>Brasil</span></div>
                  <div class="subCategoria"><span>Chile</span></div>
                  <div class="subCategoria"><span>Colombia</span></div>
              </div>
              <br/>
              <div class="categoria">
                  <span>Condicion</span>
                  <div class="subCategoria"><span>Nuevo</span></div>
                  <div class="subCategoria"><span>Usado</span></div>
              </div>
          </div>
          <div id="listaDeObjetos">
          </div>
      </div>
    </main>
  )
}

export default Catalog