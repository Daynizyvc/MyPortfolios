let AboutMe = {
    render : async () => {
        let view = `
        <div class="_page aboutMe">
            <div class="avatar-container">
                <img id="avatarYael" src="../../../img/myAvatarYael.png">
            </div >
            <div class="information-container">
                <p>
                    Soy una desarrolladora web, viviendo en la
                    ciudad de México. Me encanta programar, porque a través del codigo puedo usar mi creatividad 
                    e ingenio para dar soluciones digitales a los usuarios a través de 
                    aplicaciones Web.
                </p>
                <a id="next-page" href="#/servicios"><img class="_img -next" src="../../../img/next.png"></a>
            </div>
           

        </div>
        `
        return view;
    },
    after_render: async () => {

    }
}
export default AboutMe;