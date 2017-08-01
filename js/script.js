//Quotes
var quotes = [
  {
    quote:"The only thing we have to fear is fear itself",
    source:"Franklin Delano Roosevelt",
    category:"Business"
  },
  {
    quote:"You will never win if you never begin",
    source:"Helen Rowland",
    category:"Success"
  },
  {
    quote:"When something is important enough, you do it even if the odds are not in your favor",
    source:"Elon Musk",
    category:"Entrepreneurship"
  },
  {
    quote:"Life is short for long-term grudges",
    source:"Franklin Delano Roosevelt",
    category:"Self-improvement"
  },
  {
    quote:"Yolo",
    source:"Unknown",
    category:"I don't know"
  }
];

// Variables
var viewedQuote = [];
var spliceIndex = [];
var randomQuote;
var autoPrintQuote = setInterval(printQuote, 30000);

// Function gets a random quote from array
function getRandomQuote() {
  if (quotes.length === 0){
    quotes = viewedQuote.splice(0, viewedQuote.length);
  }
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  var spliceIndex = quotes.splice(randomQuote, 1)[0];
  viewedQuote.push(spliceIndex);
  return spliceIndex;
};

// Generate a random background hexidecimal color and apply it to the body
function randomBackground(){
    var r = Math.round( Math.random() * 255 );
    var g = Math.round( Math.random() * 255 );
    var b = Math.round( Math.random() * 255 );
    var bg = "background:rgb("+r+", "+g+", "+b+");";
    var element = document.getElementsByTagName("body")[0];
    element.style = bg;
};

// Event listener to respond to "Show another quote" button clicks
function printQuote() {
    var newQuote = getRandomQuote();
    printText = '<p class="quote">' + newQuote.quote + '</p>' + '<p class="source">' + newQuote.source + '</p>' + '<p class="category">' + newQuote.category + '</p>'
    document.getElementById('quote-box').innerHTML = printText;
    // when user clicks anywhere on the button, the "printQuote" function is called
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);
    randomBackground();
};

printQuote();
