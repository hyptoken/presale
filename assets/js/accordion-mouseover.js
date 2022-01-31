$('[data-toggle="collapse"]').on('mouseenter', function() {
    $(this).parents('.accordion-item').find('.collapse').collapse('show');
});
$('[data-toggle="collapse"]').on('mouseleave', function() {
    $(this).parents('.accordion-item').find('.collapse').collapse('hide');
});
