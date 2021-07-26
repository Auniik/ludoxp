// import components
import HelloWorld from './HelloWorld.vue';

// register components
export const registerComponents = (app) => {

    app.component('tw-button', HelloWorld);

}
