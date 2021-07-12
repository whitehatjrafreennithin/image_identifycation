Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#camera')

function take_snapshot() {
Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
});
}


console.log(ml5.version)
var classfier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_4sajUzmC/model.json", modelLoaded)

function modelLoaded(){
    console.log("Model Loaded")
}


function identify_image(){
    var img = document.getElementById("captured_image")
classfier.classify(img,gotResult)



}
function gotResult(error, results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML =results[0].confidence.toFixed(2)
    }
}
