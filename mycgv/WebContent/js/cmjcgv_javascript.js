/******************************************************
***********************로그인 폼 체크************************/

function loginCheck() {
	let id = document.getElementById("id");
	let pass = document.getElementById("pass");
	
	if(id.value=="") {
		alert("아이디를 입력하세요");
		id.focus();
		return false;
	}else if(pass.value=="") {
		alert("패스워드를 입력하세요")
		pass.focus();
		return false;
	}else {
		//아이디, 패스워드가 모두 입력된 상태 -> form으로 보냄(서버로)
		loginForm.submit();
	}
}
/********************************************************
				로그인폼 다시쓰기 버튼 focus
*********************************************************/

function loginReset() {
	document.getElementById("id").value="";
	document.getElementById("pass").value="";
	document.getElementById("id").focus();
}

/********************************************************
 * 					회원가입 폼 체크
*********************************************************/

function joinCheck() {
	let id = document.getElementById("id");
	let pwd = document.getElementById("pwd");
	let cpwd = document.getElementById("cpwd");
	let name = document.getElementById("name");
	let email1 = document.getElementById("email1");
	let email2 = document.getElementById("email2");
	let email3 = document.getElementById("email3"); //select박스
	let addr1 = document.getElementById("addr1");
	let addr2 = document.getElementById("addr2");
	let phone1 = document.getElementById("phone1");
	let phone2 = document.getElementById("phone2");
	let phone3 = document.getElementById("phone3");
	
	if(id.value=="") {
		alert("아이디는 필수정보입니다");
		id.focus();
		return false;
	}else if(pwd.value == "") {
		alert("비밀번호는 필수정보입니다");
		pwd.focus();
		return false;
	}else if(cpwd.value == "") {
		alert("비밀번호가 동일하지 않습니다");
		cpwd.focus();
		return false;
	}else if(name.value == "") {
		alert("성명은 필수정보입니다");
		name.focus();
		return false;
	}else if(checkCount("gender")==0){
		alert("성별을 체크해주세요");
		/*document.getElementByName("gender")[0].style.border="1px solid #777";*/
		return false;
	}else if(email1.value == ""){
		alert("이메일 주소를 입력해주세요");
		email1.focus();
		return false;
	}else if(email2.value == ""){
		alert("이메일 주소를 입력해주세요");
		email3.focus();
		return false;
	}else if(addr1.value == ""){
		alert("주소를 입력해주세요");
		addr1.focus();
		return false;
	}else if(addr2.value == ""){
		alert("상세주소를 입력해주세요");
		addr2.focus();
		return false;
	}else if(checkCount("phone") == 0) {
		alert("통신사를 선택해주세요");
		return false;
	}else if(phone1.value == "default") {
		alert("번호를 선택해주세요");
		phone1.focus();
		return false;
	}else if(phone2.value == "") {
		alert("휴대전화 앞 자리를 입력하세요");
		phone2.focus();
		return false;
	}else if(phone3.value == "") {
		alert("휴대전화 뒷 자리를 입력하세요");
		phone3.focus();
		return false;
	}else if(checkCount("hobby") == 0) {
		alert("취미를 선택해주세요");
		return false;
	}else {
		//서버 전송 = form 이름.submit();
		joinForm.submit();
	}
}
//radiobox,checkbox 값 체크
function checkCount(tagName) {
	const tagList = document.getElementsByName(tagName);
	let count=0;
	for(element of tagList) {
		if(element.checked)
			count++;
	}
	return count;
}

