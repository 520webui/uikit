
(function(global, $, UI){

    var Toggle = function(element, options) {

        var $this = this, $element = $(element);

        if($element.data("toggle")) return;

        this.options  = $.extend({}, Toggle.defaults, options);
        this.totoggle = this.options.toggle ? $(this.options.toggle):[];
        this.element  = $element.on(UI.Utils.events.click, function(e) {
            e.preventDefault();
            $this.toggle();
        });

        this.element.data("toggle", this);
    };

    $.extend(Toggle.prototype, {

        toggle: function() {

            if(!this.totoggle.length) return;

            this.totoggle.toggleClass(this.options.cls);
        }
    });

    Toggle.defaults = {
        toggle: false,
        cls: 'uk-hidden'
    };

    UI["toggle"] = Toggle;

    $(document).on(UI.Utils.events.click+".toggle.uikit", "[data-uk-toggle]", function(e) {
        var ele = $(this);

        if (!ele.data("toggle")) {
           var obj = new Toggle(ele, UI.Utils.options(ele.attr("data-uk-toggle")));
           ele.trigger(UI.Utils.events.click);
        }
    });

})(this, jQuery, jQuery.UIkit);