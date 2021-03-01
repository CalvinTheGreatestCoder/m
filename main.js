}
function speak () {
    var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is" + prediction_1; 
    speak_data_2 = "the second prediction is" + prediction_2; 
    var Utterthis = new SpeechSynthesisUtterance (speak_data_1 + speak_data_2);
    synth.speak(Utterthis);
}
 
 
function gotResult (error, results) {
    if (error) {
        console.error(error);
    console.log(results);
    } else {
        console.log (results)
document.getElementById ("result_emotion_name").innerHTML = results[0].label;
document.getElementById ("result_emotion_name2").innerHTML = results[1].label;
prediction_1 =  = results[0].label;
prediction_2 =  = results[1].label;
speak();
if(results[0] .label=="happy") 
{
document.getElementById("update_emoji").innerHTML = "&#1285522;"
}
if(results[0] .label=="sad") 
{
document.getElementById("update_emoji").innerHTML = "&#128532;"
}
if(results[0] .label=="very sad") 
{
document.getElementById("update_emoji").innerHTML = "&#128546;"
}
if(results[0] .label=="very happy") 
{
document.getElementById("update_emoji").innerHTML = "&#128512;"
}
if(results[0] .label=="angry") 
{
document.getElementById("update_emoji").innerHTML = "&#128548;"
}
if(results[0] .label==" very angry") 
{
document.getElementById("update_emoji").innerHTML = "&#128545;"
}

