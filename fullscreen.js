
document.addEventListener("DOMContentLoaded", ()=> {

    const button = document.getElementById("button-fullscreen");

    button.addEventListener("click", ()=> {

        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen()
                .catch((err) => {
                    console.error('error');
                });

        } else {
            document.exitFullscreen()
                .catch((err) => {
                    console.error('error 2')
                });
        }
    });
});






