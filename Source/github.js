/**
 * Created by Sulav on 6/24/2017.
 */
$(document).ready(function () {
    $("#enter").click(function () {
        $('.row .col-md-10').empty();
        var url = "https://api.github.com/users/" + $("#username").val();
        // console.log(url)
        $.get( url, function( data ) {
            console.log(data)
           if (data.followers < 5){
               $("#warning").css("display","block");



           }
           else {

               var user = data;
               $('.row .col-md-10').append("<div class='list-group' id='detail'>");
               $('#detail').append("<p class='list-group-item text-info'>Name : "+ user.name+ "</p>");
               $('#detail').append("<p class='list-group-item text-info'> Id: "+user.id+"</p>");
               $('#detail').append("<a class='list-group-item text-info' href = "+user.url+">URL : "+user.url+"</a>");
               $('#detail').append("<a class='list-group-item text-info' href = "+user.url+">Avatar : "+user.avatar_url+"</a>");
               $('#detail').append("<p class='list-group-item text-info'>Created At: "+user.created_at+"</p>")
               $('#detail').append("<p class='list-group-item text-info'>Followed by the User : "+ user.following+ "</p>");
               $('#detail').append("<p class='list-group-item text-info'> Number of Followers: "+user.followers+"</p>");
               $('#detail').append("<p class='list-group-item text-info'> Followers: "+"</p>");

               var follower_url = "https://api.github.com/users/"+ user.login+"/followers";
               $.get( follower_url, function( data ) {
                    data= data.slice(0,5);
                    console.log(data);

                   $('#detail').append("<div style='padding-left: 2vh;' class='list-group' id='followers'>");
                    data.forEach(function (d,i){
                        $('#followers').append("<div ' class='list-group-item text-info'><span>"+(i+1)+"."+"</span>"+d.login+"</div>");
                    } );

               });

               var repo_url = "https://api.github.com/users/"+ user.login+"/repos";
               $.get( repo_url, function( data ) {
                   $('#detail').append("<p class='list-group-item text-info'> Repos: "+"</p>");
                   data= data.slice(0,5);
                   console.log(data);

                   $('#detail').append("<div style='padding-left: 2vh;' class='list-group' id='repos'>");
                   data.forEach(function (d,i){
                       $('#repos').append("<div ' class='list-group-item text-info'><span>"+(i+1)+"."+"</span>"+d.name+"</div>");
                   } );

               });


               //$('.row .col-md-10').append("<a href = "+user.url+"class='item text-info'>Repos : "+user.public_repos+"</a>");
           }

        });
        // $.ajax({
        //     url : url,
        //     dataType: 'json'
        // }).done(function (data) {
        //     console.log(data)
        // })

    });
});