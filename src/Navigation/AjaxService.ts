import { AjaxOptions} from "./AjaxOptions.js";



var _ertaqyModalsOpened:any;
var _ertaqyAjaxRequests:any
var _ertaqyAjaxCounts:any
var _ertaqyAjaxAlertSlowMsg:any
export class AjaxService {
    options = new AjaxOptions()
    ajaxReqPrev :any
    ajaxReqNew:any
    btn:any
    constructor() {
        this.ajaxReqPrev
        this.ajaxReqNew
		this.btn = $(this.options.formBtn);
    }
   // ___________________________________________________________
do_nothing() { 
    //alert('click-twice');
    return false;
}
// ___________________________________________________________
_getUrlQueryStrings():any{
let vars:String[] = [], 
hash:any;
let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
for(let i = 0; i < hashes.length; i++){
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
}
return vars;
}
// ___________________________________________________________
// ___________________________________________________________
 _htmlEncode(html:any) {
    // return $('<div/>').text(html).html();

    return html
        // .replace(/\\/g, "\\\\")
        // //.replace(/{/g, '\\{')
        // //.replace(/}/g, '\\}')
        // //.replace(/:/g, '\\:')
        // .replace(/"/g, '\\"')
        // .replace(/'/g, "\\'")
        // .replace(/\//g, "\\/")
        // .replace(/\f/g, "\\f")
        // //.replace(/\b/g, "\\b")
        // .replace(/\t/g, "\\t")
        // .replace(/\r/g, "\\r")
        // .replace(/\n/g, "\\n")
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/:/g, '&colon;')
        .replace(/{{/g, '{ { ')
        .replace(/}}/g, ' } }')
        .replace(/\[\[/g, '[ [ ')
        .replace(/\]\]/g, ' ] ]')
        ////.replace(/&/g, "\\&")
        ;
                
}
// ___________________________________________________________
// ___________________________________________________________
 getFormData($form:any){		// Get form inputs as json array
    var unindexed_array = $form.serializeArray();
    //console.log(unindexed_array);
    //return unindexed_array;
    
    var indexed_array:any;

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });
    
    //console.log(indexed_array);
    
    return indexed_array;
}
// ___________________________________________________________
// ___________________________________________________________
 recaptcha_check(frm:any){
    if(frm.find('#g-recaptcha-response').length != 0) {
        var recaptchaContainer = frm.find('.form-recaptcha-container');
        var txtDanger = recaptchaContainer.find('.text-danger');
        txtDanger.removeClass('field-validation-error').text('');
        var res = frm.find('#g-recaptcha-response').val();
        // console.log('form submit - recaptcha');
        // console.log(res);
        if (res == "" || res == undefined || res.length == 0) {
            txtDanger.removeClass('field-validation-valid');
            if(!txtDanger.hasClass('field-validation-error'))
                txtDanger.addClass('field-validation-error').text(recaptchaContainer.find('.g-recaptcha').attr('data-val-required'));
            return false;
        }
    }
    return true;
};
// ___________________________________________________________
    async  _ertaqyAjax(options: AjaxOptions){
        if(options.event) {
            $(options.event.currentTarget).click(this.do_nothing); 
            setTimeout(()=>{ $(options.event.currentTarget).unbind('click', this.do_nothing); }, 700);
        }
        
        if($('#ajax-loader').length == 0)
            $('body').append('<div id="ajax-loader"></div>');
        $('#ertaqy-chat-loader').length == 1 ? $('#ertaqy-chat-loader').fadeIn() : $('#ajax-loader').fadeIn();
        
        if(!options) alert("_ertaqyAjax options is not defined");
        if(options.url == undefined) {
            console.error("_ertaqyAjax options have no url");
            return;
        }
        else{		
            if(options.url.endsWith('?'))
                options.url = options.url.substring(0, options.url.length - 1)
            if(this._getUrlQueryStrings()['sqltrace'] == '1' && options.url.indexOf('sqltrace=') == -1)
                options.url += (options.url.indexOf('?') == -1 ? '?' : '&' ) + 'sqltrace=1';
        }
        if(options.success == undefined) options.success = options.done; // till change all done to success
    
        if(options.resultFuncAwait == undefined) options.resultFuncAwait = true;
    
        if(options.data == undefined) options.data = null;
        // if(options.requestKey == undefined) options.requestKey = 'global-request';    //commented
        if(options.type == undefined) options.type = "GET";
        if(options.cache == undefined) options.cache = false;
        if(options.async == undefined) options.async = true;
        if(options.crossDomain == undefined) options.crossDomain = false;
        if(options.withCredentials == undefined) options.withCredentials = false;
        if(options.dataType == undefined) options.dataType = "html"; //"json";
        if(options.contentType == undefined) options.contentType = "application/x-www-form-urlencoded; charset=UTF-8"; //"application/json"
        if(options.formValidate == undefined) options.formValidate = true;
        
        if (options.modalKey && options.modalKey != null && options.modalKey != undefined && options.modalKey != '')
            _ertaqyModalsOpened[options.modalKey] = options;
    
// __________________create  function get cookies __________________
        function getCookie(name: string): string | undefined {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
            return undefined;
        }
// __________________________________________________________________________________________
        if (options.crossDomain && options.crossDomain && options.crossDomainErtaqy && options.beforeSend === undefined) {
            options.beforeSend = function (xhr: any) {
                const auiCookie = getCookie('_AUI');
                if (auiCookie !== undefined) {
                    xhr.setRequestHeader("ertaqy-aui", auiCookie);
                }
        
                const aufCookie = getCookie('_AUF');
                if (aufCookie !== undefined) {
                    xhr.setRequestHeader("ertaqy-auf", aufCookie);
                }
        
                const islCookie = getCookie('_ISL');
                if (islCookie !== undefined) {
                    xhr.setRequestHeader("ertaqy-token", islCookie);
                }
        
                const usrCookie = getCookie('_USR');
                if (usrCookie !== undefined) {
                    xhr.setRequestHeader("ertaqy-username", usrCookie);
                }
            };
        }
// __________________________________________________________________________________________

    
        if (options.log)
            console.log(options);
        
        if(options.type == 'POST' && options.formBtn) {
            var jsonData:any;
            
            
            // if(options.data) {
            //	alert ('data can not be set in post form');
            //	return false;
            // }
            
            if(this.btn.length > 0) {
                var $form = this.btn.parents('form:first'); //$("#"+formId);
                if (!$form) {
                    alert('form not found'); return false;
                }
                
                if($form.find('.input-html-group').length > 0){
                    $form.find('.input-html-group input, .input-html-group textarea').each(()=>{
                        if ($(this).val() != '') {
                            //console.log('Encoding -------------------------');
                            //console.log(_htmlEncode($(this).val()));
                            $(this).val(this._htmlEncode($(this).val()));
                        }
                    })
                }
                
                let jsonData = this.getFormData($form);
                this.btn.attr("disabled", true);
                
                // Reinitialize Validation because form added dynamically
                $form.removeData('validator');
                $form.removeData('unobtrusiveValidation');
                $.validator.unobtrusive.parse($form);
                
                
                var formIsValid = true;
                if(options.formValidate) {
                    try {
                        
                        // set required to dynmaic checkBoxList
                        $form.find('.form-control-cbl[required]').each(() => {
                            var ct = $(this);
                            if( (ct.parent().css('display') == 'block' || !ct.hasClass('hidden')) && ct.find('input[type="checkbox"]:checked').length == 0){
                                if(ct.next().find('span').length == 0)
                                    ct.next().append('<span id="' + ct.next().attr('data-valmsg-for') + '-error" class="">' + ct.attr('data-val-required') + '</span>');
                            }
                        });
                        
                        // Fix inputs without name attribute, avoid form error
                        $form.find('input:not([name])').each(() =>{
                        $(this).attr('name', () =>$(this).attr('id'));
                        });
                        
                        if($form && $form != undefined && $form.length > 0)
                            formIsValid = $form.valid();
                        
                        if (!this.recaptcha_check($form))
                            formIsValid = false;
                        
                        
                    }
                    catch(err:any) {
                        formIsValid = true;
                        console.log("Error in form: " + err.message);
                    }
                }
                
                // Check Form is valid	
                if(options.formValidate && $form && $form != undefined && $form.length > 0 && !formIsValid) { // !$form.valid()
                    this.btn.attr("disabled", false);
                    if($form.hasClass('loading')){	
                        $form.removeClass('loading');
                        this.btn.find('i.fa-spinner').remove();
                    }
                    // console.log('validation error');
                    $('#ertaqy-chat-loader').length == 1 ? $('#ertaqy-chat-loader').fadeOut() : $('#ajax-loader').fadeOut();
                    if($form.find('.validSummery').length > 0){
                        $form.find('.validSummery').html('');
                        $form.find('.field-validation-error').each(() =>{
                            if($(this).find('span').length > 0){
                                var inputValidTxt = $(this).parent().find('label').text().replace(':','')
                                $form.find('.validSummery').append('<div>* الرجاء ادخال '+ inputValidTxt +'</div>')
                            }
                        });
                    }
                    return false;
                }
                
                // recaptcha is clicked
                if($form.find('.g-recaptcha').length == 1){
                    var recaptcha = $form.find("#g-recaptcha-response").val();
                    if (recaptcha === ""){
                        this.btn.attr("disabled", false);
                        return false;
                    }
                }
                
                // Push Button Value as submited as normal from mvc
                jsonData[this.btn.attr("name")] = this.btn.attr("value");
            }
            if(options.formBtnName && options.formBtnValue)
                jsonData[options.formBtnName] = options.formBtnValue;
            
            if (!options.data) options.data = {};
            $.each(jsonData, function(key, value) {
                options.data[key] = value;
            });
            // options.data = jsonData;
            
        }
        if(options.requestKey)	this.ajaxReqPrev = _ertaqyAjaxRequests[options.requestKey];
    
        // ________________________________________________________________________________________________________________
        this.ajaxReqNew = $.ajax({
            type: options.type,
            cache: options.cache,            
            async: options.async, 
            crossDomain: options.crossDomain,
            url: options.url,
            xhrFields: {
                withCredentials: options.withCredentials
            },
            headers: {
                "Accept": "*/*"
                // "application/json",
                // "Access-Control-Allow-Origin": "*" // '"' + _getUrlHost() + '"'// 
                // "Access-Control-Allow-Credentials": "true"
            },
            data: options.data,
            dataType: options.dataType,  // نوع البيانات المتوقع استلامها من السيرفر
            contentType: options.contentType, // نوع البيانات المتوقع ارسالها الى السيرفر
        beforeSend: function(xhr) {
            
            if(_ertaqyAjaxCounts == 0) { //  || _ertaqyAjaxAlertSlowMsg == null
                // _ertaqyAjaxAlertSlowMsg = setTimeout(function(){$('.ertaqyAjaxSlowMsg').removeClass('hidden');}, 10000);
            }
            _ertaqyAjaxCounts++;

            if(this.btn) setTimeout( () =>{this.btn.attr("disabled", false); }, 2000 ); // allow button again if loading takes time
            
            // Stop Previous Request with same requestKey
            if(this.ajaxReqPrev != undefined && this.ajaxReqPrev.readyState < 4){
                this.ajaxReqPrev.abort();
                $('#ertaqy-chat-loader').length == 1 ? $('#ertaqy-chat-loader').fadeIn() : $('#ajax-loader').fadeIn();
            }

            if(options.beforeSend)
                options.beforeSend(xhr);
        }
        })
        .done( function( data ) {
            if (options.log)
                console.log('data= ' + data);
            
            // Same Form Server Side Validation: form not cleared
            if (options.formBtn && data.indexOf("<form ") != -1 && $('form') != undefined && data.indexOf("id=\"" + $('form').attr("id") + "\" ") != -1) {
                if (options.log) console.log('done but failed, modalKey: ' + options.modalKey);
                if (options.notValid && options.notValid!= null) {
                    options.paramData = data;
                    //if(options.resultFuncAwait && _isAsyncFunction(options.notValid))
                    //	await options.notValid(options);
                    //else
                        options.notValid(options);
                }
                return false;
            }
            else {
                
                if (options.log) console.log('done success, modalKey: ' + options.modalKey);
                if (options.success && options.success != null) {
                    options.paramData = data;
                    //if(options.resultFuncAwait && _isAsyncFunction(options.success))
                    //	await options.success(options);
                    //else
                        options.success(options);
                }
                
                if (options.downloadFile && options.downloadFile != '') {
                    var blob = new Blob([data]);
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = options.downloadFile;
                    link.click();
                }
                
            }
            console.log("connection done")
            console.log(data)
        })
        // Commented
        // .error( function (xhr, status, error) {
        //     if (options.error && options.error != null) {
        //         options.paramXhr = xhr;
        //         options.paramStatus = status;
        //         options.paramError = error;
                
        //         //if(options.resultFuncAwait && _isAsyncFunction(options.error))
        //         //	await options.error(options);
        //         //else
        //             options.error(options);
        //     }
        // })
        .fail( function( xhr, status, error ) {
            if(options.fail && options.fail != null) {
                options.paramXhr = xhr;
                options.paramStatus = status;
                options.paramError = error;
                //if(options.resultFuncAwait && _isAsyncFunction(options.fail))
                //	await options.fail(options);
                //else
                    options.fail(options);
            }	
            console.log("connection fail")
            console.log(error)	
        })
        .always( () =>{
		
            _ertaqyAjaxCounts--;
            if (_ertaqyAjaxCounts == 0) { // lastone
                $('.ertaqyAjaxSlowMsg').addClass('hidden');
                clearTimeout(_ertaqyAjaxAlertSlowMsg);
                _ertaqyAjaxAlertSlowMsg = null;
            }
            
            $('#ertaqy-chat-loader').length == 1 ? $('#ertaqy-chat-loader').fadeOut() : $('#ajax-loader').fadeOut();
    
            if(this.btn) this.btn.attr("disabled", false);
            if(options.always && options.always != null) {
                //if(options.resultFuncAwait && _isAsyncFunction(options.always))
                //	await options.always(options);
                //else
                    options.always(options);
            }
    
            if(options.requestKey)	delete _ertaqyAjaxRequests[options.requestKey]; // no need to call to abort again
            
        });
    }
    
}