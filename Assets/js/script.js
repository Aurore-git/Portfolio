/*Variables*/

var aElement = document.getElementById('a');
var aDisplayBlock = document.getElementById('one');

var bElement = document.getElementById('b');
var bDisplayBlock = document.getElementById('two');


/* HTML / CSS */

function displayNoneOne() {

    if (aElement.style.display==='block'){
        aElement.style.display='';}

else {
    bElement.style.display='none';
}}


aDisplayBlock.addEventListener('click',displayNoneOne);


/* JS */

function displayNoneTwo() {

    if (bElement.style.display==='block'){
        bElement.style.display='';}

else {
    aElement.style.display='none';
}}


bDisplayBlock.addEventListener('click',displayNoneTwo);

