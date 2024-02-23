import { Reproductor, Multimedia, videoModule } from './modules.js';

// Instance of musica, pelicula and serie
const musica = new Reproductor('https://www.youtube.com/embed/zEqb6xbeuCo', 'musica');
const pelicula = new Reproductor('https://www.youtube.com/embed/8ugaeA-nMTc', 'peliculas');
const serie = new Reproductor('https://www.youtube.com/embed/IJ_AZCvCacw', 'series');

// Call the method playMultimedia
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Call the method setInicio
musica.setInicio(5);
pelicula.setInicio(10);
serie.setInicio(15);
