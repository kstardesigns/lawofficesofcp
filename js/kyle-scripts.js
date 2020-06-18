jQuery(document).ready(function($) {
    //move form field label when clicked
    $('.elementor-field').focus(function() {
        $(this).siblings('.elementor-field-label').addClass('with-text');
    });
});