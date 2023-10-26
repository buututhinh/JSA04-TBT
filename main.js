function checkField(field) {
    if (field == null) {
        return false
    } else {
        return true
    }
}

function checkLength(field) {
    if (field.length < 8) {
        return false
    } else {
        return true
    }
}

function checkmail(field) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field))
     {
       return true
     }
       return false
   }

function checkPassword(pw1, pw2) {
    if (pw1 != pw2) {
        return false
    } else {
        return true
    }
}



function checkRegister() {
let username = document.getElementById('username').value
let email = document.getElementById('email').value
let pw = document.getElementById('password').value
let confirmedpassword = document.getElementById('confirmed-password').value
let signiupbtn = document.getElementById('sign-up-btn')
    if (checkField(username) == false || checkField(email) == false || checkField(pw) == false || checkField(confirmedpassword) == false)
    { alert ('Cần Điền Thông Tin Đăng Nhập')
    return
} else if (checkLength(username) == false || checkLength(pw) == false || checkLength(confirmedpassword) == false) {
    alert ('Tên Đăng Nhập và Mật Khẩu cần ít nhất 8 ký tự')
    return
} else if (checkmail(email) == false) {
    alert (' Email Sai')
    return
} else if (checkPassword(pw, confirmedpassword) == false) {
    alert ('Mật Khẩu không khớp')
    return
} else {
    alert('Đăng Nhập Thành Công')
    return
}
}
 function showalert () {
    alert ('Đã Thêm Vào Giỏ Hàng')
 }