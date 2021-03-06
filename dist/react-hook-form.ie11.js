'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var isUndefined = (function (val) { return val === undefined; });

var isNullOrUndefined = (function (value) {
    return value === null || isUndefined(value);
});

var isArray = (function (value) { return Array.isArray(value); });

var isObjectType = function (value) { return typeof value === 'object'; };
var isObject = (function (value) {
    return !isNullOrUndefined(value) && !isArray(value) && isObjectType(value);
});

var isHTMLElement = (function (value) {
    return isObject(value) && value.nodeType === Node.ELEMENT_NODE;
});

var VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
};
var VALUE = 'value';
var UNDEFINED = 'undefined';
var EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
var INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};
var REGEX_IS_DEEP_PROP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var REGEX_IS_PLAIN_PROP = /^\w*$/;
var REGEX_PROP_NAME = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var REGEX_ESCAPE_CHAR = /\\(\\)?/g;

function attachEventListeners(_a) {
    var field = _a.field, handleChange = _a.handleChange, isRadioOrCheckbox = _a.isRadioOrCheckbox;
    var ref = field.ref;
    if (isHTMLElement(ref) && ref.addEventListener && handleChange) {
        ref.addEventListener(isRadioOrCheckbox ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isKey = function (value) {
    return !isArray(value) &&
        (REGEX_IS_PLAIN_PROP.test(value) || !REGEX_IS_DEEP_PROP.test(value));
};
var stringToPath = function (string) {
    var result = [];
    string.replace(REGEX_PROP_NAME, function (match, number, quote, string) {
        result.push(quote ? string.replace(REGEX_ESCAPE_CHAR, '$1') : number || match);
    });
    return result;
};
function set(object, path, value) {
    var index = -1;
    var tempPath = isKey(path) ? [path] : stringToPath(path);
    var length = tempPath.length;
    var lastIndex = length - 1;
    while (++index < length) {
        var key = tempPath[index];
        var newValue = value;
        if (index !== lastIndex) {
            var objValue = object[key];
            newValue =
                isObject(objValue) || isArray(objValue)
                    ? objValue
                    : !isNaN(tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (function (data) {
    return Object.entries(data).reduce(function (previous, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (REGEX_IS_DEEP_PROP.test(key)) {
            set(previous, key, value);
            return previous;
        }
        return __assign(__assign({}, previous), (_b = {}, _b[key] = value, _b));
    }, {});
});

var get = (function (obj, path, defaultValue) {
    var result = path
        .split(/[,[\].]+?/)
        .filter(Boolean)
        .reduce(function (result, key) { return (isNullOrUndefined(result) ? result : result[key]); }, obj);
    return isUndefined(result) || result === obj
        ? obj[path] || defaultValue
        : result;
});

var focusErrorField = (function (fields, fieldErrors) {
    for (var key in fields) {
        if (get(fieldErrors, key)) {
            var field = fields[key];
            if (field) {
                if (isHTMLElement(field.ref) && field.ref.focus) {
                    field.ref.focus();
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
});

var removeAllEventListeners = (function (ref, validateWithStateUpdate) {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
});

var isRadioInput = (function (element) {
    return !!element && element.type === 'radio';
});

var isCheckBoxInput = (function (element) {
    return !!element && element.type === 'checkbox';
});

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

function findRemovedFieldAndRemoveListener(fields, handleChange, field, forceDelete) {
    if (!field) {
        return;
    }
    var ref = field.ref, _a = field.ref, name = _a.name, type = _a.type, mutationWatcher = field.mutationWatcher;
    if (!type) {
        delete fields[name];
        return;
    }
    var fieldValue = fields[name];
    if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldValue) {
        var options_1 = fieldValue.options;
        if (isArray(options_1) && options_1.length) {
            options_1.forEach(function (_a, index) {
                var ref = _a.ref, mutationWatcher = _a.mutationWatcher;
                if ((ref && isDetached(ref)) || forceDelete) {
                    removeAllEventListeners(ref, handleChange);
                    if (mutationWatcher) {
                        mutationWatcher.disconnect();
                    }
                    options_1.splice(index, 1);
                }
            });
            if (options_1 && !options_1.length) {
                delete fields[name];
            }
        }
        else {
            delete fields[name];
        }
    }
    else if (isDetached(ref) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        if (mutationWatcher) {
            mutationWatcher.disconnect();
        }
        delete fields[name];
    }
}

var defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (function (options) {
    return isArray(options)
        ? options.reduce(function (previous, _a) {
            var _b = _a.ref, checked = _b.checked, value = _b.value;
            return checked
                ? {
                    isValid: true,
                    value: value,
                }
                : previous;
        }, defaultReturn)
        : defaultReturn;
});

var getMultipleSelectValue = (function (options) {
    return __spread(options).filter(function (_a) {
        var selected = _a.selected;
        return selected;
    })
        .map(function (_a) {
        var value = _a.value;
        return value;
    });
});

var isFileInput = (function (element) {
    return !!element && element.type === 'file';
});

var isMultipleSelect = (function (element) {
    return !!element && element.type === 'select-multiple';
});

var isEmptyString = (function (value) { return value === ''; });

var defaultResult = {
    value: false,
    isValid: false,
};
var validResult = { value: true, isValid: true };
var getCheckboxValue = (function (options) {
    if (isArray(options)) {
        if (options.length > 1) {
            var values = options
                .filter(function (_a) {
                var checked = _a.ref.checked;
                return checked;
            })
                .map(function (_a) {
                var value = _a.ref.value;
                return value;
            });
            return { value: values, isValid: !!values.length };
        }
        var _a = options[0].ref, checked = _a.checked, value = _a.value, attributes = _a.attributes;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || isEmptyString(value)
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
});

function getFieldValue(fields, ref) {
    var name = ref.name, value = ref.value;
    var field = fields[name];
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return field ? getRadioValue(field.options).value : '';
    }
    if (isMultipleSelect(ref)) {
        return getMultipleSelectValue(ref.options);
    }
    if (isCheckBoxInput(ref)) {
        return field ? getCheckboxValue(field.options).value : false;
    }
    return value;
}

var isString = (function (value) { return typeof value === 'string'; });

var getFieldsValues = (function (fields, search) {
    var output = {};
    var isSearchString = isString(search);
    var isSearchArray = isArray(search);
    var isNest = search && search.nest;
    var _loop_1 = function (name_1) {
        if (isUndefined(search) ||
            isNest ||
            (isSearchString && name_1.startsWith(search)) ||
            (isSearchArray &&
                search.find(function (data) {
                    return name_1.startsWith(data);
                }))) {
            output[name_1] = getFieldValue(fields, fields[name_1].ref);
        }
    };
    for (var name_1 in fields) {
        _loop_1(name_1);
    }
    return output;
});

var isEmptyObject = (function (value) {
    return isObject(value) && !Object.keys(value).length;
});

var compareObject = (function (objectA, objectB) {
    if (objectA === void 0) { objectA = {}; }
    if (objectB === void 0) { objectB = {}; }
    return Object.entries(objectA).reduce(function (previous, _a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        return previous ? objectB[key] && objectB[key] === value : false;
    }, true);
});

var isSameError = (function (error, _a) {
    var type = _a.type, types = _a.types, message = _a.message;
    return (isObject(error) &&
        error.type === type &&
        error.message === message &&
        compareObject(error.types, types));
});

function shouldUpdateWithError(_a) {
    var errors = _a.errors, name = _a.name, error = _a.error, validFields = _a.validFields, fieldsWithValidation = _a.fieldsWithValidation;
    var isFieldValid = isEmptyObject(error);
    var isFormValid = isEmptyObject(errors);
    var currentFieldError = get(error, name);
    var existFieldError = get(errors, name);
    if ((isFieldValid && validFields.has(name)) ||
        (existFieldError && existFieldError.isManual)) {
        return false;
    }
    if (isFormValid !== isFieldValid ||
        (!isFormValid && !existFieldError) ||
        (isFieldValid && fieldsWithValidation.has(name) && !validFields.has(name))) {
        return true;
    }
    return currentFieldError && !isSameError(existFieldError, currentFieldError);
}

var isRegex = (function (value) { return value instanceof RegExp; });

var getValueAndMessage = (function (validationData) {
    var isPureObject = isObject(validationData) && !isRegex(validationData);
    return {
        value: isPureObject
            ? validationData.value
            : validationData,
        message: isPureObject
            ? validationData.message
            : '',
    };
});

var isFunction = (function (value) {
    return typeof value === 'function';
});

var isBoolean = (function (value) { return typeof value === 'boolean'; });

function getValidateError(result, ref, type) {
    if (type === void 0) { type = 'validate'; }
    var isStringValue = isString(result);
    if (isStringValue || (isBoolean(result) && !result)) {
        var message = isStringValue ? result : '';
        return {
            type: type,
            message: message,
            ref: ref,
        };
    }
}

var appendErrors = (function (name, validateAllFieldCriteria, errors, type, message) {
    var _a;
    if (!validateAllFieldCriteria) {
        return {};
    }
    var error = errors[name];
    return __assign(__assign({}, error), { types: __assign(__assign({}, (error && error.types ? error.types : {})), (_a = {}, _a[type] = message || true, _a)) });
});

var validateField = (function (fieldsRef, validateAllFieldCriteria, _a) {
    var ref = _a.ref, _b = _a.ref, type = _b.type, value = _b.value, name = _b.name, options = _a.options, required = _a.required, maxLength = _a.maxLength, minLength = _a.minLength, min = _a.min, max = _a.max, pattern = _a.pattern, validate = _a.validate;
    return __awaiter(void 0, void 0, void 0, function () {
        var fields, error, isRadio, isCheckBox, isRadioOrCheckbox, isEmpty, appendErrorsCurry, getMinMaxMessage, message, exceedMax, exceedMin, _c, maxValue, maxMessage, _d, minValue, minMessage, valueNumber, valueDate, _e, maxLengthValue, maxLengthMessage, _f, minLengthValue, minLengthMessage, inputLength, exceedMax, exceedMin, _g, patternValue, patternMessage, fieldValue_1, validateRef_1, result, validateError, validateFunctions_1, validationResult;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    fields = fieldsRef.current;
                    error = {};
                    isRadio = isRadioInput(ref);
                    isCheckBox = isCheckBoxInput(ref);
                    isRadioOrCheckbox = isRadio || isCheckBox;
                    isEmpty = isEmptyString(value);
                    appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
                    getMinMaxMessage = function (exceedMax, maxLengthMessage, minLengthMessage, maxType, minType) {
                        if (maxType === void 0) { maxType = INPUT_VALIDATION_RULES.maxLength; }
                        if (minType === void 0) { minType = INPUT_VALIDATION_RULES.minLength; }
                        var message = exceedMax ? maxLengthMessage : minLengthMessage;
                        error[name] = __assign({ type: exceedMax ? maxType : minType, message: message,
                            ref: ref }, (exceedMax
                            ? appendErrorsCurry(maxType, message)
                            : appendErrorsCurry(minType, message)));
                        if (!validateAllFieldCriteria) {
                            return error;
                        }
                    };
                    if (required &&
                        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
                            (isBoolean(value) && !value) ||
                            (isCheckBox && !getCheckboxValue(options).isValid) ||
                            (isRadio && !getRadioValue(options).isValid))) {
                        message = isString(required)
                            ? required
                            : getValueAndMessage(required).message;
                        error[name] = __assign({ type: INPUT_VALIDATION_RULES.required, message: message, ref: isRadioOrCheckbox ? fields[name].options[0].ref : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
                        if (!validateAllFieldCriteria) {
                            return [2 /*return*/, error];
                        }
                    }
                    if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
                        exceedMax = void 0;
                        exceedMin = void 0;
                        _c = getValueAndMessage(max), maxValue = _c.value, maxMessage = _c.message;
                        _d = getValueAndMessage(min), minValue = _d.value, minMessage = _d.message;
                        if (type === 'number' || (!type && !isNaN(value))) {
                            valueNumber = ref.valueAsNumber || parseFloat(value);
                            if (!isNullOrUndefined(maxValue)) {
                                exceedMax = valueNumber > maxValue;
                            }
                            if (!isNullOrUndefined(minValue)) {
                                exceedMin = valueNumber < minValue;
                            }
                        }
                        else {
                            valueDate = ref.valueAsDate || new Date(value);
                            if (isString(maxValue)) {
                                exceedMax = valueDate > new Date(maxValue);
                            }
                            if (isString(minValue)) {
                                exceedMin = valueDate < new Date(minValue);
                            }
                        }
                        if (exceedMax || exceedMin) {
                            getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
                            if (!validateAllFieldCriteria) {
                                return [2 /*return*/, error];
                            }
                        }
                    }
                    if (isString(value) && !isEmpty && (maxLength || minLength)) {
                        _e = getValueAndMessage(maxLength), maxLengthValue = _e.value, maxLengthMessage = _e.message;
                        _f = getValueAndMessage(minLength), minLengthValue = _f.value, minLengthMessage = _f.message;
                        inputLength = value.toString().length;
                        exceedMax = maxLength && inputLength > maxLengthValue;
                        exceedMin = minLength && inputLength < minLengthValue;
                        if (exceedMax || exceedMin) {
                            getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);
                            if (!validateAllFieldCriteria) {
                                return [2 /*return*/, error];
                            }
                        }
                    }
                    if (pattern && !isEmpty) {
                        _g = getValueAndMessage(pattern), patternValue = _g.value, patternMessage = _g.message;
                        if (isRegex(patternValue) && !patternValue.test(value)) {
                            error[name] = __assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref: ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
                            if (!validateAllFieldCriteria) {
                                return [2 /*return*/, error];
                            }
                        }
                    }
                    if (!validate) return [3 /*break*/, 4];
                    fieldValue_1 = getFieldValue(fields, ref);
                    validateRef_1 = isRadioOrCheckbox && options ? options[0].ref : ref;
                    if (!isFunction(validate)) return [3 /*break*/, 2];
                    return [4 /*yield*/, validate(fieldValue_1)];
                case 1:
                    result = _h.sent();
                    validateError = getValidateError(result, validateRef_1);
                    if (validateError) {
                        error[name] = __assign(__assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                        if (!validateAllFieldCriteria) {
                            return [2 /*return*/, error];
                        }
                    }
                    return [3 /*break*/, 4];
                case 2:
                    if (!isObject(validate)) return [3 /*break*/, 4];
                    validateFunctions_1 = Object.entries(validate);
                    return [4 /*yield*/, new Promise(function (resolve) {
                            validateFunctions_1.reduce(function (previous, _a, index) {
                                var _b = __read(_a, 2), key = _b[0], validate = _b[1];
                                return __awaiter(void 0, void 0, void 0, function () {
                                    var _c, result, validateResult, validateError;
                                    return __generator(this, function (_d) {
                                        switch (_d.label) {
                                            case 0:
                                                _c = isEmptyObject;
                                                return [4 /*yield*/, previous];
                                            case 1:
                                                if ((!_c.apply(void 0, [_d.sent()]) && !validateAllFieldCriteria) ||
                                                    !isFunction(validate)) {
                                                    return [2 /*return*/, resolve(previous)];
                                                }
                                                return [4 /*yield*/, validate(fieldValue_1)];
                                            case 2:
                                                validateResult = _d.sent();
                                                validateError = getValidateError(validateResult, validateRef_1, key);
                                                if (validateError) {
                                                    result = __assign(__assign({}, validateError), appendErrorsCurry(key, validateError.message));
                                                    if (validateAllFieldCriteria) {
                                                        error[name] = result;
                                                    }
                                                }
                                                else {
                                                    result = previous;
                                                }
                                                return [2 /*return*/, validateFunctions_1.length - 1 === index
                                                        ? resolve(result)
                                                        : result];
                                        }
                                    });
                                });
                            }, {});
                        })];
                case 3:
                    validationResult = _h.sent();
                    if (!isEmptyObject(validationResult)) {
                        error[name] = __assign({ ref: validateRef_1 }, validationResult);
                        if (!validateAllFieldCriteria) {
                            return [2 /*return*/, error];
                        }
                    }
                    _h.label = 4;
                case 4: return [2 /*return*/, error];
            }
        });
    });
});

var parseErrorSchema = function (error, validateAllFieldCriteria) {
    var _a;
    return isArray(error.inner)
        ? error.inner.reduce(function (previous, _a) {
            var _b, _c, _d;
            var path = _a.path, message = _a.message, type = _a.type;
            return (__assign(__assign({}, previous), (previous[path] && validateAllFieldCriteria
                ? (_b = {},
                    _b[path] = appendErrors(path, validateAllFieldCriteria, previous, type, message),
                    _b) : (_c = {},
                _c[path] = previous[path] || __assign({ message: message,
                    type: type }, (validateAllFieldCriteria
                    ? {
                        types: (_d = {}, _d[type] = message || true, _d),
                    }
                    : {})),
                _c))));
        }, {})
        : (_a = {},
            _a[error.path] = { message: error.message, type: error.type },
            _a);
};
function validateWithSchema(validationSchema, validateAllFieldCriteria, data, validationResolver, context) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (validationResolver) {
                        return [2 /*return*/, validationResolver(data, context)];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = {};
                    return [4 /*yield*/, validationSchema.validate(data, {
                            abortEarly: false,
                            context: context,
                        })];
                case 2: return [2 /*return*/, (_a.values = _b.sent(),
                        _a.errors = {},
                        _a)];
                case 3:
                    e_1 = _b.sent();
                    return [2 /*return*/, {
                            values: {},
                            errors: transformToNestObject(parseErrorSchema(e_1, validateAllFieldCriteria)),
                        }];
                case 4: return [2 /*return*/];
            }
        });
    });
}

var getDefaultValue = (function (defaultValues, name, defaultValue) {
    return isUndefined(defaultValues[name])
        ? get(defaultValues, name, defaultValue)
        : defaultValues[name];
});

function flatArray(list) {
    return list.reduce(function (a, b) { return a.concat(isArray(b) ? flatArray(b) : b); }, []);
}

var isPrimitive = (function (value) {
    return isNullOrUndefined(value) || !isObjectType(value);
});

var getPath = function (path, values) {
    var getInnerPath = function (value, key, isObject) {
        var pathWithIndex = isObject ? path + "." + key : path + "[" + key + "]";
        return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
    };
    return isArray(values)
        ? values.map(function (value, key) { return getInnerPath(value, key); })
        : Object.entries(values).map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return getInnerPath(value, key, true);
        });
};
var getPath$1 = (function (parentPath, value) { return flatArray(getPath(parentPath, value)); });

