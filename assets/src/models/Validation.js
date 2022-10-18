function Validation() {
    this.checkEmpty = function (value, elementError, mess) {
        if (value.trim() === "") {
            //show thong bao loi
            document.querySelector(elementError).innerHTML = mess;
            document.querySelector(elementError).style.display = "block";
            return false;
        }

        document.querySelector(elementError).innerHTML = "";
        document.querySelector(elementError).style.display = "none";
        return true;
    };

    this.checkRadioEmpty = function (checked, elementError, mess) {
        if (checked === null) {
            document.querySelector(elementError).innerHTML = mess;
            document.querySelector(elementError).style.display = "block";
            return false;
        }
        document.querySelector(elementError).innerHTML = "";
        document.querySelector(elementError).style.display = "none";
        return true;

    }

    this.confirmPassword = function (valueRePass, valuePass, elementError, mess) {
        if (valueRePass !== valuePass) {
            document.querySelector(elementError).innerHTML = mess;
            document.querySelector(elementError).style.display = "block";
            return false;
        }
        document.querySelector(elementError).innerHTML = "";
        document.querySelector(elementError).style.display = "none";
        return true;
    }

    this.checkLength = function (value, elementError, mess, min, max) {
        if (value.length > min && value.length < max) {
            document.querySelector(elementError).innerHTML = "";
            document.querySelector(elementError).style.display = "none";
            return true;
        }
        document.querySelector(elementError).innerHTML = mess;
        document.querySelector(elementError).style.display = "block";
        return false;
    }

    this.checkEmail = function (value, elementError, mess) {
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(email)) {
            document.querySelector(elementError).innerHTML = "";
            document.querySelector(elementError).style.display = "none";
            return true;
        }
        document.querySelector(elementError).innerHTML = mess;
        document.querySelector(elementError).style.display = "block";
        return false;
    }

    this.checkPassword = function (value, elementError, mess) {
        var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (value.match(password)) {
            document.querySelector(elementError).innerHTML = "";
            document.querySelector(elementError).style.display = "none";
            return true;
        }
        document.querySelector(elementError).innerHTML = mess;
        document.querySelector(elementError).style.display = "block";
        return false;
    }

    this.checkName = function (value, elementError, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            document.querySelector(elementError).innerHTML = "";
            document.querySelector(elementError).style.display = "none";
            return true;
        }
        document.querySelector(elementError).innerHTML = mess;
        document.querySelector(elementError).style.display = "block";
        return false;
    }

    this.checkPhone = function (value, elementError, mess) {
        var number = /^[0-9]+$/;
        if (value.match(number)) {
            document.querySelector(elementError).innerHTML = "";
            document.querySelector(elementError).style.display = "none";
            return true;
        }
        document.querySelector(elementError).innerHTML = mess;
        document.querySelector(elementError).style.display = "block";
        return false;
    }



}