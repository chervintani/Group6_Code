var topics = 
[
 "aspire/device",
  "hannah-patrick",
  "elective_c",
  "rivastibs",
  "z",
 "lalaine/jake",
 "sensor/tanilonnadela",
 "bargs/jane",
  "mogal",
 "princechan",
"group1-temperature",
 "genjess"
]
var ids = ["yol","pat","rish","tibs","byang","ling","chervz","yot","lor","twing","burce","jess",]

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")


client.on("connect", function () {
  console.log("Successfully connected");
})

topics.forEach((topic)=>{
  client.subscribe(topic)

});

client.on("message", function (topic, payload) {
  var topics = [topic, payload].join(": ")

  if(topic=="sensor/tanilonnadela"){
    $('#chervz').text(payload);
    console.log(topic)
  }
if(topic=="aspire/device"){
    $('#yol').text(payload);
    console.log(topic)
  }
  if(topic=="hannah-patrick"){
    $('#pat').text(payload);
    console.log(topic)
  }
  if(topic=="elective_c"){
    $('#rish').text(payload);
    console.log(topic)
  }
  if(topic=="rivastibs"){
    $('#tibs').text(payload);
    console.log(topic)
  }
  if(topic=="z"){
    $('#byang').text(payload);
    console.log(topic)
  }
  if(topic=="lalaine/jake"){
    $('#ling').text(payload);
    console.log(topic)
  }
  if(topic=="princechan"){
    $('#twing').text(payload);
    console.log(topic)
  }
  if(topic=="mogal"){
    $('#lor').text(payload);
    console.log(topic)
  }
  if(topic=="bargs/jane"){
    $('#yot').text(payload);
    console.log(topic)
  }
  if(topic=="genjess"){
    $('#jess').text(payload);
    console.log(topic)
  }
  if(topic=="group1-temperature"){
    $('#burce').text(payload);
    console.log(topic)
  }
})