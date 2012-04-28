//(function($, window) {

  var lockImgLocked = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABkCAYAAAAlg3YKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRDI1N0ExRjg5NTAxMUUxQThCMkU4MDc1MzZDMzEzNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRDI1N0EyMDg5NTAxMUUxQThCMkU4MDc1MzZDMzEzNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNEMjU3QTFEODk1MDExRTFBOEIyRTgwNzUzNkMzMTM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNEMjU3QTFFODk1MDExRTFBOEIyRTgwNzUzNkMzMTM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zAVlsAAAA1VJREFUeNrsnOGVojAQx7N3VwB2QAeXDqQErUDsgBLsADtAK0Ar0KtAtwK1AvzqJy7jhfc8ZNkEhCTy/783b3nuIsOPyWQmwH6w/hVI+y3Mk9t12gu7CvuU23v2hpoIS4VlwvKWlsnvmrgOxRe2eBGUOlgLeSxnRMMm7hDKVxbLY1utqOOIUYmoyNao2RkEU7adTdEUGI6aumgKTMMJLQRTtrDNCX60hJO02P8o7VP+rBKX9RKX1lRzYSsXIuckk2iTadmX+55MRFLXcHYvzgdBw0mhc0hcMyFnHTsVNvCHd+WMpxneaU9TrSePpTPMO/FLpzqODcyoRv0LbEyGLfPjS2ukg+JBbSjzI0VfD31flYTZo6TPaD8pXg2bOmlPMepPfeUezuwT7yMXpY4NrSZDLW0TpipXwObVPF/xHBqlh9Dx6NGJorCrL+YOAOJdXejvZq8Tc0eNz+XHN+O3ThuHAG0UcpUWIJWp749DgFR8DXQAqWT1o0OAVHz1dACpJN+zQ4BUfOW6Oehd4LTyGYA6AjQYARAAARAAARAAARAAARAEQAAEQAAEQK6JHuLMgQERBEAABEAABEBtFYYhWywWzPd9qyBZ8dJJHMd5oSzLcs65LS/DmHfC87y8rDRNAaiwIAieAFEU2eCbtUlaRBWSNGYxAAIgAAICAGqln+zf/74wJmotxuMxE5Vz5VR/u93Y+XweXqtB1fPhcLgXhbvdLq9S8bno0YZXKIreqzJqqpQkCRPV9nByEJ0sde46IkiDATSbzbT3oSWQyWQynAh61Hq9fvobSszH4//Pf6sOSecBPS6IEYjVavU0UxG07XaLOqgAM51O2fV6vW/v93u2XC6tqIN+2VKQ0XAajUaopNFqABAAQTYCohpH9F4sy7J7G2KLjM9ixeI8tRJFIRhFEbtcLk+F4mAAUb1TgCEoVFmXq+Qm7cjbLHfQTcHyTcK65Y5CohcbxnJHuYVQuQdGUbfZ9P8muhFA1HtRO6Gj+Xw+rFmMei/VJExATUSPsRzEHpZdKf98teRKvxMzGh5eqHp4gcTw8AIqaQACIACCAAiA3hxQ1cMJJitnayrpug6fikcb/LLqfTFaKKPOnhpZ3Wa2K+GFOiRpAAIgAAIgd/VXgAEAJPZ9NDgery4AAAAASUVORK5CYII=';

  var lockImgUnlocked = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABkCAYAAAAlg3YKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRDI1N0EyMzg5NTAxMUUxQThCMkU4MDc1MzZDMzEzNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRDI1N0EyNDg5NTAxMUUxQThCMkU4MDc1MzZDMzEzNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNEMjU3QTIxODk1MDExRTFBOEIyRTgwNzUzNkMzMTM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNEMjU3QTIyODk1MDExRTFBOEIyRTgwNzUzNkMzMTM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RxxFhwAAA01JREFUeNrsm+2RqjAUhrP33gKwAzpYOpAStAKxA0qgA+wArQCtQG8FuhWoFeBff3FznDDjRcQEhCTyvjNnltldJDycnI8Yvlj/8oV9c3PEcZ123C7cfsTxjn2gJtxSbhm3vKVl4rMmtkNxuUVvglIHKxLXskY0beIOoTyzWFzbaIUde4yMR4Wmes1WI5iybU3yJl+z19R5k68bTmAgmLIFbW7wqyWcpMX5B2E/4meVPFEvecKaas5taYPnHEUQbZKWXXHuUYcndQ1n++Z44DdMCp1D8hQDctbxoIIG4/G6Goyj6N5pT6nWEddSmeadjEulOo41ZFSt4/NNDIYt4+Nba6S95EVNKPNDybHu+34qCTNHSZ/efpR8GiZ10o6k1x/7ij0eM09eH7EotWxqNZlqaRs3lXkCJq/muZL30Cg8BJZ7j4oXBV19sGcBIK+rB/0qex2ZPWp8L79ezN86rS0CtJaIVUqAZFLfX4sAyYzVVwEkE9UPFgGSGavDBq5XgTpSjUGfplOTkwAIgNoJgAAIgAAIgAAIgAAIgCAAAiAAAiAAsk20iTMHBngQAAEQAAEQALVVEAQsiiLmuq5RkIx46SSO47xQlmW553mmvAyjfxCO4+RlpWkKQIX5vv8AiLzIhLEZG6S5VyFII4sBEAABEBAAUCv9Zk+2nvUlai3G4zHjlXNlqr9er+x0Og2v1aDqeb/f34rC7XabV6n4Pe/Rhlco8t6r0muqlCQJ49X2cGIQ3Sx17ioiSIMBNJvNlM+hJZDJZDIcD7rXarV6+B8KzIfD//u/Zaek9YDuF8QIxHK5fMhUBG2z2aAOKsBMp1N2uVxux7vdji0WCyPqoD+mFGQ0nUajESpptBoABECQiYCoxuG9F8uy7NaGmCLtWaxYnKdWoigEwzBk5/P5oVAcDCCqdwowBIUq63KV3KQd+ZjlDvpSsPwlYd1yRyHeiw1juaPcQsh8B0Zet173/ya6FkDUe1E7oaL5fD6sLEa9l2wQJqA6vEdbDGJ3y64Uf54tudLfeEbD5oWqzQskhs0LqKQBCIAACAIgAPpwQFWbE3RWzsZU0nUdPhWPJozLqPfFaKGMOntqZFWb2a6EF+oQpAEIgAAIgOzVPwEGAGkWgcpWq+TgAAAAAElFTkSuQmCC';

  var tlog = function(s) {
    $('body').prepend('<p>' + s + '</p>');
  };   

  var Linklock = function(test) {
    var self = this;
    this.$body = $('body');
    this.body = this.$body[0];
    this.locked = false;

    this.touchevents = {
      start: test ? 'mousedown' : 'touchstart',
      end  : test ? 'mouseup' : 'touchend',
    };

    this.touch = (function() {

      var clearTimer, holdTimer;

      clearTimer = function() {
        clearTimeout(holdTimer);
      };

      self.body.addEventListener(self.touchevents.start, function(e) {
        console.log('start');

        //console.log(e.touches.length);

        clearTimer();

        holdTimer = setTimeout(function() {
          console.log('held!');
          tlog('held');
            
          if (!self.locked) {
            self.lock();
          } else {
          self.unlock();
          }        

        }, 700);        

      });

      self.body.addEventListener(self.touchevents.end, function(e) {
        console.log('released');
        clearTimer();
      });

    })();
   
  };

  Linklock.prototype.lock = function() {
    this.$body.on('click.linklock', 'a', function(e) {
      e.preventDefault();
    });
    console.log('locked!');
    $('a').css({opacity: 0.5});
    this.locked = true;
    this.showOverlay();
  };

  Linklock.prototype.unlock = function() {
    this.$body.off('click.linklock', 'a');
    console.log('unlocked');
    $('a').css({opacity: 1.0});
    this.locked = false;
    this.showOverlay();    
  };

  Linklock.prototype.showOverlay = function() {
    var imgsrc = this.locked ? lockImgLocked : lockImgUnlocked,
      img = $('<img src="' + imgsrc + '" />');

    $('<div />')
      .css({
        'background': 'rgba(0,0,0,0.2)',
        '-webkit-border-radius': '12px',
        'border-radius': '10px',
        //'-webkit-box-shadow': '0 3px 5px 5px rgba(0,0,0,0.2)',
        //'box-shadow': '0 0 3px 3px #000',
        'padding': '20px',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'width': '72px',
        'height': '100px',
        'margin-left': '-36px',
        'margin-top': '-50px'
      })
      .appendTo('body')
      .append(img)
      .delay(1000)
      .fadeOut(500, function() {
        $(this).remove();
      });
  };

  var ll = new Linklock(true);



//})(jQuery, window);