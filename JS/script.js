
// zatial tu budem davat kusky kodu co si myslim ze mi pomozu pri robemi mojho webu... aj s popisom
// canvas v html je element na ktory vies kresli javascriptom 









// pomocou tohoto rozhybes sam seba na tvojem stranke ked tam chces dat ten easter egg v podobe..
// uplne dole tvoja fotka v strede, ked nan kliknu, tak sa zvacsi a z hora random zacnu padat 
// nejake veci, ty ich musis chytit, ked spadnu na spodok stranky je game over, 
// este nwm ako spravim to padanie objektov zhora, ani odchytavanie, bude sa dat ale iba pohybovat po okraje
// ked chiti otvarim usta ( nejaka animacia mojej hlavy ) ... asi to pojde do nekonecna, hore bude nejaky odpocet
// niekde na stranku napisem ze stranka obsahuje easter egg a user ho bude musiet najst

/* document.body.addEventListener("keypres", function keyboardedIt(event){
    var oldLeft = getComputedStyle(document.body ).left,
        newLeft;
        oldLeft = parseInt(oldLeft, 10); //50px -> 50, ta 10 je ze v ktorej sustave robime ( tu je to teda desiatkova )
        if ( event.key == "a" ) {
            newLeft = oldLeft - 10; // 40
        } 
        else if ( event.key == "d" ) {
            newLeft = oldLeft + 10; // 60
        } 
        document.body.style.left = newLeft + "px"
    }) */


    //uloha number 9
   
/*$(function(){
    var image = $("img"); //toto najde img element

    //na to, aby na elementy fungovali hodnoty "left", position musi byt iny ako static
    image.css({ position: "relative"});

    //jednoducha verzia, kde img iba odleti 
    //image.animate({ left: 500}, 2000 );

    //toto je komplikovanejsia verzia, musime nan kliknut a az potom poleti
    image.on("click", function(){
        image.animate({ left: $("html").width()}, 2000); 
    });
    var siteHeight = $("body").height();
    console.log(siteHeight);
}); 


    //uloha number 10


let = Number(window.prompt("napis sem cislo", ""));
var numberOne = Number(prompt("enter any number", ""));
var numberTwo = Number(prompt("enter another number", ""));
console.log(numberOne);
console.log(numberTwo);

$(function(){
    var resulto = numberOne + numberTwo;
    //console.log(resulto);
    alert("your number is " + resulto);
}) 



//uloha number 11


var uno = Number(prompt("enter number", ""));

$(function() {
    var duo = uno * 2;
    console.log(duo);
}) 

function vratCislo(uno){
    return uno * 3;
}

var vrateneCislo = vratCislo(uno);

console.log(vrateneCislo); 



$(function() {
    let licka = $(".menu-list li");
    //console.log(licka);
    $(".menu-list li:nth-of-type(2)").addClass("oznaceny");
    $(".menu-list li:last-child").addClass("oznaceny");
})



$(function() {
    var batn = $(".work-list");
    var batnNow = $(".work-list").find(".selected");

    //console.log(batnNow);

    $(batnNow).on("click", function() {
        var a = $(this);
        var parent = a.siblings("li");
        //console.log(a);
        if ( batnNow.is(a) ) alert("ahoj");
        var batnNow = parent;
        console.log(batnNOw);
        //parent.addClass("selected")
              //.siblings().removeClass("selected");
    })
    //toto musim este dokoncit, nejde mi preoznacit dalsi batn
      

});


*/


$(function() {
    //$("dd").hide(2000);
})

//prva verzia, jednoduhsia

