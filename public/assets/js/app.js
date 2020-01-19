$(() => {
    $("#addOrder").on("click", function(e) {
        e.preventDefault;
        let data = {
            burgerName: $("#burgerNameInput").val().trim()
        };
        $.ajax({
            type: "POST",
            url: "/api/burgers/create",
            data: data
        }).then(() => {
            $("#burgerNameInput").val('');
            location.reload();
        });
    });
    $("#burgerNameInput").on('keypress', function(e) {
        e.preventDefault;
        if(e.keyCode == 13){
            $("#addOrder").click();
        };
    });
    $(".eat-clean").on('click', function(e) {
        let devoured = $(this).data('devoured');
        let id = $(this).data('id');
        if(!devoured){
            $.ajax({
                type: "PUT",
                url: `/api/burgers/${id}`,
            }).then(() => {
                location.reload();
            });
        }else{
            $.ajax({
                type: "DELETE",
                url: `/api/burgers/${id}`,
            }).then(() => {
                location.reload();
            });;
        }
    });
});
