// Click on Item Div

// $(".item").click(function () {
//   $(this).addClass("expanded");
//   $(".item")
//     .not(this)
//     .each(function () {
//       // $(this).removeClass("expanded");
//     });
// });

// Click on container div

// $(".container").click(function () {
//   $(this).addClass("expanded");
//   $(".container")
//     .not(this)
//     .each(function () {
//       // $(this).removeClass("expanded");
//     });
// });


// Function to add unique id to each div with class item
// items

var item = document.querySelectorAll('.item');

[].forEach.call(item, function(item, index) {
  item.id = "item" + (index+1);
});

// containers
var container = document.querySelectorAll('.container');

[].forEach.call(container, function(container, index) {
  container.id = "container" + (index+1);
});


// Function to add variable to Flex-Basis onClick

// Multiplyer Variables

 let itemMultiplyer = 20;
 console.log(itemMultiplyer);

 let containerMultiplyer = 10;
 console.log(containerMultiplyer);

// Item1

function growItem1() {
var item_1 = document.querySelector("#item1");
var basis_1 = document.body.style.getPropertyValue("--basis_1");
    var basis_1 = window.getComputedStyle(item1).getPropertyValue("--basis_1");
    var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
    item1.style.setProperty("--basis_1", basis_1_n);
    console.log(basis_1_n);
  }

// Event Listener
item1.addEventListener("click", growItem1, false);


