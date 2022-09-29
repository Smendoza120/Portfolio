$(document).ready(function () {
    let logo1 = $('#logo1');
    let logo2 = $('#logo2');
    
    logo1.on('mouseenter', () => {
        logo2.fadeIn()
    })

    logo1.on('mouseleave', () =>{
        logo2.fadeOut()
    })

    let dots = $('#dots');
    let menu = $('#menu');


    dots.on('click', ()=>{
        menu.slideToggle(500);
        menu.toggleClass('menu2');
        menu.css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'center',
            position: 'fixed',
            top: '134px',
            right: '0',
            background: 'rgba(#000, 1)',
            width: '30%'
        })
    })
});