function getjson(file,callback){
	let xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange= function(){
		if(xhr.readyState ===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}

getjson("resume.json",function(text){
	let data=JSON.parse(text);
	/*console.log(data);*/
	mydetails(data.details)
	myhobbies(data.hobbies);
	mylanguages(data.languages);
	mycareer(data.co);
	myeducation(data.education);
	myachievements(data.achievements);
	mydeclaration(data.declaration);
})

var left = document.querySelector('.left-div');

function mydetails(value){
	var d = document.createElement('div');
	d.classList.add('one');
	left.appendChild(d);

	var i = document.createElement('img');
	i.src = value.image;
	i.alt = "sreenu";
	d.appendChild(i);
	var h1 = document.createElement('h1');
	h1.innerHTML = value.name;
	d.appendChild(h1);
	var p = document.createElement('p');
	var p1 = document.createElement('p');
	var p2= document.createElement('p');
	p.innerHTML = value.phone;
    p1.innerHTML = value.email;
    p2.innerHTML = value.address;
	d.appendChild(p);
	d.appendChild(p1);
	d.appendChild(p2);
}

function myhobbies(value){
	var d = document.createElement('div');
	d.classList.add('two');
	left.appendChild(d);

	var h2 = document.createElement('h2');
	h2.innerHTML = "Hobbies";
	d.appendChild(h2);
	var ul = document.createElement('ul');
	for(i=0; i<value.length; i++){
       var li = document.createElement('li'); 
       li.innerHTML = value[i];
       ul.appendChild(li);
	}
	d.appendChild(ul);
}

function mylanguages(value){
    var d = document.createElement('div');
	d.classList.add('three');
	left.appendChild(d);
     
    var h2 = document.createElement('h2');
	h2.innerHTML = "Languages known";
	d.appendChild(h2);
	var ol = document.createElement('ol');
	for(i=0; i<value.length; i++){
       var li = document.createElement('li'); 
       li.innerHTML = value[i];
       ol.appendChild(li);
	}
	d.appendChild(ol);
}

var right = document.querySelector('.right-div');

function mycareer(value){
	var d = document.createElement('div');
	d.classList.add('four');
	right.appendChild(d);

	var h2 = document.createElement('h2');
	h2.innerHTML = "Career Objective";
	d.appendChild(h2);
	var p = document.createElement('p');
	p.innerHTML = value;
	d.appendChild(p);
}

function myeducation(value){
	var d = document.createElement('div');
	d.classList.add('five');
	right.appendChild(d);

    var h2 = document.createElement('h2');
	h2.innerHTML = "Academic Qualifications";
	d.appendChild(h2);
	var table = document.createElement('table');
    var r=""
    r+= "<tr><th>"+"Qualification"+"</th><th>"+"Institution"+"</th><th>"+"Year of Completion"+"</th><th>"+"Percentage"+"</th><tr>";
    table.innerHTML =  r;
    for(i=0; i<value.length; i++){
    	r+="<tr><td>"+value[i].qualification+"</td><td>"+value[i].institution+"</td><td>"+value[i].yoc+"</td><td>"+value[i].percentage+"</td></tr>";
    	table.innerHTML = r;
    }	
    d.appendChild(table);
	
}
function myachievements(value){
	var d = document.createElement('div');
	d.classList.add('six');
	right.appendChild(d);
    
    var h2 = document.createElement('h2');
	h2.innerHTML = "Achievements";
	d.appendChild(h2);
	var ul = document.createElement('ul');
	for(i=0; i<value.length; i++){
       var li = document.createElement('li'); 
       li.innerHTML = value[i].name;
       ul.appendChild(li);
	}
	d.appendChild(ul);
	
}
function mydeclaration(value){
	var d = document.createElement('div');
	d.classList.add('seven');
	right.appendChild(d);

	var h2 = document.createElement('h2');
	h2.innerHTML = "Declaration";
	d.appendChild(h2);
	var p = document.createElement('p');
	p.innerHTML = value;
	d.appendChild(p);
	
}