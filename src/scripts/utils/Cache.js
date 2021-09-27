
/** Composante  de TimTools */
export default class Cache{
    /**
     * Méthode d'initialisation
     */
    static set(key, value, force) {
      if (key === undefined) {
        console.error("vous n'avez pas fourni de clef pour le localstorage");
      } else if (value === undefined) {
        console.error("vous n'avez pas fourni de clef pour le localstorage");
      } else if (Cache.isLocalStorageAvailable()) {
  
          if(!Cache.get(key) || force ===true){
               key = `TT_${key}`;//met un préfixe
               localStorage.setItem(key, value);
          }else{
  console.error('la clef que vous avez fourni est deja utiliser. Forcer au besoin')
          }
       
       
      }
    }
  
    static get(key) {
      if (key === undefined) {
        console.error("vous n'avez pas fourni de clef pour le localstorage");
      } else if (Cache.isLocalStorageAvailable()) {
        key = `TT_${key}`;//met un préfixe
        return localStorage.getItem(key);
      }
    }
  
    static remove(key) {
      if (key === undefined) {
        console.error("vous n'avez pas fourni de clef pour le localstorage");
      } else if (Cache.isLocalStorageAvailable()) {
        key = `TT_${key}`;//met un préfixe
        localStorage.removeItem(key);
      }
    }
  
    static isLocalStorageAvailable() {
      
      const test = '__timTools__';
  
      try {
        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test, test);
        return true;
      } catch (error) {
        console.error("localstorage n'est pas disponible sur votre navigateur");
      }
    }
  }
  