var topic = "sensor/monitoring";
var topic2 = "sensor/monitoring2";
client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
const subscribers = ["sensor/light", "sensor/light2"];
client.on("connect", function () {
  console.log("Successfully connected");
});

// client.subscribe("sensor/light", (err) => {
//   if (err) console.log(err)
//   console.log("Subscribed light1 successfully!")
// })

subscribers.forEach(subscribe => {
  client.subscribe(subscribe);
});

client.on("message", function (topic, payload) {
  var topics = [topic, payload].join(": ")
  if (topic == "sensor/light") {
    if (payload > 500) {      //see if the payload exceeds 500
      $('#alert').show();
    } else {
      $('#alert').hide();
    }
    console.log(topic)
  }
  if (topic == "sensor/light2") {
    // console.log(topics)
    if (payload > 500) {      //see if the payload exceeds 500
      $('#alert2').show();
    } else {
      $('#alert2').hide();
    }
    console.log(topic)
  }

});

$("#manualC").click(function () {
  if ($(this).prop("checked") == true) {
    clearInterval(onAutomatic);
    clearInterval(onAutomatic2);
    publisher(topic,"on");    //publish on status to broker
  } else {
    clearInterval(onAutomatic);
    clearInterval(onAutomatic2);
    publisher(topic,"off");   //publish off status to broker
  }
});

var onAutomatic;
var onAutomatic2;
$("#showManual1").on("click", function () {
  if ($(this).prop("checked") == true) {      //send looping publisher to broker
    onAutomatic = setInterval(doStuff, 1000);
    function doStuff() {
      publisher(topic,"auto")
    }
  } else {
    clearInterval(onAutomatic);     //dont do anything except this one
    clearInterval(onAutomatic2);     //dont do anything except this one
    console.log("off automatic")
  }
});

$('#manualSeed').click(function(){
  if ($(this).prop("checked") == true) {
    clearInterval(onAutomatic);
    clearInterval(onAutomatic2);
    publisher(topic2,"on");    //publish on status to broker
  } else {
    clearInterval(onAutomatic);
    clearInterval(onAutomatic2);
    publisher(topic2,"off");   //publish off status to broker
  }
})

$("#showManual2").on("click", function () {
  if ($(this).prop("checked") == true) {      //send looping publisher to broker
    onAutomatic2 = setInterval(doStuff, 1000);
    function doStuff() {
      publisher(topic2,"auto")
    }
  } else {
    clearInterval(onAutomatic);     //dont do anything except this one
    clearInterval(onAutomatic2);     //dont do anything except this one
    console.log("off automatic")
  }
});

function publisher(topic,payload) {
  client.publish(topic, payload, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Publish ${payload}`);
    }
  });
}