import React from 'react';
import SlotM from './SlotM';


const App = () => {

    return (
        <>
            <h1 className="heading-style">
                🎰 Welcome TO <span style={{ fontWeight: 'bold' }}>Slot Machine</span>🎰</h1>
             

             <div className="slotMachine">
            
            <SlotM  x='😄'  y='😄'  z='😄' />
            <hr/>
            <SlotM  x='😄'  y='😠'  z='😄'/>
            <hr/>
            <SlotM  x='💑'  y='💑'  z='💑'/>
            <hr/>
            <SlotM  x='🍎'  y='🍌'  z='🍎'  />
            <hr/>
            <SlotM  x ='🛫'  y = '🛫' z= '🛫' />


            </div>
        </>
    );
}


export default App;
