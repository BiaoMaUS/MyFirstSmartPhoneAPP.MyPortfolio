var myIndex=0;
slide();
function slide(){
  var i;
  var x=document.getElementsByClassName("images");
  var v=document.getElementById("vet");
  var c1=document.getElementById("c1");
var c2=document.getElementById("c2");
var c3=document.getElementById("c3");
var c4=document.getElementById("c4");
var c5=document.getElementById("c5");

  var n=document.getElementById("navigator");
  for(i=0;i<x.length;i++){
    x[i].style.display="none";

}
  myIndex++;
  if(myIndex>x.length){myIndex=1}
  if(myIndex==1)
  {//p.style.opacity=0;
    v.style.opacity=1;

    n.style.color="rgba(34,125,170,1)";
    c1.style.color="white";
    c2.style.color="white";
    c3.style.color="white";
    c4.style.color="white";
    c5.style.color="white";

    v.innerHTML="veterinarin now";
  }else{
  //  p.style.opacity=1;
  //  v.style.opacity=0;
    v.innerHTML=" Will be a software programmer";
    n.style.color="white";
    c1.style.color="white";
    c2.style.color="white";
    c3.style.color="white";
    c4.style.color="white";
    c5.style.color="white";
  }

  x[myIndex-1].style.display="block";

  setTimeout(slide,2000);

}
