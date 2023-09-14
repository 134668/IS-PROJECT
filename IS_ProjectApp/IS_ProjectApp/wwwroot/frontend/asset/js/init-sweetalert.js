$(document).ready(function () {

    "use strict";


    $("#btn-sa-basic").on('click', function () {
        Swal.fire('Hello world, basic sweet alert.');
    });

    $("#btn-sa-title").on('click', function () {
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question'
        );

    });

    $("#btn-sa-error").on('click', function () {
        Swal.fire({
            icon: 'error',
            title: 'Whoops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        });

    });
    $("#btn-sa-success").on('click', function () {

        Swal.fire({
            icon: 'success',
            title: 'Welcome...',
            text: 'You have successfully registered with usLorem ipsum dolor sit amet, consectetur adipiscing elit.',
            footer: '<a class="text-primary" href="#">Contact us if any issue?</a>'
        });
    });
    $("#btn-sa-warning").on('click', function () {

        Swal.fire({
            icon: 'warning',
            title: 'Warning...',
            text: 'Your balance is low, pls recharge it',
            footer: '<a class="text-primary" href="#">Contact us if any issue?</a>'
        });

    });

    $("#btn-sa-custom").on('click', function () {
        Swal.fire({
            title: '<strong>HTML <u>example</u></strong>',
            icon: 'info',
            html:
                'You can use <b>bold text</b>, ' +
                '<a href="//sweetalert2.github.io">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: 'Cancel',
            cancelButtonAriaLabel: 'Thumbs down'
        });

    });

    $("#btn-sa-custom-position").on('click', function () {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });

    });


    $("#btn-sa-confirm").on('click', function () {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#1ab394',
            cancelButtonColor: '#d9534f',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        });

    });

});