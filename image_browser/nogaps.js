function initialize(area, tau) {
window.area=area;
highlightonclickbutton('area',area);
window.tau=tau;
highlightonclickflat('tau',tau);
load_updated_image();
window.theinterval=500;
window.theloop=setInterval(function(){nexttau(0)},window.theinterval);
clearInterval(window.theloop);
};

function update_area(input) {
window.area=input;
highlightonclickbutton('area',input);
load_updated_image();
};

function update_map(input) {
window.map=input;
highlightonclickbutton('map',input);
load_updated_image();
};

function update_tau(input) {
window.tau=input;
highlightonclickflat('tau',input);
load_updated_image();
};

//function load_updated_image() {
//$timenow = time();
//document.theimage.src=('icon_'+area+'/'+map+'/'+map+'_'+tau+'.png');
//document.theimage.src=('../icon_'+area+'/'+map+'/'+map+'_'+tau+'.png?'+$(timenow));
//};
var num_casuale = Math.round(100*Math.random());
const zeroPad = (num, places) => String(num).padStart(places, '0')

function load_updated_image() {
file='image_browser/'+area+'/'+area+'_step_'+zeroPad(tau,3)+'_India.png?'+num_casuale

//console.log(zeroPad(tau,3))
//console.log(file)

document.theimage.src=(file);
};

function highlightonclickbutton(type,elementid) {
     $('.'+type+'select').each(function(index) {
          if ($(this).attr("id") == elementid) {
               $(this).addClass("selectedbutton");
          }
          else {
               $(this).removeClass("selectedbutton");
          }
     }); 
};

function highlightonclickflat(type,elementid) {
     $('.'+type+'select').each(function(index) {
          if ($(this).attr("id") == elementid) {
               $(this).addClass("selectedflat");
          }
          else {
               $(this).removeClass("selectedflat");
          }
     }); 
};

function nexttau(increment) {
window.theincrement=increment
var taus=[0,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102];//3433
lentau =  taus.length;

for (i in taus) {
    if (taus[i]==window.tau) {
        var next=parseInt(i)+increment
        if (next>= lentau) {
            var next=0
            };
        if (next<0) {
            var next= lentau-1
            };
        update_tau(taus[next]);
        break;
    }; 
};
};

// LOOP

function loopimages() {
clearInterval(window.theloop);
window.theloop=setInterval(function(){nexttau(1)},window.theinterval);
$('.speedcontrols').css('visibility','visible');
};

function loopimagesreverse() {
clearInterval(window.theloop);
window.theloop=setInterval(function(){nexttau(-1)},window.theinterval);
$('.speedcontrols').css('visibility','visible');
};

function stoploop() {
clearInterval(window.theloop);
};

function faster() {
clearInterval(window.theloop);
window.theinterval*=(2/3);
window.theloop=setInterval(function(){nexttau(window.theincrement)},window.theinterval);
};

function slower() {
clearInterval(window.theloop);
window.theinterval*=(3/2);
window.theloop=setInterval(function(){nexttau(window.theincrement)},window.theinterval);
};
