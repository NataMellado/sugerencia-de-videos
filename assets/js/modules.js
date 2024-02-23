// Class Multimedia
class Multimedia {
    constructor(url) {
        this._url = url;
    }

    // Getter
    get url() {
        return this._url;
    }

    // Method that returns a message
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`;
    }
}

// Class Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    // Getter
    get id() {
        return this._id;
    }

    // Method that call the public function insertVideo
    playMultimedia() {
        videoModule.insertVideo(this.url, this._id);
    }

    // Method that receives and adds the start time to the video
    setInicio(time) {
        document.getElementById(this._id).setAttribute('src', `${this.url}?start=${time}`);
    }
}

// Funtion with module pattern and IIFE to insert video
const videoModule = (function() {

    // Private function
    const insertVideo = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }

    // Public function
    return {
        insertVideo
    }
})();

// Export the classes and the function
export { Multimedia, Reproductor, videoModule };