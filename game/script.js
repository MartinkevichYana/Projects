var dv=document.createElement('div');
var dv1=document.createElement('div');
var button=document.createElement('button');
var butend=document.createElement('button');
var table=document.createElement('table');
document.body.appendChild(table);
var tbody=document.createElement('tbody');
table.appendChild(tbody);
tbody.appendChild(dv);
tbody.appendChild(dv1);
var img = document.createElement("IMG");
img.setAttribute("class", "hero");
img.src = "hero.png";   

dv.setAttribute("class", "window");
dv1.setAttribute("class", "wind");

dv.appendChild(button);
button.innerHTML = "НАЖМИТЕ, ЧТОБЫ НАЧАТЬ";
butend.innerHTML = "ИГРАТЬ ЕЩЁ РАЗ";
var time=0;

var labirint = [
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 1, 0, 2, 2, 0, 0, 0],
[1, 1, 2, 1, 0, 1, 1, 1, 0, 1],
[1, 1, 0, 1, 0, 1, 2, 1, 1, 1],
[1, 0, 0, 1, 2, 0, 0, 0, 0, 1],
[1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
[1, 0, 1, 0, 2, 2, 1, 1, 0, 1],
[1, 2, 1, 0, 1, 0, 1, 1, 2, 1],
[1, 0, 0, 0, 1, 2, 2, 0, 0, 1],
[1, 0, 1, 1, 1, 1, 1, 1, 1, 1]];

function cr() { 

    function td(tr) {
        for(var i=0; i<10; i++)
        {
            var td=document.createElement('td');
            tr.appendChild(td);
        }
    }

    for(var i=0; i<10; i++)
    {
        var tr=document.createElement('tr');
        tbody.appendChild(tr);
        td(tr);    
    }

    for(var i=0;i<labirint.length; i++)
    {
        for(var j=0;j<labirint[i].length; j++)
        {
            if(labirint[i][j]==1)
            {
                 var td=document.getElementsByTagName('td')[(i*10)+j];
                 td.setAttribute("class","active");
            }
            if(labirint[i][j]==2)
            {
                 var td=document.getElementsByTagName('td')[(i*10)+j];
                 td.setAttribute("class","bc");
            }
        }
    }
}

cr();

var k=91;

var start=0;
var exit=document.getElementsByTagName('td')[19];
exit.setAttribute('class','exit');

function createtabl() {

    dv.classList.toggle('visible');
    clockStart();
    start=document.getElementsByTagName('td')[91];
    start.appendChild(img);
    document.body.addEventListener("keydown", fn);
    document.body.addEventListener("keypress", fn);
}

function fn(e) {

    if(k==19)
    {
        dv1.classList.add('vis');
        if(time == 0) 
        {
            time=clockStop();
            dv1.innerHTML= '<h1>' + "Поздравляю! Вы прошли лабиринт за " + time + " сек" + '</h1>';
            dv1.appendChild(butend);
        }
        dv1.innerHTML= '<h1>'  + "<br>"+ "Поздравляю! Вы прошли лабиринт за " + time + " сек" +  "</br>"+'</h1>';
        dv1.appendChild(butend);
        
    }
    else
    {
        switch(e.keyCode) { 

            case 40: // вниз
            if((k<90) && (document.getElementsByTagName('td')[k+10].getAttribute("class") != 'active'))
            {
                k+=10;
                start=document.getElementsByTagName('td')[k];
                start.appendChild(img);
            }
            break;

            case 38: // вверх
            if((k >= 10) && (document.getElementsByTagName('td')[k-10].getAttribute("class") != 'active'))
            {
                k-=10;
                start=document.getElementsByTagName('td')[k];
                start.appendChild(img);
            }
            break;

            case 37: // влево
            if((k!=0) && (k != 10) && (k != 20) && (k != 30) && (k != 40) && (k != 50) && (k != 60) && (k != 70) && (k != 80) && (k != 90) && (document.getElementsByTagName('td')[k-1].getAttribute("class") != 'active'))
            {
                k-=1;
                start=document.getElementsByTagName('td')[k];
                start.appendChild(img);
            }
            break;

            case 39: // вправо
            if((k != 9) && (k != 19) && (k != 29) && (k != 39) && (k != 49) && (k != 59) && (k != 69) && (k != 79) && (k != 89) && (k != 99) && (document.getElementsByTagName('td')[k+1].getAttribute("class") != 'active'))
            {
                k+=1;
                start=document.getElementsByTagName('td')[k];
                start.appendChild(img);
            }
            break;
        }
    }
}

function clockStart() {

    var d=new Date();
    t=d.getTime();
}

function clockStop() {
  
  var d1=new Date();
  return Math.ceil((d1.getTime()-t)/1000);
}

button.addEventListener("click", createtabl);

butend.addEventListener("click", function () {

    time=0;
    dv1.classList.toggle('vis');
    k=91;
    start=document.getElementsByTagName('td')[91];
    start.appendChild(img);
    clockStart();
});
