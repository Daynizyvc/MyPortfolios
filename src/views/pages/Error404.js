let Error404 = {
    render : async () => {
        let view = `
            <h1>This is my Error</h1>
        `
        return view;
    },
    after_render: async () => {

    }
}
export default Error404;