'use strict';

$(document).ready(function () {

    $('.subButton').click(() => {
        if ($('#inputSongName').val().length > 1 && $('#inputYoutubeLink').val().length > 1) {
            $('#songList').append($('#inputSongName').val());
        }
    });

    function populateList() {
        $('#songList').html(`<li class="text-center"><a href="https://www.youtube.com/watch?v=5LUfDEATQHM">Please Come Home For Chrismas - The Eagles</a></li>
                                   <li class="text-center"><a href="https://www.youtube.com/watch?v=fcMe551smvs">O Holy Night - Trans-Siberian Orchestra</a></li>
                                   <li class="text-center"><a href="https://www.youtube.com/watch?v=sCabI3MdV9g">Carol Of The Bells - Trans-Siberian Orchestra</a></li>`)
    }
    populateList();

    function
});