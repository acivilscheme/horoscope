$(document).ready(function(){

    //Wheelnav Code
    wheel = new wheelnav("myDivWheel");
    wheel.wheelRadius = wheel.wheelRadius * 1.3;
    wheel.navAngle = 180;
    wheel.clockwise = false;
    wheel.clickModeRotate = false;
    wheel.slicePathFunction = slicePath().MenuSliceWithoutLine;
    wheel.spreaderInTitle = "";
    wheel.spreaderOutTitle = "";
    wheel.spreaderTitleFont = "50 12px Arial";
    wheel.spreaderRadius = 30;
    wheel.spreaderEnable = false;
    wheel.currentPercent = 0.0;
    wheel.animateeffect = "easeOut";
    wheel.animatetime = 1500;
    wheel.animatetimeCalculated = false; 
    wheel.sliceTransformFunction = sliceTransform().ScaleTransform;
    wheel.selectedNavItemIndex = null;
    wheel.colors = new Array("#cccccc");
    wheel.sliceHoverAttr = {fill: "#33a9dc"};
    wheel.initWheel(["imgsrc:images/signs/aries-sm.png", "imgsrc:images/signs/taurus-sm.png", "imgsrc:images/signs/gemini-sm.png", "imgsrc:images/signs/cancer-sm.png", "imgsrc:images/signs/leo-sm.png", "imgsrc:images/signs/virgo-sm.png", "imgsrc:images/signs/libra-sm.png", "imgsrc:images/signs/scorpio-sm.png", "imgsrc:images/signs/sagittarius-sm.png", "imgsrc:images/signs/capricorn-sm.png", "imgsrc:images/signs/aquarius-sm.png", "imgsrc:images/signs/pisces-sm.png"]);
    wheel.createWheel();
    
    function activateWheel()
    {
        wheel.spreadWheel();
    }
    
    setTimeout(activateWheel, 1000);

    //On Hover on sign wheel buttons, display sign picture, name, and month range
    wheel.navItems[0].navSlice.mouseover(function(){changeCenterSign("Aries", "March 21-April 19", "url(images/signs/aries-big.png)")});
    wheel.navItems[1].navSlice.mouseover(function(){changeCenterSign("Taurus", "April 20-May 20", "url(images/signs/taurus-big.png)")});
    wheel.navItems[2].navSlice.mouseover(function(){changeCenterSign("Gemini", "May 21-June 20", "url(images/signs/gemini-big.png)")});
    wheel.navItems[3].navSlice.mouseover(function(){changeCenterSign("Cancer", "June 21-July 22", "url(images/signs/cancer-big.png)")});
    wheel.navItems[4].navSlice.mouseover(function(){changeCenterSign("Leo", "July 23-August 22", "url(images/signs/leo-big.png)")});
    wheel.navItems[5].navSlice.mouseover(function(){changeCenterSign("Virgo", "August 23-September 22", "url(images/signs/virgo-big.png)")});
    wheel.navItems[6].navSlice.mouseover(function(){changeCenterSign("Libra", "September 23-October 22", "url(images/signs/libra-big.png)")});
    wheel.navItems[7].navSlice.mouseover(function(){changeCenterSign("Scorpio", "October 23-November 21", "url(images/signs/scorpio-big.png)")});
    wheel.navItems[8].navSlice.mouseover(function(){changeCenterSign("Sagittarius", "November 22-December 21", "url(images/signs/sagittarius-big.png)")});
    wheel.navItems[9].navSlice.mouseover(function(){changeCenterSign("Capricorn", "December 22-January 19", "url(images/signs/capricorn-big.png)")});
    wheel.navItems[10].navSlice.mouseover(function(){changeCenterSign("Aquarius", "January 20-February 18", "url(images/signs/aquarius-big.png)")});
    wheel.navItems[11].navSlice.mouseover(function(){changeCenterSign("Pisces", "February 19-March 20", "url(images/signs/pisces-big.png)")});

    //Set links to sign wheel buttons
    wheel.navItems[0].navigateFunction = function(){window.location.href="horoscope.html#aries";};
    wheel.navItems[1].navigateFunction = function(){window.location.href="horoscope.html#taurus";};
    wheel.navItems[2].navigateFunction = function(){window.location.href="horoscope.html#gemini";};
    wheel.navItems[3].navigateFunction = function(){window.location.href="horoscope.html#cancer";};
    wheel.navItems[4].navigateFunction = function(){window.location.href="horoscope.html#leo";};
    wheel.navItems[5].navigateFunction = function(){window.location.href="horoscope.html#virgo";};
    wheel.navItems[6].navigateFunction = function(){window.location.href="horoscope.html#libra";};
    wheel.navItems[7].navigateFunction = function(){window.location.href="horoscope.html#scorpio";};
    wheel.navItems[8].navigateFunction = function(){window.location.href="horoscope.html#sagittarius";};
    wheel.navItems[9].navigateFunction = function(){window.location.href="horoscope.html#capricorn";};
    wheel.navItems[10].navigateFunction = function(){window.location.href="horoscope.html#aquarius";};
    wheel.navItems[11].navigateFunction  = function(){window.location.href="horoscope.html#pisces";};

    //Create Datepicker and when closes outputs date selected
    $("#datepicker").datepicker({changeMonth: true, changeYear: false, dateFormat: "mmdd", 
    onClose: function(){
        var vdate = $("#datepicker").val();
        pickSign(vdate);
    }});
});

