$(document).ready(()=>{
const nextbtn=$('.next');
const prevbtn=$('.prev');


nextbtn.click(function(event){

    const currentField=$(this).parent();
    const nextField=$(currentField).next();
    //add active class to the next li tag dynamically
    //get the index of the next fieldset
    //using that index, select the li with the same index, and apply the class
    //collection.index(element) returns the position of passed element relative to the collection
    //collection.eq(index) gets the element of the specified index
    $('#prog-indicator li').eq($('.sup-fieldset').index(nextField)).addClass('active');
    nextField.show();
    currentField.animate({opacity:0},{
        step: function(now){
            var opacity = 1 - now;

            currentField.css({display: 'none', position:'relative'});
            nextField.css('opacity',opacity);
        },duration:500
    })
})


prevbtn.click(function(){

    const currentField=$(this).parent();
    const previousField=currentField.prev();

    $('#prog-indicator li').eq($('.sup-fieldset').index(currentField)).removeClass('active');
    previousField.show();

    currentField.animate({opacity:0},{
        step: function(now){
            const opacity=1-now;

            currentField.css({display: 'none', position:'relative'});
            previousField.css('opacity',opacity);
        }
    })
})

$('.submit').click(function(e){

e.preventDefault();
})
})