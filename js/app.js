import data from '../data.json' with { type: "json" };

// Kindly run "python -m http.server" or similar if you want to run this webpage on a local server 
// (python should be installed for the python command).

// Canvas
var canvas = document.getElementById('canvas');
canvas.style.backgroundColor = data[0].theme.colours.primary;

// Container
var timeCont = document.createElement("div");
var titleCont = document.createElement("div");
var outroCont = document.createElement("div")

// Texts
var introText = document.createElement("h1");
var upcomingText = document.createElement("h1");
var subTitle = document.createElement("p");
var title = document.createElement("h1");
var textLine = document.createElement ("div");
var textLine2 = document.createElement ("div");
var h1 = document.createElement("h1");
var p = document.createElement("p");
var time = document.createElement("h1");


// Images
var img = document.createElement("img");
var img2 = document.createElement("img");
var img3 = document.createElement("img")
var imgL = document.createElement("img");
var imgR = document.createElement("img");
var imgL2 = document.createElement("img");
var imgR2 = document.createElement("img");

// Insert Text Value into Text Elements
introText.append("LIVE SPORTS THIS WEEK");
upcomingText.append("UPCOMING HIGHLIGHTS");
subTitle.append(data[0].thisWeek[0].subTitle);
// title.append(data[0].thisWeek[0].title);
titleCont.append(subTitle, title);
// time.append(data[0].thisWeek[0].startTime)
timeCont.append(time)
outroCont.append(img2, img3)


// Coogee Bay Logo
img.src = data[0].mainImage;
img.title = data[0].name;
img.style.alignSelf = "center";
img.className = "coogee-logo";


// Outro
outroCont.className = "outro-container"

// Coogee Bay Logo 2
img2.src = data[0].mainImage;
img2.title = data[0].name;
img2.style.alignSelf = "center";
img2.className = "coogee-logo2";

//Sportsyear Logo
img3.src = "../Sportsyear-logo.png"
img3.title = "Sportsyear"
img3.className = "sportsyear"

// Team 1 Logo
imgL.src = data[0].thisWeek[0].playerTeam1Image;
imgL.title = data[0].thisWeek[0].playerTeam1Name;
imgL.className = "team1-logo";

// Team 2 Logo
imgR.src = data[0].thisWeek[0].playerTeam2Image;
imgR.title = data[0].thisWeek[0].playerTeam2Name;
imgR.className = "team2-logo";

// Team 1 Logo 2
imgL2.src = data[0].thisWeek[1].playerTeam1Image;
imgL2.title = data[0].thisWeek[1].playerTeam1Name;
imgL2.className = "team1-logo2";

// Team 2 Logo 2
imgR2.src = data[0].thisWeek[1].playerTeam2Image;
imgR2.title = data[0].thisWeek[1].playerTeam2Name;
imgR2.className = "team2-logo2";

// Intro Text
introText.style.color = data[0].theme.colours.textPrimary;
introText.className = 'intro-text';

// upcoming Text
upcomingText.style.color = data[0].theme.colours.textPrimary;
upcomingText.className = 'upcoming-text';

// title Container
titleCont.className = "title-container"

// SubTitle
subTitle.className = "subtitle"
subTitle.style.fontSize = "3rem"
subTitle.style.color = data[0].theme.colours.textPrimary;

// Title
title.className = "title"
title.style.fontSize = "3rem"
title.style.color = data[0].theme.colours.textPrimary;
title.style.backgroundColor = data[0].theme.colours.primary

// cursor
textLine.className = "textline"
textLine.style.backgroundColor = data[0].theme.colours.textPrimary;
textLine2.className = "textline2"
textLine2.style.backgroundColor = "#fff"

// time
time.className = "time-val"
timeCont.className = "time-container"
timeCont.style.backgroundColor = data[0].theme.colours.secondary;
time.style.color = data[0].theme.colours.textSecondary;


function changeImage(newImage, newImage2) {
    imgL.src = newImage;
    imgR.src = newImage2;
    return; 
}

function changeImage2(newImage, newImage2) {
    imgL2.src = newImage;
    imgR2.src = newImage2;
    return; 
}