//Change sign background, name, and month
function changeCenterSign(sName, sMonth, sURL)
{  
    $("#centerSignName").text(sName);
    $("#centerSignMon").text(sMonth);
    $("#centerSign").css("background-image", sURL);
}

//Choose sign based upon date
function pickSign(sDate)
{
    if(sDate != "" && (sDate <= 119 || sDate >= 1222))
    {
        changeCenterSign("Capricorn", "December 22-January 19", "url(images/signs/capricorn-big.png)");
        wheel.navItems[9].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 120 && sDate <= 218)
    {
        changeCenterSign("Aquarius", "January 20-February 18", "url(images/signs/aquarius-big.png)");
        wheel.navItems[10].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 219 && sDate <= 320)
    {
        changeCenterSign("Pisces", "February 19-March 20", "url(images/signs/pisces-big.png)");
        wheel.navItems[11].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 321 && sDate <= 419)
    {
        changeCenterSign("Aries", "March 21-April 19", "url(images/signs/aries-big.png)");
        wheel.navItems[0].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 420 && sDate <= 520)
    {
        changeCenterSign("Taurus", "April 20-May 20", "url(images/signs/taurus-big.png)");
        wheel.navItems[1].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 521 && sDate <= 620)
    {
        changeCenterSign("Gemini", "May 21-June 20", "url(images/signs/gemini-big.png)");
        wheel.navItems[2].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 621 && sDate <= 722)
    {
        changeCenterSign("Cancer", "June 21-July 22", "url(images/signs/cancer-big.png)");
        wheel.navItems[3].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 723 && sDate <= 822)
    {
        changeCenterSign("Leo", "July 23-August 22", "url(images/signs/leo-big.png)");
        wheel.navItems[4].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 823 && sDate <= 922)
    {
        changeCenterSign("Virgo", "August 23-September 22", "url(images/signs/virgo-big.png)");
        wheel.navItems[5].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 923 && sDate <= 1022)
    {
        changeCenterSign("Libra", "September 23-October 22", "url(images/signs/libra-big.png)");
        wheel.navItems[6].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 1023 && sDate <= 1121)
    {
        changeCenterSign("Scorpio", "October 23-November 21", "url(images/signs/scorpio-big.png)");
        wheel.navItems[7].navItem.attr({fill: "#33a9dc"});
    }
    else if(sDate >= 1122 && sDate <= 1221)
    {
        changeCenterSign("Sagittarius", "November 22-December 21", "url(images/signs/sagittarius-big.png)");
        wheel.navItems[8].navItem.attr({fill: "#33a9dc"});
    }
    else
        console.log("pickSign: No valid date selected.");
}