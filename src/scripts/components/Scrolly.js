export default class Scrolly {
  constructor(element) {
    this.element = element;
    this.options = {
      rootMargin: '0px 0px -250px 0px', // de ou les transition se lance
    };
    this.init();
  }

  init() {
    this.observer = new IntersectionObserver( // voir pour plus d"information https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver
      this.watch.bind(this),
      this.options
    );

    const items = this.element.querySelectorAll('[data-scrolly]');
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      this.observer.observe(item);
    }
  }
  //determine les changement de l'état active/not active
  watch(entries) {
    for (let index = 0; index < entries.length; index++) {
      const entry = entries[index];
      const target = entry.target;
      //realise les animation seleon la classe
      if (entry.isIntersecting) {
        target.classList.add('is-active');
        this.observer.unobserve(target);
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}
