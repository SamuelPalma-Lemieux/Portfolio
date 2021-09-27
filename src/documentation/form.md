# Form

Cette composante permet d'instancier un snackbar modal sur le body.

<br><br>

# Dépendance

### form

Le snackbar n'as aucune dépendence

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Form"** sur une le Form puis dans **class="form"** indiquer un formulaire et pour activer l'autocompletion **autocomplete="on"** sinon indiquer **off** il y a plusieur types de formulaire pour tout les type de formulairele **placeholder** sert a mettre une mot ou suite de mots afin d'indiquer a la personne qui rempli le formulaire ce qu'elle doit mettre dans la section en question si ont ajoute **required** cela vas rendre le champs obligatoire dans la section **label** pour  un type **text** l'utilisateur aura a rentrer du texte le **input select** sert a mettre une liste déroulante le **radio** sert a mettre une liste a point et pour **input textarea** sert a mettre une zone de texte.


```

 <form action="" class="form" autocomplete="(on ou off)" data-component="Form">
```

<details>
<summary>Exemple complet</summary>

```
            <form action="" class="form" autocomplete="off" data-component="Form">
            <div class="form__body">
              <fieldset class="grid">
                  <div class="input">
                      <label class="input__label" for="firstname">Votre prénom</label>
                      <input
                          class="input__element"
                          type="text"
                          name="firstname"
                          id="firstname"
                          placeholder="ex.: Paoul"
                          required
                      />
                  </div>
                  <div class="input select">
                            <label class="input__label" for="phone">Votre journée favorites</label>
                            <select name="date" id="date" class="input__element" required>
                                <option value="" hidden>Choisir votre journée</option>
                                <option value="19">19 Juin</option>
                                <option value="20">20 Juin</option>
                                <option value="21">21 Juin</option>
                                
                            </select>
                        </div>

                         <div class="input radio">
                                    <input
                                        class="input__element"
                                        type="radio"
                                        name="sexe[]"
                                        id="sexe1"
                                        value="homme"
                                        required
                                    />
                                    <label class="input__label" for="sexe1">homme</label>
                                </div>

                                <div class="input textarea u-grid-fullwidth">
                            <label class="input__label" for="phone">Commentaire</label>
                            <textarea class="input__element" name="comment" id="comment" required></textarea>
                        </div>
                                
                
            </fieldset>
        </div>
        </form>
```

</details>

<br><br>


# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Samuel_Palma-Lemieux](https://dectim.ca/)
