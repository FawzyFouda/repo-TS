var NavOptions = /** @class */ (function () {
    function NavOptions() {
        this.Tabs = false;
        this.Overlay = true;
        this.ClearContent = true;
        this.Placeholder = NavOptionsPlaceholders.SideBar;
        this.Method = NavOptionsMethods.Get;
        this.ZIndex = 100;
    }
    NavOptions.prototype.LoadFromElement = function (element) {
        this.Selector = element;
        this.Title = $(element).find('span.title').text();
        this.Url = $(element).attr('action');
    };
    return NavOptions;
}());
export { NavOptions };
var NavOptionsPlaceholders;
(function (NavOptionsPlaceholders) {
    NavOptionsPlaceholders[NavOptionsPlaceholders["SideBar"] = 0] = "SideBar";
    NavOptionsPlaceholders[NavOptionsPlaceholders["Content"] = 1] = "Content";
    NavOptionsPlaceholders[NavOptionsPlaceholders["PostContent"] = 2] = "PostContent";
    NavOptionsPlaceholders[NavOptionsPlaceholders["ContentSideBar"] = 3] = "ContentSideBar";
    NavOptionsPlaceholders[NavOptionsPlaceholders["Popup"] = 4] = "Popup";
    NavOptionsPlaceholders[NavOptionsPlaceholders["TopHeader"] = 5] = "TopHeader";
})(NavOptionsPlaceholders || (NavOptionsPlaceholders = {}));
var NavOptionsMethods;
(function (NavOptionsMethods) {
    NavOptionsMethods[NavOptionsMethods["Get"] = 0] = "Get";
    NavOptionsMethods[NavOptionsMethods["Post"] = 1] = "Post";
})(NavOptionsMethods || (NavOptionsMethods = {}));
var UrlOptions = /** @class */ (function () {
    function UrlOptions() {
    }
    return UrlOptions;
}());
export { UrlOptions };
