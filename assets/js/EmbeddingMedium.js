 // https://medium.datadriveninvestor.com/embed-medium-as-a-blog-on-your-site-54a1b49cbe16

 $(function () {
    var mediumPromise = new Promise(function (resolve) {
        var $content = $('#jsonContent');
        var data = {rss: 'https://medium.com/feed/@hungchienhsiang'};

        $.get(
            'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hungchienhsiang',
            data,
            function (response) {
                if (response.status == 'ok') {
                    var display = '';
                    $.each(
                        response.items,
                        function (k, item) {
                            display += `<div class="medium-card mb-3 mx-auto mr-5 " style="width: 20rem;">`;
                            var src = item["thumbnail"]; // use thumbnail url
                            display += `  <img src="${src}" class="card-img-top" alt="Cover image">`;
                            display += `  <div class="card-body">`;
                            display += `    <h5 class="card-title">${item.title}</h5>`;
                            
                            display += '<p>'
                            var categories = item["categories"];
							for (var i=0; i<categories.length; i++){
                            	display += `<a href="#"><i>#${categories[i]}&nbsp;</i></a>`
                            }
							display += '</p>'
                            
                            display += `    <a href="${item.link}" target="_blank" class="btn btn-outline-success" >Read More</a>`;
                            display += `  </div>
                                        </div>`;
                            return k < 10;
                        }
                    );
        
                    resolve($content.html(display));
                }
            }
        );
    });
    
    mediumPromise.then(function() {
        //Pagination
        pageSize = 4;

        var pageCount = $(".medium-card").length / pageSize;

        for (var i = 0; i < pageCount; i++) {
            $("#pagin").append(`<a class="page-link" href="#">${(i + 1)}</a>`);
        }
        $("#pagin li:nth-child(1)").addClass("active");
        showPage = function (page) {
            $(".medium-card").hide();
            $(".medium-card").each(function (n) {
                if (n >= pageSize * (page - 1) && n < pageSize * page)
                    $(this).show();
            });
        }

        showPage(1);

        $("#pagin a").click(function () {
            $("#pagin a").removeClass("active");
            $(this).addClass("active");
            showPage(parseInt($(this).text()))
            return false;
        });
    });
  
});