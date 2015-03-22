$(function updateContent() {
    // attaching click handler to links
    $("header a").click(function (e) {
        // cancel the default behaviour
        e.preventDefault(); 
        // get value of id attribute
        var name = $(this).attr('id');
        // set up history pushstate
        history.pushState(null, null, name);
        // remove class active on all anchors
        // give clicked anchor class active
        $('header a').removeClass('active');
        $(this).addClass('active');
        // get the address of the link
        var href = $(this).attr('href');    
        // getting the desired element
        var wrap = $('.main-section'); 
        // removing old data.html('')   
        // load the remote page
        wrap.html('').load(href + ' .main-section');
    });

    // Revert to a previously saved state
    window.addEventListener('popstate', function(event) {
        console.log('popstate fired!');
        updateContent();
    })
});




