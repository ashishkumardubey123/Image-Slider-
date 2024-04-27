const slides= document.querySelectorAll(".slide")

let totleslide= slides.length
let counter= 0;
slides.forEach(   (slide, index)=>{

    //  if(index*100 <=400)
     
        slide.style.left =`${index*100}%`
     
   


} )

const goNext =()=>{
    if (counter < totleslide-1) {
        counter++;
        slideimage()  
    }
 
}


const goPrev  =()=>{

    if (counter>0) 
    counter--;
    slideimage()  
  }

const slideimage =()=>{

    slides.forEach((slide)=>{

        slide.style.transform= `translateX(-${counter*100}%)`

    })
}