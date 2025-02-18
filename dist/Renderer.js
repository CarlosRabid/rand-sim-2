class Renderer {
    render(templateID, data, destination) {
        debugger
        $(`.${destination}`).empty()
        const source = $(`#${templateID}`).html()
        const template = Handlebars.compile(source)
        
        const html = template(data)
        $(`.${destination}`).append(html)
    }

    clear(){
        $(".messages-area").empty()
    }
}