import { NavService } from "./Navigation/NavService.js";
import { NavOptions } from "./Navigation/NavOptions.js";
import { AjaxService } from "./Navigation/AjaxService.js";
// ____________________________________________________
var navService = new NavService();
var ajaxService = new AjaxService();
$('.nav').click(function () {
    var navOptions = new NavOptions();
    navOptions.LoadFromElement(this);
    navService.Load(navOptions);
});
// ____________________________________________________
