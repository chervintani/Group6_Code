var topic = "sensor/monitoring";
client = mqtt.connect("mqtt://test.mosquitto.org:8081/mqtt");

client.on("connect", function () {
  console.log("Successfully connected");
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
      publisher("on automatic")
    }
  } else {
    clearInterval(onAutomatic);     //dont do anything except this one
    console.log("off automatic")
  }
});

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function publisher(payload) {
    // client.publish(topic, payload, err => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    console.log(`Publish ${payload}`);
    //   }
    // });
}