var assignWatchFields = (function (fieldValues, fieldName, watchFields, combinedDefaultValues, watchFieldArray) {
    var value;
    if (isEmptyObject(fieldValues)) {
        value = watchFieldArray ? watchFieldArray : undefined;
    }
    else if (!isUndefined(fieldValues[fieldName])) {
        watchFields.add(fieldName);
        value = fieldValues[fieldName];
    }
    else {
        value = get(transformToNestObject(fieldValues), fieldName);
        if (isArray(watchFieldArray) &&
            isArray(value) &&
            value.length !== watchFieldArray.length) {
            value = watchFieldArray;
        }
        if (!isUndefined(value)) {
            getPath$1(fieldName, value).forEach(function (name) {
                return watchFields.add(name);
            });
        }
    }
    return isUndefined(value)
        ? isObject(combinedDefaultValues)
            ? getDefaultValue(combinedDefaultValues, fieldName)
            : combinedDefaultValues
        : value;
});

var skipValidation = (function (_a) {
    var hasError = _a.hasError, isBlurEvent = _a.isBlurEvent, isOnSubmit = _a.isOnSubmit, isReValidateOnSubmit = _a.isReValidateOnSubmit, isOnBlur = _a.isOnBlur, isReValidateOnBlur = _a.isReValidateOnBlur, isSubmitted = _a.isSubmitted;
    return (isOnSubmit && isReValidateOnSubmit) ||
        (isOnSubmit && !isSubmitted) ||
        (isOnBlur && !isBlurEvent && !hasError) ||
        (isReValidateOnBlur && !isBlurEvent && hasError) ||
        (isReValidateOnSubmit && isSubmitted);
});

