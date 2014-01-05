define(['dom/sprite/Sprite'], function(Sprite){
    var Arrow = function(options) {
        options = options || {};
        Sprite.call(this, 'assets/img/arrow.png', {
            css: {
                position: 'absolute',
            },
            x: options.x || (window.innerWidth / 2),
            y: options.y || (window.innerHeight / 2),
            insert: {
                type: 'parent',
                target: document.body
            }
        }); 
    };
    
    return Arrow;    
});
