  var starsGenerator = function(container) {


      var isIE6 = !-[1, ] && !window.XMLHttpRequest,
          isIE = navigator.userAgent.toLowerCase().match(/ie/i) ? true : false,
          isIEBelow9 = document.documentMode && document.documentMode <= 9;
      var ph = $('body').height() - 400,
          pw = $('body').width();

      var minStar = 10,
          maxStar = 50;

      var iLeft = 40,
          iRight = 30,
          str = '<ul class="stars">';

      var round = function(n) {
          return Math.round(n * Math.random());
      };
      var randomStyle = function(w) {
          var size = Math.round(10 + 50 * Math.random());

          return 'width:' + size + 'px;height:' + size + 'px;top:' + round(ph) + 'px;' + w + ':' + round(200) + 'px;';
      }

      var _createCSSLink = function() {


          var styleText = '@-webkit-keyframes spark{0%{-webkit-transform:scale(0.1);opacity:.4}50%{-webkit-transform:scale(1);opacity:1}100%{-webkit-transform:scale(0.1);opacity:.4}}@-moz-keyframes spark{0%{-webkit-transform:scale(0.1);opacity:.4}50%{-webkit-transform:scale(1);opacity:1}100%{-webkit-transform:scale(0.1);opacity:.4}}@-ms-keyframes spark{0%{-webkit-transform:scale(0.1);opacity:.4}50%{-webkit-transform:scale(1);opacity:1}100%{-webkit-transform:scale(0.1);opacity:.4}}@keyframes spark{0%{-webkit-transform:scale(0.1);opacity:.4}50%{-webkit-transform:scale(1);opacity:1}100%{-webkit-transform:scale(0.1);opacity:.4}}.stars{display:none}.stars li{width:66px;height:66px;position:absolute}.stars li div{background:url(data:image/png;base64,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) no-repeat center center;background-size:100% auto;position:absolute;width:100%;height:100%;-webkit-animation:spark 2.5s infinite linear;-moz-animation:spark 2.5s infinite linear;-ms-animation:spark 2.5s infinite linear;animation:spark 2.5s infinite linear;opacity:.8}.u-star-show .sec-roles .item .img{display:block}.u-star-show .stars{display:block}';

          if (isIEBelow9 !== true) {

              var styleNode = document.createElement('style');
              $('head').append(styleNode);
              styleNode.innerHTML = styleText;

          }

      }

      while (iLeft--) {
          var r = Math.random() * 3;
          str += '<li class="star" style="' + randomStyle('left') + '"><div style="-webkit-animation-delay:' + r + 's;animation-delay:' + r + 's;"></div></li>';
      }

      while (iRight--) {
          var r = Math.random() * 3;
          str += '<li class="star" style="' + randomStyle('right') + '"><div style="-webkit-animation-delay:' + Math.random() * 3 + 's;animation-delay:' + r + 's;"></div></li>';
      }
      str += '</ul>';


      container.append($(str));

      _createCSSLink();

  };