
export class AjaxOptions {
    Selector: any;




    constructor() {
        // to get options again after open the modal
	this.modalKey		
    //POST, GET
	this.type		
    //REQUIRED	
	this.url			
    //If simulate submit form
	this.formBtn		
    //If simulate submit form
	this.formBtnName		
    //If simulate submit form
	this.formBtnValue		
	//ex. JSON.stringify( { "key":"value1" } ) only if json
	this.data				
    //default false
	this.cache	
    //default true
	this.async		
    //default false
	this.crossDomain	
    //default false
	this.crossDomainErtaqy
    //default false	
	this.withCredentials	
    //default html
	this.dataType		
    //application/x-www-form-urlencoded; charset=UTF-8
	this.contentType	
    //function(xhr)
	this.beforeSend	
    //will abort previous request if found, default 'global-request'
	this.requestKey	
    //event call this function
	this.event	
    //default true	
	this.formValidate	
	//use await in results function
	this.resultFuncAwait	
    //function(options) 	result
	this.done	
    //function(options)		
	this.success		
    //function(options)
	this.notValid		
    //function(options)	xhr, status, error) {
	this.error		
    //function(options)	xhr, status, error ) {
	this.fail			
    //function(options)
	this.always		
	this.log		
	this.paramData		
	this.downloadFile		
	this.paramXhr		
	this.paramStatus		
	this.paramError		
    }
    // to get options again after open the modal
	modalKey: any		
    // POST, GET
	type: any		
    // REQUIRED	
	url: any = 'https://jsonplaceholder.typicode.com/posts'			
    // If simulate submit form
	formBtn: any		
    // If simulate submit form
	formBtnName: any		
    // If simulate submit form
	formBtnValue: any		
	// ex. JSON.stringify( { "key":"value1" } ) only if json
	data: any				
    // default false
	cache: any	
    // default true
	async: any		
    // default false
	crossDomain: any	
    // default false
	crossDomainErtaqy: any
    // default false	
	withCredentials	: any
    // default html
	dataType: any		
    // application/x-www-form-urlencoded; charset=UTF-8
	contentType	: any
    // function(xhr)
	beforeSend: any	
    // will abort previous request if found, default 'global-request'
	requestKey: any	
    // event call this function
	event: any	
    // default true	
	formValidate: any	
	// use await in results function
	resultFuncAwait	: any
    // function(options) 	result
	done: any	
    // function(options)		
		success	: any	
    // function(options)
		notValid: any		
    // function(options)	xhr, status, error) {
	error: any		
    // function(options)	xhr, status, error ) {
	fail: any			
    // function(options)
	always	: any	
	log:any
	paramData:any
	downloadFile:any
	paramXhr:any
	paramStatus:any
	paramError:any
}

enum AjaxOptionsPlaceholders {

}
enum AjaxOptionsMethods {

}