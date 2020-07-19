var cont = 0;
$("#BotonPost").click(function(e){
    e.preventDefault();
    let caja = $("#Texto").val();
    let list = $("ul");
    let element = $('<div class="lis"><p class="itemShop">' + caja + '</p><button class="checar">Check</button><button class="del">Delete</button></div>');
    list.append(element);
});

$(".container").on("click",".checar", function(e){
    e.preventDefault();
    $(this).parent().toggleClass("chec");
});

$(".container").on("click", ".del", function(e){
    e.preventDefault();
    $(this).parent().remove();
});