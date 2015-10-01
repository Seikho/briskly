export interface Config {
    port?: number,

    routes: {
        [index: string]: Route;
    }
}

export interface Route {
    method: string;
    handler: string;
    path?: string;
    aliases?: string[];
}

export const enum Handler {
    Function,
    Directory,
    File,
    NotFound,
    Unknown
}