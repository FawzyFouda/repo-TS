
export class Url {
    constructor(    
        
    ){}
    _getUrl() :string {
        return window.location.protocol + "//" + window.location.host + '/';
    }
    _getUrlHostName() :string {
        return window.location.host;
}
}
// _________________________________________________________
interface Admin_Structure {
    name: string,
    age: number
}
export class Admin {
    constructor(  
    ){}
    _get_Admin_Info(Admin_info:Admin_Structure) {
        return `admin_Name: ${Admin_info.name} admin_Age: ${Admin_info.age}`;
    }
}



