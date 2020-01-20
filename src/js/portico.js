$(document).ready(function() {
    'use strict';

    function wowInit() {
        var scrollingAnimations = !1;
        if (scrollingAnimations) {
            $(window).on('load', function() {
                setTimeout(function() {
                    new WOW().init()
                }, 400)
            })
        }
    }
    wowInit();
    $('.mobile-btn, .close-mob-menu').on('click', function() {
        $('.mob-menu-wrapper').toggleClass('active')
    });
    $('.mobile-menu ul li a').on('click', function() {
        $('.mob-menu-wrapper').removeClass('active')
    });
    $('.main-menu ul li a[href*="#"], .mobile-menu ul li a[href*="#"]').on('click', function(event) {
        event.preventDefault();
        var margin = $('.header').outerHeight();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - margin
        }, 800)
    });
    if ($('div').is('.portfolio')) {
        mixitup('.portfolio', {
            animation: {
                duration: 400,
                effectsIn: 'fade translateY(-100%)',
                effectsOut: 'fade translateY(-100%)'
            },
            selectors: {
                control: '[data-mixitup-control]'
            }
        })
    }
    $('#portfolio-modal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget);
        var workName = button.data('name');
        $(this).find('.modal-body').hide();
        $('.modal-body[data-name = ' + workName + ']').show()
    });

    function fixedHeader() {
        var ww = $(window).scrollTop();
        if (ww > 0) {
            $('.header').addClass('active')
        } else {
            $('.header').removeClass('active')
        }
    }
    fixedHeader();
    $(window).on('scroll', function() {
        fixedHeader()
    });
    $(document).on('hidden.bs.modal', '.modal', function() {
        if ($('.modal:visible').length) {
            $(document.body).addClass('modal-open');
            if ($(window).width() > 991) {
                $(document.body).css({
                    paddingRight: '17px'
                })
            }
        } else {
            $(document.body).css({
                paddingRight: 0
            })
        }
    });

    function validateForm(selector) {
        Array.from(document.querySelectorAll(selector)).forEach(function(item) {
            item.addEventListener('input', function(e) {
                if (e.target.value === '') {
                    item.dataset.touched = !1
                }
            });
            item.addEventListener('invalid', function() {
                item.dataset.touched = !0
            });
            item.addEventListener('blur', function() {
                if (item.value !== '') item.dataset.touched = !0
            })
        })
    }
    validateForm('.js-modal-form .form-field');
    validateForm('.js-footer-form .form-field');
    var modalForm = document.querySelector('.js-modal-form');
    var footerForm = document.querySelector('.js-footer-form');
    var modalFormName = '.js-modal-form';
    var footerFormName = '.js-footer-form';
    modalForm.addEventListener('submit', function(e) {
        submitForm(e, modalFormName)
    });
    footerForm.addEventListener('submit', function(e) {
        submitForm(e, footerFormName)
    });

    function submitForm(e, formName) {
        e.preventDefault();
        var name = $(formName + ' .js-field-name').val();
        var email = $(formName + ' .js-field-email').val();
        var message = $(formName + ' .js-field-message').val();
        var formData = {
            name: name,
            email: email,
            message: message
        };
        $.ajax({
            type: "POST",
            url: '/mail.php',
            data: formData,
            success: function() {
                $('#contact-modal').modal('hide');
                $('#thanks-modal').modal('show')
            },
            error: function() {
                console.log('error');
                $('#contact-modal').modal('hide');
                $('#thanks-modal').modal('show')
            }
        })
    }
})