var haslo5 = new Array(11);
haslo5[0]="KAZIK NAJLPSZYM PREZESEM";
haslo5[1]="TYLKO EVENTZONE";
haslo5[2]="ZAJEBISTE KATERINGI I IMPREZY";
haslo5[3]="SEKS NA PLAŻY";
haslo5[4]="NIECH ŻYJĘ BAL";
haslo5[5]="KEVIN SAM W DOMU";
haslo5[6]="TELETUBIŚ";
haslo5[7]="LUBIĘ POLOPARTY";
haslo5[8]="KAZIK NAJLEPSZYM PREZESEM";
haslo5[9]="NIEMA LIPY";
haslo5[10]="DŁUGI TO CHŁOP Z MAZUR";


function losowanie()
{
    var numer=Math.floor(Math.random()*haslo5.length);
    return haslo5[numer];
}
var haslo= losowanie();
var haslo1 = "";
var dlugosc = haslo.length;
var ile_skuch = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var fail = new Audio("fail.mp3");
var win = new Audio("win.mp3");
 
for(i=0;i<dlugosc;i++)
{
    if(haslo.charAt(i)==" ") haslo1=haslo1+" ";
    else haslo1=haslo1+"-";
}
 
function wypiszhaslo()
{
    document.getElementById("plansza").innerHTML= haslo1;
}
window.onload= start;
 
var litery = new Array(35);
 
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";
 
function start()
{
    var tresc_diva = "";
     
    for(i=0; i<=34;i++)
    {
        var element = "lit"+i;
        tresc_diva=tresc_diva+'<div class="litera" onclick="sprawdz('+i+')"  id="'+element+'">'+litery[i]+'</div>';
        if((i+1) % 7 ==0) tresc_diva=tresc_diva+'<div style="clear:both;"></div>';
    }
     
    document.getElementById("alfabet").innerHTML = tresc_diva;
     
    wypiszhaslo();
}
 
String.prototype.ustawZnak=function(miejsce,znak)
{
    if(miejsce>this.length-1) return this.toString();
    else return this.substr(0,miejsce)+znak+this.substr(miejsce+1);
}
 
function sprawdz(nr)
{
    var trafiona = false;
     
    for(i=0;i<dlugosc;i++)
    {
        if(haslo.charAt(i)== litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i,litery[nr]);
            trafiona=true;
        }
    }
    if(trafiona==true)
    {
        yes.play();
        var element = "lit"+nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        wypiszhaslo();
    }
    else
    {
        no.play();
        var element = "lit"+nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        wypiszhaslo();
         
        //skucha
        ile_skuch++;
        document.getElementById("szubienica").innerHTML = '<img src="img/s'+ile_skuch+'.jpg"/>';
    }
   
  //wygrana
  if(haslo==haslo1)
  {
      win.play();
      document.getElementById("alfabet").innerHTML = 'Tak jest! Podano prawidłowe hasło: '+haslo+'<br/><br/>                               <span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
  }
   
  //przegrana
  if(ile_skuch>=9)
  {
      fail.play();
      document.getElementById("alfabet").innerHTML = 'Przegrana! Prawidłowe hasło to: '+haslo+'<br/><br/>                                   <span class="reset1" onclick="location.reload()">JESZCZE RAZ?</span>';
  }
}