var getFieldValueByName = (function (fields, name) {
    var results = transformToNestObject(getFieldsValues(fields));
    return name ? get(results, name, results) : results;
});

function getIsFieldsDifferent(referenceArray, differenceArray) {
    var isMatch = false;
    if (!isArray(referenceArray) ||
        !isArray(differenceArray) ||
        referenceArray.length !== differenceArray.length) {
        return true;
    }
    for (var i = 0; i < referenceArray.length; i++) {
        if (isMatch) {
            break;
        }
        var dataA = referenceArray[i];
        var dataB = differenceArray[i];
        if (isUndefined(dataB) ||
            Object.keys(dataA).length !== Object.keys(dataB).length) {
            isMatch = true;
            break;
        }
        for (var key in dataA) {
            if (dataA[key] !== dataB[key]) {
                isMatch = true;
                break;
            }
        }
    }
    return isMatch;
}

var isMatchFieldArrayName = function (name, searchName) {
    return name.startsWith(searchName + "[");
};
var isNameInFieldArray = (function (names, name) {
    return __spread(names).reduce(function (prev, current) { return (isMatchFieldArrayName(name, current) ? true : prev); }, false);
});

var isFileListObject = (function (data) {
    return typeof FileList !== UNDEFINED && data instanceof FileList;
});

