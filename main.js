function preload() {

}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();

    vedio=createCapture(VIDEO);
    vedio.size(300,300);
    vedio.hide();

    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-jZLGkO2v/model.json',modalLoaded);
}

function modalLoaded() {
    console.log("Modal is Loaded");
}

function draw() {
    image(vedio,0,0,300,300);

    classifier.classify(vedio,gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("o").innerHTML='Object : '+results[0].label;
        document.getElementById("a").innerHTML='Accuracy : '+results[0].confidence.toFixed(2)*100;
    }
}