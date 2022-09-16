let x = 0;
array = Array();
function add_alement_to_array(){
    array[x] = document.getElementById("txtValue").value;
    alert("Elemment: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById('txtValue').value = "";
}
function display_array(){
    let e = "<hr>";
    for (let i=0;i<array.length;i++){
        e+="Element " + i + " = " + array[i] + "<br>";
    }
    document.getElementById('result').innerHTML = e;
}