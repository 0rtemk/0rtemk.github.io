function Gallery_min(){
    var TT = document.getElementById('images_size');
    if (!(TT.classList.contains('img_min'))){
        TT.classList.add('img_min');
    }
    if(TT.classList.contains('img_averange')){
        TT.classList.remove('img_averange');
    }
    if(TT.classList.contains('img_max')){
        TT.classList.remove('img_max');
    }

}

function Gallery_averange(){
    var TT = document.getElementById('images_size');
    if (!(TT.classList.contains("img_averange"))){
        TT.classList.add('img_averange');
    }
    if(TT.classList.contains('img_min')){
        TT.classList.remove('img_min');
    }
    if(TT.classList.contains('img_max')){
        TT.classList.remove('img_max');
    }
}

function Gallery_max(){
    var TT = document.getElementById('images_size');
    if (!(TT.classList.contains('img_max'))){
        TT.classList.add('img_max');
    }
    if(TT.classList.contains('img_averange')){
        TT.classList.remove('img_averange');
    }
    if(TT.classList.contains('img_min')){
        TT.classList.remove('img_min');
    }
}