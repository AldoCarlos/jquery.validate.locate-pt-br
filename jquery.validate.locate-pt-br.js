/**
 * Translated default messages for the jQuery validation plugin.
 * Language: PT_BR
 * Translator: Francisco Ernesto Teixeira <fco_ernesto@yahoo.com.br>
 */
jQuery.extend(jQuery.validator.messages, {
	required: "Informe o valor do campo.",
	remote: "Por favor, corrija este campo.",
	email: "Email deve ser válido.",
	url: "URL deve válida.",
	date: "Data deve ser válida.",
	dateISO: "Data deve ser válida.",
	number: "Número deve ser válido.",
	digits: "Número deve ser válido.",
	creditcard: "Cartão de crédito deve ser válido.",
	equalTo: "Por favor, forne&ccedil;a o mesmo valor novamente.",
	accept: "Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.",
	maxlength: jQuery.validator.format("Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres."),
	minlength: jQuery.validator.format("Por favor, forne&ccedil;a ao menos {0} caracteres."),
	rangelength: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento."),
	range: jQuery.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1}."),
	max: jQuery.validator.format("Por favor, forne&ccedil;a um valor menor ou igual a {0}."),
	min: jQuery.validator.format("Por favor, forne&ccedil;a um valor maior ou igual a {0}.")
});

jQuery.validator.methods.number = function (value, element) {
    return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value);
};

jQuery.validator.methods.range = function (value, element, param) {
    var vlr = parseFloat(value.toString().replace(/\./ig, '').replace(',', '.'));
    return this.optional(element) || (vlr >= param[0] && vlr <= param[1]);
};

jQuery.validator.methods.min = function (value, element, param) {
    var vlr = parseFloat(value.toString().replace(/\./ig, '').replace(',', '.'));
    return this.optional(element) || vlr >= param;
};

jQuery.validator.methods.max = function (value, element, param) {
    var vlr = parseFloat(value.toString().replace(/\./ig, '').replace(',', '.'));
    return this.optional(element) || vlr <= param;
};