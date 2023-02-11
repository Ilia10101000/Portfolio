'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('list', 'list.html'),
            new Route('stack', 'stack.html')
        ]);
    }
    init();
}());