/********************************************************
			회원가입 폼 체크 - 비밀번호 & 비밀번호 확인
*********************************************************/
function passCheck() {//기존 비밀번호와 비밀번호 확인창에 입력된 값이 동일한 값인지 확인
	//비밀번호와 비밀번호 확인 유효성 체크가 먼저 수행되어야한다 -> 비어있으면 안되니까
	let pwd = document.getElementById("pwd");
	let cpwd = document.getElementById("cpwd");
	let cmsg = document.getElementById("cmsg");
	
	if(pwd.value != "") {
		if(cpwd.value != "") {
			if(pwd.value == cpwd.value) {
					cmsg.style.display = "block";
					cmsg.style.padding = "5px 0";
					cmsg.style.fontsize = "11px";
					cmsg.innerHTML = "비밀번호가 동일합니다";
					cmsg.style.color = "blue";
					document.getElementById("name").focus();
				}else {
					cmsg.style.display = "block";
					cmsg.style.padding = "5px 0";
					cmsg.style.fontsize = "11px";
					cmsg.innerHTML = "비밀번호가 동일하지 않습니다";
					cmsg.style.color = "red";
					pwd.value = "";
					cpwd.value = "";
					pwd.focus();
				}
				
			}
		
	}
}

/********************************************************
		이메일 selectbox 선택 시 input창에 값을 넣는 스크립트
*********************************************************/
function emailCheck() {
	
	let email2 = document.getElementById("email2");
	let email3 = document.getElementById("email3");
	
	if(email3.value == "default") {
		alert("이메일 주소를 선택해주세요");
		email2.value == "";
		email3.focus();
	}else if(email3.value == "self"){
		email2.value = "";
		email2.focus();
	}else {
		email2.value = email3.value;
	}
}

/********************************************************
					주소 찾기 API
*********************************************************/

function searchAddr() {
        new daum.Postcode({
            oncomplete: function(data) {
            	document.getElementById("addr1").value = data.address;
            	document.getElementById("addr2").focus();
            }
        }).open();
    
}

/********************************************************
				게시판 제목 validation check
*********************************************************/
function boardFormCheck() {
	let btitle = document.getElementById("btitle");
	
	if(btitle.value == "") {
		alert("제목을 입력해주세요");
		btitle.focus();
		return false;
	}else {
		//서버 전송
		writeForm.submit();
	}
}

/********************************************************
*********************************************************/

/******************************************************
***********************로그인 폼 체크************************/

function loginCheck() {
	let id = document.getElementById("id");
	let pass = document.getElementById("pass");
	
	if(id.value=="") {
		alert("아이디를 입력하세요");
		id.focus();
		return false;
	}else if(pass.value=="") {
		alert("패스워드를 입력하세요")
		pass.focus();
		return false;
	}else {
		//아이디, 패스워드가 모두 입력된 상태 -> form으로 보냄(서버로)
		loginForm.submit();
	}
}
/********************************************************
				로그인폼 다시쓰기 버튼 focus
*********************************************************/

function loginReset() {
	document.getElementById("id").value="";
	document.getElementById("pass").value="";
	document.getElementById("id").focus();
}

/********************************************************
 * 					회원가입 폼 체크
*********************************************************/

