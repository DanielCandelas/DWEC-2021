jQuery.extend(jQuery.validator.messages, {
    required: "This field is required.",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

//Poner el script en el html la libreria validate

//Poniendo reglas en el html
jQuery(function() {
    jQuery( "#formulario_de_prueba" ).validate();
});


//Sin poner reglas en el html
jQuery(function() {
    jQuery( "#formulario_de_prueba" ).validate({
            rules: {
                    nombre: {
                            required: true,
                            minlength: 4,
                            maxlength: 20
                    }
            },
            messages: {
                    nombre: {
                            required: "Hey vamos, por favor, dános tu nombre",
                            minlength: $.format("Necesitamos por lo menos {0} caracteres"),
                            maxlength: $.format("{0} caracteres son demasiados!")
                    }
            }
    });
});