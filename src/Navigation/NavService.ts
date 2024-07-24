import { NavOptions } from "./NavOptions.js";
import { AjaxOptions } from "./AjaxOptions.js";
import { AjaxService } from "./AjaxService.js";

export class NavService {
    constructor() {
    }
     ajaxService = new AjaxService()
     ajaxOptions = new AjaxOptions()
    public Load(options: NavOptions):void {
        console.log(options);
        this.ajaxService._ertaqyAjax(this.ajaxOptions)
        // ... ertaqy ajax code here
    }
}