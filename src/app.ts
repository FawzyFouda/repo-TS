import { NavService } from "./Navigation/NavService.js";
import { NavOptions } from "./Navigation/NavOptions.js";
import { AjaxService } from "./Navigation/AjaxService.js";
// ____________________________________________________
const navService = new NavService()
const ajaxService = new AjaxService()

$('.nav').click(function(this:any){
    const navOptions = new NavOptions();
    navOptions.LoadFromElement(this);
    navService.Load(navOptions);
});
// ____________________________________________________


