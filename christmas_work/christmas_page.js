'use strict';

// Created array of objects containing title and youtube link
let songArray = [
    {
        name: "Please Come Home For Chrismas - The Eagles",
        link: "https://www.youtube.com/watch?v=5LUfDEATQHM",
    },
    {
        name: "O Holy Night - Trans-Siberian Orchestra",
        link: "https://www.youtube.com/watch?v=fcMe551smvs",
    },
    {
        name: "Carol Of The Bells - Trans-Siberian Orchestra",
        link: "https://www.youtube.com/watch?v=sCabI3MdV9g",
    }
];



    // TO SHOW LIST
    function populateList() {
        for (let i = 0; i < songArray.length; i++)
        {
            $('#songList').append(`<li class="text-center"><a href=${songArray[i].link}>${songArray[i].name}</a></li>`)
        }
    }
    populateList();

// TO ADD SONGS
$('#subButton').click(() => {
    if ($('#inputSongName').val().length > 1) {
        let song = {
            name: $('#inputSongName').val()
        };
        songArray.push(song);
        console.log(songArray);
        $('#songList').html("");

        populateList();
    }
});

    // function
