function doAnims() {
}

function loadingCompass() {

  
  let compass = draw.nested()
                .x('50%');

  let circle = compass.circle(100)
                .stroke({ color: 'black', width: 5 })
                .fill({ opacity: 0 });

  let downTri = compass.polygon('50,50 38,50 50,100 62,50')
                .fill('none')
                .stroke({ color: 'black', width: 5});

  
}

let draw = SVG().addTo('#loading').size('100%',400);
loadingCompass();
doAnims();
