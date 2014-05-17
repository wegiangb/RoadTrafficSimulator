define(["geometry/point"], function(Point) {
    function Rect(arg0, arg1, arg2, arg3) {
        if (arguments.length === 4) {
            this.position = new Point(arg0, arg1);
            this.width = arg2;
            this.height = arg3;
        } else {
            throw new Error("Invalid parammeters passed to Rect constructor");
        }
    }

    Rect.prototype.setPosition = function() {
        var position = Object.create(Point.prototype);
        Point.apply(position, arguments);
        this.position = position;
    };

    Rect.prototype.getPosition = function() {
        return this.position;
    };

    Rect.prototype.setLeft = function(x) {
        this.position.x = x;
    };

    Rect.prototype.getLeft = function() {
        return this.position.x;
    };

    Rect.prototype.getRight = function() {
        return this.getLeft() + this.getWidth();
    };

    Rect.prototype.setTop = function(y) {
        this.position.y = y;
    };

    Rect.prototype.getTop = function() {
        return this.position.y;
    };

    Rect.prototype.getBottom = function() {
        return this.getTop() + this.getHeight();
    };

    Rect.prototype.setWidth = function(width) {
        this.width = width;
    };

    Rect.prototype.getWidth = function() {
        return this.width;
    };

    Rect.prototype.setHeight = function(height) {
        this.height = height;
    };

    Rect.prototype.getHeight = function() {
        return this.height;
    };

    Rect.prototype.getCenter = function() {
        return this.position.add(new Point(this.width / 2, this.height/ 2));
    };

    return Rect;
});
