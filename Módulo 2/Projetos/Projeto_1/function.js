    var currentImgIndex=0;
    var ImgSrcArray = [
    'triste.jpg',
    'bravo.jpg',
    'feliz.jpg'
    ];
    var humor = [
        'Triste',
        'Bravo',
        'Feliz'
    ];
    function trocar(){
        let a = document.getElementById('main')
    
      if(currentImgIndex == ImgSrcArray.length){
        currentImgIndex=0;
      }
      document.getElementById("agni").src=ImgSrcArray[currentImgIndex]; 
      a.innerHTML = humor[currentImgIndex];
        currentImgIndex++;
        

    
    }