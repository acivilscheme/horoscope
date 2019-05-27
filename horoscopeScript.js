$(document).ready(function(){
    //Figure out what sign was clicked last page
    var vHash = window.location.hash;

    changeSignSection(vHash);
});

function changeSignSection(vhash)
{   
    switch(vhash)
    {
        case "#aries":
            $("#aries").fadeIn(1500);
            break;
        case "#taurus":
            $("#taurus").fadeIn(1500);
            break;
        case "#gemini":
            $("#gemini").fadeIn(1500);
            break;
        case "#cancer":
            $("#cancer").fadeIn(1500);
            break;
        case "#leo":
            $("#leo").fadeIn(1500);
            break;
        case "#virgo":
            $("#virgo").fadeIn(1500);
            break;
        case "#libra":
            $("#libra").fadeIn(1500);
            break;
        case "#scorpio":
            $("#scorpio").fadeIn(1500);
            break;
        case "#sagittarius":
            $("#sagittarius").fadeIn(1500);
            break;
        case "#capricorn":
            $("#capricorn").fadeIn(1500);
            break;
        case "#aquarius":
            $("#aquarius").fadeIn(1500);
            break;
        case "#pisces":
            $("#pisces").fadeIn(1500);
            break;
        default:
            console.log("Sign Section Not Found");
    }
}