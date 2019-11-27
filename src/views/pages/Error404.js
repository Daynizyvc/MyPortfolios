let Error404 = {
    render : async () => {
        let view = `
            <div class="_page error404">
                <img id="img-error404" src="././img/error404.svg">
            </div>
        `
        return view;
    },
    after_render: async () => {

    }
}
export default Error404;