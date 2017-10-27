  $(document).ready(function(){
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAiIX_BBq7Rd6pCj2khksU0bxn4nU9cNvI",
    authDomain: "train-database-9a8df.firebaseapp.com",
    databaseURL: "https://train-database-9a8df.firebaseio.com",
    projectId: "train-database-9a8df",
    storageBucket: "train-database-9a8df.appspot.com",
    messagingSenderId: "1057959664438"
  };

    firebase.initializeApp(config);




  var database = firebase.database();  //database ref//


    $("addTrainbtn").on("click", function(event) {

      var trainName = $("#trainName").val().trim();
      var destination = $("#destination").val().trim();
      var trainTime =  moment($("#trainTime").val().trim(), "HH:mm").format("HHmm");
       var frequency = $("#frequency").val().trim();


     var newTrain = {
      name: trainName,
      destination: destination,
      trainTime: trainTime,
      frequency: frequency,
     }

     database.ref().push(newTrain);  //firebase info storage//

      $("#trainName").val("");
      $("#destination").val("");
      $("#trainTime").val("");
      $("#frequency").val("");

        return false;
    });


    database.ref().on("child_added", function(childSnapshot, prevChildKey){
          console.log(childSnapshot).val();


          var trainName = childSnapshot.val().name;
          var destination = childSnapshot.val().destination;
          var trainTime = childSnapshot.val().trainTime;
          var frequency = childSnapshot.val().frequency;

          console.log(trainName);
          console.log(destination);
          console.log(trainTime);
          console.log(frequency);


    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + 
            trainTime + "</td><td>" + frequency + "</td></tr>");
  });

});
           
  