var validation = new Validation();

function getInfoUser() {
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var rePassword = document.querySelector('#rePassword').value;
    var name = document.querySelector('#name').value;
    var gender = isGender();
    var phone = document.querySelector('#phone').value;

    var isValid = true


    /**---------------------------Check Validation---------------------------*/
    // Email
    isValid &= validation.checkEmpty(email, '#tbEmail', '(*) Vui lòng nhập email') && validation.checkEmail(email, '#tbEmail', '(*) Vui lòng nhập đúng email');

    // Password
    isValid &= validation.checkEmpty(password, '#tbPassword', '(*) Vui lòng nhập mật khẩu') && validation.checkLength(password, '#tbPassword', '(*) Mật khãu phải chứa 8-12 kí tự', 7, 13) && validation.checkPassword(password, '#tbPassword', '(*)  Mật khẩu phải có ít nhất một chữ cái in hoa,<br> một chữ cái viết thường , một số và một kí tự đặc biệt');
    isValid &= validation.checkEmpty(rePassword, '#tbRePassword', '(*) Vui lòng xác nhận lại mật khẩu') && validation.confirmPassword(rePassword, password, '#tbRePassword', '(*) Vui lòng nhập lại giống mật khẩu');


    // Name
    isValid &= validation.checkEmpty(name, '#tbName', '(*) Vui lòng nhập tên') && validation.checkName(name, '#tbName', '(*) Vui lòng nhập tên không chứa số và kí tự đặc biệt');

    // Phone 
    isValid &= validation.checkEmpty(phone, '#tbPhone', '(*) Vui lòng nhập số điện thoại');

    // Gender
    isValid &= validation.checkRadioEmpty(gender, '#tbGeder', '(*) Vui lòng chọn giới tính');









    if (isValid) {
        var user = new User(email, password, name, gender, phone);

        return user;
    }
    return null;
}



function btnSubmit() {
    user = getInfoUser();

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        ResponseType: 'JSON',
        data: user
    });


    promise.then(function (result) {
        console.log(result.data.content);

    });

    promise.catch(function (error) {
        console.log(error);
    });
}


function isGender() {
    var isMale = document.querySelector('#male').checked;
    var isFemale = document.querySelector('#female').checked;

    if (isMale) {
        return true;
    } if (isFemale) {
        return false;
    }
    return null;
}