function joinCheck() {
	let id = document.getElementById("id");
	let pwd = document.getElementById("pwd");
	let cpwd = document.getElementById("cpwd");
	let name = document.getElementById("name");
	let email1 = document.getElementById("email1");
	let email2 = document.getElementById("email2");
	let email3 = document.getElementById("email3"); //select박스
	let addr1 = document.getElementById("addr1");
	let addr2 = document.getElementById("addr2");
	let phone1 = document.getElementById("phone1");
	let phone2 = document.getElementById("phone2");
	let phone3 = document.getElementById("phone3");
	
	if(id.value=="") {
		alert("아이디는 필수정보입니다");
		id.focus();
		return false;
	}else if(pwd.value == "") {
		alert("비밀번호는 필수정보입니다");
		pwd.focus();
		return false;
	}else if(cpwd.value == "") {
		alert("비밀번호가 동일하지 않습니다");
		cpwd.focus();
		return false;
	}else if(name.value == "") {
		alert("성명은 필수정보입니다");
		name.focus();
		return false;
	}else if(checkCount("gender")==0){
		alert("성별을 체크해주세요");
		/*document.getElementByName("gender")[0].style.border="1px solid #777";*/
		return false;
	}else if(email1.value == ""){
		alert("이메일 주소를 입력해주세요");
		email1.focus();
		return false;
	}else if(email2.value == ""){
		alert("이메일 주소를 입력해주세요");
		email3.focus();
		return false;
	}else if(addr1.value == ""){
		alert("주소를 입력해주세요");
		addr1.focus();
		return false;
	}else if(addr2.value == ""){
		alert("상세주소를 입력해주세요");
		addr2.focus();
		return false;
	}else if(checkCount("phone") == 0) {
		alert("통신사를 선택해주세요");
		return false;
	}else if(phone1.value == "default") {
		alert("번호를 선택해주세요");
		phone1.focus();
		return false;
	}else if(phone2.value == "") {
		alert("휴대전화 앞 자리를 입력하세요");
		phone2.focus();
		return false;
	}else if(phone3.value == "") {
		alert("휴대전화 뒷 자리를 입력하세요");
		phone3.focus();
		return false;
	}else if(checkCount("hobby") == 0) {
		alert("취미를 선택해주세요");
		return false;
	}else {
		//서버 전송 = form 이름.submit();
		joinForm.submit();
	}
}
//radiobox,checkbox 값 체크
function checkCount(tagName) {
	const tagList = document.getElementsByName(tagName);
	let count=0;
	for(element of tagList) {
		if(element.checked)
			count++;
	}
	return count;
}

/********************************************************
			회원가입 폼 체크 - 비밀번호 & 비밀번호 확인
*********************************************************/
function passCheck() {//기존 비밀번호와 비밀번호 확인창에 입력된 값이 동일한 값인지 확인
	//비밀번호와 비밀번호 확인 유효성 체크가 먼저 수행되어야한다 -> 비어있으면 안되니까
	let pwd = document.getElementById("pwd");
	let cpwd = document.getElementById("cpwd");
	let cmsg = document.getElementById("cmsg");
	
	if(pwd.value != "") {
		if(cpwd.value != "") {
			if(pwd.value == cpwd.value) {
					cmsg.style.display = "block";
					cmsg.style.padding = "5px 0";
					cmsg.style.fontsize = "11px";
					cmsg.innerHTML = "비밀번호가 동일합니다";
					cmsg.style.color = "blue";
					document.getElementById("name").focus();
				}else {
					cmsg.style.display = "block";
					cmsg.style.padding = "5px 0";
					cmsg.style.fontsize = "11px";
					cmsg.innerHTML = "비밀번호가 동일하지 않습니다";
					cmsg.style.color = "red";
					pwd.value = "";
					cpwd.value = "";
					pwd.focus();
				}
				
			}
		
	}
}

/********************************************************
		이메일 selectbox 선택 시 input창에 값을 넣는 스크립트
*********************************************************/
function emailCheck() {
	
	let email2 = document.getElementById("email2");
	let email3 = document.getElementById("email3");
	
	if(email3.value == "default") {
		alert("이메일 주소를 선택해주세요");
		email2.value == "";
		email3.focus();
	}else if(email3.value == "self"){
		email2.value = "";
		email2.focus();
	}else {
		email2.value = email3.value;
	}
}

/********************************************************
					주소 찾기 API
*********************************************************/

function searchAddr() {
        new daum.Postcode({
            oncomplete: function(data) {
            	document.getElementById("addr1").value = data.address;
            	document.getElementById("addr2").focus();
            }
        }).open();
    
}

/********************************************************
				게시판 제목 validation check
*********************************************************/
function boardFormCheck() {
	let btitle = document.getElementById("btitle");
	
	if(btitle.value == "") {
		alert("제목을 입력해주세요");
		btitle.focus();
		return false;
	}else {
		//서버 전송
		writeForm.submit();
	}
}


/********************************************************
*********************************************************/






/********************************************************
*********************************************************/









/********************************************************
*********************************************************/








/********************************************************
*********************************************************/








/********************************************************
*********************************************************/






/********************************************************
*********************************************************/









/********************************************************
*********************************************************/








/********************************************************
*********************************************************/








/********************************************************
*********************************************************/