$(function() {
    var list = $(".jokes"),
        copy = $(".copy");


    //copy.before( $("<h1>ja mam najvacsi... heading</h1>"));   iba take srandy
    //copy.after( $("<h1>ja tiez mam najvacsi... heading</h1>"));   toto tiez
    //$("<h1>ja mam mozno tiez</h1>").insertBefore( copy );    to iste akurat z opacneho konca zobrane
    
    /*list.find("dd").hide();
    list.find("dt").on("click", function(e) {
        $(this).next().slideToggle(1000)
               .siblings("dd").slideUp(500);
    //console.log(  );                //toto bol akordeon efekt
        //$(this).text("guleeee");

        var newContent = $(this).text() + $(this).next().text();
        copy.append( newContent + "hr" );     //tuto uz pridavame vybrany element do dalsieho elementu aby sa tam zobrazil
                                       //namiesto text(ten da iba vybrany content) dam append(to prida uz k existujucemu dalsi)
                                        //opak append je prepend, ten dany element da na vrch

        
        $(this).add( ($(this).next()) )
               .clone(true)
               .appendTo(list);

        e.preventDefault();       
    });*/

    var ul = $(".listTest");
    ul.find("li").on("click", function() {
        ul.append("<li>ja som tu novx</li>");
    });

    var galery = $(".gallery");
    galery.find("img").css({
        opacity: .5                      //toto by malo byt riesene skor cez css
    })/*.on("mouseenter", function() {
        $(this).fadeTo(400, 1);
    }).on("mouseleave", function() {
        $(this).fadeTo(400, .5);
    });*/
    /*.on("mouseenter mouseleave", function(event) {      //toto je viac programatorsky sposob cez podmienku
        if ( event.type == "mouseenter") $(this).fadeTo(400, 1);
        else $(this).fadeTo(400, .5);
    }) */
    .on("mouseenter mouseleave", function(event) {   // do podmienok na co ma reagovat mozeme ako tu dat aj viac argumentov(alebo nwm ako sa to vola)
        var opacity = event.type === "mouseenter" ? 1 : .5;  //toto je ternarny operator
        $(this).stop().fadeTo(200, opacity);     //toto zabezpecuje aby zmenil priehladnost pri prechode mysou
    });


    //lightbox

    var bx = $(".lightbox");  // vytiahol som si skupinu obrazkov, dal som ich pod jeden div
    var overlay = $("<div/>", { id: "overlay" });  // vytvoril som prazdny div s id overlay
        overlay.appendTo("body").hide(); // dal som ho na body a hned aj skryl

    bx.find("a").on("click", function(event) {  // najde elementy a pod tou skupinou
        var href = $(this).attr("href"),   // attr sluzi na vytiahnutie hodnoty nejakeho atributu
            imege = $("<img>", { src: href, alt: "idk"});  // tuto hodnotu mame ulozenu a dali sme ju tu do noveho img elementu
            overlay.html( imege )  // html zobere element a show ho zobrazi
                   .show();
        
        //overlay.show();  // pridal som dalsi prazdny div element do body
        event.preventDefault();  // zabezpecy aby neurobilo otvorenie linku, kedze to je default 
    });

    overlay.on("click", function() {  // pridanie lisenera na cely dokument, presnejsie na overlay element
        overlay.hide();    // tento element (this) zmizne, na kliknutie na document, teda kdekolvek na stranku
        

    });
    $(document).on("keyup", function(event) {
        if ( event.which === 27) overlay.hide();  // ked stalacim esc (27) tak overlay zmizne
    });

    // scrollovanie

    var menu = $(".work-list"),  // vytiahne ul list s linkami ked na ktore klikneme sa presuneme na tu sekciu
        menuLinks = menu.find("a"); // vytiahneme presne dany link

    menuLinks.on("click", function(event) {
        //console.dir( this );
        //console.dir( $(this) );
        var id = this.hash;
        $("html, body").animate( { scrollTop: $(id).offset().top }, 1000, function() {
            event.preventDefault();  // zabranime default nastaveniu                                                                              
            window.location.hash = id;  // zobrazi hash v url adrese
        }); // vezmeme celu stranku (html, body -> tam moze byt takto aj viac elementov), animujeme 
                                                                                     // offset znamena ze zobere hodnotu top a left od vrchu stranky( v totmto pripade iba top )
                                                                                    // this.hash je id daneho elementu, ak nejaky ma
                                                                                    // scrollTop znamena metodu do ktorej mozeme dat cislo a o to cislo sa stranka od vrchu posunie dole
    
    }); 
    
    // back to top

    var backToTop = $("<a>", {       // vytvorenie noveho a lementu na stranke
        class: "backTop",              // urcenie jeho classu
        html: '<img src="photo/redkocka.svg" alt="idk">'     // a realny html kod, ktory ma v nom byt
    });

    backToTop
        .hide()
        .appendTo("body")             // hned ho skryjeme, pripneme na body...
        .on("click", function() {
            $("html, body").animate({ scrollTop: 0 });         // a na click sa vyskrolujeme na vrch, to zabezpeci scrollTopp nastavena na 0
        });

    var win = $(window);     // odchytime si cely window
    win.on("scroll", function() {           // a teraz na akt skrolovania si nastavime podmienku ak okno(window) ma scrollTop viac or rovne 500 
       if ( win.scrollTop() >= 500 ) backToTop.show();   // backToTop sa ukaze inak ak menej tak zmizne
       else backToTop.hide();
    });


                                                                              






    //uloha 13, prva cast, opisana so vzoru, nevedel som to

    var kocka = $(".kocka").find("img");   // vytiahnem si dany obrazok do variable

   $(document).on("keydown", function(event) {   // tuto sa da lisener na cely dokument na keydown

    switch (event.which) {          // event vytiahne hodnotu klavesi ktore sa klikne a odchyti sa , to switch je lepsia forma pre podmienky ako if a else a pod
        case 87: //up               // v case ze sa event rovna 87 spravi kocka pohyb
           kocka.css({ top: "-=15" });
           break;
        case 65: //left
           kocka.css({ left: "-=15" });
           break;
        case 68: //right
           kocka.css({ left: "+=15" });
           break;
        case 83: //down
           kocka.css({ top: "+=15" });
           break; 
    };

   })

   //uloha 13, druha cast


        
        

   




});  



//uloha number 12


/*$(function() {

    var image = $(".dickhead"); //toto najde img element
    var load = $(".loading"); //toto najde krutiace koliesko
    var siteHeight = $("body").width();

    load.hide();
    //na to, aby na elementy fungovali hodnoty "left", position musi byt iny ako static
    image.css({ position: "relative"});
    //toto je komplikovanejsia verzia, musime nan kliknut a az potom poleti
    image.on("click", function(){
        load.fadeIn(); //hned po kliknuti sa koliesko zobrazi
        image.animate({ left: ( siteHeight - $(image).width() ) }, 2000, function(){
            //po skonceni tejto animacie load skryjeme
            load.fadeToggle();
        });
        

    });
    var siteHeight = $("body").width();
    //console.log(siteHeight);

    //druha cas ulohy s setTimeout
    image.on("contextmenu", function(event) {
        load.fadeIn();
        $(this).animate({ left: ( siteHeight - $(image).width() ) }, 2000);
        //setTimeout spusti casovac
        //po uvedenej dobe odpali funkciu, skryje load
        setTimeout(function() {
            load.fadeOut();
        }, 4000);

        //preventDefault, pretoze ked kliknes pravym na prvok tak sa obycajne otvoria moznosti
        event.preventDefault();
    })
}) */
