var AjaxOptions = /** @class */ (function () {
    function AjaxOptions() {
        // REQUIRED	
        this.url = 'https://jsonplaceholder.typicode.com/posts';
        // to get options again after open the modal
        this.modalKey;
        //POST, GET
        this.type;
        //REQUIRED	
        this.url;
        //If simulate submit form
        this.formBtn;
        //If simulate submit form
        this.formBtnName;
        //If simulate submit form
        this.formBtnValue;
        //ex. JSON.stringify( { "key":"value1" } ) only if json
        this.data;
        //default false
        this.cache;
        //default true
        this.async;
        //default false
        this.crossDomain;
        //default false
        this.crossDomainErtaqy;
        //default false	
        this.withCredentials;
        //default html
        this.dataType;
        //application/x-www-form-urlencoded; charset=UTF-8
        this.contentType;
        //function(xhr)
        this.beforeSend;
        //will abort previous request if found, default 'global-request'
        this.requestKey;
        //event call this function
        this.event;
        //default true	
        this.formValidate;
        //use await in results function
        this.resultFuncAwait;
        //function(options) 	result
        this.done;
        //function(options)		
        this.success;
        //function(options)
        this.notValid;
        //function(options)	xhr, status, error) {
        this.error;
        //function(options)	xhr, status, error ) {
        this.fail;
        //function(options)
        this.always;
        this.log;
        this.paramData;
        this.downloadFile;
        this.paramXhr;
        this.paramStatus;
        this.paramError;
    }
    return AjaxOptions;
}());
export { AjaxOptions };
var AjaxOptionsPlaceholders;
(function (AjaxOptionsPlaceholders) {
})(AjaxOptionsPlaceholders || (AjaxOptionsPlaceholders = {}));
var AjaxOptionsMethods;
(function (AjaxOptionsMethods) {
})(AjaxOptionsMethods || (AjaxOptionsMethods = {}));
