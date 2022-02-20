  
  var data =[]

  function popup(id){
    
    element = document.querySelector('.popup');
    element.style.visibility = 'visible';    
    element.style.height = '600';
    
    if (document.getElementById(id).innerText != "+"){
        document.getElementById("total").innerText = document.getElementById(id).innerText + "  MT CO2e"
    }

    if(id=="butt1" || id=="butt14" || id=="butt27"){
        document.getElementById("date-text").innerHTML = "2022.01";


    }
    if(id=="butt2" || id=="butt15" || id=="butt28"){
        document.getElementById("date-text").innerHTML = "2021.12";
    }
    if(id=="butt3" || id=="butt16" || id=="butt29"){
        document.getElementById("date-text").innerHTML = "2021.11";
    }
    if(id=="butt4" || id=="butt17" || id=="butt30"){
        document.getElementById("date-text").innerHTML = "2021.10";
    }
    if(id=="butt5" || id=="butt18" || id=="butt31"){
        document.getElementById("date-text").innerHTML = "2021.09";
    }
    if(id=="butt6" || id=="butt19" || id=="butt32"){
        document.getElementById("date-text").innerHTML = "2021.08";
    }
    if(id=="butt7" || id=="butt20" || id=="butt33"){
        document.getElementById("date-text").innerHTML = "2021.07";
    }
    if(id=="butt8" || id=="butt21" || id=="butt34"){
        document.getElementById("date-text").innerHTML = "2021.06";
    }
    if(id=="butt9" || id=="butt22" || id=="butt35"){
        document.getElementById("date-text").innerHTML = "2021.05";
    }
    if(id=="butt10" || id=="butt23" || id=="butt36"){
        document.getElementById("date-text").innerHTML = "2021.04";
    }
    if(id=="butt11" || id=="butt24" || id=="butt37"){
        document.getElementById("date-text").innerHTML = "2021.03";
    }
    if(id=="butt12" || id=="butt25" || id=="butt38"){
        document.getElementById("date-text").innerHTML = "2021.02";
    }
    if(id=="butt13" || id=="butt26" || id=="butt39"){
        document.getElementById("date-text").innerHTML = "2021.01";
    }
    
    data[0] = id

}



function closer(){
    element = document.querySelector('.popup');
    element.style.visibility = 'hidden';    
    element.style.height = '-600';

    document.getElementById("total").innerHTML = "0.00 MT CO2e"

    document.querySelector('#ng').value = '';
    document.querySelector('#lg').value = '';
    document.querySelector('#lpg').value = '';
    document.querySelector('#one').value = '';
    document.querySelector('#two').value = '';
    document.querySelector('#kero').value = '';

    straight();

}

function calculate(){

    var ng = parseInt(document.getElementById("ng").value);
    var lg = parseInt(document.getElementById("lg").value);
    var lpg = parseInt(document.getElementById("lpg").value);
    var two = parseInt(document.getElementById("one").value);
    var six = parseInt(document.getElementById("two").value);
    var kero = parseInt(document.getElementById("kero").value);
    
    if(isNaN(ng)) ng = 0
    if(isNaN(lg)) lg = 0
    if(isNaN(lpg)) lpg = 0
    if(isNaN(two)) two = 0
    if(isNaN(six)) six = 0
    if(isNaN(kero)) kero = 0
    

    var toty = 0.0531*(ng) + 0.0523*(lg) + 0.057*(lpg) + 0.0102*(two) + 0.0113*(six) + 0.0102*(kero)
    var tot = (Math.round(toty * 100) / 100).toFixed(2);

    var cals = tot + "  MT CO2e"
    var str = tot + ""
    document.getElementById("total").innerHTML = cals
    document.getElementById(data[0]).innerHTML = str
    
    data.pop()

}

function straight(){
    var f_row = 0
    var s_row = 0
    var th_row = 0

    for (let i = 1; i < 14; i++) {
        if (document.getElementById("butt" + i).innerText != "+"){
            f_row += parseFloat(document.getElementById("butt" + i).innerText)
        }
      }
      var f = (Math.round(f_row * 100) / 100).toFixed(2);

      document.getElementById("tot_one").innerText = f + ""

      for (let m = 14; m < 27; m++) {
        if (document.getElementById("butt" + m).innerText != "+"){
            s_row += parseFloat(document.getElementById("butt" + m).innerText)
        }
      }
      var s = (Math.round(s_row * 100) / 100).toFixed(2);

      document.getElementById("tot_two").innerText = s + ""

      for (let t = 27; t < 40; t++) {
        if (document.getElementById("butt" + t).innerText != "+"){
            th_row += parseFloat(document.getElementById("butt" + t).innerText)
        }
      }
      var th = (Math.round(th_row * 100) / 100).toFixed(2);

      document.getElementById("tot_three").innerText = too_ + ""


}
