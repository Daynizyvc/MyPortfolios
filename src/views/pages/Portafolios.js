let Portafolios = {
    render : async () => {
        let view = `
        <!-- Carousel -->
        <div class="carousel">
            <div class="slider-container">    
                <div id="slide-0" class="slide fade">
                   <div class="text">Triviando</div>
                   <img class="img-slides" src="././img/trivia.jpg">
                   <div class="description">
                       <a href="https://github.com/Daynizyvc?tab=repositories" class="enlace">Código</a>
                       <a href="https://github.com/Daynizyvc?tab=repositories" class="enlace" >Demo</a>
                   </div>
                </div>
    
                <div id="slide-1" class="slide fade">
                    <div class="text">Cipher</div>
                    <img class="img-slides" src="././img/cipher.jpg">
                    <div class="description">
                       <a href="https://github.com/Daynizyvc?tab=repositories" class="enlace">Código</a>
                       <a href="https://github.com/Daynizyvc?tab=repositories" class="enlace" >Demo</a>
                   </div>
                </div>
    
                <div id="slide-2" class="slide fade">
                    <div class="text">Data Lovers</div>
                    <img class="img-slides" src="././img/pokemon.png">
                    <div class="description">
                       <a href="https://github.com/Daynizyvc?tab=repositories" class="enlace">Código</a>
                       <a href="https://github.com/Daynizyvc?tab=repositories" class="enlace" >Demo</a>
                   </div>
                </div>
    
                <button class="prev" id="btnLeft"><img class="slider-arrow center_y" src="././img/left.png"></button>
                <button class="next" id="btnRight"><img class="slider-arrow center_y" src="././img/right.png"></button> 
            </div>

            <div id="dots-wrapper" class="center_x">
                <div class="dot-nav"></div>
                <div class="dot-nav"></div>
                <div class="dot-nav"></div>
            </div>
        </div>
        `
        return view;
    },
    after_render: async () => {
        // Código para el carousel
//botones

const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

let slider_index = 0;

let show_slide = (index) =>{
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot-nav');
    // console.log(slides);
    // console.log(dots);

    if(index >= slides.length){
        slider_index=0;
    }
    if(index < 0){
        slider_index=slides.length -1
    }

    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
        dots[i].classList.add('active-dot');
    }
    slides[slider_index].style.display = 'flex';
    dots[slider_index].classList.add('active-dot');

}
    show_slide(slider_index);

    btnLeft.addEventListener("click", ()=>{
        show_slide(--slider_index);
    }); 
    
    btnRight.addEventListener("click", () =>{
        show_slide(++slider_index);
    })

    document.querySelectorAll('.dot-nav').forEach((element) =>{
        element.addEventListener('click', function(){
            var dots = Array.prototype.slice.call(this.parentElement.children),
            dot_index = dots.indexOf(element);
            show_slide(slider_index = dot_index);
        });
    });
    }
}
export default Portafolios;