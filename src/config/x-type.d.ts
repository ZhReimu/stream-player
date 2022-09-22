interface IXSource {
    src: string
    type: string
}

interface IXUser {
    username: string
    password: string
    recaptcha: string?
}

export type {
    IXSource,
    IXUser
}
