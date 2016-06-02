var currentquote='';
var currentauthor='';
function opentwitterURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
function getQuote(){
  $.ajax({
    headers: {
  "X-Mashape-Key": "PyOKfsU1hnmsh28BEUIty7Wl6MEIp1fbQypjsnH0nOMD1r3moP",
  Accept : "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
    },
    url:'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    success: function(response) {
      var r = JSON.parse(response);
      currentquote = r.quote;
      currentauthor = r.author;
       $(".qtext").animate({}, 1000,
        function() {
  $(this).animate({opacity:1},1000);
  $('#text').text(r.quote);
        });

      $(".qauthor").animate({}, 1000,
        function() {
          $(this).animate({}, 1000);
         $('#author').html(r.author);
        });}});}
$(document).ready(function() {
  getQuote();
  $('#quote').on('click', getQuote);
 $('#tweet').on('click', function() { opentwitterURL('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentquote + '" ' + currentauthor));});});
