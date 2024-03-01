document.addEventListener("DOMContentLoaded",(event)=>{
    setTimeout(() => {
        document.querySelector('#load-iframe-map').innerHTML= `
    <iframe class="contact__iframe"
                frameborder="0" scrolling="no" marginheight="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" marginwidth="0" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7799.030593320238!2d-76.93341652688997!3d-12.213348947640412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9588abb2853%3A0x4bae8a2bca307eb6!2sNational%20Technological%20University%20of%20South%20Lima!5e0!3m2!1sen!2spe!4v1708983966919!5m2!1sen!2spe" 
                ></iframe>`
    }, 500);
    
})