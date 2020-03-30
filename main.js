/* Service Worker */

if ('serviceWorker' in navigator) {
    console.log('Puedes hacer uso del serviceWorker');
    
    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('serviceWorker cargado correctamente', res))
                            .catch(err => console.log('serviceWorker no se ha podido registrar', err));

}else{
    console.log('No puedes hacer uso del serviceWorker');
}

/* Scroll suavisado */
$(document).ready(function(){
    $("#menu a").click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    })
})