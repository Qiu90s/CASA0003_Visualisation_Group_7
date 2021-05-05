
const main = document.querySelector('.main');

document.addEventListener('DOMContentLoaded', function (event) {

    // 动态文字内容
    var dataText = [
        "What we talk about when we talk about Shanghai?",
        "Different answers at different times.",
        "It always looks better next time we meet the city.",
        "Are you ready?",
        "Welcome to the capital of change!"
    ];
    
    function typeWriter(text, i, fnCallback) {

        // 定时器，依次添加字母
      if (i < (text.length)) {
       document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }

      else if (typeof fnCallback == 'function') {

        setTimeout(fnCallback, 700);
      }
    }

     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }

      if (i < dataText[i].length) {

       typeWriter(dataText[i], 0, function(){
        
         StartTextAnimation(i + 1);
       });
      }
    }

    StartTextAnimation(0);
  });


Barba.Pjax.start();

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {

  Promise
  .all([this.newContainerLoading, this.fadeOut()])
  .then(this.fadeIn.bind(this));
  },
  fadeOut: function() {

  return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },
  fadeIn: function() {

  var _this = this;
  var $el = $(this.newContainer);
  $(this.oldContainer).hide();
  $el.css({
  visibility : 'visible',
  opacity : 0
  });
  $el.animate({ opacity: 1 }, 400, function() {

  _this.done();
  });
  }
});

Barba.Pjax.getTransition = function() {

  return FadeTransition;
};


