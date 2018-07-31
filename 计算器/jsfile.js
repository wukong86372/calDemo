 function display (str){
	let res = document.getElementById("result");
	let info = document.getElementById("information");
	if(str == 'AC') {
		res.innerHTML = '';
		info.innerHTML = '';
		return;
	}

	if(str == '+/-') {
		if(info.innerText == '' && res.innerText != ''){
			if(judgeNum(res.innerText)){
				if(res.innerText[0] == '-') {
					res.innerText = res.innerText.substring(1,info.length);
				}
				else if(res.innerText[0] != '-') {
					res.innerText = '-' + res.innerText;
				}
			}
		}
		else if(info.innerText[0] == '-') {
			info.innerText = info.innerText.substring(1,info.length);
		}
		else if(info.innerText[0] != '-') {
			info.innerText = '-' + info.innerText;
		}
		return;
	}

	if(str == '%') {
		if(info.innerText == '' && res.innerText == ''){
			res.innerText = "invalid input!";
			return;
		}
		else if(info.innerText == '' && res.innerText != '') {
			if(judgeNum(res.innerText)){
				res.innerText = String(parseFloat(res.innerText)/100);
				return;
			}
		}
		else if(judgeNum(info.innerText)){
			info.innerText = String(parseFloat(info.innerHTML)/100);
		}
		else if(!judgeNum(info.innerText)) {
			res.innerText = "invalid input!";
		}
		return;
	}

	if(res.innerText == '' && info.innerText == '') {
		if(str == '+' || str == '-' || str == '×' || str == '÷' || str == '=') {
			return;
		}
	}
	else if(res.innerText == '' && info.innerText != '') {
		let r1 = info.innerHTML;
		if(str == '+' || str == '-' || str == '×' || str == '÷') {
			if(judgeNum(r1))
			{
				res.innerHTML = r1 + str;
				info.innerHTML = '';
				return;
			}
			else{
				res.innerHTML = "invalid input!";
				info.innerHTML = '';
				return;
			}
		}
		else if(str == '=') {
			res.innerHTML = r1;
			info.innerHTML = '';
			return;
		}
	}
	else if(res.innerText != '' && info.innerText == '') {
		if(str == '+' || str == '-' || str == '×' || str == '÷') {
			if(judgeNum(res.innerText)){
				res.innerHTML = res.innerHTML + str;
				info.innerHTML = '';
			}
			else{
				res.innerText = 'invalid input!';
			}
			return;
		}
		else if(str == '=') {
			if(judgeNum(res.innerText)){
				info.innerHTML = '';
			}
			else{
				res.innerText = 'invalid input!';
			}
			return;
		}
		else {
			let tmp = res.innerText[res.innerText.length-1];
			if(tmp == '+' || tmp == '-' || tmp == '×' || tmp == '÷') {

			}
			else {
				res.innerHTML = '';
			}
		}
	}
	else if(res.innerText != '' && info.innerText != '') {
		if(str == '=') {
			if(judgeNum(info.innerHTML))
			{
				calcu();
				return;
			}
			else {
				res.innerHTML = "invalid input!";
				info.innerHTML = '';
				return;
			}
		}
		else if(str == '+' || str == '-' || str == '×' || str == '÷') {
			if(judgeNum(info.innerHTML))
			{
				calcu();
				res.innerHTML = res.innerHTML + str;
				return;
			}
			else {
				res.innerHTML = "invalid input!";
				info.innerHTML = '';
				return;
			}	
		}
	}
	info.innerHTML = info.innerHTML+str;
}

function judgeNum(str) {
	if(str.length == 0){
		return false;
	}
	let flag = new Boolean(false);
	for (var i = str.length - 1; i >= 0; i--) {
		if(str[i] == '.' && i == str.length-1) {
			return false;
		}
		else if(str[i] == '.' && i != str.length-1)
		{
			if(flag == false){
				flag = true;
			}
			else{
				return false;
			}
		}
		if(str[i] == '+' || str[i] == '×' || str[i] == '÷') {
			return false;
		}
		if(str[i] == '-' && i != 0) {
			return false;
		}
	}
	return true;
}

function calcu() {
	let res = document.getElementById("result");
	let info = document.getElementById("information");
	let r2 = parseFloat(res.innerHTML.substring(0,res.innerHTML.length-1));
	let r3 = parseFloat(info.innerHTML);
	if(res.innerText[res.innerText.length-1] == '+') {
		let r4 = r2 + r3;
		res.innerHTML = r4;
		info.innerHTML = '';
	}
	else if(res.innerText[res.innerText.length-1] == '-') {
		let r4 = r2 - r3;
		res.innerHTML = r4;
		info.innerHTML = '';
	}
	else if(res.innerText[res.innerText.length-1] == '×') {
		console.log(r2);
		console.log(r3);
		let r4 = (r2*10000) * (r3*10000)/100000000;
		res.innerHTML = r4;
		info.innerHTML = '';
	}
	else if(res.innerText[res.innerText.length-1] == '÷') {
		if(r3 == '0'){
			res.innerText = "The divisor can't be zero!";
			info.innerText = '';
			return;
		}
		let r4 = r2 / r3;
		res.innerHTML = r4;
		info.innerHTML = '';
	}
	return;
}