// Event Handler that starts on load
document.addEventListener("DOMContentLoaded", (event) => {
    // Config of Animations
    let tl = gsap.timeline();
    let y = '';
    let a = 5;
    let b = 7;
    gsap.registerPlugin(TextPlugin);

    gsap.registerEffect({
        name: 'imageTweenRight',
        effect: (target, config) => {
            return gsap.to(target, {
                duration: config.duration,
                x: -3,
                scale: 1.5,
                opacity: config.opacity
            })
        },
        dafaults: {duration: 1, opacity: 1},
        extendTimeline: true,
    });

    gsap.registerEffect({
        name: 'imageTweenLeft',
        effect: (target, config) => {
            return gsap.to(target, {
                duration: config.duration,
                x: 3,
                scale: 1.5,
                opacity: config.opacity
            })
        },
        dafaults: {duration: 1, opacity: 1},
        extendTimeline: true,
    });


    gsap.registerEffect({
        name: 'resizeImage',
        effect: (target, config) => {
            return gsap.to(target, {
                scale: config.scale
            })
        },
        defaults : {duration: 0.5},
        extendTimeline: true,
    })

    // gsap.registerEffect({
    //     name: 'Tween'
    // })




    // Timeline goes here...
    tl.set('.coogee-logo', {duration: 1, y: 200, ease: 'power1.in'})
      .set('.outro-container', {duration: 1, y: 200, ease: 'power1.in'})

    tl.to('.intro-text', {duration: 1, clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', ease: 'power1.in'})
      .to('.intro-text', {duration: 1, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', ease: 'power1.in'}, '+=2');
    
    
    tl.to('.coogee-logo', {duration: 1, y: 0, ease: 'power1.in'})
      .to('.coogee-logo', {duration: 0.5, y: -200, ease: 'power1.in'}, '+=2')

    tl.set('.team1-logo', { x: -230, scale: 1.5, opacity: 1, duration: 1 }, '>')
      .set('.team2-logo', { x: 230, scale: 1.5, opacity: 1, duration: 1 })
      .set('.subtitle', {y: 50, opacity: 1, duration: 1})


    tl.set('.team1-logo2', { x: -230, scale: 1.5, opacity: 1, duration: 1}, '>')
      .set('.team2-logo2', { x: 230, scale: 1.5, opacity: 1, duration: 1})
      

    // First Pair
    tl.imageTweenLeft('.team1-logo', { duration: 1 }, 'start')
      .imageTweenRight('.team2-logo', { duration: 1 }, 'start')
      .to('.subtitle', {duration: 1, y: 0}, 'start')
      .to('.title', {duration: 1, text: data[0].thisWeek[0].title, ease: 'power1.in'}, 'start')
      .resizeImage('.team1-logo', { scale: 1.1 }, 'sizing')
      .resizeImage('.team2-logo', { scale: 1.1 }, 'sizing')
      .to('.title-container', {duration: 1.5, opacity: 1}, 'endtime')
      .to('.time-container', {duration: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)'})
      .to('.time-val', {duration: 1, text: data[0].thisWeek[0].startTime, ease: 'power1.in'}, '<25%')
      .to('.time-container', {duration: 1, clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)'}, '+=1')
      
      
      
    tl.set('.subtitle', {y: 50, text: data[0].thisWeek[1].subTitle, duration: 1}, 'initialText')
      .set('.title', {duration: 1, text: '', ease: 'power1.in'}, 'initialText')
      .set('.title-container', {duration: 1, opacity: 1}, 'initialText')
      .set('.time-container', {duration: 1, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}, 'initialText')
      .set('.time-val', {duration: 2, text: '', ease: 'power1.in'}, 'initialText');


    // Second Pair
    tl.imageTweenLeft('.team1-logo2', { duration: 1, opacity: 1 }, 'start2')
      .imageTweenRight('.team2-logo2', { duration: 1, opacity: 1 }, 'start2')
      .resizeImage('.team1-logo2', { scale: 1.1 }, 'sizing2')
      .resizeImage('.team2-logo2', { scale: 1.1 }, 'sizing2')
      .to('.subtitle', {duration: 1, y: 0}, 'start2')
      .to('.title', {duration: 1, text: data[0].thisWeek[1].title, ease: 'power1.in'}, 'start2')
      .to('.title-container', {duration: 1.5, opacity: 1}, 'endtime2')
      .to('.time-container', {duration: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)'})
      .to('.time-val', {duration: 1, text: data[0].thisWeek[1].startTime, ease: 'power1.in'}, '<25%')
      .to('.time-container', {duration: 1, clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)'}, '+=1')
      

    // Loop for the rest of this week
    for (var x = 2; x < 4; x++ ) {
        let z = x + 1;
        tl.set(`.team1-logo${y}`, { 
            x: -230, 
            scale: 1.5, 
            duration: 1, 
            opacity: 1,
            zIndex: 6,
            attr: {
                src: data[0].thisWeek[x].playerTeam1Image
            }
            }, `initial${z}`)
          .set(`.team2-logo${y}`, { 
            x: 230, scale: 1.5, 
            duration: 1, 
            opacity: 1,
            zIndex: 6,
            attr: {
                src: data[0].thisWeek[x].playerTeam2Image
            }
            }, `initial${z}`)
            .set('.subtitle', {y: 50, text: data[0].thisWeek[x].subTitle, duration: 1}, `initial${z}`)
            .set('.title', {duration: 1, text: '', ease: 'power1.in'}, `initial${z}`)
            .set('.title-container', {duration: 1, opacity: 1}, `initial${z}`)
            .set('.time-container', {duration: 1, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}, `initial${z}`)
            .set('.time-val', {duration: 1, text: '', ease: 'power1.in'}, `initial${z}`);
            
    
        // Third Pair
        tl.imageTweenLeft(`.team1-logo${y}`, { duration: 1 }, `start${z}>25%`)
          .imageTweenRight(`.team2-logo${y}`, { duration: 1 }, `start${z}>25%`)
          .to('.subtitle', {y: 0, duration: 0.5}, `start${z}>25%`)
          .to('.title', {duration: 1, text: data[0].thisWeek[x].title, ease: 'power1.in'}, `start${z}>25%`)
          .resizeImage(`.team1-logo${y}`, { scale: 1.1 }, `sizing${z}`)
          .resizeImage(`.team2-logo${y}`, { scale: 1.1 }, `sizing${z}`)
          .to('.time-container', {duration: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)'})
          .to('.time-val', {duration: 1, text: data[0].thisWeek[x].startTime, ease: 'power1.in'}, '<25%')
          .to('.time-container', {duration: 1, clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)'}, '+=1')

        if (y === '2') {
            y = ''
        } else {
            y = '2'
        }
    }

    tl.set('.team1-logo2', { x: -230, scale: 1.5, opacity: 0, duration: 1 }, '>')
      .set('.team2-logo2', { x: 230, scale: 1.5, opacity: 0, duration: 1 })
      .set('.team1-logo', { x: -230, scale: 1.5, opacity: 0, duration: 1 })
      .set('.team2-logo', { x: 230, scale: 1.5, opacity: 0, duration: 1 })
      .set('.subtitle', {y: 50, opacity: 0, duration: 1})
      .set('.title', {duration: 1, text: '', ease: 'power1.in'})
      .set('.coogee-logo', {duration: 1, y: 200, ease: 'power1.in'})

    tl.to('.upcoming-text', {duration: 1.5, clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)'})
      .to('.upcoming-text', {duration: 1.5, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'}, '+=2');

    tl.to('.coogee-logo', {duration: 1, y: 0, ease: 'power1.in'})
      .to('.coogee-logo', {duration: 0.5, y: -200, ease: 'power1.in'}, '+=2')
    
    //Loop for Upcoming
    for (var x = 0; x < 3; x++ ) {
        let z = a + 1;
        tl.set(`.team1-logo${y}`, { 
            x: -230, 
            scale: 1.5, 
            duration: 1, 
            opacity: 1,
            zIndex: b,
            attr: {
                src: data[0].upcoming[x].playerTeam1Image
            }
            }, `initial${z}`)
          .set(`.team2-logo${y}`, { 
            x: 230, scale: 1.5, 
            duration: 1, 
            opacity: 1,
            zIndex: b,
            attr: {
                src: data[0].upcoming[x].playerTeam2Image
            }
            }, `initial${z}`)
            .set('.subtitle', {y: 50, text: data[0].upcoming[x].subTitle, opacity: 1, duration: 1}, `initial${z}`)
            .set('.title', {duration: 1, text: '', opacity: 1, ease: 'power1.in'}, `initial${z}`)
            .set('.title-container', {duration: 1, opacity: 1}, `initial${z}`)
            .set('.time-container', {duration: 1, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}, `initial${z}`)
            .set('.time-val', {duration: 1, text: '', ease: 'power1.in'}, `initial${z}`);
            
    
        // Third Pair
        tl.imageTweenLeft(`.team1-logo${y}`, { duration: 1 }, `start${z}`)
          .imageTweenRight(`.team2-logo${y}`, { duration: 1 }, `start${z}`)
          .to('.subtitle', {y: 0, duration: 0.5}, `start${z}`)
          .to('.title', {duration: 1, text: data[0].upcoming[x].title, ease: 'power1.in'}, `start${z}`)
          .resizeImage(`.team1-logo${y}`, { scale: 1.1 }, `sizing${z}`)
          .resizeImage(`.team2-logo${y}`, { scale: 1.1 }, `sizing${z}`)
          .to('.time-container', {duration: 1, clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)'})
          .to('.time-val', {duration: 1, text: data[0].upcoming[x].startTime, ease: 'power1.in'}, '<25%')
          .to('.time-container', {duration: 1, clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)'}, '+=1')

        if (y === '2') {
            y = ''
        } else {
            y = '2'
        }

        a++;
        b++;
    }

    tl.set('#sportsyear-logo-container', {opacity: 0}, '>')
      .set('.team1-logo2', { x: -230, scale: 1.5, opacity: 0, duration: 1 }, '>')
      .set('.team2-logo2', { x: 230, scale: 1.5, opacity: 0, duration: 1 })
      .set('.team1-logo', { x: -230, scale: 1.5, opacity: 0, duration: 1 })
      .set('.team2-logo', { x: 230, scale: 1.5, opacity: 0, duration: 1 })
      .set('.subtitle', {y: 50, opacity: 0, duration: 1})
      .set('.title', {duration: 1, text: '', ease: 'power1.in'})
      

    tl.to('.outro-container', {duration: 1, y: 0, ease: 'power1.in'}, '>')
      .to('.sportsyear', {duration: 1, clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)', ease: 'power1.in'})
      .to('.sportsyear', {duration: 0.5, scale: 0.9, ease: 'power1.in'})
      .to('.coogee-logo2', {duration: 1, opacity: 0, ease: 'power1.in'}, '>');
    
});



// To show data (for testing)
console.log(data)

// Append elements into canvas
canvas.append(
    img,
    outroCont,
    introText,
    upcomingText,
    // textLine,
    titleCont,
    timeCont, 
    imgL, 
    imgR,
    imgL2,
    imgR2
);
