"use strict";

$(document).ready(function() {


    $('div').click(function() {
        $(this).css('position', 'absolute');
        $(this).animate({ left: "+=200" }, 2000 ).queue(function() {
            $(this).animate({ top: "+=400" }, 2000 );
            // $(this).css('color', 'blue')
        })
    })


});