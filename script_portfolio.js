window.addEventListener("load", sidenVises);


function sidenVises(){
    document.querySelector("#indhold_02").classList.add("hide");
    document.querySelector("#indhold_03").classList.add("hide");
    document.querySelector("#indhold_04").classList.add("hide");
    document.querySelector("#indhold_05").classList.add("hide");


    document.querySelector("#forside_02_tekst").addEventListener("click", click1);
    document.querySelector("#indhold_02_tekst").addEventListener("click", click2);

    document.querySelector("#forside_03_tekst").addEventListener("click", click3);
    document.querySelector("#indhold_03_tekst").addEventListener("click", click4);

    document.querySelector("#forside_04_tekst").addEventListener("click", click5);
    document.querySelector("#indhold_04_tekst").addEventListener("click", click6);

    document.querySelector("#forside_05_tekst").addEventListener("click", click7);
    document.querySelector("#indhold_05_tekst").addEventListener("click", click8);
}

function click1(){
    document.querySelector("#forside_02").classList.add("hide");
    document.querySelector("#indhold_02").classList.remove("hide");
}

function click2(){
    document.querySelector("#forside_02").classList.remove("hide");
    document.querySelector("#indhold_02").classList.add("hide");
}

function click3(){
    document.querySelector("#forside_03").classList.add("hide");
    document.querySelector("#indhold_03").classList.remove("hide");
}
function click4(){
    document.querySelector("#forside_03").classList.remove("hide");
    document.querySelector("#indhold_03").classList.add("hide");
}

function click5(){
    document.querySelector("#forside_04").classList.add("hide");
    document.querySelector("#indhold_04").classList.remove("hide");
}
function click6(){
    document.querySelector("#forside_04").classList.remove("hide");
    document.querySelector("#indhold_04").classList.add("hide");
}
function click7(){
    document.querySelector("#forside_05").classList.add("hide");
    document.querySelector("#indhold_05").classList.remove("hide");
}
function click8(){
    document.querySelector("#forside_05").classList.remove("hide");
    document.querySelector("#indhold_05").classList.add("hide");
}