




$(document).ready(function () {

    $(document).on("click", ".change-state", (event) => {
        event.preventDefault();
        // this function submits the put for the devoured state
        let id = event.target.id;
        let state = event.target.dataset.devoured;
        if (state === "false") {
            // if burger is not devored and button is clicked, set to true.
            var params = {
                type: "PUT",
                data: { devoured: true }
            }
        } else {
            // // if burger is devored and button is clicked, set to false.
            var params = {
                type: "PUT",
                data: { devoured: false }
            }
        }

        $.ajax(`/api/burgers/${id}`, params).then((response) => {
            console.log(response);
        })
        location.reload();


    });


});