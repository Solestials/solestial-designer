import React from 'react';

import { PlanetPicker } from './PlanetPicker';
import { Attribute } from './Types';
import './styles.css';

function App() {
    const [backgrounds, setBackgrounds] = React.useState<Attribute[]>([]);
    const [bodies, setBodies] = React.useState<Attribute[]>([]);
    const [faces, setFaces] = React.useState<Attribute[]>([]);
    const [hands, setHands] = React.useState<Attribute[]>([]);
    const [features, setFeatures] = React.useState<Attribute[]>([]);
    const [orbits, setOrbits] = React.useState<Attribute[]>([]);
    const [orbits2, setOrbits2] = React.useState<Attribute[]>([]);

    return (
        <>
            <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700" rel="stylesheet"/>
            <PlanetPicker
                backgrounds={backgrounds}
                bodies={bodies}
                faces={faces}
                hands={hands}
                features={features}
                orbits={orbits}
                orbits2={orbits2}
                setBackgrounds={setBackgrounds}
                setBodies={setBodies}
                setFaces={setFaces}
                setHands={setHands}
                setFeatures={setFeatures}
                setOrbits={setOrbits}
                setOrbits2={setOrbits2}
            />
        </>
    );
}

export default App;
