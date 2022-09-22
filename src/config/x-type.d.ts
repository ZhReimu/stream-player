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

interface IItem {
    path: string
    name: string
    size: number
    extension: string
    modified: string
    mode: number
    isDir: boolean
    isSymlink: boolean
    type: string
}

interface IResource {
    items: IItem[]
    numDirs: number
    numFiles: number
    sorting: {
        by: string,
        asc: boolean
    }
    path: string
    name: string
    size: number
    extension: string
    modified: string
    mode: number
    isDir: boolean
    isSymlink: boolean
    type: string
}

export type {
    IXSource,
    IXUser,
    IUsage,
    IResource
}
