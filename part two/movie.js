let currentID = 0;
let movielist = [];

$(function(){
    $("#movie-form").on("submit", function(event){
        event.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();

        let info = {title, rating, currentID};
        const showInfo = draw(info);
        currentID++;
        movielist.push(info);
        $("#movie-info").append(showInfo);
        $("#movie-form").trigger("reset");
    });

    //delete info;
    $("tbody").on("click", function(event){
        let index = movielist.findIndex(movie => movie.currentID === +$(event.target).data("deleteID"))

        movielist.splice(index, 1)

        $(event.target).closest("tr").remove();
    })


})

function draw(info){
    return `
    <tr>
        <td> ${info.title} </td>
        <td> ${info.rating} </td>
        <td>
         <button type="submit" class="btn btn-primary" data-id=${info.currentID}>Remove</button>
        </td>
    <tr>
    `;
}