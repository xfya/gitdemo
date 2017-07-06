$(function() {
    var $baicaijiaTitle = $(".baicaijia-title");
    $.ajax({
        url: "http://182.254.146.100:3000/api/getbaicaijiatitle",
        success: function(data) {
            console.log(data)
            var html = template("baicaijiaTitleTpl", data);
            $baicaijiaTitle.html(html)
            var lis = $baicaijiaTitle.find("li");
            //   lis.length   和  data。result.length   一样
            var ulwidth = 0;
            for (var i = 0; i < lis.length; i++) {
                ulwidth += $(lis[i]).width()
            }
            $baicaijiaTitle.width(ulwidth)
            $(lis[0]).addClass("active")
            var startX = 0;
            var moveX = 0;
            var endX = 0;
            var distanceX = 0;
            var currentX = 0;
            var maxPosition = 0;
            var parentWidth = $baicaijiaTitle.parent().width()
            var minPosition = parentWidth - ulwidth;
            var maxMove = maxPosition + 50;
            var minMove = minPosition - 50;
            $("#wrapper").on("touchstart", function(e) {
                console.log(e)
                console.log(e.touches[0].clientX)
                startX = e.touches[0].clientX
            })
            $("#wrapper").on("touchmove", function(e) {

                moveX = e.touches[0].clientX
                distanceX = moveX - startX;
                if ((currentX + distanceX) > minMove && (currentX + distanceX) < maxMove) {
                    $baicaijiaTitle.css("transform", 'translateX(' + (currentX + distanceX) + 'px)')
                        // $(".baicaijia-title").css("transition", "none")
                }




            })
            $("#wrapper").on("touchend", function(e) {
                console.log(e)
                endX = e.changedTouches[0].clientX
                currentX += distanceX
                if (currentX > maxPosition) {
                    currentX = maxPosition
                    $baicaijiaTitle.css("transform", 'translateX(' + currentX + 'px)')
                    $baicaijiaTitle.css("transition", "all .3s linear")
                }

                if (currentX < minPosition) {
                    currentX = minPosition
                    $baicaijiaTitle.css("transform", 'translateX(' + currentX + 'px)')

                }

                console.log(startX, moveX, endX)



            })

            $("#wrapper ul li").on("click", function() {
                $(this).addClass('active').siblings().removeClass("active")
                var titleid = $(this).data("titleid");
                console.log(titleid)
                var posWidth = 0;
                for (var i = 0; i < titleid; i++) {
                    posWidth -= $(lis[i]).width()
                }

                if (posWidth < minPosition) {
                    posWidth = minPosition
                }
                $baicaijiaTitle.css("transform", 'translateX(' + posWidth + 'px)')
                $baicaijiaTitle.css("transition", "all .3s linear")
            })



        }
    })
})