# Video

Cette composante permet d'instancier un video dans le html .

<br><br>

# Dépendance

### Video

Le snackbar n'as aucune dépendence

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Video"** sur une le **div.video** et dans le **data-video-id=l' identifiant de la video**

```

<div class="video" data-component="Video" data-video-id="identifiant de la video">

```

<details>
<summary>Exemple complet</summary>

```
          <div class="container__video">
                <div class="video" data-component="Video" data-video-id="F9ury5-K_2Y">
                    <div class="video__media js-video">
                        <img class="js-poster" src="./assets/images/barbecue-party.jpg" alt="barbecue party" />
                        <svg class="icon icon--stroke icon--xl">
                            <use xlink:href="#icon-play"></use>
                        </svg>
                    </div>
                </div>
            </div>
```

</details>

<br><br>


# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Samuel_Palma-Lemieux](https://dectim.ca/)
