//**************************
//File name: main.js
//Mirna Ghanayem
//November 8, 2018
//**************************

document.addEventListener("DOMContentLoaded", init);

let pages = [];

function init() {

	
    pages = document.querySelectorAll(".page");
    console.log(pages);

    document.getElementById("btnBack").addEventListener("click", function () {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
    });

    document.getElementById("btnSend").addEventListener("click", function () {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
    });

	

    document.getElementById("btnSend").addEventListener("click", getData);
}


function getData() {
	
    let digs = document.getElementById("digits").value;
    let range = document.getElementById("max").value;
    if(digs <= 0 || digs > 6 || digs == null){
        alert("Please enter the number of digits between 1-6");
        return;
    } else if(range <= 0 || range > 49 || range == null){
        alert("Please enter the maximum range between 1-49");
        return;
    }

    let url = "https://davidst.edumedia.ca/mad9014/nums.php?digits=6&max=42";

    let formdata = new FormData();

    formdata.append("digits", document.getElementById("digits").value);

    formdata.append("max", document.getElementById("max").value);

    let customSettings = {
        method: "POST",
        mode: "cors",
        body: formdata
    }

    let request = new Request(url, customSettings);

    fetch(request)
		.then(function (response) {
    console.log(response);
    return response.json();
})
		.then(function (data) {
        	console.log(data); 
    let ul = document.querySelector(".num_list");
    ul.innerHTML = "";
    for (item = 0; item < data.numbers.length; item++) {
        let li = document.createElement("li");
        li.textContent = data.numbers[item];
        ul.appendChild(li);
    }
})
		.catch(function (err) {
    alert("Error: " + err.message);
});
}
