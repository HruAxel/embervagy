document.querySelector('#button').onclick = function() {
    const human = prompt('Ön biztos ember?');

    const tomb = ['Igen', 'igen', 'Nem', 'nem'];

    if(human == tomb[0]) alert("Na jó, tavább léphetsz elhiszem, hogy ember vagy!");
    else if(human == tomb[2]) alert("Te mocskos robot, és még be is vallod hát van bőr a képeden? Ja... Nincs!!!");
    else alert("Sajnálom de nem léphetsz tovább, ez a hely csak embereknek van fenttartva!");

};