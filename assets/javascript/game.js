// Variables ==================================

    var ansNum = 0 //random number the user is trying to add up to

    var redBean = 0 //first bean adds this amount to user score

    var greenBean = 0 //secon bean adds this amount to user score

    var blueBean = 0 //thid bean adds this amount to user score

    var yellowBean = 0 //fourth bean adds this amount to user score

    var collection = 0 //amount of beans user has collected at any given time

    var wins = 0 //number of user wins

    var losses = 0 //number of user looses


// Functions ===================================
    function reset(){
        //game is set back to it's original form. New random numbers and collection is 0
        collection = 0;
        $(".collection").html("<h2>Beans Collected:")

        //random number created between 19-120 for the beans to add up to
        ansNum = Math.floor((Math.random() * 120) + 19);
        console.log(ansNum);
        $("#ansNum").html("<h2>Collect " + ansNum + " beans!");

        //random numbers created for each bean between 1 and 12 (redBean, greenBean, blueBean, yellowBean)
        redBean = Math.floor((Math.random() * 12) + 1);
        greenBean = Math.floor((Math.random() * 12) + 1);
        blueBean = Math.floor((Math.random() * 12) + 1);
        yellowBean = Math.floor((Math.random() * 12) + 1);
        console.log(redBean, greenBean, blueBean, yellowBean);
        
    }    
    
    function winLossCheck(){
        //if collection equals ansNum, increase wins counter by 1
        if(collection === ansNum){
            wins++;
            $("#wins").html("<h2>Wins: <b>" + wins + "</b></h2>");
            alert("Woohoo! Just the right amount!")
            reset();
        }
        //if collection is greater than ansNum, incresse loss counter by 1
        else if(collection > ansNum){
            losses++;
            $("#losses").html("<h2>Losses: <b>" + losses + "</b></h2>");
            alert("Oops! Too many beans. Try again.")
            reset();
        }
    }

    function addTooCollection(){
        $(".collection").html("<h2>Beans Collected: <b>" + collection +"</b></h2>");
    }
// Main Process ================================
// Initalize
    //game is set back to it's original form. New random numbers and score is 0

    //random number created between 19-120 for the beans to add up to
    ansNum = Math.floor((Math.random() * 120) + 19);
    console.log(ansNum);
    $("#ansNum").html("<h2>Collect <b>" + ansNum + "</b> beans!");

    //random numbers created for each bean between 1 and 12 (redBean, greenBean, blueBean, yellowBean)
    redBean = Math.floor((Math.random() * 12) + 1);
    greenBean = Math.floor((Math.random() * 12) + 1);
    blueBean = Math.floor((Math.random() * 12) + 1);
    yellowBean = Math.floor((Math.random() * 12) + 1);
    console.log(redBean, greenBean, blueBean, yellowBean);

//click events on beans trigger user's collection to increase by that number
    $("#redBean").click(function(){
        collection = collection + redBean;
        addTooCollection();
        console.log(collection);
        winLossCheck();
    });

    $("#greenBean").click(function(){
        collection = collection + greenBean;
        addTooCollection();
        console.log(collection);
        winLossCheck();
    });


    $("#blueBean").click(function(){
        collection = collection + blueBean;
        addTooCollection();
        console.log(collection);
        winLossCheck();
    });


    $("#yellowBean").click(function(){
        collection = collection + yellowBean;
        addTooCollection();
        console.log(collection);
        winLossCheck();
    });