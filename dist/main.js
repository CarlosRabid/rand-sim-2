const renderer = new Renderer()

LOGIN_TEMPLATE = "login-template"
LOGIN_AREA = "login-area"

MESSAGES_TEMPLATE = "messages-template"
MESSAGE_AREA = "messages-area"

const render = (templateID, data, destination) => renderer.render(templateID, data, destination)
let user

const logIn = function () {
    const username = $("#username").val()
    $.post('/login', { username }, function (u) {
        user = new User(username)
        render(LOGIN_TEMPLATE, { isLoggedIn: true, username }, LOGIN_AREA)
        render(MESSAGES_TEMPLATE, { messages: u.messages }, MESSAGE_AREA)
    })
}

const logOut = function () {
    user = undefined
    render(LOGIN_TEMPLATE, { isLoggedIn: false }, LOGIN_AREA)
    renderer.clear()
}

const sendMessage = function () {
    const completeRequest = user.sendMessage($("#new-message").val(), $("#to").val())
    completeRequest.then(function () {
        render(MESSAGES_TEMPLATE, { messages: user.messages }, MESSAGE_AREA)
    })
}

let addFriend = function () {
    debugger
    const friendName = $("#inputFriend").val()
    let username = (user.name)
    $.post('/login', { username }, function (u) {
        // User.findOne({ name: payload.to }, function (err, user) {
        //     user.messages.push(message)
        //     user.save()
        //     res.end()
        // })
        console.log(u)
        u.friends.push(friendName)
        
    })
}

render(LOGIN_TEMPLATE, { isLoggedIn: false }, LOGIN_AREA)