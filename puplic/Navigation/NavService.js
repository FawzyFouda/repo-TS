import { AjaxOptions } from "./AjaxOptions.js";
import { AjaxService } from "./AjaxService.js";
var NavService = /** @class */ (function () {
    function NavService() {
        this.ajaxService = new AjaxService();
        this.ajaxOptions = new AjaxOptions();
    }
    NavService.prototype.Load = function (options) {
        console.log(options);
        this.ajaxService._ertaqyAjax(this.ajaxOptions);
        // ... ertaqy ajax code here
    };
    return NavService;
}());
export { NavService };
