var result = "0";
window.onload = function() {
    result = document.getElementById("display");
};

function num(vol) {
    if(result.value == "0" && vol == "0"){
        result.value = "0";
        }else if(vol == "."){
            result.value += ".";
        }else if(result.value == "0"){
            result.value = vol;
        }else{
            result.value += vol;
        }
}

function last(){
    return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}


function sym(vol){
    if(last()){
        result.value = result.value.slice(0,-1) + vol;
    }else{
        result.value += vol;
    }
}
function C(vol){
    result.value = "0";
}

function equal(){
    if(last()){
        result.value = result.value.slice(0,-1);}
        var sum = result.value.replace("×","*").replace("÷","/");
    result.value = eval(sum);
}