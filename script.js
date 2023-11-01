window.promises = [];

function loaddata(content){
	document.getElementById("output").textContent = content;
}
let promise1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("This is first promise");
	},2000)
})

let promise2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("This is second promise");
	},1000)
})

let promise3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("This is third promise");
	},5000)
})

let promise4 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("This is fourth promise");
	},3000)
})

let promise5 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("This is fifth promise");
	},4000)
})

window.promises =[promise1,promise2,promise3,promise4,promise5];


Promise.any(promises).then((value)=>{
	loaddata(value);
})
// Do not change the code above this
// add your promises to the array `promises`
