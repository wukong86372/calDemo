function display (str){
	let res = document.getElementById("result");
	let info = document.getElementById("information");
	if(str == 'AC') {
		res.innerHTML = '';
		info.innerHTML = '';
		return;
	}
	if(res.innerText == '' && info.innerText == '') {
		if(str == '+' || str == '−' || str == '×' || str == '÷' || str == '=') {
			return;
		}
	}
	else if(res.innerText == '' && info.innerText != '') {
		let r1 = info.innerHTML;
		if(str == '+' || str == '−' || str == '×' || str == '÷') {
			res.innerHTML = r1 + str;
			info.innerHTML = '';
			return;
		}
		else if(str == '=') {
			res.innerHTML = r1;
			info.innerHTML = '';
			return;
		}
	}
	else if(res.innerText != '' && info.innerText == '') {
		if(str == '+' || str == '−' || str == '×' || str == '÷') {
			res.innerHTML = res.innerHTML + str;
			info.innerHTML = '';
			return;
		}
		else if(str == '=') {
			res.innerHTML = res.innerHTML;
			info.innerHTML = '';
			return;
		}
		else {
			let tmp = res.innerText[res.innerText.length-1];
			if(tmp == '+' || tmp == '−' || tmp == '×' || tmp == '÷') {

			}
			else {
				res.innerHTML = '';
			}
		}
	}
	else if(res.innerText != '' && info.innerText != '') {
		if(str == '=') {
			let r2 = parseFloat(res.innerHTML.substring(0,res.innerHTML.length-1));
			let r3 = parseFloat(info.innerHTML.substring(0,res.innerHTML.length));
			if(res.innerText[res.innerText.length-1] == '+') {
				let r4 = r2 + r3;
				res.innerHTML = r4;
				info.innerHTML = '';
				console.log("r4:"+4);
			}
			else if(res.innerText[res.innerText.length-1] == '−') {
				let r4 = r2 - r3;
				res.innerHTML = r4;
				info.innerHTML = '';
				console.log("r4:"+r4);
			}
			else if(res.innerText[res.innerText.length-1] == '×') {
				let r4 = r2 * r3;
				res.innerHTML = r4;
				info.innerHTML = '';
				console.log("r4:"+r4);
			}
			else if(res.innerText[res.innerText.length-1] == '÷') {
				let r4 = r2 / r3;
				res.innerHTML = r4;
				info.innerHTML = '';
				console.log("r4:"+r4);
			}
			return;
		}
	}
	info.innerHTML = info.innerHTML+str;
	if(info.innerText == '')
		console.log("hehe");
}