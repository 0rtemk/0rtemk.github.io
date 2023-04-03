(function () {
    function init() {
        let router = new Router([
            new Route('profile', 'profile.html', true),            
            new Route('maps', 'maps.html'),
            new Route('timer', 'timer.html')
        ]);
    }
    init();
}());