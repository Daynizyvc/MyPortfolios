let Servicios = {
    render : async () => {
        let view = `
        <div class="_page services">
            <img class="_img -services" src="././img/desarrollo.png">
            <h2>Desarrollo Frontend</h2>
            <p>
                He maquetado en HTML5, Javascript y CSS basado en los estándares W3C,
                he trabajado también con el framework de Angular y con la plataforma de 
                FireBase.
            </p>
            <p>
                He realizado Desarrollo web responsive, accesibles y funcionales.
            </p>
            
            <a id="next-page" href="#/portafolios"><img class="_img -next" src="././img/next.png"></a>
        </div>
        `
        return view;
    },
    after_render: async () => {

    }
}
export default Servicios;