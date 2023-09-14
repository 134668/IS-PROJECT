$(document).ready(function () {

    "use strict";

    // Code for daterange
    $('input[name="daterange"]').daterangepicker({});

    // code for daterange with times
    $('input[name="datetimes"]').daterangepicker({
        timePicker: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        locale: {
            format: 'M/DD hh:mm A'
        }
    });

    // code for single date
    $('input[name="datesingle"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    });


    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    // code for custom daterange
    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);


    //  code for default Select2
    $('.js-states').select2();

    // code for multiple selection
    $('.js-states-mulitple').select2();

    // Code for Summernote WYSWYG Editor
    $('#summernote').summernote({
        placeholder: 'Hello Bootstrap 4',
        tabsize: 2,
        height: 200
    });


    // SmartWizard initialize
    $("#smartwizard-default-primary").smartWizard({
        theme: "default",
        showStepURLhash: false
    });

    $("#smartwizard-default-success").smartWizard({
        theme: "default",
        showStepURLhash: false
    });
    $("#smartwizard-default-danger").smartWizard({
        theme: "default",
        showStepURLhash: false
    });

    $("#smartwizard-arrows-primary").smartWizard({
        theme: "arrows",
        showStepURLhash: false
    });
    $("#smartwizard-arrows-success").smartWizard({
        theme: "arrows",
        showStepURLhash: false
    });
    $("#smartwizard-arrows-danger").smartWizard({
        theme: "arrows",
        showStepURLhash: false
    });


    // Input masked
    $(".date-inputmask").inputmask("dd/mm/yyyy");
    $(".phone-inputmask").inputmask("(999) 999-9999");
    $(".international-inputmask").inputmask("+9(999)999-9999");
    $(".xphone-inputmask").inputmask("(999) 999-9999 / x999999");
    $(".purchase-inputmask").inputmask("aaaa 9999-****");
    $(".cc-inputmask").inputmask("9999 9999 9999 9999");
    $(".ssn-inputmask").inputmask("999-99-9999");
    $(".isbn-inputmask").inputmask("999-99-999-9999-9");
    $(".currency-inputmask").inputmask("$9999");
    $(".percentage-inputmask").inputmask("99%");
    $(".optional-inputmask").inputmask("(99) 9999[9]-9999");
    $(".decimal-inputmask").inputmask({
        alias: "decimal"
        , radixPoint: "."
    });

    $(".email-inputmask").inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@@*{1,20}[*{2,6}][*{1,2}].*{1,}[.*{2,6}][.*{1,2}]"
        , greedy: !1
        , onBeforePaste: function (n, a) {
            return (e = e.toLowerCase()).replace("mailto:", "")
        }
        , definitions: {
            "*": {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~/-]"
                , cardinality: 1
                , casing: "lower"
            }
        }
    });
    $("#num-letter").inputmask("999-AAA");
    $("#date-time-once").inputmask();

});