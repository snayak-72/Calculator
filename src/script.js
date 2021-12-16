console.log("calculating...");
const screen=document.getElementById("screen");
const btn=document.querySelectorAll("button");
console.log(btn,screen);

let screenvalue="";

screen.value="";

btn.forEach((e)=>{

	e.addEventListener("click",function(){
		let btntext=e.innerText;
		console.log(btntext);
		if(btntext=='×'){
			screenvalue+='*';
			screen.value=screenvalue;
		}
		else if(btntext=='='){
		
			screen.value=eval(screenvalue);
			screenvalue=screen.value;	
		}
		else if(btntext=='C'){
			screenvalue="";
		screen.value="";}
		else if(btntext=='÷'){
			screenvalue+='/';
			screen.value=screenvalue;
		}
		else if(btntext=='BS'){
			screenvalue=screenvalue.substring(0,screenvalue.length-1);
			screen.value=screenvalue;
			console.log("hello");
		}
		else{
			screenvalue+=btntext;
			screen.value=screenvalue;
		}
		
	});
	
	
})