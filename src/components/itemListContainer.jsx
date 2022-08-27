import React from 'react'

const ItemListContainer = () => {
  return (
    <div>
        <div id="recomendadosContainer">
            <hr/>
            <h2>Recomendados</h2>
            <div id="recomendados">
                    <div class="itemDiv itemRecomendado">
                            <img src="https://www.lg.com/us/images/tvs/50pk540/gallery/large01.jpg" alt=""/>
                            <hr/>
                            <span>$25000</span>
                    </div>
                    <div class="itemDiv itemRecomendado">
                            <img src="https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg" alt=""/>
                            <hr/>
                            <span>$45000</span>
                    </div>
                    <div class="itemDiv itemRecomendado">
                            <img src="https://jumboargentina.vtexassets.com/arquivos/ids/614663/Aceite-De-Girasol-Cocinero-900-Ml-1-32670.jpg?v=637409202878630000" alt=""/>
                            <hr/>
                            <span>$5000</span>
                    </div>
                    <div class="itemDiv itemRecomendado">
                            <img src="https://http2.mlstatic.com/D_NQ_NP_968821-MLA31587799913_072019-O.jpg" alt=""/>
                            <hr/>
                            <span>$2000</span>
                    </div>
            </div>
        </div>
        <br/>
        <hr/>
    </div>
  )
}

export default ItemListContainer