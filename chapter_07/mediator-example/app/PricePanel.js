// Generated by CoffeeScript 1.6.3
var __bind = function (fn, me) {
    return function () {
        return fn.apply(me, arguments);
    };
};

define(['mediator'], function () {
    var PricePanel;
    return PricePanel = (function () {
        var mediator;

        function PricePanel() {
            this.setMediator = __bind(this.setMediator, this);
            this.getMediator = __bind(this.getMediator, this);
            this.onAskClick = __bind(this.onAskClick, this);
            this.onBidClick = __bind(this.onBidClick, this);
        }

        mediator = {};

        PricePanel.prototype.onBidClick = function (currentPrice) {
            console.log("Bid clicked on price " + currentPrice);
            this.getMediator().broadcast("PriceUpdate", [currentPrice]);
        };

        PricePanel.prototype.onAskClick = function () {
            console.log("Ask clicked");
        };

        PricePanel.prototype.getMediator = function () {
            return mediator;
        };

        PricePanel.prototype.setMediator = function (m) {
            return mediator = m;
        };

        return PricePanel;

    })();
});

/*
 //@ sourceMappingURL=PricePanel.map
 */
