import React from 'react';
import ReactDOM from 'react-dom';
import CharacterSheet from './Components/Character/CharacterSheet';

function Layout (){
    return (
        <div className="Layout">
            <CharacterSheet />
        </div>
    )

}


ReactDOM.render(
    React.createElement(Layout,null),
    document.getElementById('app')
);
module.hot.accept();