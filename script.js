function toggleMode(){
    const html = document.documentElement 
        html.classList.toggle("light")

        //pegar  a tag img
        const img = document.querySelector(" #profile img")
            
        //substuir a img
        if(html.classList.contains("light")){
        // se  tiver light mode,add a img light
        img.setAttribute("src", "./assets/keven.jpg")
        img.setAttribute("alt", "ola-keven")

        } else {
        //se tiver sem light mode,manter a img normal*/
        img.setAttribute("src", "./assets/rodriprof.jpg")
        }
    
    
    /*//if(html.classList.contains('light')){
          //  html.classList.remove('light')
        }else{
            html.classList.add('light')
        }esse aqui é trocar entre o dark e light*/
       
        
}