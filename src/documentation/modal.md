# Modal

Cette composante permet d'instancier une fenêtre modal sur le body.

<br><br>

# Dépendance

### Modal

La fenêtre modal n'as aucune dépendence

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Modal"** sur une structure html avec aussi **data-modal-id="****nom du template****"** puis ajouter des element modal comme **data-modal-title="title au choix"**.
Puis instancier tout les choix dans un template en dehors du body

```
<div
                        class="card-news"
                        data-component="Modal"
                        data-modal-id="nom du template"
                        data-modal-title="title au choix"
                    >


                    <template id="nom du template">
            <div class="modal">
                <div class="modal__scrim"></div>
                <div class="modal__box">
                    <div class="modal__content">
                        <h2>{{title}}</h2>
                        <p>{{title}}</p>
                    </div>
                    <button class="modal__close js-close"></button>
                </div>
            </div>
        </template>
```

<details>
<summary>Exemple complet</summary>

```
 <div
                        class="card-news"
                        data-component="Modal"
                        data-modal-id="tpl-modal"
                        data-modal-title="Des beaux légumes pour tout l’monde"
                        data-modal-contenue="Des navets puis des laitues. Des oignons puis des concombres"
                    >
                        <img src="assets/images/news1.jpg" alt="" />
                        <div class="card__content">
                            <h3>Des beaux légumes pour tout l’monde</h3>
                            <p>
                                Des navets puis des laitues. Des oignons puis des concombres. Et puis des choux-fleurs.
                                Des beaux légumes pour tout l'monde.
                            </p>
                            <p class="category">Nouvelles - 5 minutes</p>
                        </div>


                        <template id="tpl-modal-tool">
            <div class="modal">
                <div class="modal__scrim"></div>
                <div class="modal__box" style="background-color: {{color}}">
                    <div class="modal__content">
                        <h2>{{title}}</h2>
                        <img src="./assets/images/{{legume}}.png" alt="{{title}}" />
                    </div>
                    <button class="modal__close js-close"></button>
                </div>
            </div>
        </template>
```

</details>

<br><br>

### **SCSS**

appliquer des styles pour obtenir l'effet voulue

<br><br>

# Variantes

<br>

### **DÉFAUT**

tout les element doivent etre instnacier dans le javascript

Pour la premiere modal utiliser le id **id="tpl-modal-tool**

Pour la deuxieme modal utiliser le id **id="tpl-modal**
<br><br>

# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Samuel_Palma-Lemieux](https://dectim.ca/)
