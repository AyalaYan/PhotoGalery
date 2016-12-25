$(document).ready(function () {
    var name = $("#name"),
    nameRepeat = $("#nameRepeat"),
    save = $("#save"),
    password = $("#password"),
    greet = $("#greet");

    name.keyup(function () {
        if (name.val().length == 0) {
            greet.addClass("hide");
            save.attr("disabled", "disabled");
            nameRepeat.text('');
        }
        else {
            greet.removeClass("hide");
            save.removeAttr("disabled");
            nameRepeat.text(name.val());
        }
    })
});


function login() {
    var name = $("#name"),
    password = $("#password"),
    spSuccess = $("#spSuccess");

    var User = {
        Name: name.val(),
        Password: password.val()
    }
    $.ajax("/api/login", {
        data: JSON.stringify(User),
        contentType: 'application/json',
        type: 'POST',
    })
    .success(function (IsSuccess) {
        if (IsSuccess) {
            spSuccess.text('משתמש נכנס בהצלחה');
            spSuccess.removeClass('label-danger');
            spSuccess.addClass('label-success');

        }
        else {
            spSuccess.text('משתמש לא קיים');
            spSuccess.removeClass('label-success');
            spSuccess.addClass('label-danger');
        }
        spSuccess.removeClass('hide');
    })
    .error(function (error) {
        console.log(error);
    });
}