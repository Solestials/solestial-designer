import React from 'react';
import {
    ThemeProvider,
    createTheme,
} from '@material-ui/core';
import { deepPurple, deepOrange } from '@material-ui/core/colors';

import { PlanetPicker } from './PlanetPicker';
import { Attribute } from './Types';
import './styles.css';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

interface IGeneratorProps {
    backgrounds: Attribute[];
    bodies: Attribute[];
    faces: Attribute[];
    orbits: Attribute[];
    orbits2: Attribute[];
    features: Attribute[];
    hands: Attribute[];

    setBackgrounds: (prevState: Attribute[]) => void;
    setBodies: (prevState: Attribute[]) => void;
    setFaces: (prevState: Attribute[]) => void;
    setOrbits: (prevState: Attribute[]) => void;
    setOrbits2: (prevState: Attribute[]) => void;
    setFeatures: (prevState: Attribute[]) => void;
    setHands: (prevState: Attribute[]) => void;
}

const theme = createTheme({
    palette: {
        primary: deepPurple,
        secondary: deepOrange,
    },
});

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

function PlanetGenerator(props: IGeneratorProps) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <div
                style={{
                    marginTop: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <PlanetPicker
                    id={'1'}
                    includeRandomButton={true}
                    includeConfigurationOptions={true}
                    backgrounds={props.backgrounds}
                    bodies={props.bodies}
                    faces={props.faces}
                    hands={props.hands}
                    features={props.features}
                    orbits={props.orbits}
                    orbits2={props.orbits2}
                    setBackgrounds={props.setBackgrounds}
                    setBodies={props.setBodies}
                    setFaces={props.setFaces}
                    setHands={props.setHands}
                    setFeatures={props.setFeatures}
                    setOrbits={props.setOrbits}
                    setOrbits2={props.setOrbits2}
                />
            </div>
        </div>
    );
}

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
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        </>
    );
}

export default App;
