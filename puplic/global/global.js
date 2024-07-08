export class Url {
    constructor() { }
    _getUrl() {
        return window.location.protocol + "//" + window.location.host + '/';
    }
    _getUrlHostName() {
        return window.location.host;
    }
}
export class Admin {
    constructor() { }
    _get_Admin_Info(Admin_info) {
        return `admin_Name: ${Admin_info.name} admin_Age: ${Admin_info.age}`;
    }
}
