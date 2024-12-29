// import './style.css';
import { initMainApp } from './components/controller';
import { initWedRingMainApp } from './components/weddingringcontroller';
import {initCustomizerMainApp} from './components/customizercontroller'

const initHome = function(){
    const app = initMainApp();
    app.mount('#app');
}

const initWeddingRingApp = function(){
    const app = initWedRingMainApp();
    app.mount('#weddingApp');
}
const initCustomizerApp = function(){
    const app = initCustomizerMainApp();
    app.mount('#customiserapp');
}

function displayLandscapeWarning(){
    const container = document.createElement("div");
    container.setAttribute("id", "landscapeStopperDiv");
    container.innerHTML = '<h1>Please turn back to potrail mode for better experience</h1>';
    document.body.appendChild(container);
}

function removeLandscapeWarning(){
    const container = document.getElementById("landscapeStopperDiv");
    if(container !=null){
        document.body.removeChild(container);
    }
}
function orientationManager(type){
    if(mobileDevice && (type == 'landscape-primary' || type == 'landscape-secondary')){
        displayLandscapeWarning();
    }else{
        removeLandscapeWarning();
    }
}
let mobileDevice = false;
if(screen.height > screen.width){
    mobileDevice = true;
}
orientationManager(screen.orientation.type);

screen.orientation.addEventListener("change", (event) => {
    orientationManager(event.target.type);
  });

function main(){
    const currentScript= document.getElementById('mainScript');
    if(currentScript == null){
        try {
            initHome();
        }
        catch(err) {
        console.log(err);
        }
        try {
            initWeddingRingApp();
        }
        catch(err) {
        console.log(err);
        } 
        try {
            initCustomizerApp();
        }
        catch(err) {
        console.log(err);
        } 
    }else{
        if(currentScript.getAttribute('page') === 'mainapp'){
            initHome();
        }else if(currentScript.getAttribute('page') === 'weddingrings'){
            initWeddingRingApp();
        }else if(currentScript.getAttribute('page') === 'customizerapp'){
            initCustomizerApp();
        }
    }
}
window.onload = function() {
    main();
};