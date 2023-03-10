import type { Config, Encryption as En, MongoDB, Redis, Regexes as Rg, WebsocketConfig } from "./Types/Config";

const Server: WebsocketConfig = {
    AllowedIps: [],
    CloseOnError: false,
    Port: 8080,
    MaxConnections: Number.MAX_SAFE_INTEGER,
    SystemLoginInfo: {
        AllowNonLocalIp: false,
        Password: '',
        LocalIps: [],
    }
};

const Redis: Redis = {
    Host: '',
    Port: '',
    User: '',
    Password: '',
    Db: '',
};

const MongoDB: MongoDB = {
    User: '',
    Host: '',
    Port: '',
    Password: '',
    Database: '',
    AuthSource: '',
    Uri: '',
};

const Encryption: En = {
    Algorithm: '',
    InitVector: '',
    SecurityKey: '',
    JwtKey: '',
};


const Regexes: Rg = {
    // Source: https://regexr.com/2rhq7
    email: new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/),
    // Source: https://regexr.com/3bfsi
    password: new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
};

const Config: Config = {
    Encryption,
    MongoDB,
    Redis,
    Regexes,
    Server
}

export default Config;

export { Config, Encryption, MongoDB, Redis, Regexes, Server };