let Navbar = {
    render : async () => {
        let view = `
        <div class="hamburger">
            <div class="_layer -top"></div>
            <div class="_layer -mid"></div>
            <div class="_layer -bottom"></div>
        </div>
        <nav class="menuppal">
            <ul>
                <li><a href="#/"><img class="_img -home" src="././img/home.png" title="Home"></a></li>
                <li><a href="#/aboutme"><img class="_img -about" src="././img/about.png"></a></li>
                <li><a href="#/servicios"><img class="_img -servicios" src="././img/dato.png"></a></li>  
                <li><a href="#/portafolios"><img class="_img -portfolios" src="././img/portafolio.png"></a></li>   
                <li><a href="#/contacto"><img class="_img -portfolios" src="././img/amigos.png"></a></li>   
            </ul>
        </nav>
        
        `
        return view;
    },
    after_render: async () => {
        let main = document.querySelector('.hamburger');
        const toggleMenu = (event) =>{
            main.classList.toggle('is-active');
            document.querySelector(".menuppal").classList.toggle("is_active");
            event.preventDefault();
        }
        main.addEventListener("click", toggleMenu)

    
        
    }
}
export default Navbar;