var context = document.getElementById('myCanvas').getContext('2d');
      context.beginPath();
      context.arc(288, 75, 70, 0, Math.PI, false);
      context.closePath();
      context.lineWidth = 5;
      context.fillStyle = 'blue';
      context.fill();
      context.strokeStyle = 'pink';
      context.stroke();

    var context = document.getElementById("mysecCanvas").getContext("2d");
    context.beginPath();
    context.arc(180,180,70,0,Math.PI*2,true);
    context.moveTo(230,180);
    context.arc(180,180,50,0,Math.PI,false);
    context.moveTo(155,150);
    context.arc(150,150,5,0,Math.PI*2,true);
    context.moveTo(215,150);
    context.arc(210,150,5,0,Math.PI*2,true);
    context.fillStyle = 'yellow';
    context.fill();
    context.strokeStyle = 'black'
    context.stroke();

    
