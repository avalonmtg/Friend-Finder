     $(document).ready(function(){;
        $("#submit").on("click", function(event) {
            event.preventDefault();
            console.log("working");

function validate() {

    var isValid = true;
    $(".form-control").each(function() {
        if ($(this).val() === "") {
            isValid = false;        }
    })

    $(".chosen").each(function() {
        if ($(this).val() === "") {
            isValid = false;
        }
    });
    return isValid;
}

if (validate()) {
    
    var formData = {

        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [

            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val(),        
        ]
    };

    $.post("/api/friends", formData, function(data) {
        $("#bestFriend").text(data.name);
        $("#bestFriendPhoto").attr("src", data.photo);
        $("#bestFriendModal").modal("toggle");
    });
    
}
else {
    alert("Please fill out all of the questions before submitting!");
}

        })

     });

    