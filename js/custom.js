

// create preloading page


$(document).ready(function(){

  var count = 0;
  var counter = setInterval(function(){
    if(count < 101 ){
      $('.count').text(count + '%');
      $('.loader').css('width', count + '%');
      count++;
    }
    else {
      clearInterval(counter)
    }
  }, 30)
})

// equal click

$(document).ready(function(){
	$('.equal').click(function(){
		$('.equal').toggleClass('v-equal')
	})
})

// create toggle menu 

$(document).ready(function(){
	$('.toggle').click(function(){
		$('.sidebar').toggleClass('active')
		$('.toggle').toggleClass('close')
	})
})

// typed.js plugin


var typed = new Typed('.type', {
    strings: ["Automate Work", "Reduce Chaos"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
  });


  // slide script

  $(document).ready(function(){
    $('.next').click(function(){
        $('.slide').find('div.active').next().
        addClass('active');
        $('.slide').find('div.active').prev().
        removeClass('active');
    })

    $('.prev').click(function(){
        $('.slide').find('div.active').prev().
        addClass('active');
        $('.slide').find('div.active').next().
        removeClass('active');
    })
  })

  // carousel


  $(document).ready(function(){

    $('.owl-carousel').owlCarousel({
      itemsCustom: false,
      singleItem: false,
      itemsScaleUp: false,
      autoplayHoverPause: true,
      smartSpeed: 700,
      autoplay: true,
      loop:true,
      nav:false,
      dots: false,
      responsive:{
          0:{
              items:10
          },
      }
      
    });
});






