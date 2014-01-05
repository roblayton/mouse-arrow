require(['core/utils/FpsTracker', 'dom/primitives/Container', 'proj/Arrow', 'dom/readers/MouseReader'], function(FpsTracker, Container, Arrow, MouseReader) {
	var Master = function() {

		var init = function() {
			// Fps
			var fps = new FpsTracker();

			var container = new Container({
                css: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                },
				insert: {
					type: 'parent',
					target: document.body
				}
			});

            var arrow = new Arrow();
            
            var mr = new MouseReader(document.body, {
                callbacks: {
                    onMouseMove: function(evt, x, y) {
                        var dx = x - parseInt(arrow.x, 10) - (parseInt(arrow.width, 10) / 2);
                        var dy = y - parseInt(arrow.y, 10) - (parseInt(arrow.height, 10) / 2);
                        var rad = Math.atan2(dy, dx);
                        arrow.set({
                            rotation: rad * 180 / Math.PI
                        });
                    }
                }
            });
		};

		init();

	}; // End
	var master = new Master();
});

