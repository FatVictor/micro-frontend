import React from 'react';
import HelloWorld from './components/HelloWorld';
import RenderForm from './components/RenderForm';
import ReactDOM from 'react-dom';

const App: React.FC<{}> = () => {
    return (
        <>
            <HelloWorld/>
            <RenderForm/>
        </>
    );
};

export default App;

class AppElement extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<RenderForm/>, this);
    }
}

customElements.define('r01-app', AppElement);
