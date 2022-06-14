window.addEventListener("load", sidenVises);


function sidenVises(){
    //skjuler alle teksterne bag boksene//
    document.querySelector("#cv_1_tekst").classList.add("hide");
    document.querySelector("#cv_2_tekst").classList.add("hide");
    document.querySelector("#cv_3_tekst").classList.add("hide");


    //definerer eventlistenere (click funktioner)//
    document.querySelector("#cv_1_forside").addEventListener("mouseover", click1);
    document.querySelector("#cv_1_tekst").addEventListener("mouseout", click11);

    document.querySelector("#cv_2_forside").addEventListener("click", click2);
    document.querySelector("#cv_2_tekst").addEventListener("click", click22);

    document.querySelector("#cv_3_forside").addEventListener("click", click3);
    document.querySelector("#cv_3_tekst").addEventListener("click", click33);
}


    //skjuler forsider og viser tekst ved click på bokse (og omvendt)//
    function click1(){
        document.querySelector("#cv_1_tekst").classList.remove("hide");
        document.querySelector("#cv_1_forside").classList.add("hide");
    }
    function click11(){
        document.querySelector("#cv_1_tekst").classList.add("hide");
        document.querySelector("#cv_1_forside").classList.remove("hide");
    }

    function click2(){
        document.querySelector("#cv_2_tekst").classList.remove("hide");
        document.querySelector("#cv_2_forside").classList.add("hide");
    }
    function click22(){
        document.querySelector("#cv_2_tekst").classList.add("hide");
        document.querySelector("#cv_2_forside").classList.remove("hide");
    }

    function click3(){
        document.querySelector("#cv_3_tekst").classList.remove("hide");
        document.querySelector("#cv_3_forside").classList.add("hide");
    }
    function click33(){
        document.querySelector("#cv_3_tekst").classList.add("hide");
        document.querySelector("#cv_3_forside").classList.remove("hide");
    }
