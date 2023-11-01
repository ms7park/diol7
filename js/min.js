$(document).ready(function() {

//	$('.amenity_img').mouseover(function(){
//		$(this).siblings('.amenity_txt_box').addClass('active')
//	})
//	$('.amenity_img').mouseout(function(){
//		$(this).siblings('.amenity_txt_box').removeClass('active')
//	})


	$('.amenity01_bt').click(function(){
		$('#amenity_pop_wrap01').show(0)
		$('#amenity_pop_wrap01').stop().animate({'opacity':'1','margin-top':'0px'},900)
		$('.amenity_pop_bg').stop().animate({'left':'0'},600)
	})	
	$('.amenity02_bt').click(function(){
		$('#amenity_pop_wrap02').show(0)
		$('#amenity_pop_wrap02').stop().stop().animate({'opacity':'1','margin-top':'0px'},900)
		$('.amenity_pop_bg').stop().animate({'left':'0'},600)
	})	
	$('.amenity03_bt').click(function(){
		$('#amenity_pop_wrap03').show(0)
		$('#amenity_pop_wrap03').stop().stop().animate({'opacity':'1','margin-top':'0px'},900)
		$('.amenity_pop_bg').stop().animate({'left':'0'},600)
	})	
	$('.amenity_pop_close').click(function(){
		$('.amenity_pop_wrap').stop().animate({'opacity':'0','margin-top':'-50px'},900)
		$('.amenity_pop_wrap').fadeOut()
		$('.amenity_pop_bg').stop().animate({'left':'-100%'},600)
	})
	$('.amenity_pop_bg').click(function(){
		$('.amenity_pop_wrap').stop().animate({'opacity':'0','margin-top':'-50px'},900)
		$('.amenity_pop_wrap').fadeOut()
		$('.amenity_pop_bg').stop().animate({'left':'-100%'},600)
	})


	ham = 0
	$('.ham').click(function(){
		if( ham == 0 ){  
			ham = 1; 
			$('.ham').addClass('active')
			$('.site_map').addClass('active')
			$('.site_left').addClass('active')
			$('.ham_wrap').addClass('active2')
//			$('.site_map').show()
			$('.site_right').show()
		}
		else if ( ham == 1 ){
			ham = 0;
			$('.ham').removeClass('active')
			$('.site_map').removeClass('active')
			$('.site_left').removeClass('active')
			$('.ham_wrap').removeClass('active2')
//			$('.site_map').fadeOut()
			$('.site_right').fadeOut()
		}
	})


	
//	$('.sec02_bt').click(function(){
//		$('#brand_wrap').show()
//		$('.brand_close').show()		
//	})	
//	$('.brand_close').click(function(){
//		$('#brand_wrap').hide()
//		$('.brand_close').hide()		
//	})
	

	$('#main_wrap').fullpage({
//		slidesNavigation: true,
		fixedElements: '#menu',
		fadingEffect: true,
		verticalCentered: false,
		navigation: false,
		scrollOverflow: true,
		scrollHorizontally: true,
		scrollingSpeed: 1000,
		anchors: ['main', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
		fitToSection: true,
		autoScrolling: true,


		onLeave: function(origin, destination, direction){
			if(destination.index == 0){
				$('.main_txt_box').show()
				$('#brand_sec01 .brand_txt_box').show()
				$('#brand_sec01 .brand_img_box').show()
				$('.sub_top_scroll').fadeIn(500)
			}else {				
				$('.sub_top_scroll').fadeOut(500)
			}
			if(destination.index == 1){
				$('.sec01_box').show()
				$('.sec01_vd').html('<iframe width="1750" height="100%" src="https://player.vimeo.com/video/690840921?muted=1&autoplay=1&loop=1&autopause=0" frameborder="0" allowfullscreen></iframe>')
				$('#brand_sec02 .brand_img_box').show()
				$('#brand_sec02 .brand_txt_box').show()
			}
			if(destination.index == 2){
				$('.sec02_txt_box').show()
				$('#brand_sec03 .brand_img_box').show()
				$('#brand_sec03 .brand_txt_box').show()
			}
			if(destination.index == 3){
				$('.sec03_txt_box').show()
				$('#brand_sec04 .brand_img_box').show()
				$('#brand_sec04 .brand_txt_box').show()
			}
			if(destination.index == 4){
				$('.sec04_box').show()
				$('#brand_sec05 .brand_img_box').show()
				$('#brand_sec05 .brand_txt_box').show()
			}else {
			}
			if(destination.index == 5){
				$('.sec05_box').show()
			}
			if(destination.index == 6){
				$('.sec06_box').show()
				$('.sec07_bg').removeClass('active')
			}
			if(destination.index == 7){
				$('.sec07_txt_box').show()
				$('.sec07_bg').removeClass('active2')
				$('.sec07_bg').addClass('active')
			}else {
			}
				
			if(destination.index == 8){
				$('.sec07_bg').removeClass('active')
				$('.sec07_bg').addClass('active2')
				$('.sec08_box').show()
				$('.sec08_vd').fadeIn(500)
				$('.sec08_vd').html('<iframe width="1750" height="100%" src="https://player.vimeo.com/video/690846496?muted=1&autoplay=1&loop=1&autopause=0" frameborder="0" allowfullscreen></iframe>')
			}else{				
				$('.sec08_vd').fadeOut(500)
			}
			if(destination.index == 9){
				$('.sec09_txt_box').show()
			}
			if(destination.index == 10){

			}
			if(destination.index == 11){
				$('.sec11_box').show()
			}
			if(destination.index == 12){
				$('.sec12_box').show()
			}
			if(destination.index == 13){
				$('.sec13_box').show()
			}else{				
			}
			if(destination.index == 14){

			}else{				

			}

		},
	afterLoad: function(origin, destination, direction) {
			if (destination.index == 0) {

			} else {
				$('#brand_sec01 .brand_txt_box').hide()
				$('#brand_sec01 .brand_img_box').hide()
			}
			if (destination.index == 1) {
				
			} else {
				$('#brand_sec02 .brand_txt_box').hide()
				$('#brand_sec02 .brand_img_box').hide()
			}
			if (destination.index == 2) {
				
			} else {
				$('.sec02_txt_box').hide()
				$('#brand_sec03 .brand_txt_box').hide()
				$('#brand_sec03 .brand_img_box').hide()
			}
			if (destination.index == 3) {
								
			} else {
				$('.sec03_txt_box').hide()
				$('#brand_sec04 .brand_txt_box').hide()
				$('#brand_sec04 .brand_img_box').hide()
			}
			if (destination.index == 4) {
								
			} else {
				$('#brand_sec05 .brand_txt_box').hide()
				$('#brand_sec05 .brand_img_box').hide()
			}
			if (destination.index == 5) {
								
			} else {
			}
			if (destination.index == 6) {
								
			} else {
			}
			if (destination.index == 7) {
				
			} else {
				$('.sec07_txt_box').hide()
			}				
			if (destination.index == 8) {
				
			} else {
				$('.sec08_vd').html('')
			}		
			if (destination.index == 9) {
				
			} else {
				$('.sec09_txt_box').hide()
			}
			if (destination.index == 10) {
				
			} else {
			}
			if (destination.index == 11) {
				
			} else {
				$('.sec11_box').hide()
			}
			if (destination.index == 12) {				
				$('.sec13_box').hide()
			} else {
				$('.sec12_box').hide()
			}
			if (destination.index == 13) {
				
			} else {
//				$('.sec13_box').hide()
			}
					
		}

	});




//	var ratio = 315/560;
//	$(window).resize(function() {
//		$('#sect-moneo-video iframe').height($('iframe').width()*ratio);
//	}).resize();
//	$("#sect-moneo-video #ico").click(function() {
//		$("#sect-moneo-video").addClass('act');
//		$("#sect-moneo-video iframe")[0].src += "&autoplay=0";
//	});


});
