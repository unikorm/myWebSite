
// zatial tu budem davat kusky kodu co si myslim ze mi pomozu pri robemi mojho webu... aj s popisom
// canvas v html je element na ktory vies kresli javascriptom 









// pomocou tohoto rozhybes sam seba na tvojem stranke ked tam chces dat ten easter egg v podobe..
// uplne dole tvoja fotka v strede, ked nan kliknu, tak sa zvacsi a z hora random zacnu padat 
// nejake veci, ty ich musis chytit, ked spadnu na spodok stranky je game over, 
// este nwm ako spravim to padanie objektov zhora, ani odchytavanie, bude sa dat ale iba pohybovat po okraje
// ked chiti otvarim usta ( nejaka animacia mojej hlavy ) ... asi to pojde do nekonecna, hore bude nejaky odpocet
// niekde na stranku napisem ze stranka obsahuje easter egg a user ho bude musiet najst

document.body.addEventListener("keypres", function keyboardedIt(event){
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
    })