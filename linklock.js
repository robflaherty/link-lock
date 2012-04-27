//(function($, window) {

  var Linklock = function() {
    var self = this;
    this.$body = $('body');
    this.body = this.$body[0];
    this.locked = false;
    
    this.touchy = Touchy(this.body, true, function(hand, finger) {
      var timeStart, timeEnd;
      
      finger.on('start', function (point) {
        console.log('start');
        timeStart = +new Date();
      });
      
      finger.on('end', function (point) {
        console.log('released');
        timeEnd = +new Date();

        if (timeEnd - timeStart > 500) {
          if (!self.locked) {
            self.lock();
          } else {
          self.unlock();
          }
        }

      });

    });    
  };

  Linklock.prototype.lock = function() {
    this.$body.on('click.linklock', 'a', function(e) {
      e.preventDefault();
    });
    console.log('locked!');
    $('a').css({opacity: 0.5});
    this.locked = true;
  };

  Linklock.prototype.unlock = function() {
    this.$body.off('click.linklock', 'a');
    console.log('unlocked');
    $('a').css({opacity: 1.0});
    this.locked = false;
  };
  
  var ll = new Linklock();

//})(jQuery, window);