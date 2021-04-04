
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
    .on("mouseenter mouseleave", function(event) {
        var opacity = event.type === "mouseenter" ? 1 : .5;
        $(this).stop().fadeTo(200, opacity);
    });


    //lightbox
    


    //uloha 13, prva cast, opisana so vzoru, nevedel som to

    var kocka = $(".kocka").find("img");

   $(document).on("keydown", function(event) {

    switch (event.which) {
        case 87: //up
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
