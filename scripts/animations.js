function doAnims() {
  compassInner.animate({
    duration: 1000,
    when: 'now',
    swing: true
  }).ease('<>')
  .rotate(90)
  .loop(true, true);

}

let draw = SVG().addTo('#loading').size('100%',400);
let compass = draw.nested()
  .x('50%')
  .y('50%');

let compassInner = compass.group();
let outCircle = compass.circle(110)
  .stroke({ color: 'black', width: 3 })
  .fill({ opacity: 0 })
  .dx(-5)
  .dy(-5);
let inCircle = compass.circle(100)
  .stroke({ color: 'black', width: 2 })
  .fill({ opacity: 0 });

let downTri = compassInner.polygon('50,60 38,55 50,95 62,55')
  .fill('none')
  .stroke({ color: 'black', width: 2});

let upTri = compassInner.polygon('50,40 38,45 50,5 62,45')
  .fill('none')
  .stroke({ color: 'black', width: 2 });

compassInner.rotate(-45);
doAnims();
