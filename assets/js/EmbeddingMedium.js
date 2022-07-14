 $(function () {
    /* Sometimes it's also useful to use window.innerWidth (not typically found on mobile devices) instead of screen width 
    when dealing with desktop browsers where the window size is often less than the device screen size. */
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    var mediumPromise = new Promise(function (resolve) {
        var $content = $('#jsonContent');
        var data = {rss: 'https://medium.com/feed/@hungchienhsiang'};

        // use http://jsonviewer.stack.hu/ to check json file easier
        $.get(
            'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40hungchienhsiang',
            data,
            function (response) {
                if (response.status == 'ok') {
                    var display = '';
                    // let number of card responsive
                    var TotalCard = (width < 768) ? 5 : 8;
                    $.each(
                        response.items,
                        function (k, item) {
                            display += `<div class="card medium-card mb-3 mx-auto mr-5" style="width:20rem; height:30rem;">`;
                            var src = item["thumbnail"]; // use thumbnail url
                            display += `  <span>
                                            <img src="${src}" class="card-img-top" alt="Cover image">
                                          </span>`;
                            display += `  <div class="card-body" style="padding: 0 1rem 1rem 1rem;">`;
                            display += `    <h5 class="card-title">${item.title}</h5>`;
                            
                            // add categories
                            display += '    <p>'
                            var categories = item["categories"];
							for (var i=0; i<categories.length; i++){
                            	display += `  <a href="#"><i>#${categories[i]}</i></a> &nbsp;`
                            }
							display += '    </p>'
                            
                            display += `    <a href="${item.link}" target="_blank" class="btn btn-outline-success" >Read More</a>`;
                            display += `  </div>
                                        </div>`;
                            return k < TotalCard;
                        }
                    );
                    resolve($content.html(display));
                }
            }
        );
    });
    
    // make Pagination
    mediumPromise.then(function() {
        // make Pagination reponsive
        pageSize = (width < 768) ? 1 : 3;
        var pageCount = $(".medium-card").length / pageSize;

        $("#pagin").append(`<a class="page-link" href="javascript:void(0);">&laquo;</a>`);
        for (var i = 0; i < pageCount; i++) {
            $("#pagin").append(`<a class="page-link" href="javascript:void(0);">${(i + 1)}</a>`);
        }
        $("#pagin").append(`<a class="page-link" href="javascript:void(0);">&raquo;</a>`);

        $("#pagin a:nth-child(2)").addClass("active");

        
        showPage = function (page) {
            $(".medium-card").hide();
            $(".medium-card").each(
                function (n) {
                    if (n >= pageSize * (page - 1) && n < pageSize * page)
                        $(this).show();
                }
            );
        }
        showPage(1);

        var pageNum = 1;
        $("#pagin a").click(function () {

            if ($(this).text() == "«") {
                // pre button error handling
                pageNum--;
                if (pageNum < 1) {
                    pageNum++;
                    return false;
                }
                else {
                    showPage(pageNum)
                }
            } else if ($(this).text() == "»"){
                // nex button error handling
                pageNum++;
                if (pageNum > pageCount) {
                    pageNum--;
                    return false;
                }
                else {
                    showPage(pageNum)
                }
            } else {
                pageNum = parseInt($(this).text());
                showPage(pageNum)
            }

            // refresh the pagebutton <a>
            $("#pagin a").removeClass("active");
            $(`#pagin a:nth-child(${pageNum+1})`).addClass("active");
            
        });
    });
  
});