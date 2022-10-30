// Click on Item Div

$(".item").click(function () {
  $(this).addClass("expanded");
  $(".item")
    .not(this)
    .each(function () {
      // $(this).removeClass("expanded");
    });
});

// Click on container div

$(".container").click(function () {
  $(this).addClass("expanded");
  $(".container")
    .not(this)
    .each(function () {
      // $(this).removeClass("expanded");
    });
});


// Function to add unique id to each div with class item

var item = document.querySelectorAll('.item');

[].forEach.call(item, function(item, index) {
  item.id = "item" + (index+1);
});


var circle_1 = document.querySelector("#circle_1");
var size_1 = document.body.style.getPropertyValue("--size_1");

function growCircle_1() {
    var size_1 = window.getComputedStyle(circle_1).getPropertyValue("--size_1");
    var size_1_n = size_1 * 2;
    circle_1.style.setProperty("--size_1", size_1_n);
    console.log(size_1_n);
  }
  

bigger_1.addEventListener("click", growCircle_1, false);

