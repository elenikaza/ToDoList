$(document).ready(function () {
        $('#addbtn').click(function () {
            var input = $('#myinput').val();
            var Doitems = document.getElementById("todo-list").getElementsByTagName("li");
            var count = 0;
            var valid = 0;
            var Doneitems = document.getElementById("done-list").getElementsByTagName("li");
            for (i = 0; i < Doitems.length; i++)
            {
                if (Doitems[i].textContent == input) {
                    valid = 1;
                    if (Doneitems.length == 0) {
                        $('#done-list').append($('<li id="' + input + '"></li>').text(input));
                    }
                    else {
                        for (j = 0; j < Doneitems.length; j++) {
                            if (Doneitems[j].textContent == input) {
                                alert('element allraedy axist in done list');
                            }
                            else {
                                $('#done-list').append($('<li id="' + input + '"></li>').text(input));
                            }
                        }
                    }
                }
               
            }
            if (valid == 0) {
                alert('wrong input');
            }
            count = Doitems.length - Doneitems.length;

            document.getElementById('counter').innerHTML = count;
            

        })
    });

    $(document).ready(function () {
        $('#undobtn').click(function () {
            var input = $('#myinput').val();
            var items = document.getElementById("done-list").getElementsByTagName("li");
            var Doitems = document.getElementById("todo-list").getElementsByTagName("li");
            var count = 0;
            for (i = 0; i < items.length; i++) {
                
                if (items[i].textContent == input) {
                    document.getElementById(items[i].textContent).remove();
                   
                }
            }

            var items1 = document.getElementById("done-list").getElementsByTagName("li");
            var Doitems1 = document.getElementById("todo-list").getElementsByTagName("li");
            count = Doitems1.length - items1.length;
            document.getElementById('counter').innerHTML = count;
        })
    });