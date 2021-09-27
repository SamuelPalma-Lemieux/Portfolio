# Snackbar

Cette composante permet d'instancier un snackbar modal sur le body.

<br><br>

# Dépendance

### Snackbar

Le snackbar n'as aucune dépendence

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Snackbar"** sur une le **div.snackbar** puis pour desactiver le autohide écriver **false** dans le **data-autohide** pour le reactiver écrire **true**
pour ajuster le scrollLimit modifier le chiffre decimal du pourcentage dans **data-scroll-limit** et pour le delay l'écrire en millieme de seconde **exemple 2 seconde = 2000**

```

<div class="snackbar snackbar__Hide" data-delay="2000" data-component="Snackbar" data-autohide="(true ou false)" data-scroll-limit="chiffre de 0 a 1" data-id="1">

```

<details>
<summary>Exemple complet</summary>

```
          <div class="snackbar snackbar__Hide" data-delay="2000" data-component="Snackbar" data-autohide="true" data-scroll-limit="0.1" data-id="1">
                <p>Veuiller prendre note que nos mesures sanitaires sont aux normes</p>
               
                <svg class="icon icon--xs close__snackbar" data-snackbar-status="ferme">
                    <use xlink:href="#icon-close"></use>
                </svg>
           
            </div>
```

</details>

<br><br>


# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Samuel_Palma-Lemieux](https://dectim.ca/)
