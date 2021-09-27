# Scrolly

Cette composante permet d'instancier une transition scrolly sur un élément html.

<br><br>

# Dépendance

Aucune dépendence

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-scrolly="nom de la transition"**. Pour nom de transition veuillez vous referer au css.

```
<div class="nom de la classe" data-scrolly="nom de la transition">
```

<details>
<summary>Exemple complet</summary>

```
<div                    class="card card--tertiary"
                        data-scrolly="fromBig"
                                                >
                        <h3>Une belle laitue</h3>
                        <img src="assets/images/lettuce.png" alt="De la laitue" />
                    </div>
```

</details>

<br><br>

### **SCSS**

Pour modifier les transition modifier les classe utiliser dans la data-scrolly.



<br><br>

# Variantes

<br>

### **DÉFAUT**

Afin d'utiliser la composante, mettre l'attribut **data-scrolly="fromBig"**. Pour transition de scale 1.5 a 1.


Afin d'utiliser la composante, mettre l'attribut **data-scrolly="fromRight"**. Pour transition de droite a gauche.

Afin d'utiliser la composante, mettre l'attribut **data-scrolly="fromBack"**. Pour transition de scale 0 a 1.



<br><br>

# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Samuel_Palma-Lemieux](https://dectim.ca/)
