 function display (str){
	let res = document.getElementById("result");
	let info = document.getElementById("information");
	if(str == 'AC') {
		res.innerText = '';
		info.innerText = '';
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
			info.innerText = String(parseFloat(info.innerText)/100);
		}
		else if(!judgeNum(info.innerText)) {
			res.innerText = "invalid input!";
			info.innerText = '';
		}
		return;
	}

	if(res.innerText == '' && info.innerText == '') {
		if(str == '+' || str == '-' || str == '×' || str == '÷' || str == '=') {
			return;
		}
	}
	else if(res.innerText == '' && info.innerText != '') {
		let r1 = info.innerText;
		if(str == '+' || str == '-' || str == '×' || str == '÷') {
			if(judgeNum(r1))
			{
				res.innerText = r1 + str;
				info.innerText = '';
				return;
			}
			else{
				res.innerText = "invalid input!";
				info.innerText = '';
				return;
			}
		}
		else if(str == '=') {
			if(judgeNum(r1)) {
				res.innerText = r1;
				info.innerText = '';
			}
			else {
				res.innerText = "invalid input!";
				info.innerText = '';
			}
			return;
		}
	}
	else if(res.innerText != '' && info.innerText == '') {
		if(str == '+' || str == '-' || str == '×' || str == '÷') {
			if(judgeNum(res.innerText)){
				res.innerText = res.innerText + str;
				info.innerText = '';
			}
			else{
				res.innerText = 'invalid input!';
			}
			return;
		}
		else if(str == '=') {
			if(judgeNum(res.innerText)){
				info.innerText = '';
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
				res.innerText = '';
			}
		}
	}
	else if(res.innerText != '' && info.innerText != '') {
		if(str == '=') {
			if(judgeNum(info.innerText))
			{
				calcu();
				return;
			}
			else {
				res.innerText = "invalid input!";
				info.innerText = '';
				return;
			}
		}
		else if(str == '+' || str == '-' || str == '×' || str == '÷') {
			if(judgeNum(info.innerText))
			{
				calcu();
				res.innerText = res.innerText + str;
				return;
			}
			else {
				res.innerText = "invalid input!";
				info.innerText = '';
				return;
			}	
		}
	}
	info.innerText = info.innerText+str;
}

function judgeNum(str) {
	if(str.length == 0){
		return false;
	}
	if(str[0] == '-' && str.length == 1) {
		console.log("haha");
		return false;
	}
	let flag = new Boolean(false);
	for (var i = str.length - 1; i >= 0; i--) {
		if(str[i] != '.' && str[i] != '-') {
			if(parseInt(str[i]) >= 0 && parseInt(str[i]) <= 9) {
				console.log(str[i]);
				console.log(parseInt(str[i]));
			}
			else {
				console.log(str[i]);
				console.log(parseInt(str[i]));
				return false;
			}
		}
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
	let r2 = parseFloat(res.innerText.substring(0,res.innerText.length-1));
	let r3 = parseFloat(info.innerText);
	if(res.innerText[res.innerText.length-1] == '+') {
		let r4 = r2 + r3;
		res.innerText = r4;
		info.innerText = '';
	}
	else if(res.innerText[res.innerText.length-1] == '-') {
		let r4 = r2 - r3;
		res.innerText = r4;
		info.innerText = '';
	}
	else if(res.innerText[res.innerText.length-1] == '×') {
		console.log(r2);
		console.log(r3);
		let r4 = (r2*10000) * (r3*10000)/100000000;
		res.innerText = r4;
		info.innerText = '';
	}
	else if(res.innerText[res.innerText.length-1] == '÷') {
		if(r3 == '0'){
			res.innerText = "The divisor can't be zero!";
			info.innerText = '';
			return;
		}
		let r4 = (r2*10000) / (r3*10000);
		res.innerText = r4;
		info.innerText = '';
	}
	return;
}