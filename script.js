let inpBox = document.getElementById('inpbox');

let calculate=(number)=>{
    inpBox.value += number;
    // inpBox.value = inpBox.value + number;
}

{/* <button type="button" onClick="inpbox.value += '1' ">1</button>
<button type="button" onClick="inpbox.value += '2' ">2</button> */}

let Equal=()=>{
    try{
        inpBox.value = eval(inpBox.value)
    }
    catch(err){
        alert("Enter valid input");
        console.log("Error, enter valid value")
    }
}

let ClearAll=()=>{
    inpBox.value = '';
}

let ClearEntry=()=>{
    inpBox.value = inpBox.value.toString().slice(0,-1);
}

