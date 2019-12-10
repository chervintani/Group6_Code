var topic = "sensor/monitoring";
client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");

client.on("connect", function () {
  console.log("Successfully connected");
});

client.subscribe("sensor/light", (err) => {
  if (err) console.log(err)
  console.log("Subscribed successfully!")
})

client.on("message", function (topic, payload) {
  var topics = [topic, payload].join(": ")
  // console.log(topics)
  if (payload > 500) {      //see if the payload exceeds 500
    $('#alert').show();
  }else{
    $('#alert').hide();
  }
});

$("#manualC").click(function () {
  if ($(this).prop("checked") == true) {
    clearInterval(onAutomatic);
    publisher("on");    //publish on status to broker
  } else {
    clearInterval(onAutomatic);
    publisher("off");   //publish off status to broker
  }
});

var onAutomatic;
$("#showManual1").on("click", function () {
  if ($(this).prop("checked") == true) {      //send looping publisher to broker
    onAutomatic = setInterval(doStuff, 1000);
    function doStuff() {
      publisher("auto")
    }
  } else {
    clearInterval(onAutomatic);     //dont do anything except this one
    console.log("off automatic")
  }
});

function publisher(payload) {
  client.publish(topic, payload, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Publish ${payload}`);
    }
  });
}
