function preencherDiasMes(mesSelecionado, dias) {
    let mesDiv = document.querySelector(mesSelecionado);
    let mesDia = mesDiv.querySelector('.number-days');
    let isMesJunho = mesDiv.classList.contains('mes_junho');
    let isMesJulho = mesDiv.classList.contains('mes_julho');
    let isMesAgosto = mesDiv.classList.contains('mes_agosto');
    let isMesSetembro = mesDiv.classList.contains('mes_setembro');
    let isMesOutubro = mesDiv.classList.contains('mes_outubro');
    let isMesNovembro = mesDiv.classList.contains('mes_novembro');
    let isMesDezembro = mesDiv.classList.contains('mes_dezembro');
    let tecVilela = "Vilela"
    let tecAldo = "Aldo"
    let tecIgor = "Igor"
    let tecBlenner = "Blenner"
    let tecAnderson = "Anderson"
    let tecJefferson = "Jefferson"
    let tecRoberth = "Roberth"
    let tecLucas = "Lucas"
    let tecNascimento = "Nascimento"
    
    
    for (let i = 1; i <= dias; i++) {
        // if(isMesJunho && i == 3) 
        // {
        //     mesDia.innerHTML += '<p class="day-selected">'+i+'<br> ' + tecVilela + ' <br>  ' + tecBlenner + ' </p>';    
        // }
        // else if(isMesJunho && i == 10) 
        // {
        //     mesDia.innerHTML += '<p class="day-selected">'+i+'<br> ' + tecIgor + ' <br>  ' + tecAnderson + ' </p>';    
        // }
        // else if(isMesJunho && i == 17) 
        // {
        //     mesDia.innerHTML += '<p class="day-selected">'+i+'<br> ' + tecJefferson + ' <br>  ' + tecRoberth + ' </p>';    
        // }
        // else if(isMesJunho && i == 24) 
        // {
        //     mesDia.innerHTML += '<p class="day-selected">'+i+'<br> ' + tecLucas + ' <br>  ' + tecNascimento + ' </p>';    
        // }
        // else if (isMesJulho && i === 1) 
        // {
        //     mesDia.innerHTML += '<p class="day-selected">' + i + '<br> ' + tecAldo +' <br>  ' + tecVilela + ' </p>';
        // }
        // else if (isMesJulho && i === 8) 
        // {
        //     mesDia.innerHTML += '<p class="day-selected">' + i + '<br> ' + tecIgor +' <br>  ' + tecBlenner + ' </p>';
        // } 
        // else if (isMesJulho && i === 15) 
        // {
        //     mesDia.innerHTML += '<p class="day-selected">' + i + '<br> ' + tecAnderson +' <br>  ' + tecJefferson + ' </p>';
        // } 
        // else if (isMesJulho && i === 22) 
        // {
        //     mesDia.innerHTML += '<p class="day-selected">' + i + '<br> ' + tecNascimento +' <br>  ' + tecRoberth + ' </p>';
        // } 
        // else if (isMesJulho && i === 29) 
        // {
        //     mesDia.innerHTML += '<p class="day-selected">' + i + '<br> ' + tecAldo +' <br>  ' + tecVilela + ' </p>';
        // } 
        if (isMesDezembro && i === 14) 
        {
            mesDia.innerHTML += '<p class="day-selected">' + i + '<br> Aniversario <br> Evandro </p>';
        } 
        else
        {
            mesDia.innerHTML += '<p>' + i + '</p>';
        }
  }
}
    preencherDiasMes('.mes_janeiro', 31);
    preencherDiasMes('.mes_fevereiro', 28);
    preencherDiasMes('.mes_marco', 31);
    preencherDiasMes('.mes_abril', 30);
    preencherDiasMes('.mes_maio', 31);
    preencherDiasMes('.mes_junho', 30);
    preencherDiasMes('.mes_julho', 31);
    preencherDiasMes('.mes_agosto', 30);
    preencherDiasMes('.mes_setembro', 31);
    preencherDiasMes('.mes_outubro', 31);
    preencherDiasMes('.mes_novembro', 30);
    preencherDiasMes('.mes_dezembro', 31);


// let julhoDiv = document.querySelector('.mes_julho');
// let julhoDia = julhoDiv.querySelector('.number-days');
// for(i = 1; i <= 31; i++){
//     if(i == 1) 
//     {
//         julhoDia.innerHTML += '<p class="day-selected">'+i+'<br> Aldo <br>  Vilela ' + '</p>';    
//     }
//     else if(i == 8) 
//     {
//         julhoDia.innerHTML += '<p class="day-selected">'+i+'<br> Igor <br>  Blenner ' + '</p>';    
//     }
//     else if(i == 15) 
//     {
//         julhoDia.innerHTML += '<p class="day-selected">'+i+'<br> Anderson <br>  Jefferson ' + '</p>';    
//     }
//     else if(i == 22) 
//     {
//         julhoDia.innerHTML += '<p class="day-selected">'+i+'<br> Vilela <br>  Roberth ' + '</p>';    
//     }
//     else if(i == 29) 
//     {
//         julhoDia.innerHTML += '<p class="day-selected">'+i+'<br> Vilela <br>  Aldo ' + '</p>';    
//     }
//     else
//     {
//         julhoDia.innerHTML += '<p>'+i+'</p>';
//     }
// }