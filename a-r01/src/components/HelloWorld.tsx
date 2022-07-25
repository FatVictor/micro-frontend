import React from 'react';
import ReactDOM from 'react-dom';
import RenderForm from './RenderForm';

const HelloWorld: React.FC<{}> = () => {
    return <div>Hello World</div>;
};

export default HelloWorld;
class HelloWorldElement extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<RenderForm/>, this);
    }
}

customElements.define('hello-word', HelloWorldElement);
