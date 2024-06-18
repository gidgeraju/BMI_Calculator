function calculateBMI(){
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);
    if(isNaN(height) || isNaN(weight) || height <=0 || weight <=0){
        document.getElementById("result").innerText="Please enter valid values"
      return;
    }
    var bmi = weight/Math.pow(height/100,2);
    document.getElementById("result").innerText="Your BMI is  "+bmi.toFixed(2)
}
function raj(){
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
 document.getElementById("result").innerText="";

}