(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
 planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    // var brstring = planetsArray.join("<br>");
    // console.log(brstring);
    // document.write(brstring);


var listring = planetsArray.join("</li><li>");
    console.log(listring);

    var ulstring = "<ul><li>" + listring + "</li></ul>";
    document.write(ulstring);
    console.log(ulstring)





    // "<ul> <li>" + xxxxx + "</li> </ul>"

})();