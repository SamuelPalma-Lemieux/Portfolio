import Utils from '../utils/Utils';
export default class Modal {
  constructor(element) {
    this.element = element;
    this.modalId = this.element.dataset.modalId;

    this.init();
  }
  init() {
    this.element.addEventListener('click', this.open.bind(this));
    this.close = this.close.bind(this);
  }
//modifie le contenue selon le template
  updateContent() {
    if (this.modalId == 'tpl-modal-tool') {//template 1
      this.modalElement.innerHTML = Utils.parseTemplate(
        this.modalElement.innerHTML,
        {
          title: this.element.dataset.modalTitle,
          legume: this.element.dataset.modalLegume,
          color: this.element.dataset.modalColor,
        }
      );
    } else if (this.modalId == 'tpl-modal') {// template 2
      this.modalElement.innerHTML = Utils.parseTemplate(
        this.modalElement.innerHTML,
        {
          title: this.element.dataset.modalTitle,
          contenue: this.element.dataset.modalContenue,
        }
      );
    }
  }

  open(event) {//function de ouvrir le modal
    event.preventDefault();
    this.appendModal();
  }

  close(event) {// ferme le modal
    document.documentElement.classList.remove('modal-is-active');
    this.closeButton.removeEventListener('click', this.close);
    setTimeout(this.destroy.bind(this), 1000);
  }

  destroy() {//detruit l'element
    this.modalElement.parentElement.removeChild(this.modalElement);
  }

  appendModal() {
    const template = document.querySelector(`#${this.modalId}`);

    if (template) {
      this.modalElement = template.content.firstElementChild.cloneNode(true);

      this.updateContent();
      document.body.appendChild(this.modalElement);

      this.element.getBoundingClientRect();
      document.documentElement.classList.add('modal-is-active');

      this.closeButton = this.modalElement.querySelector('.js-close');
      this.closeButton.addEventListener('click', this.close);

      document.documentElement.addEventListener('keydown', function (event) {
        //if (event.key === 'Escape') {
        //  document.documentElement.classList.remove('modal-is-active');
        //  this.closeButton.removeEventListener('click', this.close);
        //  setTimeout(this.destroy.bind(this), 1000);
       // }
      });
    } else {
      console.log(`La <template> avec id ${this.modalId} n'existe pas`);
    }
  }
}
