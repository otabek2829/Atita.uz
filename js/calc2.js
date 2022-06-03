// $(function() {
// 		$( "#slider-range-max" ).slider({
// 			range: "max",
// 			min: 1,
// 			max: 5,
// 			value: 2,
// 			slide: function( event, ui ) {
// 				$( "#amount" ).val( ui.value );
// 				calc();
// 			}
// 		});
// 		$( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
// 	});
// 	$(function() {
// 		$( "#slider-range-max2" ).slider({
// 			range: "max",
// 			min: 6,
// 			max: 10,
// 			value: 7,
// 			slide: function( event, ui ) {
// 				$( "#amount2" ).val( ui.value );
// 				calc();
// 			}
// 		});
// 		$( "#amount2" ).val( $( "#slider-range-max2" ).slider( "value" ) );
// 	});
	
// 	function calc(par){
// 	type = document.cl_form.type.value;
// 	amount = document.cl_form.amount.value;
// 	amount2 = document.cl_form.amount2.value;
	
// 	//var summ;
// 	summ = Number(type) * ( Number(amount) + Number(amount2) );
// 	document.cl_form.summ.value=summ;
// 	document.getElementById("typetd").innerHTML=type;
// 	document.getElementById("amounttd").innerHTML=amount;
// 	document.getElementById("amount2td").innerHTML=amount2;
// 	document.getElementById("summ").innerHTML=summ;
// 	return false; 
// 	}


$(function() {

    // setting up region variables
    switch ( $( '#region' ).val() ) {
        case '10':
            var cost = 10, time = 300;
            break;
        case '20':
            var cost = 20, time = 600;
            break;
    }

    // slider
    $( '#slider' ).slider({
        max: time,
        min: cost,
        step: cost,
        value: cost,
        slide: function( event, ui ) {
            update( cost, time, ui.value ); 
        }
    });

    // set initial values
    $( '#ticket' ).html( '1 ticket' );
    $( '#price' ).html( '$' + $( '#slider' ).slider( 'value' ) );
    
    // region change
    $( '#region' ).on( 'change', function() {
		update();
	});

});

function update( cost, time, value ) {  
	$( '#ticket' ).html( ( value / cost ) + ' ticket' ); 
    $( '#price' ).html( '$' + value );
}

