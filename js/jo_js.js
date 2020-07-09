
        //大按鈕onclick
        $(".jo_btn").click(function () {

            $(this).css({
                "transform": "translateY(3px)",
                "transform-origin": "bottom",
                "transition-timing-function": "ease-out",
                "transition-duration": "0.01s",
                "box-shadow": "0 0px 0px #616E7D ,0px 2px 0px 0px rgb(255, 255, 255,0.5) inset"
            })


        })




        // 愛心
        $(".jo_heartDiv").click(function () {
            if ($(".jo_heart:nth-child(2)").hasClass("jo_heartPinkAni") == false) {
                $(".jo_heart:nth-child(2)").addClass("jo_heartPinkAni");
                $(".jo_heart:first-child").addClass("jo_heartPink");
            } else {
                $(".jo_heart:nth-child(2)").removeClass("jo_heartPinkAni");
                $(".jo_heart:first-child").removeClass("jo_heartPink");
            }
            ''
        })