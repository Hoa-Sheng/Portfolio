var container = $('.container');
var src = $('.scroll-stack');
var box = $('.box');

function initBox() {
  var cofs = container.offset();
  var ofs = src.offset();
  console.log(ofs);
  box.css('top',ofs.top);
  var left = ofs.left-cofs.left;
  box.css('left',left);
  var right = container.width()-(left+src.outerWidth());
  console.log(left,right);
  box.css('right',right);
  box.css('bottom',container.height()-ofs.top-src.outerHeight());
}

function zoomOut() {
  initBox();  
  box.show();
  setTimeout( function() {
    box.css({'top':'0', 'left':'0', 'right':'0', 'bottom':'0', 'opacity':'1' });
  }, 10);
}

function close() {
  initBox();
  box.css('opacity','0');
  setTimeout( function() { box.hide(); }, 1000 );
}

$(document).ready( function() {  
  close();
  src.on('click',zoomOut);
  box.on('click',close);
});

demo.onclick = event => {
    let target = event.target.closest('.item')
    
    if (target) {
      demo.scrollTo({
        left: target.offsetLeft,
        behavior: 'smooth'
      })
    }
  }