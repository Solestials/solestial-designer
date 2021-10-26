import React from 'react';
import {
    Tabs,
    Tab,
    AppBar,
    ThemeProvider,
    createTheme,
} from '@material-ui/core';
import { deepPurple, deepOrange } from '@material-ui/core/colors';

import { PlanetPicker } from './PlanetPicker';
import { Attribute } from './Types';

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
    features: Attribute[];
    hands: Attribute[];

    setBackgrounds: (prevState: Attribute[]) => void;
    setBodies: (prevState: Attribute[]) => void;
    setFaces: (prevState: Attribute[]) => void;
    setOrbits: (prevState: Attribute[]) => void;
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
                    setBackgrounds={props.setBackgrounds}
                    setBodies={props.setBodies}
                    setFaces={props.setFaces}
                    setHands={props.setHands}
                    setFeatures={props.setFeatures}
                    setOrbits={props.setOrbits}
                />
            </div>
        </div>
    );
}

function App() {
    const [tab, setTab] = React.useState(0);
    const [backgrounds, setBackgrounds] = React.useState<Attribute[]>([]);
    const [bodies, setBodies] = React.useState<Attribute[]>([]);
    const [faces, setFaces] = React.useState<Attribute[]>([]);
    const [hands, setHands] = React.useState<Attribute[]>([]);
    const [features, setFeatures] = React.useState<Attribute[]>([]);
    const [orbits, setOrbits] = React.useState<Attribute[]>([]);

    function handleTabChange(event: React.ChangeEvent<{}>, newValue: number) {
        setTab(newValue);
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Tabs
                        value={tab}
                        onChange={handleTabChange}
                        centered
                    > 
                        <Tab label="Planet Generator"/>
                    </Tabs>
                </AppBar>
                <TabPanel value={tab} index={0}>
                    <PlanetGenerator
                        backgrounds={backgrounds}
                        bodies={bodies}
                        faces={faces}
                        hands={hands}
                        features={features}
                        orbits={orbits}
                        setBackgrounds={setBackgrounds}
                        setBodies={setBodies}
                        setFaces={setFaces}
                        setHands={setHands}
                        setFeatures={setFeatures}
                        setOrbits={setOrbits}
                    />
                </TabPanel>
            </ThemeProvider>
        </>
    );
}

export default App;