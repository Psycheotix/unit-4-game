
$(document).ready(function () {

    ///Computer picks from 120 numbers randomly
    var targetNumber = Math.floor((Math.random() * 100) + 20);
    // console.log(targetNumber);

    $("#random-number").text(targetNumber); ///Display Random number on id


    ///VARIABLES///

    var counter = 0;
    var wins = 0;
    var losses = 0;

    /// IMAGES array 
    var gems = ["assets/images/redGem.png", "assets/images/clearGem.png", "assets/images/greenGem.png", "assets/images/blackGem.png", "assets/images/blueGem.png"];


    ///FUNCTIONS///

    //Function display images and add random numbers to them
    function displaygemImages() {
        $('#gems-images').empty();

        for (var i = 0; i < gems.length; i++) {
            var randomValue = Math.floor(Math.random() * 11) + 1;
            $("#gems-images").append('<img class="gem" src="' + gems[i] + '" data-gem-value="' + randomValue + '" width="200px">');
        }

    };

    displaygemImages(); //Run function

    //Function Reset Game
    function reset() {

        targetNumber = Math.floor((Math.random() * 100) + 20);
        $("#random-number").text(targetNumber);

        randomVlue = Math.floor((Math.random() * 11) + 1);
        counter = 0;
        $("#total").text(counter);
        displaygemImages();

    }

    //Function when user clicks on image sum up the numbers
    $("#gems-images").on("click", '.gem', function () {
        var gemValue = parseInt($(this).attr("data-gem-value"));
        counter += gemValue;
        // alert(counter);
        console.log(counter)
        $("#total").text(counter); ///Display gems's sum up number on id


        //Compare the number on screen with the sum of cliked diamons if it's a match add one to the wins counter and reset
        if (counter === targetNumber) {
            alert("Thank you for your business! Please come again.");
            wins++; ///Display wins on id
            $("#wins").text(wins); ///Display wins on id
            reset();
        }
        //Compare the number on screen with the sum of cliked diamons if it's not a match add one to the losses counter and reset
        else if (counter >= targetNumber) {
            alert("Are these fake? GUARDS!!");
            losses++; //// Increment losses by one
            $("#losses").text(losses); ///Display losses on id
            reset();
        }
    });

    ///Display Text on HTML Document id
    $("#total").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);

});