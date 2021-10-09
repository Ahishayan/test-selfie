var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();



function start() {
    // window.location="index - Copy.html"
    console.log("danger has been summoned");
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event + "We may have survied");
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text_box").innerHTML = content;
   // if (content == "Take my selfie") {
        //console.log("we are in");
       // speak();
    }
}
function speak() {

    console.log("speech Started AHHHHHH!")

    synth = window.speechSynthesis;

    Speechdata = "आपकी सेल्फी 5 सेकंड में ली जाएगी"

    var Saythis = new SpeechSynthesisUtterance(Speechdata);
    Saythis.lang = 'hi-IN';
    synth.speak(Saythis);

    Webcam.attach(camera);
    setTimeout(function () {
        Takesnapshot();
        downloadpic();
    }, 5000);
}

var camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
})




function Takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="yes" src="' + data_uri + '"/>';
    });
}

function downloadpic() {
    console.log("photo downloaded")
    link = document.getElementById("link");
    image = document.getElementById("yes").src;
    link.href = image;
    link.click();

}
