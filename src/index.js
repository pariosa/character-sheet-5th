import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from "./js/store/store";
import ReactDOM from 'react-dom';
import CharacterSheet from './Components/Character/CharacterSheet';
import Header from './Components/UIComponents/Header';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

window.store = store;

function Layout (){
    return (
        <Provider store={ store }>
            <div className="Layout">
                 <Header />
                <CharacterSheet />
            </div>
        </Provider>
    )
}
store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(
        React.createElement(Layout,null),
        document.getElementById('app')
    );
})

module.hot.accept();