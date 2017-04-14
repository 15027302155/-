            function ShowDiv(show_div,bg_div){
              $("body,html").css({"overflow":"hidden"}); 
              document.getElementById(show_div).style.display='block';
              document.getElementById(bg_div).style.display='block' ;
              var bgdiv = document.getElementById(bg_div);
              bgdiv.style.width = document.body.scrollWidth;
              $("#"+bg_div).height($(document).height());
              };
              function CloseDiv(show_div,bg_div)
              {
              $("body,html").css({"overflow":"visible"}); 
              document.getElementById(show_div).style.display='none';
              document.getElementById(bg_div).style.display='none';
            };