// Item2
function growItem2() {
  var item_1 = document.querySelector("#item2");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(item2).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
      item2.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
  
  // Event Listener
  
  item2.addEventListener("click", growItem2, false);

  // Item3
function growItem3() {
  var item_1 = document.querySelector("#item3");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(item3).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
      item3.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
  
  // Event Listener
  
  item3.addEventListener("click", growItem3, false);

  // item4
  function growitem4() {
    var item_1 = document.querySelector("#item4");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item4).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item4.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item4.addEventListener("click", growitem4, false);
  

  // item5
  function growitem5() {
    var item_1 = document.querySelector("#item5");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item5).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item5.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item5.addEventListener("click", growitem5, false);

      // item6
  function growitem6() {
    var item_1 = document.querySelector("#item6");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item6).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item6.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item6.addEventListener("click", growitem6, false);

  // item7
  function growitem7() {
    var item_1 = document.querySelector("#item7");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item7).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item7.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item7.addEventListener("click", growitem7, false);


  // item8
  function growitem8() {
    var item_1 = document.querySelector("#item8");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item8).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item8.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item8.addEventListener("click", growitem8, false);

      // item9
  function growitem9() {
    var item_1 = document.querySelector("#item9");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item9).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item9.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item9.addEventListener("click", growitem9, false);


  // item10
  function growitem10() {
    var item_1 = document.querySelector("#item10");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item10).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item10.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item10.addEventListener("click", growitem10, false);

  // item11
  function growitem11() {
    var item_1 = document.querySelector("#item11");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item11).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item11.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item11.addEventListener("click", growitem11, false);

  // item12
  function growitem12() {
    var item_1 = document.querySelector("#item12");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item12).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item12.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item12.addEventListener("click", growitem12, false);


      // item13
  function growitem13() {
    var item_1 = document.querySelector("#item13");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item13).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item13.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item13.addEventListener("click", growitem13, false);


  // item14
  function growitem14() {
    var item_1 = document.querySelector("#item14");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item14).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item14.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item14.addEventListener("click", growitem14, false);


  // item15
  function growitem15() {
    var item_1 = document.querySelector("#item15");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item15).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item15.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item15.addEventListener("click", growitem15, false);


  // item16
  function growitem16() {
    var item_1 = document.querySelector("#item16");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item16).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item16.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item16.addEventListener("click", growitem16, false);


  // item17
  function growitem17() {
    var item_1 = document.querySelector("#item17");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item17).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item17.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item17.addEventListener("click", growitem17, false);


  // item18
  function growitem18() {
    var item_1 = document.querySelector("#item18");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item18).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item18.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item18.addEventListener("click", growitem18, false);



  // item19
  function growitem19() {
    var item_1 = document.querySelector("#item19");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item19).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item19.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item19.addEventListener("click", growitem19, false);


  // item20
  function growitem20() {
    var item_1 = document.querySelector("#item20");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item20).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item20.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item20.addEventListener("click", growitem20, false);



  // item21
  function growitem21() {
    var item_1 = document.querySelector("#item21");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item21).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item21.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item21.addEventListener("click", growitem21, false);


  // item22
  function growitem22() {
    var item_1 = document.querySelector("#item22");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item22).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item22.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item22.addEventListener("click", growitem22, false);


  // item23
  function growitem23() {
    var item_1 = document.querySelector("#item23");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item23).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item23.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item23.addEventListener("click", growitem23, false);



  // item24
  function growitem24() {
    var item_1 = document.querySelector("#item24");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item24).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item24.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item24.addEventListener("click", growitem24, false);


  // item25
  function growitem25() {
    var item_1 = document.querySelector("#item25");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item25).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item25.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item25.addEventListener("click", growitem25, false);

  // item26
  function growitem26() {
    var item_1 = document.querySelector("#item26");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item26).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item26.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item26.addEventListener("click", growitem26, false);

  // item27
  function growitem27() {
    var item_1 = document.querySelector("#item27");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item27).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item27.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item27.addEventListener("click", growitem27, false);


  // item28
  function growitem28() {
    var item_1 = document.querySelector("#item28");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item28).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item28.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item28.addEventListener("click", growitem28, false);



  // item29
  function growitem29() {
    var item_1 = document.querySelector("#item29");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item29).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item29.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item29.addEventListener("click", growitem29, false);
  // item30
  function growitem30() {
    var item_1 = document.querySelector("#item30");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item30).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item30.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item30.addEventListener("click", growitem30, false);
      // item31
  function growitem31() {
    var item_1 = document.querySelector("#item31");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item31).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item31.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item31.addEventListener("click", growitem31, false);
  // item32
  function growitem32() {
    var item_1 = document.querySelector("#item32");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item32).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item32.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item32.addEventListener("click", growitem32, false);

  // item33
  function growitem33() {
    var item_1 = document.querySelector("#item33");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item33).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item33.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item33.addEventListener("click", growitem33, false);
  // item34
  function growitem34() {
    var item_1 = document.querySelector("#item34");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item34).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item34.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item34.addEventListener("click", growitem34, false);
  // item35
  function growitem35() {
    var item_1 = document.querySelector("#item35");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item35).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item35.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item35.addEventListener("click", growitem35, false);
  // item36
  function growitem36() {
    var item_1 = document.querySelector("#item36");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item36).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item36.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item36.addEventListener("click", growitem36, false);
  // item37
  function growitem37() {
    var item_1 = document.querySelector("#item37");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item37).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item37.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item37.addEventListener("click", growitem37, false);
  // item38
  function growitem38() {
    var item_1 = document.querySelector("#item38");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item38).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item38.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item38.addEventListener("click", growitem38, false);
  // item39
  function growitem39() {
    var item_1 = document.querySelector("#item39");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item39).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item39.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item39.addEventListener("click", growitem39, false);
  // item40
  function growitem40() {
    var item_1 = document.querySelector("#item40");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item40).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item40.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item40.addEventListener("click", growitem40, false);
  // item41
  function growitem41() {
    var item_1 = document.querySelector("#item41");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item41).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item41.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item41.addEventListener("click", growitem41, false);

  // item42
  function growitem42() {
    var item_1 = document.querySelector("#item42");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item42).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item42.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item42.addEventListener("click", growitem42, false);
  // item43
  function growitem43() {
    var item_1 = document.querySelector("#item43");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item43).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item43.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item43.addEventListener("click", growitem43, false);
  // item44
  function growitem44() {
    var item_1 = document.querySelector("#item44");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item44).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item44.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item44.addEventListener("click", growitem44, false);

  // item45
  function growitem45() {
    var item_1 = document.querySelector("#item45");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item45).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item45.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item45.addEventListener("click", growitem45, false);
  // item46
  function growitem46() {
    var item_1 = document.querySelector("#item46");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item46).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item46.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item46.addEventListener("click", growitem46, false);
  // item47
  function growitem47() {
    var item_1 = document.querySelector("#item47");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item47).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item47.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item47.addEventListener("click", growitem47, false);
  // item48
  function growitem48() {
    var item_1 = document.querySelector("#item48");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item48).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item48.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item48.addEventListener("click", growitem48, false);
  // item49
  function growitem49() {
    var item_1 = document.querySelector("#item49");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item49).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item49.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item49.addEventListener("click", growitem49, false);
  // item50
  function growitem50() {
    var item_1 = document.querySelector("#item50");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item50).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item50.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item50.addEventListener("click", growitem50, false);
  // item51
  function growitem51() {
    var item_1 = document.querySelector("#item51");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item51).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item51.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item51.addEventListener("click", growitem51, false);
  // item52
  function growitem52() {
    var item_1 = document.querySelector("#item52");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item52).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item52.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item52.addEventListener("click", growitem52, false);
  // item53
  function growitem53() {
    var item_1 = document.querySelector("#item53");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item53).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item53.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item53.addEventListener("click", growitem53, false);
  // item54
  function growitem54() {
    var item_1 = document.querySelector("#item54");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item54).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item54.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item54.addEventListener("click", growitem54, false);

  // item55
  function growitem55() {
    var item_1 = document.querySelector("#item55");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item55).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item55.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item55.addEventListener("click", growitem55, false);
  // item56
  function growitem56() {
    var item_1 = document.querySelector("#item56");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item56).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item56.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item56.addEventListener("click", growitem56, false);
  // item57
  function growitem57() {
    var item_1 = document.querySelector("#item57");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item57).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item57.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item57.addEventListener("click", growitem57, false);

  // item58
  function growitem58() {
    var item_1 = document.querySelector("#item58");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item58).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item58.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item58.addEventListener("click", growitem58, false);

  // item59
  function growitem59() {
    var item_1 = document.querySelector("#item59");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item59).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item59.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item59.addEventListener("click", growitem59, false);
  // item60
  function growitem60() {
    var item_1 = document.querySelector("#item60");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item60).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item60.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item60.addEventListener("click", growitem60, false);
  // item61
  function growitem61() {
    var item_1 = document.querySelector("#item61");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item61).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item61.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item61.addEventListener("click", growitem61, false);
  // item62
  function growitem62() {
    var item_1 = document.querySelector("#item62");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item62).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item62.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item62.addEventListener("click", growitem62, false);
  // item63
  function growitem63() {
    var item_1 = document.querySelector("#item63");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item63).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item63.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item63.addEventListener("click", growitem63, false);
  // item64
  function growitem64() {
    var item_1 = document.querySelector("#item64");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item64).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item64.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item64.addEventListener("click", growitem64, false);
  // item65
  function growitem65() {
    var item_1 = document.querySelector("#item65");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item65).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item65.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item65.addEventListener("click", growitem65, false);
  // item66
  function growitem66() {
    var item_1 = document.querySelector("#item66");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item66).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item66.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item66.addEventListener("click", growitem66, false);

  // item67
  function growitem67() {
    var item_1 = document.querySelector("#item67");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item67).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item67.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item67.addEventListener("click", growitem67, false);
  // item68
  function growitem68() {
    var item_1 = document.querySelector("#item68");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item68).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item68.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item68.addEventListener("click", growitem68, false);
  // item69
  function growitem69() {
    var item_1 = document.querySelector("#item69");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item69).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item69.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item69.addEventListener("click", growitem69, false);
  // item70
  function growitem70() {
    var item_1 = document.querySelector("#item70");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item70).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item70.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item70.addEventListener("click", growitem70, false);
  // item71
  function growitem71() {
    var item_1 = document.querySelector("#item71");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item71).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item71.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item71.addEventListener("click", growitem71, false);
  // item72
  function growitem72() {
    var item_1 = document.querySelector("#item72");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item72).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item72.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item72.addEventListener("click", growitem72, false);
  // item73
  function growitem73() {
    var item_1 = document.querySelector("#item73");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item73).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item73.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item73.addEventListener("click", growitem73, false);
  // item74
  function growitem74() {
    var item_1 = document.querySelector("#item74");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item74).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item74.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item74.addEventListener("click", growitem74, false);
  // item75
  function growitem75() {
    var item_1 = document.querySelector("#item75");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item75).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item75.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item75.addEventListener("click", growitem75, false);
  // item76
  function growitem76() {
    var item_1 = document.querySelector("#item76");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item76).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item76.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item76.addEventListener("click", growitem76, false);
  // item77
  function growitem77() {
    var item_1 = document.querySelector("#item77");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item77).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item77.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item77.addEventListener("click", growitem77, false);

  // item78
  function growitem78() {
    var item_1 = document.querySelector("#item78");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item78).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item78.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item78.addEventListener("click", growitem78, false);

  // item79
  function growitem79() {
    var item_1 = document.querySelector("#item79");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item79).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item79.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item79.addEventListener("click", growitem79, false);

  // item80
  function growitem80() {
    var item_1 = document.querySelector("#item80");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item80).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item80.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item80.addEventListener("click", growitem80, false);

  // item81
  function growitem81() {
    var item_1 = document.querySelector("#item81");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item81).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item81.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item81.addEventListener("click", growitem81, false);

  // item82
  function growitem82() {
    var item_1 = document.querySelector("#item82");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item82).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item82.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item82.addEventListener("click", growitem82, false);

  // item83
  function growitem83() {
    var item_1 = document.querySelector("#item83");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item83).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item83.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item83.addEventListener("click", growitem83, false);

  // item84
  function growitem84() {
    var item_1 = document.querySelector("#item84");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item84).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item84.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item84.addEventListener("click", growitem84, false);

  // item85
  function growitem85() {
    var item_1 = document.querySelector("#item85");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item85).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item85.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item85.addEventListener("click", growitem85, false);
  // item86
  function growitem86() {
    var item_1 = document.querySelector("#item86");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item86).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item86.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item86.addEventListener("click", growitem86, false);
  // item87
  function growitem87() {
    var item_1 = document.querySelector("#item87");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item87).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item87.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item87.addEventListener("click", growitem87, false);

  // item88
  function growitem88() {
    var item_1 = document.querySelector("#item88");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item88).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item88.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item88.addEventListener("click", growitem88, false);
  // item89
  function growitem89() {
    var item_1 = document.querySelector("#item89");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item89).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item89.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item89.addEventListener("click", growitem89, false);

  // item90
  function growitem90() {
    var item_1 = document.querySelector("#item90");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item90).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item90.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item90.addEventListener("click", growitem90, false);
  // item91
  function growitem91() {
    var item_1 = document.querySelector("#item91");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item91).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item91.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item91.addEventListener("click", growitem91, false);

  // item92
  function growitem92() {
    var item_1 = document.querySelector("#item92");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item92).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item92.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item92.addEventListener("click", growitem92, false);
  // item93
  function growitem93() {
    var item_1 = document.querySelector("#item93");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item93).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item93.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item93.addEventListener("click", growitem93, false);

  // item94
  function growitem94() {
    var item_1 = document.querySelector("#item94");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item94).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item94.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item94.addEventListener("click", growitem94, false);

  // item95
  function growitem95() {
    var item_1 = document.querySelector("#item95");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item95).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item95.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item95.addEventListener("click", growitem95, false);

  // item96
  function growitem96() {
    var item_1 = document.querySelector("#item96");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item96).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item96.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item96.addEventListener("click", growitem96, false);
  // item97
  function growitem97() {
    var item_1 = document.querySelector("#item97");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item97).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item97.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item97.addEventListener("click", growitem97, false);

  // item98
  function growitem98() {
    var item_1 = document.querySelector("#item98");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item98).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item98.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item98.addEventListener("click", growitem98, false);
  // item99
  function growitem99() {
    var item_1 = document.querySelector("#item99");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item99).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item99.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item99.addEventListener("click", growitem99, false);

      // item100
  function growitem100() {
    var item_1 = document.querySelector("#item100");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item100).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item100.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item100.addEventListener("click", growitem100, false);

  // item101
  function growitem101() {
    var item_1 = document.querySelector("#item101");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item101).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item101.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item101.addEventListener("click", growitem101, false);
  // item102
  function growitem102() {
    var item_1 = document.querySelector("#item102");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item102).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item102.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item102.addEventListener("click", growitem102, false);

  // item103
  function growitem103() {
    var item_1 = document.querySelector("#item103");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item103).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item103.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item103.addEventListener("click", growitem103, false);
  // item104
  function growitem104() {
    var item_1 = document.querySelector("#item104");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item104).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item104.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item104.addEventListener("click", growitem104, false);

  // item105
  function growitem105() {
    var item_1 = document.querySelector("#item105");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item105).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item105.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item105.addEventListener("click", growitem105, false);
  // item106
  function growitem106() {
    var item_1 = document.querySelector("#item106");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item106).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item106.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item106.addEventListener("click", growitem106, false);
  // item107
  function growitem107() {
    var item_1 = document.querySelector("#item107");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item107).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item107.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item107.addEventListener("click", growitem107, false);
  // item108
  function growitem108() {
    var item_1 = document.querySelector("#item108");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item108).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item108.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item108.addEventListener("click", growitem108, false);
  // item109
  function growitem109() {
    var item_1 = document.querySelector("#item109");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item109).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item109.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item109.addEventListener("click", growitem109, false);
  // item110
  function growitem110() {
    var item_1 = document.querySelector("#item110");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item110).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item110.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item110.addEventListener("click", growitem110, false);

  // item111
  function growitem111() {
    var item_1 = document.querySelector("#item111");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item111).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item111.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item111.addEventListener("click", growitem111, false);
  // item112
  function growitem112() {
    var item_1 = document.querySelector("#item112");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item112).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item112.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item112.addEventListener("click", growitem112, false);
  // item113
  function growitem113() {
    var item_1 = document.querySelector("#item113");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item113).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item113.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item113.addEventListener("click", growitem113, false);
  // item114
  function growitem114() {
    var item_1 = document.querySelector("#item114");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item114).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item114.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item114.addEventListener("click", growitem114, false);
  // item115
  function growitem115() {
    var item_1 = document.querySelector("#item115");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item115).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item115.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item115.addEventListener("click", growitem115, false);
  // item116
  function growitem116() {
    var item_1 = document.querySelector("#item116");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item116).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item116.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item116.addEventListener("click", growitem116, false);
  // item117
  function growitem117() {
    var item_1 = document.querySelector("#item117");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item117).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item117.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item117.addEventListener("click", growitem117, false);
  // item118
  function growitem118() {
    var item_1 = document.querySelector("#item118");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item118).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item118.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item118.addEventListener("click", growitem118, false);
  // item119
  function growitem119() {
    var item_1 = document.querySelector("#item119");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item119).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item119.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item119.addEventListener("click", growitem119, false);
  // item120
  function growitem120() {
    var item_1 = document.querySelector("#item120");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item120).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item120.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item120.addEventListener("click", growitem120, false);
  // item121
  function growitem121() {
    var item_1 = document.querySelector("#item121");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item121).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item121.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item121.addEventListener("click", growitem121, false);
  // item122
  function growitem122() {
    var item_1 = document.querySelector("#item122");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item122).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item122.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item122.addEventListener("click", growitem122, false);
  // item123
  function growitem123() {
    var item_1 = document.querySelector("#item123");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item123).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item123.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item123.addEventListener("click", growitem123, false);
  // item124
  function growitem124() {
    var item_1 = document.querySelector("#item124");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item124).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item124.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item124.addEventListener("click", growitem124, false);
  // item125
  function growitem125() {
    var item_1 = document.querySelector("#item125");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item125).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item125.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item125.addEventListener("click", growitem125, false);
  // item126
  function growitem126() {
    var item_1 = document.querySelector("#item126");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item126).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item126.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item126.addEventListener("click", growitem126, false);
  // item127
  function growitem127() {
    var item_1 = document.querySelector("#item127");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item127).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item127.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item127.addEventListener("click", growitem127, false);
  // item128
  function growitem128() {
    var item_1 = document.querySelector("#item128");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item128).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item128.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item128.addEventListener("click", growitem128, false);
  // item129
  function growitem129() {
    var item_1 = document.querySelector("#item129");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item129).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item129.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item129.addEventListener("click", growitem129, false);
  // item130
  function growitem130() {
    var item_1 = document.querySelector("#item130");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item130).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item130.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item130.addEventListener("click", growitem130, false);
  // item131
  function growitem131() {
    var item_1 = document.querySelector("#item131");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item131).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item131.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item131.addEventListener("click", growitem131, false);
  // item132
  function growitem132() {
    var item_1 = document.querySelector("#item132");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item132).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item132.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item132.addEventListener("click", growitem132, false);
  // item133
  function growitem133() {
    var item_1 = document.querySelector("#item133");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item133).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item133.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item133.addEventListener("click", growitem133, false);
  // item134
  function growitem134() {
    var item_1 = document.querySelector("#item134");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item134).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item134.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item134.addEventListener("click", growitem134, false);
  // item135
  function growitem135() {
    var item_1 = document.querySelector("#item135");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item135).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item135.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item135.addEventListener("click", growitem135, false);
  // item136
  function growitem136() {
    var item_1 = document.querySelector("#item136");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item136).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item136.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item136.addEventListener("click", growitem136, false);
  // item137
  function growitem137() {
    var item_1 = document.querySelector("#item137");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item137).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item137.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item137.addEventListener("click", growitem137, false);
  // item138
  function growitem138() {
    var item_1 = document.querySelector("#item138");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item138).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item138.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item138.addEventListener("click", growitem138, false);
  // item139
  function growitem139() {
    var item_1 = document.querySelector("#item139");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item139).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item139.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item139.addEventListener("click", growitem139, false);
  // item140
  function growitem140() {
    var item_1 = document.querySelector("#item140");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item140).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item140.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item140.addEventListener("click", growitem140, false);
  // item141
  function growitem141() {
    var item_1 = document.querySelector("#item141");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item141).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item141.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item141.addEventListener("click", growitem141, false);
  // item142
  function growitem142() {
    var item_1 = document.querySelector("#item142");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item142).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item142.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item142.addEventListener("click", growitem142, false);
  // item143
  function growitem143() {
    var item_1 = document.querySelector("#item143");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item143).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item143.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item143.addEventListener("click", growitem143, false);
  // item144
  function growitem144() {
    var item_1 = document.querySelector("#item144");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item144).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item144.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item144.addEventListener("click", growitem144, false);
  // item145
  function growitem145() {
    var item_1 = document.querySelector("#item145");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item145).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item145.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item145.addEventListener("click", growitem145, false);
  // item146
  function growitem146() {
    var item_1 = document.querySelector("#item146");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item146).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item146.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item146.addEventListener("click", growitem146, false);
  // item147
  function growitem147() {
    var item_1 = document.querySelector("#item147");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item147).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item147.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item147.addEventListener("click", growitem147, false);
  // item148
  function growitem148() {
    var item_1 = document.querySelector("#item148");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item148).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item148.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item148.addEventListener("click", growitem148, false);
  // item149
  function growitem149() {
    var item_1 = document.querySelector("#item149");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item149).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item149.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item149.addEventListener("click", growitem149, false);
  // item150
  function growitem150() {
    var item_1 = document.querySelector("#item150");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item150).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item150.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item150.addEventListener("click", growitem150, false);

  // item151
  function growitem151() {
    var item_1 = document.querySelector("#item151");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item151).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item151.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item151.addEventListener("click", growitem151, false);
  // item152
  function growitem152() {
    var item_1 = document.querySelector("#item152");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item152).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item152.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item152.addEventListener("click", growitem152, false);
  // item153
  function growitem153() {
    var item_1 = document.querySelector("#item153");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item153).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item153.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item153.addEventListener("click", growitem153, false);
  // item154
  function growitem154() {
    var item_1 = document.querySelector("#item154");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item154).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item154.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item154.addEventListener("click", growitem154, false);
  // item155
  function growitem155() {
    var item_1 = document.querySelector("#item155");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item155).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item155.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item155.addEventListener("click", growitem155, false);
  // item156
  function growitem156() {
    var item_1 = document.querySelector("#item156");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item156).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item156.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item156.addEventListener("click", growitem156, false);
  // item157
  function growitem157() {
    var item_1 = document.querySelector("#item157");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item157).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item157.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item157.addEventListener("click", growitem157, false);
  // item158
  function growitem158() {
    var item_1 = document.querySelector("#item158");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item158).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item158.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item158.addEventListener("click", growitem158, false);
  // item159
  function growitem159() {
    var item_1 = document.querySelector("#item159");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item159).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item159.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item159.addEventListener("click", growitem159, false);
  // item160
  function growitem160() {
    var item_1 = document.querySelector("#item160");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item160).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item160.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item160.addEventListener("click", growitem160, false);
  // item161
  function growitem161() {
    var item_1 = document.querySelector("#item161");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item161).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item161.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item161.addEventListener("click", growitem161, false);
  // item162
  function growitem162() {
    var item_1 = document.querySelector("#item162");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item162).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item162.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item162.addEventListener("click", growitem162, false);
  // item163
  function growitem163() {
    var item_1 = document.querySelector("#item163");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item163).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item163.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item163.addEventListener("click", growitem163, false);

  // item164
  function growitem164() {
    var item_1 = document.querySelector("#item164");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item164).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item164.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item164.addEventListener("click", growitem164, false);
  // item165
  function growitem165() {
    var item_1 = document.querySelector("#item165");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item165).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item165.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item165.addEventListener("click", growitem165, false);
  // item166
  function growitem166() {
    var item_1 = document.querySelector("#item166");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item166).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item166.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item166.addEventListener("click", growitem166, false);
  // item167
  function growitem167() {
    var item_1 = document.querySelector("#item167");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item167).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item167.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item167.addEventListener("click", growitem167, false);
  // item168
  function growitem168() {
    var item_1 = document.querySelector("#item168");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item168).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item168.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item168.addEventListener("click", growitem168, false);
  // item169
  function growitem169() {
    var item_1 = document.querySelector("#item169");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item169).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item169.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item169.addEventListener("click", growitem169, false);
  // item170
  function growitem170() {
    var item_1 = document.querySelector("#item170");
    var basis_1 = document.body.style.getPropertyValue("--basis_1");
        var basis_1 = window.getComputedStyle(item170).getPropertyValue("--basis_1");
        var basis_1_n = (basis_1 * 1) + (1 * itemMultiplyer);
        item170.style.setProperty("--basis_1", basis_1_n);
        console.log(--basis_1_n);
      }
    
    // Event Listener
    
    item170.addEventListener("click", growitem170, false);



// Container 1
function growContainer1() {
  var item_1 = document.querySelector("#container1");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(container1).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * containerMultiplyer);
      container1.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
  // Event Listener
  container1.addEventListener("click", growContainer1, false);
  
// Container 2

function growContainer2() {
  var item_1 = document.querySelector("#container2");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(container2).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * containerMultiplyer);
      container2.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }

  // Event Listener
  container2.addEventListener("click", growContainer2, false);

// Container 3

function growContainer3() {
  var item_1 = document.querySelector("#container3");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(container3).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * containerMultiplyer);
      container3.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
    
  // Event Listener
  container3.addEventListener("click", growContainer3, false);

// Container 4

function growContainer4() {
  var item_1 = document.querySelector("#container4");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(container4).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * containerMultiplyer);
      container4.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
    
  // Event Listener
  container4.addEventListener("click", growContainer4, false);

// Container 5

function growContainer5() {
  var item_1 = document.querySelector("#container5");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(container5).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * containerMultiplyer);
      container5.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
    
  // Event Listener
  container5.addEventListener("click", growContainer5, false);


// Container 6

function growContainer6() {
  var item_1 = document.querySelector("#container6");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(container6).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * containerMultiplyer);
      container6.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
    
  // Event Listener
  container6.addEventListener("click", growContainer6, false);


// Container 7

function growContainer7() {
  var item_1 = document.querySelector("#container7");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(container7).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * containerMultiplyer);
      container7.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
    
  // Event Listener
  container7.addEventListener("click", growContainer7, false);

// Container 8

function growContainer8() {
  var item_1 = document.querySelector("#container8");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(container8).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * containerMultiplyer);
      container8.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
    
  // Event Listener
  container8.addEventListener("click", growContainer8, false);


// Container 9

function growContainer9() {
  var item_1 = document.querySelector("#container9");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(container9).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * containerMultiplyer);
      container9.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
    
  // Event Listener
  container9.addEventListener("click", growContainer9, false);


// Container 10

function growContainer10() {
  var item_1 = document.querySelector("#container10");
  var basis_1 = document.body.style.getPropertyValue("--basis_1");
      var basis_1 = window.getComputedStyle(container10).getPropertyValue("--basis_1");
      var basis_1_n = (basis_1 * 1) + (1 * containerMultiplyer);
      container10.style.setProperty("--basis_1", basis_1_n);
      console.log(--basis_1_n);
    }
    
  // Event Listener
  container10.addEventListener("click", growContainer10, false);


















// var circle_1 = document.querySelector("#circle_1");
// var size_1 = document.body.style.getPropertyValue("--size_1");


// function growItem1() {
//     var size_1 = window.getComputedStyle(circle_1).getPropertyValue("--size_1");
//     var size_1_n = size_1 * 2;
//     circle_1.style.setProperty("--size_1", size_1_n);
//     console.log(size_1_n);
//   }
  

// bigger_1.addEventListener("click", growCircle_1, false);