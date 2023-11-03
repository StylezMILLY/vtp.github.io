const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

   burger.addEventListener('click', () => {
          nav.classList.toggle('nav-active');

          navLinks.forEach((link, index)=>{
            if(link.style.animation){
              link.style.animation = ""
            }else{
              link.style.animation =`navlinkfade 0.5s ease forwards ${index/7 + 1.5}s`
            }
            
         })

         burger.classList.toggle('toggle')
         
   });

 
}

navSlide();





var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            // entry.target.classList.remove('show');
        }
    });
});


var hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        }else {
            // entry.target.classList.remove('show1');
        }
    });
});


var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        }else {
            // entry.target.classList.remove('show1');
        }
    });
});


var hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));