function onDomRemove(element, onDetachCallback) {
    var observer = new MutationObserver(function () {
        if (isDetached(element)) {
            observer.disconnect();
            onDetachCallback();
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

var unsetObject = function (target) {
    for (var key in target) {
        var data = target[key];
        var isArrayObject = isArray(data);
        if ((isObject(data) || isArrayObject) && !data.ref) {
            unsetObject(data);
        }
        if ((isUndefined(data) ||
            isEmptyObject(data) ||
            (isArrayObject && !target[key].filter(Boolean).length)) &&
            !isFileListObject(target)) {
            delete target[key];
        }
    }
    return target;
};
var unset = function (target, paths) {
    paths.forEach(function (path) {
        set(target, path, undefined);
    });
    return unsetObject(target);
};

var modeChecker = (function (mode) { return ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
}); });

var useRef = React.useRef, useState = React.useState, useCallback = React.useCallback, useEffect = React.useEffect;
function useForm(_a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, _c = _b.mode, mode = _c === void 0 ? VALIDATION_MODE.onSubmit : _c, _d = _b.reValidateMode, reValidateMode = _d === void 0 ? VALIDATION_MODE.onChange : _d, validationSchema = _b.validationSchema, validationResolver = _b.validationResolver, validationContext = _b.validationContext, _e = _b.defaultValues, defaultValues = _e === void 0 ? {} : _e, _f = _b.submitFocusError, submitFocusError = _f === void 0 ? true : _f, validateCriteriaMode = _b.validateCriteriaMode;
    var fieldsRef = useRef({});
    var validateAllFieldCriteria = validateCriteriaMode === 'all';
    var errorsRef = useRef({});
    var touchedFieldsRef = useRef({});
    var watchFieldArrayRef = useRef({});
    var watchFieldsRef = useRef(new Set());
    var dirtyFieldsRef = useRef(new Set());
    var fieldsWithValidationRef = useRef(new Set());
    var validFieldsRef = useRef(new Set());
    var isValidRef = useRef(true);
    var defaultRenderValuesRef = useRef({});
    var defaultValuesRef = useRef(defaultValues);
    var isUnMount = useRef(false);
    var isWatchAllRef = useRef(false);
    var isSubmittedRef = useRef(false);
    var isDirtyRef = useRef(false);
    var submitCountRef = useRef(0);
    var isSubmittingRef = useRef(false);
    var handleChangeRef = useRef();
    var resetFieldArrayFunctionRef = useRef({});
    var fieldArrayNamesRef = useRef(new Set());
    var _g = __read(useState(), 2), render = _g[1];
    var _h = useRef(modeChecker(mode)).current, isOnBlur = _h.isOnBlur, isOnSubmit = _h.isOnSubmit;
    var isWindowUndefined = typeof window === UNDEFINED;
    var shouldValidateCallback = !!(validationSchema || validationResolver);
    var isWeb = typeof document !== UNDEFINED &&
        !isWindowUndefined &&
        !isUndefined(window.HTMLElement);
    var isProxyEnabled = isWeb && 'Proxy' in window;
    var readFormStateRef = useRef({
        dirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        isSubmitted: isOnSubmit,
        submitCount: !isProxyEnabled,
        touched: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    var _j = useRef(modeChecker(reValidateMode)).current, isReValidateOnBlur = _j.isOnBlur, isReValidateOnSubmit = _j.isOnSubmit;
    var reRender = useCallback(function () {
        if (!isUnMount.current) {
            render({});
        }
    }, []);
    var shouldRenderBaseOnError = useCallback(function (name, error, shouldRender, skipReRender) {
        var shouldReRender = shouldRender ||
            shouldUpdateWithError({
                errors: errorsRef.current,
                error: error,
                name: name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        if (isEmptyObject(error)) {
            if (fieldsWithValidationRef.current.has(name) ||
                shouldValidateCallback) {
                validFieldsRef.current.add(name);
                shouldReRender = shouldReRender || get(errorsRef.current, name);
            }
            errorsRef.current = unset(errorsRef.current, [name]);
        }
        else {
            validFieldsRef.current.delete(name);
            shouldReRender = shouldReRender || !get(errorsRef.current, name);
            set(errorsRef.current, name, error[name]);
        }
        if (shouldReRender && !skipReRender) {
            reRender();
            return true;
        }
    }, [reRender, shouldValidateCallback]);
    var setFieldValue = useCallback(function (name, rawValue) {
        var field = fieldsRef.current[name];
        if (!field) {
            return false;
        }
        var ref = field.ref;
        var options = field.options;
        var type = ref.type;
        var value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref) && options) {
            options.forEach(function (_a) {
                var radioRef = _a.ref;
                return (radioRef.checked = radioRef.value === value);
            });
        }
        else if (isFileInput(ref)) {
            if (isEmptyString(value) ||
                isFileListObject(value)) {
                ref.files = value;
            }
            else {
                ref.value = value;
            }
        }
        else if (isMultipleSelect(ref)) {
            __spread(ref.options).forEach(function (selectRef) {
                return (selectRef.selected = value.includes(selectRef.value));
            });
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(function (_a) {
                    var checkboxRef = _a.ref;
                    return (checkboxRef.checked = value.includes(checkboxRef.value));
                })
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
        return !!type;
    }, [isWeb]);
    var setDirty = function (name) {
        if (!fieldsRef.current[name] ||
            (!readFormStateRef.current.dirty && !readFormStateRef.current.dirtyFields)) {
            return false;
        }
        var isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        var previousDirtyFieldsLength = dirtyFieldsRef.current.size;
        var isDirty = defaultRenderValuesRef.current[name] !==
            getFieldValue(fieldsRef.current, fieldsRef.current[name].ref);
        if (isFieldArray) {
            var fieldArrayName = name.substring(0, name.indexOf('['));
            isDirty = getIsFieldsDifferent(getFieldValueByName(fieldsRef.current, fieldArrayName), get(defaultValuesRef.current, fieldArrayName));
        }
        var isDirtyChanged = (isFieldArray ? isDirtyRef.current : dirtyFieldsRef.current.has(name)) !==
            isDirty;
        if (isDirty) {
            dirtyFieldsRef.current.add(name);
        }
        else {
            dirtyFieldsRef.current.delete(name);
        }
        isDirtyRef.current = isFieldArray ? isDirty : !!dirtyFieldsRef.current.size;
        return readFormStateRef.current.dirty
            ? isDirtyChanged
            : previousDirtyFieldsLength !== dirtyFieldsRef.current.size;
    };
    var setInternalValue = useCallback(function (name, value) {
        setFieldValue(name, value);
        if (setDirty(name) ||
            (!get(touchedFieldsRef.current, name) &&
                readFormStateRef.current.touched)) {
            return !!set(touchedFieldsRef.current, name, true);
        }
    }, [setFieldValue]);
    var executeValidation = useCallback(function (name, skipReRender) { return __awaiter(_this, void 0, void 0, function () {
        var field, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    field = fieldsRef.current[name];
                    if (!field) {
                        return [2 /*return*/, false];
                    }
                    return [4 /*yield*/, validateField(fieldsRef, validateAllFieldCriteria, field)];
                case 1:
                    error = _a.sent();
                    shouldRenderBaseOnError(name, error, false, skipReRender);
                    return [2 /*return*/, isEmptyObject(error)];
            }
        });
    }); }, [shouldRenderBaseOnError, validateAllFieldCriteria]);
    var executeSchemaValidation = useCallback(function (payload) { return __awaiter(_this, void 0, void 0, function () {
        var errors, previousFormIsValid;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fieldsRef.current), validationResolver, validationContext)];
                case 1:
                    errors = (_b.sent()).errors;
                    previousFormIsValid = isValidRef.current;
                    isValidRef.current = isEmptyObject(errors);
                    if (isArray(payload)) {
                        payload.forEach(function (name) {
                            var error = get(errors, name);
                            if (error) {
                                set(errorsRef.current, name, error);
                            }
                            else {
                                unset(errorsRef.current, [name]);
                            }
                        });
                        reRender();
                    }
                    else {
                        shouldRenderBaseOnError(payload, (get(errors, payload)
                            ? (_a = {}, _a[payload] = get(errors, payload), _a) : {}), previousFormIsValid !== isValidRef.current);
                    }
                    return [2 /*return*/, isEmptyObject(errorsRef.current)];
            }
        });
    }); }, [
        reRender,
        shouldRenderBaseOnError,
        validateAllFieldCriteria,
        validationContext,
        validationResolver,
        validationSchema,
    ]);
    var triggerValidation = useCallback(function (payload) { return __awaiter(_this, void 0, void 0, function () {
        var fields, result;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fields = payload || Object.keys(fieldsRef.current);
                    if (shouldValidateCallback) {
                        return [2 /*return*/, executeSchemaValidation(fields)];
                    }
                    if (!isArray(fields)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.all(fields.map(function (data) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, executeValidation(data, true)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 1:
                    result = _a.sent();
                    reRender();
                    return [2 /*return*/, result.every(Boolean)];
                case 2: return [4 /*yield*/, executeValidation(fields)];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    }); }, [
        executeSchemaValidation,
        executeValidation,
        reRender,
        shouldValidateCallback,
    ]);
    var setValue = useCallback(function (name, value, shouldValidate) {
        var shouldRender = setInternalValue(name, value) ||
            isWatchAllRef.current ||
            watchFieldsRef.current.has(name);
        if (shouldRender) {
            reRender();
        }
        if (shouldValidate) {
            triggerValidation(name);
        }
        return;
    }, [reRender, setInternalValue, triggerValidation]);
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : function (_a) {
            var type = _a.type, target = _a.target;
            return __awaiter(_this, void 0, void 0, function () {
                var name, fields, errors, field, currentError, error, isBlurEvent, shouldSkipValidation, shouldUpdateDirty, shouldUpdateState, errors_1, previousFormIsValid;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            name = target ? target.name : '';
                            fields = fieldsRef.current;
                            errors = errorsRef.current;
                            field = fields[name];
                            currentError = get(errors, name);
                            if (!field) {
                                return [2 /*return*/];
                            }
                            isBlurEvent = type === EVENTS.BLUR;
                            shouldSkipValidation = skipValidation({
                                hasError: !!currentError,
                                isBlurEvent: isBlurEvent,
                                isOnSubmit: isOnSubmit,
                                isReValidateOnSubmit: isReValidateOnSubmit,
                                isOnBlur: isOnBlur,
                                isReValidateOnBlur: isReValidateOnBlur,
                                isSubmitted: isSubmittedRef.current,
                            });
                            shouldUpdateDirty = setDirty(name);
                            shouldUpdateState = isWatchAllRef.current ||
                                watchFieldsRef.current.has(name) ||
                                shouldUpdateDirty;
                            if (isBlurEvent &&
                                !get(touchedFieldsRef.current, name) &&
                                readFormStateRef.current.touched) {
                                set(touchedFieldsRef.current, name, true);
                                shouldUpdateState = true;
                            }
                            if (shouldSkipValidation) {
                                return [2 /*return*/, shouldUpdateState && reRender()];
                            }
                            if (!shouldValidateCallback) return [3 /*break*/, 2];
                            return [4 /*yield*/, validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fields), validationResolver, validationContext)];
                        case 1:
                            errors_1 = (_c.sent()).errors;
                            previousFormIsValid = isValidRef.current;
                            isValidRef.current = isEmptyObject(errors_1);
                            error = (get(errors_1, name)
                                ? (_b = {}, _b[name] = get(errors_1, name), _b) : {});
                            if (previousFormIsValid !== isValidRef.current) {
                                shouldUpdateState = true;
                            }
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, validateField(fieldsRef, validateAllFieldCriteria, field)];
                        case 3:
                            error = _c.sent();
                            _c.label = 4;
                        case 4:
                            if (!shouldRenderBaseOnError(name, error) && shouldUpdateState) {
                                reRender();
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
    var validateSchemaIsValid = useCallback(function (values) {
        if (values === void 0) { values = {}; }
        var fieldValues = isEmptyObject(defaultValuesRef.current)
            ? getFieldsValues(fieldsRef.current)
            : defaultValuesRef.current;
        console.log('fieldsValue', values);
        validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(__assign(__assign({}, fieldValues), values)), validationResolver, validationContext).then(function (_a) {
            var errors = _a.errors;
            var previousFormIsValid = isValidRef.current;
            isValidRef.current = isEmptyObject(errors);
            if (previousFormIsValid !== isValidRef.current) {
                reRender();
            }
        });
    }, [
        reRender,
        validateAllFieldCriteria,
        validationContext,
        validationResolver,
        validationSchema,
    ]);
    var resetFieldRef = useCallback(function (name) {
        errorsRef.current = unset(errorsRef.current, [name]);
        touchedFieldsRef.current = unset(touchedFieldsRef.current, [name]);
        defaultRenderValuesRef.current = unset(defaultRenderValuesRef.current, [
            name,
        ]);
        [
            dirtyFieldsRef,
            fieldsWithValidationRef,
            validFieldsRef,
            watchFieldsRef,
        ].forEach(function (data) { return data.current.delete(name); });
        if (readFormStateRef.current.isValid ||
            readFormStateRef.current.touched) {
            reRender();
            if (shouldValidateCallback) {
                validateSchemaIsValid();
            }
        }
    }, [reRender]);
    var removeFieldEventListener = function (field, forceDelete) {
        if (!isUndefined(handleChangeRef.current) && field) {
            findRemovedFieldAndRemoveListener(fieldsRef.current, handleChangeRef.current, field, forceDelete);
        }
    };
    var removeFieldEventListenerAndRef = useCallback(function (field, forceDelete) {
        if (!field ||
            (field &&
                isNameInFieldArray(fieldArrayNamesRef.current, field.ref.name) &&
                !forceDelete)) {
            return;
        }
        removeFieldEventListener(field, forceDelete);
        resetFieldRef(field.ref.name);
    }, [resetFieldRef]);
    function clearError(name) {
        if (isUndefined(name)) {
            errorsRef.current = {};
        }
        else {
            unset(errorsRef.current, isArray(name) ? name : [name]);
        }
        reRender();
    }
    var setInternalError = function (_a) {
        var name = _a.name, type = _a.type, types = _a.types, message = _a.message, preventRender = _a.preventRender;
        var field = fieldsRef.current[name];
        if (!isSameError(errorsRef.current[name], {
            type: type,
            message: message,
            types: types,
        })) {
            set(errorsRef.current, name, {
                type: type,
                types: types,
                message: message,
                ref: field ? field.ref : {},
                isManual: true,
            });
            if (!preventRender) {
                reRender();
            }
        }
    };
    function setError(name, type, message) {
        if (type === void 0) { type = ''; }
        if (isString(name)) {
            setInternalError(__assign({ name: name }, (isObject(type)
                ? {
                    types: type,
                    type: '',
                }
                : {
                    type: type,
                    message: message,
                })));
        }
        else if (isArray(name)) {
            name.forEach(function (error) {
                return setInternalError(__assign(__assign({}, error), { preventRender: true }));
            });
            reRender();
        }
    }
    function watch(fieldNames, defaultValue) {
        var combinedDefaultValues = isUndefined(defaultValue)
            ? isUndefined(defaultValuesRef.current)
                ? {}
                : defaultValuesRef.current
            : defaultValue;
        var fieldValues = getFieldsValues(fieldsRef.current, fieldNames);
        var watchFields = watchFieldsRef.current;
        if (isProxyEnabled) {
            readFormStateRef.current.dirty = true;
        }
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, combinedDefaultValues, fieldArrayNamesRef.current.has(fieldNames)
                ? watchFieldArrayRef.current[fieldNames]
                : undefined);
        }
        if (isArray(fieldNames)) {
            return fieldNames.reduce(function (previous, name) {
                var _a;
                var value;
                if (isEmptyObject(fieldsRef.current) &&
                    isObject(combinedDefaultValues)) {
                    value = getDefaultValue(combinedDefaultValues, name);
                }
                else {
                    value = assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues);
                }
                return __assign(__assign({}, previous), (_a = {}, _a[name] = value, _a));
            }, {});
        }
        isWatchAllRef.current = true;
        var result = (!isEmptyObject(fieldValues) && fieldValues) ||
            defaultValue ||
            defaultValuesRef.current;
        return fieldNames && fieldNames.nest
            ? transformToNestObject(result)
            : result;
    }
    function unregister(names) {
        if (!isEmptyObject(fieldsRef.current)) {
            (isArray(names) ? names : [names]).forEach(function (fieldName) {
                return removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true);
            });
        }
    }
    function registerFieldsRef(ref, validateOptions) {
        if (validateOptions === void 0) { validateOptions = {}; }
        if (!ref.name) {
            return console.warn('Missing name @', ref);
        }
        var name = ref.name, type = ref.type, value = ref.value;
        var fieldAttributes = __assign({ ref: ref }, validateOptions);
        var fields = fieldsRef.current;
        var isRadioOrCheckbox = isRadioInput(ref) || isCheckBoxInput(ref);
        var currentField = fields[name];
        var isEmptyDefaultValue = true;
        var isFieldArray = false;
        var defaultValue;
        if (isRadioOrCheckbox
            ? currentField &&
                isArray(currentField.options) &&
                currentField.options.find(function (_a) {
                    var ref = _a.ref;
                    return value === ref.value;
                })
            : currentField) {
            fields[name] = __assign(__assign({}, currentField), validateOptions);
            return;
        }
        if (type) {
            var mutationWatcher = onDomRemove(ref, function () {
                return removeFieldEventListenerAndRef(fieldAttributes);
            });
            currentField = isRadioOrCheckbox
                ? __assign({ options: __spread(((currentField && currentField.options) || []), [
                        {
                            ref: ref,
                            mutationWatcher: mutationWatcher,
                        },
                    ]), ref: { type: type, name: name } }, validateOptions) : __assign(__assign({}, fieldAttributes), { mutationWatcher: mutationWatcher });
        }
        else {
            currentField = fieldAttributes;
        }
        fields[name] = currentField;
        if (!isEmptyObject(defaultValuesRef.current)) {
            defaultValue = getDefaultValue(defaultValuesRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(name, defaultValue);
            }
        }
        if (shouldValidateCallback &&
            !isFieldArray &&
            readFormStateRef.current.isValid) {
            validateSchemaIsValid();
        }
        else if (!isEmptyObject(validateOptions)) {
            fieldsWithValidationRef.current.add(name);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, validateAllFieldCriteria, currentField).then(function (error) {
                    var previousFormIsValid = isValidRef.current;
                    if (isEmptyObject(error)) {
                        validFieldsRef.current.add(name);
                    }
                    else {
                        isValidRef.current = false;
                    }
                    if (previousFormIsValid !== isValidRef.current) {
                        reRender();
                    }
                });
            }
        }
        if (!defaultRenderValuesRef.current[name] &&
            !(isFieldArray && isEmptyDefaultValue)) {
            defaultRenderValuesRef.current[name] = isEmptyDefaultValue
                ? getFieldValue(fields, currentField.ref)
                : defaultValue;
        }
        if (!type) {
            return;
        }
        var fieldToAttachListener = isRadioOrCheckbox && currentField.options
            ? currentField.options[currentField.options.length - 1]
            : currentField;
        attachEventListeners({
            field: fieldToAttachListener,
            isRadioOrCheckbox: isRadioOrCheckbox,
            handleChange: handleChangeRef.current,
        });
    }
    function register(refOrValidationOptions, validationOptions) {
        if (isWindowUndefined) {
            return;
        }
        if (isString(refOrValidationOptions)) {
            registerFieldsRef({ name: refOrValidationOptions }, validationOptions);
            return;
        }
        if (isObject(refOrValidationOptions) && 'name' in refOrValidationOptions) {
            registerFieldsRef(refOrValidationOptions, validationOptions);
            return;
        }
        return function (ref) {
            return ref && registerFieldsRef(ref, refOrValidationOptions);
        };
    }
    var handleSubmit = useCallback(function (callback) { return function (e) { return __awaiter(_this, void 0, void 0, function () {
        var fieldErrors, fieldValues, fields, _a, errors, values, _b, errors, values;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (e) {
                        e.preventDefault();
                        e.persist();
                    }
                    fields = fieldsRef.current;
                    if (readFormStateRef.current.isSubmitting) {
                        isSubmittingRef.current = true;
                        reRender();
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, , 9, 10]);
                    if (!shouldValidateCallback) return [3 /*break*/, 3];
                    fieldValues = getFieldsValues(fields);
                    return [4 /*yield*/, validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(fieldValues), validationResolver, validationContext)];
                case 2:
                    _a = _c.sent(), errors = _a.errors, values = _a.values;
                    errorsRef.current = errors;
                    fieldErrors = errors;
                    fieldValues = values;
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, Object.values(fields).reduce(function (previous, field) { return __awaiter(_this, void 0, void 0, function () {
                        var resolvedPrevious, ref, name, fieldError;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!field) {
                                        return [2 /*return*/, previous];
                                    }
                                    return [4 /*yield*/, previous];
                                case 1:
                                    resolvedPrevious = _a.sent();
                                    ref = field.ref, name = field.ref.name;
                                    if (!fields[name]) {
                                        return [2 /*return*/, Promise.resolve(resolvedPrevious)];
                                    }
                                    return [4 /*yield*/, validateField(fieldsRef, validateAllFieldCriteria, field)];
                                case 2:
                                    fieldError = _a.sent();
                                    if (fieldError[name]) {
                                        set(resolvedPrevious.errors, name, fieldError[name]);
                                        validFieldsRef.current.delete(name);
                                        return [2 /*return*/, Promise.resolve(resolvedPrevious)];
                                    }
                                    if (fieldsWithValidationRef.current.has(name)) {
                                        validFieldsRef.current.add(name);
                                    }
                                    resolvedPrevious.values[name] = getFieldValue(fields, ref);
                                    return [2 /*return*/, Promise.resolve(resolvedPrevious)];
                            }
                        });
                    }); }, Promise.resolve({
                        errors: {},
                        values: {},
                    }))];
                case 4:
                    _b = _c.sent(), errors = _b.errors, values = _b.values;
                    fieldErrors = errors;
                    fieldValues = values;
                    _c.label = 5;
                case 5:
                    if (!isEmptyObject(fieldErrors)) return [3 /*break*/, 7];
                    errorsRef.current = {};
                    return [4 /*yield*/, callback(transformToNestObject(fieldValues), e)];
                case 6:
                    _c.sent();
                    return [3 /*break*/, 8];
                case 7:
                    if (submitFocusError) {
                        focusErrorField(fields, fieldErrors);
                    }
                    errorsRef.current = fieldErrors;
                    _c.label = 8;
                case 8: return [3 /*break*/, 10];
                case 9:
                    isSubmittedRef.current = true;
                    isSubmittingRef.current = false;
                    submitCountRef.current = submitCountRef.current + 1;
                    reRender();
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    }); }; }, [
        reRender,
        shouldValidateCallback,
        submitFocusError,
        validateAllFieldCriteria,
        validationContext,
        validationResolver,
        validationSchema,
    ]);
    var resetRefs = function () {
        errorsRef.current = {};
        fieldsRef.current = {};
        touchedFieldsRef.current = {};
        validFieldsRef.current = new Set();
        fieldsWithValidationRef.current = new Set();
        defaultRenderValuesRef.current = {};
        watchFieldsRef.current = new Set();
        dirtyFieldsRef.current = new Set();
        isWatchAllRef.current = false;
        isSubmittedRef.current = false;
        isDirtyRef.current = false;
        isValidRef.current = true;
        submitCountRef.current = 0;
    };
    var reset = function (values) {
        var e_1, _a;
        try {
            for (var _b = __values(Object.values(fieldsRef.current)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                if (value && isHTMLElement(value.ref) && value.ref.closest) {
                    try {
                        value.ref.closest('form').reset();
                        break;
                    }
                    catch (_d) { }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (values) {
            defaultValuesRef.current = values;
        }
        Object.values(resetFieldArrayFunctionRef.current).forEach(function (resetFieldArray) { return isFunction(resetFieldArray) && resetFieldArray(); });
        resetRefs();
        reRender();
    };
    var getValues = function (payload) {
        var fieldValues = getFieldsValues(fieldsRef.current);
        return payload && payload.nest
            ? transformToNestObject(fieldValues)
            : fieldValues;
    };
    useEffect(function () { return function () {
        isUnMount.current = true;
        fieldsRef.current &&
            Object.values(fieldsRef.current).forEach(function (field) {
                return removeFieldEventListenerAndRef(field, true);
            });
    }; }, [removeFieldEventListenerAndRef]);
    if (!shouldValidateCallback) {
        isValidRef.current =
            validFieldsRef.current.size >= fieldsWithValidationRef.current.size &&
                isEmptyObject(errorsRef.current);
    }
    var formState = {
        dirty: isDirtyRef.current,
        dirtyFields: dirtyFieldsRef.current,
        isSubmitted: isSubmittedRef.current,
        submitCount: submitCountRef.current,
        touched: touchedFieldsRef.current,
        isSubmitting: isSubmittingRef.current,
        isValid: isOnSubmit
            ? isSubmittedRef.current && isEmptyObject(errorsRef.current)
            : isValidRef.current,
    };
    var control = __assign(__assign({ register: register,
        unregister: unregister,
        removeFieldEventListener: removeFieldEventListener,
        getValues: getValues,
        setValue: setValue,
        triggerValidation: triggerValidation }, (shouldValidateCallback ? { validateSchemaIsValid: validateSchemaIsValid } : {})), { formState: formState, mode: {
            isOnBlur: isOnBlur,
            isOnSubmit: isOnSubmit,
        }, reValidateMode: {
            isReValidateOnBlur: isReValidateOnBlur,
            isReValidateOnSubmit: isReValidateOnSubmit,
        }, errorsRef: errorsRef,
        touchedFieldsRef: touchedFieldsRef,
        fieldsRef: fieldsRef,
        resetFieldArrayFunctionRef: resetFieldArrayFunctionRef,
        watchFieldArrayRef: watchFieldArrayRef,
        fieldArrayNamesRef: fieldArrayNamesRef,
        isDirtyRef: isDirtyRef,
        readFormStateRef: readFormStateRef,
        defaultValuesRef: defaultValuesRef });
    return {
        watch: watch,
        control: control,
        handleSubmit: handleSubmit,
        setValue: setValue,
        triggerValidation: triggerValidation,
        getValues: useCallback(getValues, []),
        reset: useCallback(reset, []),
        register: useCallback(register, [
            defaultValuesRef.current,
            defaultRenderValuesRef.current,
        ]),
        unregister: useCallback(unregister, []),
        clearError: useCallback(clearError, []),
        setError: useCallback(setError, []),
        errors: errorsRef.current,
        formState: isProxyEnabled
            ? new Proxy(formState, {
                get: function (obj, prop) {
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return {};
                },
            })
            : formState,
    };
}

var FormGlobalContext = React.createContext(null);
function useFormContext() {
    return React.useContext(FormGlobalContext);
}
function FormContext(_a) {
    var children = _a.children, formState = _a.formState, errors = _a.errors, restMethods = __rest(_a, ["children", "formState", "errors"]);
    return (React.createElement(FormGlobalContext.Provider, { value: __assign(__assign({}, restMethods), { formState: formState, errors: errors }) }, children));
}

var generateId = (function () {
    var d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
});

var appendId = function (value, keyName) {
    var _a;
    return (__assign(__assign({}, (isObject(value) ? value : { value: value })), (_a = {}, _a[keyName] = generateId(), _a)));
};
var mapIds = function (data, keyName) {
    return (isArray(data) ? data : []).map(function (value) { return appendId(value, keyName); });
};

var removeArrayAt = (function (data, index) {
    return isUndefined(index)
        ? []
        : data.filter(function (_, i) {
            return (isArray(index) ? index : [index]).indexOf(i) < 0;
        });
});

var moveArrayAt = (function (data, from, to) {
    return isArray(data) ? data.splice(to, 0, data.splice(from, 1)[0]) : [];
});

var swapArrayAt = (function (fields, indexA, indexB) {
    var _a, _b;
    return isArray(fields) &&
        (_a = [fields[indexB], fields[indexA]], _b = __read(_a, 2), fields[indexA] = _b[0], fields[indexB] = _b[1], _a);
});

var prependAt = (function (data, value) { return __spread((isArray(value) ? value : [value || null]), data); });

var insertAt = (function (data, index, value) { return __spread(data.slice(0, index), (isArray(value) ? value : [value || null]), data.slice(index)); });

var fillEmptyArray = (function (value) {
    return isArray(value) ? Array(value.length).fill(null) : undefined;
});

var useEffect$1 = React.useEffect, useRef$1 = React.useRef, useState$1 = React.useState;
var useFieldArray = function (_a) {
    var control = _a.control, name = _a.name, _b = _a.keyName, keyName = _b === void 0 ? 'id' : _b;
    var methods = useFormContext();
    var _c = control || methods.control, resetFieldArrayFunctionRef = _c.resetFieldArrayFunctionRef, fieldArrayNamesRef = _c.fieldArrayNamesRef, fieldsRef = _c.fieldsRef, getValues = _c.getValues, defaultValuesRef = _c.defaultValuesRef, removeFieldEventListener = _c.removeFieldEventListener, errorsRef = _c.errorsRef, isDirtyRef = _c.isDirtyRef, touchedFieldsRef = _c.touchedFieldsRef, readFormStateRef = _c.readFormStateRef, watchFieldArrayRef = _c.watchFieldArrayRef, validateSchemaIsValid = _c.validateSchemaIsValid;
    var memoizedDefaultValues = useRef$1(get(defaultValuesRef.current, name, []));
    var _d = __read(useState$1(mapIds(memoizedDefaultValues.current, keyName)), 2), fields = _d[0], setField = _d[1];
    var appendValueWithKey = function (value) {
        return value.map(function (v) { return appendId(v, keyName); });
    };
    var commonTasks = function (fieldsValues) {
        var _a;
        watchFieldArrayRef.current[name] = fieldsValues;
        setField(fieldsValues);
        if (readFormStateRef.current.isValid && validateSchemaIsValid) {
            validateSchemaIsValid((_a = {},
                _a[name] = fieldsValues,
                _a));
        }
    };
    var resetFields = function (flagOrFields) {
        if (readFormStateRef.current.dirty) {
            isDirtyRef.current = isUndefined(flagOrFields)
                ? true
                : getIsFieldsDifferent(flagOrFields, memoizedDefaultValues.current);
        }
        for (var key in fieldsRef.current) {
            console.log('remove ', key);
            if (isMatchFieldArrayName(key, name) && fieldsRef.current[key]) {
                removeFieldEventListener(fieldsRef.current[key], true);
            }
        }
    };
    var mapCurrentFieldsValueWithState = function () {
        var currentFieldsValue = getValues({ nest: true })[name];
        if (isArray(currentFieldsValue)) {
            for (var i = 0; i < currentFieldsValue.length; i++) {
                fields[i] = __assign(__assign({}, fields[i]), currentFieldsValue[i]);
            }
        }
    };
    var append = function (value) {
        mapCurrentFieldsValueWithState();
        if (readFormStateRef.current.dirty) {
            isDirtyRef.current = true;
        }
        commonTasks(__spread(fields, (isArray(value)
            ? appendValueWithKey(value)
            : [appendId(value, keyName)])));
    };
    var prepend = function (value) {
        mapCurrentFieldsValueWithState();
        resetFields();
        commonTasks(prependAt(fields, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        if (errorsRef.current[name]) {
            errorsRef.current[name] = prependAt(errorsRef.current[name], fillEmptyArray(value));
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = prependAt(touchedFieldsRef.current[name], fillEmptyArray(value));
        }
    };
    var remove = function (index) {
        if (!isUndefined(index)) {
            mapCurrentFieldsValueWithState();
        }
        resetFields(removeArrayAt(getFieldValueByName(fieldsRef.current, name), index));
        commonTasks(removeArrayAt(fields, index));
        if (errorsRef.current[name]) {
            errorsRef.current[name] = removeArrayAt(errorsRef.current[name], index);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = removeArrayAt(touchedFieldsRef.current[name], index);
        }
    };
    var insert = function (index, value) {
        mapCurrentFieldsValueWithState();
        resetFields(insertAt(getFieldValueByName(fieldsRef.current, name), index));
        commonTasks(insertAt(fields, index, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        if (errorsRef.current[name]) {
            errorsRef.current[name] = insertAt(errorsRef.current[name], index, fillEmptyArray(value));
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = insertAt(touchedFieldsRef.current[name], index, fillEmptyArray(value));
        }
    };
    var swap = function (indexA, indexB) {
        mapCurrentFieldsValueWithState();
        var fieldValues = getFieldValueByName(fieldsRef.current, name);
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields(fieldValues);
        swapArrayAt(fields, indexA, indexB);
        commonTasks(__spread(fields));
        if (errorsRef.current[name]) {
            swapArrayAt(errorsRef.current[name], indexA, indexB);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            swapArrayAt(touchedFieldsRef.current[name], indexA, indexB);
        }
    };
    var move = function (from, to) {
        mapCurrentFieldsValueWithState();
        var fieldValues = getFieldValueByName(fieldsRef.current, name);
        moveArrayAt(fieldValues, from, to);
        resetFields(fieldValues);
        moveArrayAt(fields, from, to);
        commonTasks(__spread(fields));
        if (errorsRef.current[name]) {
            moveArrayAt(errorsRef.current[name], from, to);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            moveArrayAt(touchedFieldsRef.current[name], from, to);
        }
    };
    var reset = function () {
        resetFields();
        memoizedDefaultValues.current = get(defaultValuesRef.current, name, []);
        setField(mapIds(memoizedDefaultValues.current, keyName));
    };
    useEffect$1(function () {
        var resetFunctions = resetFieldArrayFunctionRef.current;
        var fieldArrayNames = fieldArrayNamesRef.current;
        fieldArrayNames.add(name);
        resetFunctions[name] = reset;
        watchFieldArrayRef.current[name] = {};
        return function () {
            resetFields();
            delete resetFunctions[name];
            fieldArrayNames.delete(name);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        swap: swap,
        move: move,
        prepend: prepend,
        append: append,
        remove: remove,
        insert: insert,
        fields: fields,
    };
};

var getInputValue = (function (target, isCheckbox) {
    if (isNullOrUndefined(target)) {
        return target;
    }
    return isCheckbox
        ? isUndefined(target.checked)
            ? target
            : target.checked
        : isUndefined(target.value)
            ? target
            : target.value;
});

var Controller = function (_a) {
    var _b, _c, _d, _e;
    var name = _a.name, rules = _a.rules, InnerComponent = _a.as, onBlur = _a.onBlur, onChange = _a.onChange, _f = _a.onChangeName, onChangeName = _f === void 0 ? VALIDATION_MODE.onChange : _f, _g = _a.onBlurName, onBlurName = _g === void 0 ? VALIDATION_MODE.onBlur : _g, valueName = _a.valueName, defaultValue = _a.defaultValue, control = _a.control, rest = __rest(_a, ["name", "rules", "as", "onBlur", "onChange", "onChangeName", "onBlurName", "valueName", "defaultValue", "control"]);
    var methods = useFormContext();
    var _h = control || methods.control, defaultValuesRef = _h.defaultValuesRef, setValue = _h.setValue, register = _h.register, unregister = _h.unregister, errorsRef = _h.errorsRef, removeFieldEventListener = _h.removeFieldEventListener, triggerValidation = _h.triggerValidation, _j = _h.mode, isOnSubmit = _j.isOnSubmit, isOnBlur = _j.isOnBlur, _k = _h.reValidateMode, isReValidateOnBlur = _k.isReValidateOnBlur, isReValidateOnSubmit = _k.isReValidateOnSubmit, isSubmitted = _h.formState.isSubmitted, fieldsRef = _h.fieldsRef, fieldArrayNamesRef = _h.fieldArrayNamesRef;
    var _l = __read(React.useState(isUndefined(defaultValue)
        ? get(defaultValuesRef.current, name)
        : defaultValue), 2), value = _l[0], setInputStateValue = _l[1];
    var valueRef = React.useRef(value);
    var isCheckboxInput = isBoolean(value);
    var shouldValidate = function () {
        return !skipValidation({
            hasError: !!get(errorsRef.current, name),
            isOnBlur: isOnBlur,
            isOnSubmit: isOnSubmit,
            isReValidateOnBlur: isReValidateOnBlur,
            isReValidateOnSubmit: isReValidateOnSubmit,
            isSubmitted: isSubmitted,
        });
    };
    var commonTask = function (target) {
        var data = getInputValue(target, isCheckboxInput);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    };
    var eventWrapper = function (event) { return function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        return setValue(name, commonTask(event(arg)), shouldValidate());
    }; };
    var handleChange = function (e) {
        var data = commonTask(e && e.target ? e.target : e);
        setValue(name, data, shouldValidate());
    };
    var registerField = function () {
        if (isNameInFieldArray(fieldArrayNamesRef.current, name) &&
            fieldsRef.current[name]) {
            removeFieldEventListener(fieldsRef.current[name], true);
        }
        register(Object.defineProperty({
            name: name,
        }, VALUE, {
            set: function (data) {
                setInputStateValue(data);
                valueRef.current = data;
            },
            get: function () {
                return valueRef.current;
            },
        }), __assign({}, rules));
    };
    if (!fieldsRef.current[name]) {
        registerField();
    }
    React.useEffect(function () {
        registerField();
        return function () {
            if (!isNameInFieldArray(fieldArrayNamesRef.current, name)) {
                unregister(name);
            }
        };
    }, [name]);
    var shouldReValidateOnBlur = isOnBlur || isReValidateOnBlur;
    var props = __assign(__assign(__assign(__assign({ name: name }, rest), (onChange
        ? (_b = {}, _b[onChangeName] = eventWrapper(onChange), _b) : (_c = {}, _c[onChangeName] = handleChange, _c))), (onBlur || shouldReValidateOnBlur
        ? (_d = {},
            _d[onBlurName] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (onBlur) {
                    onBlur(args);
                }
                if (shouldReValidateOnBlur) {
                    triggerValidation(name);
                }
            },
            _d) : {})), (_e = {}, _e[valueName || (isCheckboxInput ? 'checked' : VALUE)] = value, _e));
    return React.isValidElement(InnerComponent) ? (React.cloneElement(InnerComponent, props)) : (React.createElement(InnerComponent, __assign({}, props)));
};

var ErrorMessage = function (_a) {
    var InnerComponent = _a.as, errors = _a.errors, name = _a.name, message = _a.message, children = _a.children, rest = __rest(_a, ["as", "errors", "name", "message", "children"]);
    var methods = useFormContext();
    var error = get(errors || methods.errors, name);
    if (!error) {
        return null;
    }
    var messageFromRegister = error.message, types = error.types;
    var props = __assign(__assign({}, (InnerComponent ? rest : {})), { children: children
            ? children({ message: messageFromRegister || message, messages: types })
            : messageFromRegister || message });
    return InnerComponent ? (React.isValidElement(InnerComponent) ? (React.cloneElement(InnerComponent, props)) : (React.createElement(InnerComponent, props))) : (React.createElement(React.Fragment, __assign({}, props)));
};

exports.Controller = Controller;
exports.ErrorMessage = ErrorMessage;
exports.FormContext = FormContext;
exports.useFieldArray = useFieldArray;
exports.useForm = useForm;
exports.useFormContext = useFormContext;
