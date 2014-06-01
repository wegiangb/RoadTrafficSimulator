define(["jquery", "visualizer", "gui", "world"], function($, Visualizer, GUI, World) {
    "use strict";

    function App() {
        this.FPS = 30;
    }

    App.prototype.init = function() {
        var self = this;
        this.world = new World();
        this.world.load();
        this.visualizer = new Visualizer(this.world);
        this.gui = new GUI();
        this.gui.addButton("Save", this.world.save.bind(this.world));
        this.gui.addButton("Load", this.world.load.bind(this.world));
        this.gui.addButton("Clear", this.world.clear.bind(this.world));
        this.gui.addButton("Add car", this.world.addRandomCar.bind(this.world));
        this.gui.addButton("Add 10 cars", function() {
            for (var i = 0; i < 10; i++) {
                self.world.addRandomCar.call(self.world);
            }
        });
        this.gui.addButton("Del cars", this.world.removeAllCars.bind(this.world));
        this.gui.addButton(function() {
            return "Cars: " + self.world.cars.length;
        }, null);
        this.gui.addButton("-", this.visualizer.zoomOut.bind(this.visualizer));
        this.gui.addButton(function() {
            return Math.floor(100 * self.visualizer.zoomer.scale) + "%";
        }, this.visualizer.zoomNormal.bind(this.visualizer));
        this.gui.addButton("+", this.visualizer.zoomIn.bind(this.visualizer));
        setInterval(this.visualizer.draw.bind(this.visualizer), 1000 / this.FPS);
        setInterval(this.world.onTick.bind(this.world), 1000 / this.FPS);
        setInterval(this.gui.draw.bind(this.gui), 1000 / this.FPS);
    };

    return App;
});
