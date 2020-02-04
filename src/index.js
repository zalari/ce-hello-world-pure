// we are so klever
// -> https://vcfvct.wordpress.com/2016/07/31/js-tilde-iief/

~function () {

  // define the actual class
  const Z4iHelloWorld = class extends HTMLElement {

    constructor() {
      super();
    }

    connectedCallback() {
      console.log('I am there!', this);
      this.innerHTML = this.render();
    }

    disconnectedCallback() {
      console.log('I am not there');
    }

    render() {
      return `<div>Hello World!</div>`;
    }

  };

  customElements.define('z4i-hello-worldz', Z4iHelloWorld);


}();
