$(function(){$(".mobile-toggle").click(function(e){e.preventDefault(),$(".nav").toggleClass("nav-open")}),$('a[rel="videoPlayerToggle"]').click(function(e){e.preventDefault();var a=$(this).attr("data-videoID");$("#videoPlayerContainer iframe").attr("src","//www.youtube.com/embed/"+a+"?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0"),$("#videoPlayerContainer").show("slow")}),$("#videoPlayerContainer").click(function(){$("#videoPlayerContainer").hide("fast"),$("#videoPlayerContainer iframe").attr("src","")})});