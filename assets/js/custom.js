$(document).ready(function() {

    /* slimscroll js */
    $('.side-scroll').slimScroll({
        height: '94vh'
    });





    var panelHeight = $(".panel-scroll").height();
    var panelMaxHeight = $(window).height() - 203;
    if (panelHeight > panelMaxHeight) {
        pHeight = panelMaxHeight;
        console.log("enter");
        $('.panel-scroll').slimScroll({
            height: pHeight
        });
    }

    /* switch js */
    $.fn.bootstrapSwitch.defaults.onColor = 'blue';
    $.fn.bootstrapSwitch.defaults.offColor = 'orange';
    $("[name='properties-checkbox']").bootstrapSwitch({

    });

    /* file upload js */
    $(function() {

        // We can attach the `fileselect` event to all file inputs on the page
        $(document).on('change', ':file', function() {
            var input = $(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            input.trigger('fileselect', [numFiles, label]);
        });

        // We can watch for our custom `fileselect` event like this
        $(document).ready(function() {
            $(':file').on('fileselect', function(event, numFiles, label) {

                var input = $(this).parents('.input-group').find(':text'),
                    log = numFiles > 1 ? numFiles + ' files selected' : label;

                if (input.length) {
                    input.val(log);
                } else {
                    if (log) alert(log);
                }

            });
        });

    });

    /* wysiwyg editor */

    $('.wysiwyg').froalaEditor({
        toolbarButtons: ['bold', '|', 'italic', '|', 'underline', '|', 'color', '|', 'fontSize', ],
    })

    /* wysiwyg editor */




});

/* tabs js */
$('ul.nav.nav-tabs  a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
});

(function($) {
    // Test for making sure event are maintained
    $('.js-alert-test').click(function() {
        alert('Button Clicked: Event was maintained');
    });
    fakewaffle.responsiveTabs(['xs', 'sm']);
})(jQuery);

/* tabs js end */

/* On click outside the div hide sidebar container */
$(document).mouseup(function(e) {
    var container = $("#sidebar");
    if (!container.is(e.target) // if the target of the click isn't the container...
        && (container.has(e.target).length === 0)) // ... nor a descendant of the container
    {
        if (!$('.ed-sidebar a').is(e.target)) {
            container.hide('slide', {
                direction: 'right',
                easing: 'linear'
            }, 400);
        } else {
            container.show('slide', {
                direction: 'right',
                easing: 'linear'
            }, 400);
        }
    }
});
/* End of funtion */
$(document).on('click', 'a.visible', function() {
    if (!$(this).hasClass('disable')) {
        $("a.visible").html('<i class="material-icons visibility_off">visibility_off</i>');
        $('.visible-parent a').addClass('disable');
    } else {
        $("a.visible").html('<i class="material-icons">visibility</i>');
        $('.visible-parent a').removeClass('disable');
    }

})

$(document).on('click', 'a.head,a.sub-head ', function() {
    $('a.section-head span.circle').removeClass('active');
    $('span.active-circle').removeClass('active-circle');
    $(this).siblings("span.hollow").addClass('active-circle');
})
$(document).on('click', 'a.sub-head ', function() {
    $('a.section-head span.circle').removeClass('active');
    $('span.active-circle').removeClass('active-circle');
    $(this).find("span").addClass('active-circle');
})
$(document).on('click', '.ed-sidebar a.section-head ', function() {
    $('a.section-head span.circle').removeClass('active');
    $('span.active-circle').removeClass('active-circle');
    $('a.head span.active-circle').removeClass('active-circle');
    $(this).find("span").addClass('active');
})
$('.show-check').click(function() {
    if ($(this).prop('checked')) {
        $(this).parents('.type-details').find('.div-check').fadeIn('slow');
    } else
        $(this).parents('.type-details').find('.div-check').fadeOut('slow');
});
$(document).on('click', '.editor-tab', function() {
    var toggleValue = $(this).data("toggle");
    //console.log('*[data-section="' + toggleValue + '"]');
    $('*[data-section="' + toggleValue + '"]').removeClass('hide').siblings().addClass('hide');

})