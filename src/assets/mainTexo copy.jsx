function Contenido() {
    return (

        <div className='contenidoPag'>



            <div className="ContendorResumen">

                <div className="contenedorIn">
                    <div className="CabezeraContenedor">
                        <span>Corto</span>
                        <input type="range"></input>
                        <span>Largo</span>

                    </div>

                    <textarea type="text" className="introducion" placeholder="Empiece a escribir pegue su contenido aqui .."></textarea>
                    <div className="CabezeraContenedor">
                        <label className="contenedorArchivo">
                            <img src="/public/carga.svg"></img>
                            <span className="textoSuba">                            Subir Archivo
                            </span>
                            <input type="file" className="archivo"></input>

                        </label>
                        <button>Resumir</button>

                    </div>
                </div>



            </div>
        </div>

    )

}

export default Contenido