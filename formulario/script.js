((d)=>{
    /*alert("se carga la funcion..")*/
    const $form = d.querySelector(".contact-formulario");
    const $response = d.querySelector(".contact-form-response");

    //console.log($form);
    $form.addEventListener("submit", e =>{
        e.preventDefault();

        //$form.reset();
        fetch("https://formsubmit.co/ajax/adrielpv.41@gmail.com",{
            method: "POST",
            body: new FormData(e.target)
        }) 
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then((json) =>{
                console.log(json);
                location.hash = "#gracias";
                $form.reset();
            })
            .catch(err => {
                console.log(err);
                let errMsg = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
                $response.querySelector("h3").innerHTML = "Error " + err.status + ": " + err.errMsg;
            })
            .finally(()=>{
                setTimeout(() => {
                    location.hash = "#close";
                }, 3000);
            })

    })

})(document);