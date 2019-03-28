        /*ここら辺スクリプト絶対改善できるけど面倒なのでこのまま*/
        var kkeys1 = [], ruby = "82,85,66,89,13";
        $(document).keydown(function (e) {
            kkeys1.push(e.keyCode);
            if (kkeys1.toString().indexOf(ruby) >= 0) {
                $(document).unbind('keydown', arguments.callee);
                $('#easter-egg').removeClass('hidden');
                var notsubmittedItems = document.querySelectorAll(".ruby");
                [].forEach.call(notsubmittedItems, function (el) {
                    el.classList.remove("hidden");
                });
            }
        });
        var kkeys2 = [], maki = "77,65,75,73,13";
        $(document).keydown(function (e) {
            kkeys2.push(e.keyCode);
            if (kkeys2.toString().indexOf(maki) >= 0) {
                $(document).unbind('keydown', arguments.callee);
                $('#easter-egg').removeClass('hidden');
                var notsubmittedItems = document.querySelectorAll(".maki");
                [].forEach.call(notsubmittedItems, function (el) {
                    el.classList.remove("hidden");
                });
            }
        });
        var kkeys3 = [], zoi = "90,79,73,13";
        $(document).keydown(function (e) {
            kkeys3.push(e.keyCode);
            if (kkeys3.toString().indexOf(zoi) >= 0) {
                $(document).unbind('keydown', arguments.callee);
                $('#easter-egg').removeClass('hidden');
                var notsubmittedItems = document.querySelectorAll(".zoi");
                [].forEach.call(notsubmittedItems, function (el) {
                    el.classList.remove("hidden");
                });
            }
        });
        var kkeys4 = [], shura = "83,72,85,82,65,13";
        $(document).keydown(function (e) {
            kkeys4.push(e.keyCode);
            if (kkeys4.toString().indexOf(shura) >= 0) {
                $(document).unbind('keydown', arguments.callee);
                $('#easter-egg').removeClass('hidden');
                var notsubmittedItems = document.querySelectorAll(".shura");
                [].forEach.call(notsubmittedItems, function (el) {
                    el.classList.remove("hidden");
                });
            }
        });
        var kkeys5 = [], gacha = "71,65,67,72,65,13";
        $(document).keydown(function (e) {
            kkeys5.push(e.keyCode);
            if (kkeys5.toString().indexOf(gacha) >= 0) {
                $(document).unbind('keydown', arguments.callee);
                $('#easter-egg').removeClass('hidden');
                var notsubmittedItems = document.querySelectorAll(".gacha");
                [].forEach.call(notsubmittedItems, function (el) {
                    el.classList.remove("hidden");
                });
            }
        });
        var kkeys6 = [], nyanpass= "78,89,65,78,80,65,83,83,13";
        $(document).keydown(function (e) {
            kkeys6.push(e.keyCode);
            if (kkeys6.toString().indexOf(nyanpass) >= 0) {
                $(document).unbind('keydown', arguments.callee);
                $('#easter-egg').removeClass('hidden');
                var notsubmittedItems = document.querySelectorAll(".nyanpass");
                [].forEach.call(notsubmittedItems, function (el) {
                    el.classList.remove("hidden");
                });
            }
        });