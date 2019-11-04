"use strict";

$(document).ready(function() {


    // $('div').click(function() {
    //     $(this).css('position', 'absolute');
    //     $(this)
    //         .animate({ left: "+=200" }, 2000 )
    //         .animate({ top: "+=400" }, 2000 )
    //         $(this).css('color', 'blue')
    //     })

});

// var introString = "Each event is preceded by Prophecy.
//                     But without the hero,
//                         there is no Event.
//                     -Zurin Arctus | the Underking
//
//                     In the waning years of the
//                     Third Era of Tamriel,
//                         a prisoner born on a certain day
//                     to uncertain parents was sent
//                     under guard, without explanation, to Morrowind,
//                         ignorant of the role he was
//                     to play in that nation'\s history…
//
//                     (female voice)
//                     They have taken you from the Imperial City'\s prison,
//                     first by carriage and now by boat,
//                         to the east to Morrowind.
//                         Fear not, for I am watchful,
//                         you have been chosen.
//
//                     (male voice)
//                     Wake up, we are here.
//                     Why are you shaking?
//                         Are you okay? Wakeup!";

var test = "This is a test.";
var test2 = ""
function fade() {
    for (var i = 0; i < test.length - 1; i++) {
        $('body').hide().append(test[i]).fadeIn(400);
console.log(test[i])
    }
}
fade();
// setTimeout(fade, 200)
// function fadeLetter(i) {
//     setTimeout(function () {
//         $('body').hide().html(test2 + test[i]).fadeIn(200);
//     }, 200)
// }
console.log(test);