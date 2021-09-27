import Cache from "../utils/Cache";

/** Composante Theme de TimTools */
export default class Snackbar {

  
    constructor(element) {
      this.element = element;
  
      this.scrollPosition = 0; // ou est le scroll
      this.lastScrollPosition = 0; // ou etait le scroll
      this.html = document.documentElement;
      this.autohide = this.element.dataset.autohide; // option pour annuler le auto hide
      this.scrollLimit = this.element.dataset.scrollLimit; // limit du scroll
      this.delay = this.element.dataset.delay; // delay du scroll
      this.id = this.element.dataset.id;
      setTimeout(this.showSnackbar.bind(this),this.delay);
      this.checkCache();
      this.cacheButton=this.element.querySelector('.close__snackbar');
      this.cacheButton.addEventListener('click',this.addCache.bind(this));

    }
  
    init() {
      
      //Vérifie si l'utilisateur scroll dans la page mais seulement si le attribut data-autohide est a "true"
      if (this.autohide == 'true') {
       
        window.addEventListener('scroll', this.onScroll.bind(this));
      }
      this.closeButton();
    }
    //enregistre la position du scroll
    onScroll(event) {
      this.lastScrollPosition = this.scrollPosition;
      this.scrollPosition = document.scrollingElement.scrollTop;
      
      this.setSnackbarState();
      this.setDirectionState();
    }
    //  determine l'etat du snackbar
    setSnackbarState() {
      // console.log(this.scrollPosition);
      const scrollHeight = document.scrollingElement.scrollHeight;
      //determine si la snackbar vas etre caher si il est depaser le scroll limit
      if (this.scrollPosition > scrollHeight * this.scrollLimit && this.autohide) {
       
        this.html.classList.add('snackbar-is-hidden');
      } else {
        
        this.html.classList.remove('snackbar-is-hidden');
      }
    }
  
    //Determine si on monte ou ont descend dans la page
    setDirectionState() {
      if (this.scrollPosition >= this.lastScrollPosition) {
        this.html.classList.add('is-scrolling-down');
        this.html.classList.remove('is-scrolling-up');
      } else {
        this.html.classList.remove('is-scrolling-down');
        this.html.classList.add('is-scrolling-up');
      }
    }
  showSnackbar(){
    this.init();
    //ajout de la classe . snackbar__Hide
    this.element.classList.remove('snackbar__Hide');
    
    console.log("ok")
    
  }


  closeButton(){//fdemarre la fonction fermer snackbar
    const boutonclose= document.querySelector('.close__snackbar');
    boutonclose.addEventListener('click', this.closeSnackbar.bind(this));
  }
    

closeSnackbar(){//ferem le snackbar en lui ajoutant une classe
  this.element.classList.add('snackbar__Hide');
}

checkCache() {//verifie si le snackbar est deja dans la cache
  const snackbarClose = Cache.get(`snackbarCache${this.id}`);
  if(snackbarClose){
      document.documentElement.dataset.snackbarCache = snackbarClose;
      this.element.classList.add("snackbar-forever-hidden");
  }
}
addCache(event){//ajout de la snackbar dans la cache
  const target = event.currentTarget;
  const status = target.dataset.snackbarStatus;

  document.documentElement.dataset.snackbarCache;
  Cache.set(`snackbarCache${this.id}`,status, true);
}
  }
  