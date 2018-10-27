

export function nameHelper(str) {
    if(typeof str != 'string') return
    return str.substring(
        str.lastIndexOf('[') + 1,
        str.lastIndexOf(']')
    );
}

export function urlHelper(text) {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    const c = text.match(urlRegex, (url) => url);
    if(Array.isArray(c)) {
        return c[0]
    }
    return c;
}

export const flatList = (books) => {
    let keys = Object.keys(books)

    // use reduce to go through all categorys and use map to create one array with objects with category, title, and url
    let list = keys.reduce((rtn, item) => {
        let node = books[item]
        if(!node) return rtn

        return rtn.concat(node.filter(item => typeof item === "string").map(book => ({
            subject: item,
            title: nameHelper(book),
            url: urlHelper(book)
        })))
    }, [])
    return list
}