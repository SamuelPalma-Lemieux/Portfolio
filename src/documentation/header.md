# Header

Cette composante permet d'instancier un header modal sur le body.

<br><br>

# Dépendance

### Header

Le header n'as aucune dépendence

<br><br>

# Comment l'utiliser

### **HTML**

Afin d'utiliser la composante, mettre l'attribut **data-component="Header"** sur une le header puis pour desactiver le autohide écriver **false** dans le **data-autohide** pour le reactiver écrire **true**
pour ajuster le scrollLimit modifier le chiffre decimal du pourcentage dans **data-scroll-limit**

```
<header class="header" data-component="Header" data-autohide="(true ou false)" data-scroll-limit="chiffre de 0 a 1">
```

<details>
<summary>Exemple complet</summary>

```
         <header class="header" data-component="Header" data-autohide="true" data-scroll-limit="0.1">
                <div class="wrapper">
                    <a href="#" class="header__brand">
                        <img src="assets/images/logo.svg" alt="Logo Tomate" />
                    </a>
                    <nav class="nav-primary">
                        <ul>
                            <li>
                                <a href="#" class="nav-primary__item">les fruits</a>
                            </li>
                            <li>
                                <a href="#" class="nav-primary__item">les légumes</a>
                            </li>
                            <li>
                                <a href="#" class="nav-primary__item">les recettes</a>
                            </li>
                            <li>
                                <a href="#" class="nav-primary__item">les smoothies</a>
                            </li>
                        </ul>
                    </nav>
                    <button class="header__toggle js-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
```

</details>

<br><br>


# Crédit

Cette librairie est une création de Jean-François Leblanc et Matthieu Parent, pour le département TIM du Cégep édouard Montpetit.

Elle a été modifié par [Samuel_Palma-Lemieux](https://dectim.ca/)
