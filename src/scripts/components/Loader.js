export default class Loader {
    constructor(element) {
    this.element = element;
   this.loader = document.querySelector('.loader');
   
      this.init();
    }
  
    init() {
     ok();
    }

    ok(){
        window.addEventListener('load', () => {
        loader.classList.add('fondu-out'); 

    })
    }
    
  }
  