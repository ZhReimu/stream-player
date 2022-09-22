interface IXSource {
    src: string
    type: string
}

interface IXUser {
    username: string
    password: string
    recaptcha: string?
}

interface IUsage {
    total: number
    used: number
}

export type {
    IXSource,
    IXUser,
    IUsage
}
