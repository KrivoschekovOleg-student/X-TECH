var btn = document.querySelector('#btn'),
    btn1 = document.querySelector('#btn1'),
    out = document.querySelector('#out'),
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    load = document.querySelector('#load'),
    del = document.querySelector('#del'),
    frag = document.querySelector('#frag'),
    speed = document.querySelector('#speed'),
    range = document.querySelector('#range'),
    rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = 500;   
    weight = document.querySelector('#weight'),
    kg = 5.5,
    kub = 3500,
    km = 2;
weight.oninput = function() {
    if (parseInt(this.value) > 5000) {
        this.value = "5000";
    }
}
vol.oninput = function() {
    this.value = this.value.substr(0,1);
}
// range slider
range.onchange = function () {
    rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = range.value;
}
// Basic function   
btn.onclick = function () {
    if (weight.value == '' && vol.value == '') {
        alert('Введите вес и объем груза');
    } else if (weight.value <= 0 || vol.value <= 0) {
        alert('Вес или объем не может быть меньше или равняться нулю!');
    } else {
        if (load.checked) {
            load.value = 1500;
        } else {
            load.value = 0;
        }
        if (del.checked) {
            del.value = 3500;
        } else {
            del.value = 0;
        }
        if (frag.checked) {
            frag.value = 2000;
        } else {
            frag.value = 0;
        }
        var sum = (weight.value * kg) + (vol.value * kub) + Number(load.value) + +Number(del.value) + Number(frag.value) + (range.value * km);
        if (speed.checked) {
            out.innerHTML = "Итог: " + sum * 1.5;
        } else {
            out.innerHTML = "Итог: " + sum;
        }
    }
}
btn1.onclick = function () {
    weight.value = '';
    vol.value = '';
    out.innerHTML = '0.0';
    load.checked = false;
    del.checked = false;
    frag.checked = false;
    speed.checked = false;
}