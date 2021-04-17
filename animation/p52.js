//tree object
let tree;
let branch;
let treey;
//time function
let nowhour,totalminuit=0,nowminuit=0,starthour,endhour;

function returntotalminuit(start,end)
{
return (end-start)*60;
}
function returnhour()
{
  return hour();
}
function returnminuit()
{
  return minute();
}
function returnmin(array)
{
  return Math.min.apply(null,array);
}
function setup()
{
    let canvas=createCanvas(windowWidth,displayHeight);
    canvas.parent('canvas2');
    treey=height;
}
let angle=0;
function draw()
{

    choiceskycolor();
    line(width/2,height,width/2,treey);
    if(treey>height*2/5)
    {
      treey-=2;
    }
  else 
  {
    if(angle<=0.6)
    {
      angle+=0.005;
    }
    translate(width/2,height);
    translate(0,-height*3/5);
    branchs(120);
  }
    

}
///treefunction
function branchs(len)
{
  
  if (len > 4) 
  {
    push();   
    rotate(angle);  
    line(0, 0, 0, -len);  
    translate(0, -len); 
    branchs(len*0.67);      
    pop();    
    // 왼쪽
    push();
    rotate(-angle);
    line(0, 0, 0, -len);
    translate(0, -len);
    branchs(len*0.67);
    pop();
  }
}
//resizefunction
function windowResized() {
  resizeCanvas(windowWidth, displayHeight);
}
///skyfunction
function choiceskycolor()
{
  nowhour=returnhour();
  nowhour=12;
  if(nowhour>=7&&nowhour<=16)///아침~낮 푸른하늘
  {
    sr=80, sg=180, sb=205;
    er=120,eg=187,eb=194;
    starthour=7,endhour=15; 
  }
  else if(nowhour>=17&&nowhour<=18)///낮~저녁 노을이지는
  {
  sr=120, sg=187, sb=194;
   er=242,eg=164,eb=102;
   starthour=16,endhour=18;
  }
  else if(nowhour>=19&&nowhour<=20)////저녁~밤 약간 검정색
  {
    sr=242,sg=164,sb=102;
    er=50,eg=50,eb=50;
    starthour=19,endhour=20;
  }
  else if(nowhour>=20&&nowhour<=23)////밤~새벽 어둠
  {
    sr=50,sg=50,sb=50;
    er=10,eg=10,eb=10;
    starthour=20,endhour=24;
  }
  else if(nowhour>=0&&nowhour<=4)///새벽
  {
    sr=10,sg=10,sb=10;
    er=10,eg=10,eb=10;
    starthour=1;endhour=4;
  }
  else if(nowhour>=5&&nowhour<=6)////새벽~아침 해가뜨는
  {
    sr=10,sg=10,sb=10;
    er=80,eg=180,eb=205;
    starthour=5,endhour=6;
  }
  totalminuit=returntotalminuit(starthour,endhour);
  nowminuit=(nowhour-starthour)*60+returnminuit();
  background(map(nowminuit,0,totalminuit,sr,er),map(nowminuit,0,totalminuit,sg,eg),map(nowminuit,0,totalminuit,sb,eb));
}
