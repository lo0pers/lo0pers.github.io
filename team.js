// $(document).ready(function() {
//     $('i').hide();
//   })
//   $( window ).on( "load", function() {

//     $('i').show();

//     // var twitterPos = $('#twitter').position();
//     var githubPos = $('#github').position();
//     // var stackPos = $('#stack').position();
//     var linkedinPos = $('#linkedin').position();
//     // var codePos = $('#code').position();
//     // var plusPos = $('#plus').position();
//     var mailPos = $('#mail').position();
//     var imgPos = $('.me').position();

//     $('i').css({
//       position: 'absolute',
//       zIndex: '1',
//       top: imgPos.top + 100,
//       left: '47%'
//     });

//     setTimeout(function() {
//       $('#github').animate({
//         top: githubPos.top + 10,
//         left: githubPos.left - 10
//       }, 500);
//     }, 250);

//     setTimeout(function() {
//       $('#github').animate({
//         top: githubPos.top,
//         left: githubPos.left
//       }, 250);

//       $('#linkedin').animate({
//         top: linkedinPos.top + 10,
//         left: linkedinPos.left - 6
//       }, 500);
//     }, 500);

//     setTimeout(function() {
//       $('#linkedin').animate({
//         top: linkedinPos.top,
//         left: linkedinPos.left
//       }, 250);

//       $('#mail').animate({
//         top: mailPos.top + 10,
//         left: mailPos.left - 3
//       }, 500);
//     }, 750);

//     setTimeout(function() {
//       $('#mail').animate({
//         top: mailPos.top,
//         left: mailPos.left
//       }, 250);





//     })  
// }) 

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };