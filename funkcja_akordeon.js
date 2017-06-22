 $(document).ready(function() {
        var titles = $(".accordion__title"),
            texts = $(".accordion_line"),

        texts.hide();
        texts.first().show();
        titles.children("p").first("p").addClass("accordion__title--active");
        titles.on("click", function() { 

            if(collapseAll) {
                titles.children("p").removeClass("accordion__title--active");
                texts.stop().slideUp(300);
            }

            var that = $(this),
                text = that.next(".accordion_line"),
                isVisible = text.is(":visible");

            that.children("p").first("p").toggleClass("accordion__title--active", !isVisible);

            if(!isVisible) {
                text.stop().slideDown(300);
            } else {
                text.stop().slideUp(300);
            }

               var ilosc_dni = 7; 

for(var i = 0; i < ilosc_dni; i++) {
	
	d = new Date();
	d.setDate(d.getDate() + i);
	data = d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
	var x = document.getElementsByClassName(data);
    x[0].style.display = "block";
}

        }); 
        
});