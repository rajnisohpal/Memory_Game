var imageVar = [];
var count=0;
var val1="";
var val2="";
var imgid1="";
var imgid2="";
var pairs=0;
var tic_time=0;
var timer = null;
$(document).ready(function(){
    $("img").click(function(){
        //alert("count"+count);
        var id1 = $(this).attr('id');
        count++;
        firstdivl=id1.charAt(0);
        $("#"+id1).attr("src",firstdivl+".png");
        if(count==1)
        {
            val1=firstdivl;
            imgid1=id1;
            //alert(imgid1+" "+val1+" "+count);
        }
        else
        {
            if(count==2)
            {
                val2=firstdivl;
                imgid2=id1;
                //setInterval($match,1000);
                setTimeout($match,600);
                //alert(imgid2+" "+val2+" "+count);
            }
        }

    });

    $shuffle = function(){
      $(".randimg").attr("src","blank.jpg");
       //alert("hi");
        var j=0;
        var temp="";
        var a=["a1","b1","c1","d1","e1","f1","g1","h1","a2","b2","c2","d2","e2","f2","g2","h2"];
        for(i=15;i>=0;i--)
        {
            j=Math.floor(Math.random()*i);

            //console.log("j="+j*i+" where i="+i);
                temp = a[i];
                a[i] = a[j];
                a[j]=temp;
                //alert(a[j]);
        }
        for(i=0;i<=15;i++)
        {
            firstl=a[i].charAt(0);
            //alert(firstl);
            //document.getElementsByClassName("randimg")[i].src = firstl+".png";
            imageVar[i]=firstl+".png";
            //imageId[i]=a[i];
            $("#x"+i).attr("id",a[i]);
        }
    }

    $("#btnnew").click(function(){
        //document.location.reload(true);
        if($("#btnnew").text()=="Stop Game")
        {
            alert("Game Stoped");
            $("#btnnew").text("New Game");
            $stopInterval();
        }
        else{
            $shuffle();
            $("#btnnew").text("Stop Game");
            tic_time=0;
            $startInterval();
        }

    });
    $shuffle();

    $match=function(){

        if(count==2 && val1==val2)
        {
            pairs++;
            $("#pairs").val(pairs);
            count=0;
            //clearInterval($match);
        }
        if(count==2 && val1!=val2)
        {
            $("#pairs").val(pairs);
            $("#"+imgid1).attr("src","blank.jpg");
            $("#"+imgid2).attr("src","blank.jpg");
            count=0;
            //clearInterval($match);
        }
        if(pairs==8)
        {
            alert("All pairs have been found");
        }
    }

    $timertic=function(){
        tic_time++;
        $("#time").text(tic_time);
    }
    $startInterval=function ()
    {
    timer= setInterval($timertic, 1000);
    }

    $stopInterval=function()
    {
        tic_time=0;
    clearInterval(timer);
    }

    $("#quit").click(function(){
        window.close();
    });

  });

//console.log(a[i]+"  ")

