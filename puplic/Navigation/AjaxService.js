var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { AjaxOptions } from "./AjaxOptions.js";
var _ertaqyModalsOpened;
var _ertaqyAjaxRequests;
var _ertaqyAjaxCounts;
var _ertaqyAjaxAlertSlowMsg;
var AjaxService = /** @class */ (function () {
    function AjaxService() {
        this.options = new AjaxOptions();
        this.ajaxReqPrev;
        this.ajaxReqNew;
        this.btn = $(this.options.formBtn);
    }
    // ___________________________________________________________
    AjaxService.prototype.do_nothing = function () {
        //alert('click-twice');
        return false;
    };
    // ___________________________________________________________
    AjaxService.prototype._getUrlQueryStrings = function () {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    };
    // ___________________________________________________________
    // ___________________________________________________________
    AjaxService.prototype._htmlEncode = function (html) {
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
            .replace(/\]\]/g, ' ] ]');
    };
    // ___________________________________________________________
    // ___________________________________________________________
    AjaxService.prototype.getFormData = function ($form) {
        var unindexed_array = $form.serializeArray();
        //console.log(unindexed_array);
        //return unindexed_array;
        var indexed_array;
        $.map(unindexed_array, function (n, i) {
            indexed_array[n['name']] = n['value'];
        });
        //console.log(indexed_array);
        return indexed_array;
    };
    // ___________________________________________________________
    // ___________________________________________________________
    AjaxService.prototype.recaptcha_check = function (frm) {
        if (frm.find('#g-recaptcha-response').length != 0) {
            var recaptchaContainer = frm.find('.form-recaptcha-container');
            var txtDanger = recaptchaContainer.find('.text-danger');
            txtDanger.removeClass('field-validation-error').text('');
            var res = frm.find('#g-recaptcha-response').val();
            // console.log('form submit - recaptcha');
            // console.log(res);
            if (res == "" || res == undefined || res.length == 0) {
                txtDanger.removeClass('field-validation-valid');
                if (!txtDanger.hasClass('field-validation-error'))
                    txtDanger.addClass('field-validation-error').text(recaptchaContainer.find('.g-recaptcha').attr('data-val-required'));
                return false;
            }
        }
        return true;
    };
    ;
    // ___________________________________________________________
    AjaxService.prototype._ertaqyAjax = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            // __________________create  function get cookies __________________
            function getCookie(name) {
                var _a;
                var value = "; ".concat(document.cookie);
                var parts = value.split("; ".concat(name, "="));
                if (parts.length === 2)
                    return (_a = parts.pop()) === null || _a === void 0 ? void 0 : _a.split(';').shift();
                return undefined;
            }
            var jsonData, $form, jsonData_1, formIsValid, recaptcha;
            var _this = this;
            return __generator(this, function (_a) {
                if (options.event) {
                    $(options.event.currentTarget).click(this.do_nothing);
                    setTimeout(function () { $(options.event.currentTarget).unbind('click', _this.do_nothing); }, 700);
                }
                if ($('#ajax-loader').length == 0)
                    $('body').append('<div id="ajax-loader"></div>');
                $('#ertaqy-chat-loader').length == 1 ? $('#ertaqy-chat-loader').fadeIn() : $('#ajax-loader').fadeIn();
                if (!options)
                    alert("_ertaqyAjax options is not defined");
                if (options.url == undefined) {
                    console.error("_ertaqyAjax options have no url");
                    return [2 /*return*/];
                }
                else {
                    if (options.url.endsWith('?'))
                        options.url = options.url.substring(0, options.url.length - 1);
                    if (this._getUrlQueryStrings()['sqltrace'] == '1' && options.url.indexOf('sqltrace=') == -1)
                        options.url += (options.url.indexOf('?') == -1 ? '?' : '&') + 'sqltrace=1';
                }
                if (options.success == undefined)
                    options.success = options.done; // till change all done to success
                if (options.resultFuncAwait == undefined)
                    options.resultFuncAwait = true;
                if (options.data == undefined)
                    options.data = null;
                // if(options.requestKey == undefined) options.requestKey = 'global-request';    //commented
                if (options.type == undefined)
                    options.type = "GET";
                if (options.cache == undefined)
                    options.cache = false;
                if (options.async == undefined)
                    options.async = true;
                if (options.crossDomain == undefined)
                    options.crossDomain = false;
                if (options.withCredentials == undefined)
                    options.withCredentials = false;
                if (options.dataType == undefined)
                    options.dataType = "html"; //"json";
                if (options.contentType == undefined)
                    options.contentType = "application/x-www-form-urlencoded; charset=UTF-8"; //"application/json"
                if (options.formValidate == undefined)
                    options.formValidate = true;
                if (options.modalKey && options.modalKey != null && options.modalKey != undefined && options.modalKey != '')
                    _ertaqyModalsOpened[options.modalKey] = options;
                // __________________________________________________________________________________________
                if (options.crossDomain && options.crossDomain && options.crossDomainErtaqy && options.beforeSend === undefined) {
                    options.beforeSend = function (xhr) {
                        var auiCookie = getCookie('_AUI');
                        if (auiCookie !== undefined) {
                            xhr.setRequestHeader("ertaqy-aui", auiCookie);
                        }
                        var aufCookie = getCookie('_AUF');
                        if (aufCookie !== undefined) {
                            xhr.setRequestHeader("ertaqy-auf", aufCookie);
                        }
                        var islCookie = getCookie('_ISL');
                        if (islCookie !== undefined) {
                            xhr.setRequestHeader("ertaqy-token", islCookie);
                        }
                        var usrCookie = getCookie('_USR');
                        if (usrCookie !== undefined) {
                            xhr.setRequestHeader("ertaqy-username", usrCookie);
                        }
                    };
                }
                // __________________________________________________________________________________________
                if (options.log)
                    console.log(options);
                if (options.type == 'POST' && options.formBtn) {
                    // if(options.data) {
                    //	alert ('data can not be set in post form');
                    //	return false;
                    // }
                    if (this.btn.length > 0) {
                        $form = this.btn.parents('form:first');
                        if (!$form) {
                            alert('form not found');
                            return [2 /*return*/, false];
                        }
                        if ($form.find('.input-html-group').length > 0) {
                            $form.find('.input-html-group input, .input-html-group textarea').each(function () {
                                if ($(_this).val() != '') {
                                    //console.log('Encoding -------------------------');
                                    //console.log(_htmlEncode($(this).val()));
                                    $(_this).val(_this._htmlEncode($(_this).val()));
                                }
                            });
                        }
                        jsonData_1 = this.getFormData($form);
                        this.btn.attr("disabled", true);
                        // Reinitialize Validation because form added dynamically
                        $form.removeData('validator');
                        $form.removeData('unobtrusiveValidation');
                        $.validator.unobtrusive.parse($form);
                        formIsValid = true;
                        if (options.formValidate) {
                            try {
                                // set required to dynmaic checkBoxList
                                $form.find('.form-control-cbl[required]').each(function () {
                                    var ct = $(_this);
                                    if ((ct.parent().css('display') == 'block' || !ct.hasClass('hidden')) && ct.find('input[type="checkbox"]:checked').length == 0) {
                                        if (ct.next().find('span').length == 0)
                                            ct.next().append('<span id="' + ct.next().attr('data-valmsg-for') + '-error" class="">' + ct.attr('data-val-required') + '</span>');
                                    }
                                });
                                // Fix inputs without name attribute, avoid form error
                                $form.find('input:not([name])').each(function () {
                                    $(_this).attr('name', function () { return $(_this).attr('id'); });
                                });
                                if ($form && $form != undefined && $form.length > 0)
                                    formIsValid = $form.valid();
                                if (!this.recaptcha_check($form))
                                    formIsValid = false;
                            }
                            catch (err) {
                                formIsValid = true;
                                console.log("Error in form: " + err.message);
                            }
                        }
                        // Check Form is valid	
                        if (options.formValidate && $form && $form != undefined && $form.length > 0 && !formIsValid) { // !$form.valid()
                            this.btn.attr("disabled", false);
                            if ($form.hasClass('loading')) {
                                $form.removeClass('loading');
                                this.btn.find('i.fa-spinner').remove();
                            }
                            // console.log('validation error');
                            $('#ertaqy-chat-loader').length == 1 ? $('#ertaqy-chat-loader').fadeOut() : $('#ajax-loader').fadeOut();
                            if ($form.find('.validSummery').length > 0) {
                                $form.find('.validSummery').html('');
                                $form.find('.field-validation-error').each(function () {
                                    if ($(_this).find('span').length > 0) {
                                        var inputValidTxt = $(_this).parent().find('label').text().replace(':', '');
                                        $form.find('.validSummery').append('<div>* الرجاء ادخال ' + inputValidTxt + '</div>');
                                    }
                                });
                            }
                            return [2 /*return*/, false];
                        }
                        // recaptcha is clicked
                        if ($form.find('.g-recaptcha').length == 1) {
                            recaptcha = $form.find("#g-recaptcha-response").val();
                            if (recaptcha === "") {
                                this.btn.attr("disabled", false);
                                return [2 /*return*/, false];
                            }
                        }
                        // Push Button Value as submited as normal from mvc
                        jsonData_1[this.btn.attr("name")] = this.btn.attr("value");
                    }
                    if (options.formBtnName && options.formBtnValue)
                        jsonData[options.formBtnName] = options.formBtnValue;
                    if (!options.data)
                        options.data = {};
                    $.each(jsonData, function (key, value) {
                        options.data[key] = value;
                    });
                    // options.data = jsonData;
                }
                if (options.requestKey)
                    this.ajaxReqPrev = _ertaqyAjaxRequests[options.requestKey];
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
                    dataType: options.dataType, // نوع البيانات المتوقع استلامها من السيرفر
                    contentType: options.contentType, // نوع البيانات المتوقع ارسالها الى السيرفر
                    beforeSend: function (xhr) {
                        var _this = this;
                        if (_ertaqyAjaxCounts == 0) { //  || _ertaqyAjaxAlertSlowMsg == null
                            // _ertaqyAjaxAlertSlowMsg = setTimeout(function(){$('.ertaqyAjaxSlowMsg').removeClass('hidden');}, 10000);
                        }
                        _ertaqyAjaxCounts++;
                        if (this.btn)
                            setTimeout(function () { _this.btn.attr("disabled", false); }, 2000); // allow button again if loading takes time
                        // Stop Previous Request with same requestKey
                        if (this.ajaxReqPrev != undefined && this.ajaxReqPrev.readyState < 4) {
                            this.ajaxReqPrev.abort();
                            $('#ertaqy-chat-loader').length == 1 ? $('#ertaqy-chat-loader').fadeIn() : $('#ajax-loader').fadeIn();
                        }
                        if (options.beforeSend)
                            options.beforeSend(xhr);
                    }
                })
                    .done(function (data) {
                    if (options.log)
                        console.log('data= ' + data);
                    // Same Form Server Side Validation: form not cleared
                    if (options.formBtn && data.indexOf("<form ") != -1 && $('form') != undefined && data.indexOf("id=\"" + $('form').attr("id") + "\" ") != -1) {
                        if (options.log)
                            console.log('done but failed, modalKey: ' + options.modalKey);
                        if (options.notValid && options.notValid != null) {
                            options.paramData = data;
                            //if(options.resultFuncAwait && _isAsyncFunction(options.notValid))
                            //	await options.notValid(options);
                            //else
                            options.notValid(options);
                        }
                        return false;
                    }
                    else {
                        if (options.log)
                            console.log('done success, modalKey: ' + options.modalKey);
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
                    console.log("connection done");
                    console.log(data);
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
                    .fail(function (xhr, status, error) {
                    if (options.fail && options.fail != null) {
                        options.paramXhr = xhr;
                        options.paramStatus = status;
                        options.paramError = error;
                        //if(options.resultFuncAwait && _isAsyncFunction(options.fail))
                        //	await options.fail(options);
                        //else
                        options.fail(options);
                    }
                    console.log("connection fail");
                    console.log(error);
                })
                    .always(function () {
                    _ertaqyAjaxCounts--;
                    if (_ertaqyAjaxCounts == 0) { // lastone
                        $('.ertaqyAjaxSlowMsg').addClass('hidden');
                        clearTimeout(_ertaqyAjaxAlertSlowMsg);
                        _ertaqyAjaxAlertSlowMsg = null;
                    }
                    $('#ertaqy-chat-loader').length == 1 ? $('#ertaqy-chat-loader').fadeOut() : $('#ajax-loader').fadeOut();
                    if (_this.btn)
                        _this.btn.attr("disabled", false);
                    if (options.always && options.always != null) {
                        //if(options.resultFuncAwait && _isAsyncFunction(options.always))
                        //	await options.always(options);
                        //else
                        options.always(options);
                    }
                    if (options.requestKey)
                        delete _ertaqyAjaxRequests[options.requestKey]; // no need to call to abort again
                });
                return [2 /*return*/];
            });
        });
    };
    return AjaxService;
}());
export { AjaxService };
