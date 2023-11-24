export function displayToChat(message: string) {//export a function that can have a value
    // @ts-ignore
    PluginAPI.displayToChat({msg: message})//display that value to chat
}