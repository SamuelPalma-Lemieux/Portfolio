/** Composante video de TimTools */
export default class video {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.videoContainer = this.element.querySelector('.js-video');
    this.poster = this.element.querySelector('.js-poster');
    this.videoId = this.element.dataset.videoId;
    this.autoplay = this.poster ? 1 : 0;//si un poster est présent
    this.playerReady = false;

    video.instances.push(this);//met les vidéo dans le tableau
    console.log(video.instances);

    if (this.videoId) {
      //si un id est présent ca marche
      video.loadScript();
    } else {
      //si un id est manquant message d'erreur
      console.error('Vous devez specifier un id');
    }
  }

  static loadScript() {
    //Cette fonction vefifie de loader un video donc pas de probleme quand on les loads touts
    if (!video.scriptIsLoading) {
      video.scriptIsLoading = true;
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
    }
  }
  /**
   * Méthode d'initialisation
   */
  init() {
    this.intiPlayer = this.initPlayer.bind(this);//ajout d'un clic sur le thumbnaill
    if (this.poster) {
      this.element.addEventListener('click', this.initPlayer.bind(this));
    } else {
      this.initPlayer();
    }
  }
  initPlayer(event) {
    //Instanciation du videoPlayer de Youtube et s'assure que seulement une video joue en cliquant sur play
    if (event) {
      this.element.removeEventListener('click', this.initPlayer.bind(this));
    }
    console.log(this.autoplay);
    this.player = new YT.Player(this.videoContainer, {
      height: '100%',
      width: '100%',
      videoId: this.videoId,
      playerVars: { rel: 0, autoplay: this.autoplay},
      events: {
        onReady: () => {
          
          this.playerReady = true;
          const observer = new IntersectionObserver(this.watch.bind(this), {
            rootMargin: '0px 0px 0px 0px',
          });
          observer.observe(this.element);
        },
        onStateChange: (event) => {
          if (event.data == YT.PlayerState.PLAYING) {
            // pause tous les videos SAUF celui qui joue
            video.pauseAll(this);
          } else if (event.data == YT.PlayerState.ENDED) {
            this.player.seekTo(0);
            this.player.pauseVideo();
          }
        },
      },
    });
  }
  watch(entries) {
    if (this.player && !entries[0].isIntersecting) {
      this.player.pauseVideo();
    }
  }
  static initAll() {
    document.documentElement.classList.add('is-video-ready');
    for (let i = 0; i < video.instances.length; i++) {
      const instance = video.instances[i];
      instance.init();
    }
  }

  static pauseAll(currentInstance) {
    //Arrete la video active si une autre est jouer
    for (let i = 0; i < video.instances.length; i++) {
      const instance = video.instances[i];
      if (instance.playerReady && instance !== currentInstance) {
        instance.player.pauseVideo();
        
      }
    }
  }
}

video.instances = [];
window.onYouTubeIframeAPIReady = video.initAll;// mapping pour les videos
