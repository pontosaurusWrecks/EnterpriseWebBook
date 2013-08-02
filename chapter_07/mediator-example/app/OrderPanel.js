// Generated by CoffeeScript 1.6.3
var __bind = function (fn, me) {
    return function () {
        return fn.apply(me, arguments);
    };
};

define(function () {
    var OrderPanel, mediator;
    mediator = {};
    return OrderPanel = (function () {
        function OrderPanel() {
            this.setMediator = __bind(this.setMediator, this);
            this.getMediator = __bind(this.getMediator, this);
            this.onPriceUpdate = __bind(this.onPriceUpdate, this);
        }

        OrderPanel.prototype.onPriceUpdate = function (price) {
            return console.log("price updated to " + price);
        };

        OrderPanel.prototype.getMediator = function () {
            return mediator;
        };

        OrderPanel.prototype.setMediator = function (m) {
            return mediator = m;
        };

        return OrderPanel;

    })();
});

/*
 //@ sourceMappingURL=OrderPanel.map
 */
