export default class Header {
  constructor(element) {
    this.element = element;

    this.scrollPosition = 0; // ou est le scroll
    this.lastScrollPosition = 0; // ou etait le scroll
    this.html = document.documentElement;
    this.autohide = this.element.dataset.autohide; // option pour annuler le auto hide
    this.scrollLimit = this.element.dataset.scrollLimit; // limit du scroll

    this.init();
    this.initNavMobile();
  }

  init() {
    //Vérifie si l'utilisateur scroll dans la page mais seulement si le attribut data-autohide est a "true"
    if (this.autohide == 'true') {
      //console.log('voici mon header');
      window.addEventListener('scroll', this.onScroll.bind(this));
    }
  }
  //enregistre la position du scroll
  onScroll(event) {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;
    this.setHeaderState();
    this.setDirectionState();
  }
  //  determine l'etat du header
  setHeaderState() {
    // console.log(this.scrollPosition);
    const scrollHeight = document.scrollingElement.scrollHeight;
    //determine si le header vas etre caher si il est depaser le scroll limit
    if (this.scrollPosition > scrollHeight * this.scrollLimit && this.autohide) {
      //console.log('header-is-hidden');
      this.html.classList.add('header-is-hidden');
    } else {
      // console.log('header-is-not-hidden');
      this.html.classList.remove('header-is-hidden');
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

  //Toggle du monu-mobile
  initNavMobile() {
    const toggle = this.element.querySelector('.js-toggle');

    toggle.addEventListener('click', this.onToggleNav.bind(this));
  }
  //Toggle du nav
  onToggleNav() {
    this.html.classList.toggle('nav-is-active');
  }
}
