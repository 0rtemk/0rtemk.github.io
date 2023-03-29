let myMap

function loader(){
    if(!document.getElementById('map'))
    document.getElementById('map-loader').insertAdjacentHTML('beforeend', '<div id="map" class="loader-container"></div>');
    ymaps.ready(loadMap);
}

function loadMap() {
    if(myMap){
        myMap.destroy();
        myMap = null;
    }
    myMap = new ymaps.Map("map", {
        center: [61.785020, 34.346878],
        zoom: 12,
        controls: [
            'zoomControl',
            'rulerControl',
            'fullscreenControl',
            new ymaps.control.SearchControl({
                options: {
                    size: 'large',
                    provider: 'yandex#search'
                }
            })
        ]
    });

    let myPlacemark = new ymaps.Placemark([61.791257, 34.364545], {
        hintContent: 'Место жительства',
        balloonContent: 'Я тут живу, да'
    });

    myMap.geoObjects.add(myPlacemark);
}