/*
    Functions for content pages
*/

function displayCredits() {
    $( ".content" ).after( "<div class='credits'>Masks RPG Character Sheet - Save and Bookmark to store your character. <br>originally created by <a href='https://joefulgham.com/'>Joe Fulgham</a> / <a href='https://adventureforhire.com/'>Adventure For Hire</a><br>modified by <a href='https://github.com/GryphonM'>Gryphon M.</a> | <a href='https://nophyrg.itch.io/'>Play my Games!</a> | Reach out on Discord: Nophyrg<br>Joe Fulgham Sites:<br>Twitter: <a href='https://twitter.com/joefulgham/'>@joefulgham</a> | Facebook: <a href='https://www.facebook.com/joefulgham/'>/joefulgham</a> | Twitch: <a href='https://www.twitch.tv/joefulgham/'>joefulgham</a> | PayPal: <a href='https://paypal.me/joefulgham'>joefulgham</a> | <a href='https://ko-fi.com/joefulgham/'>Buy me a coffee</a><br>Get <a href='https://www.magpiegames.com/masks/'>Masks RPG here</a>!</div>" )
}


function initialStuff() {
    // Show credits at end of page
    displayCredits();
}

$( document ).ready(function() {
    initialStuff();
});