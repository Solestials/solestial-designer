import React from 'react';
import { fabric } from 'fabric';
import { MenuItem, Select, Button, TextField, makeStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import * as defaultImages from './Images'; 
import { Attribute } from './Types';
import { Planet } from './Planet';

export interface IPlanetPickerProps {
    /* Styles for the planet picker div */
    styles?: React.CSSProperties;

    /* Call this function when a new planet is selected / generated */
    onPlanetChange?: (planet: Planet) => void;

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

const CANVAS_SIZE = 256;

const useButtonStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',

        fontFamily: 'Roboto Mono, monospace',

        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0)',
        },
    },
}));

const useInputStyles = makeStyles((theme) => ({
    root: {
        /* Input label colour */
        color: 'white',

        fontFamily: 'Roboto Mono, monospace',

        '&.Mui-focused': {
            color: 'white',
        },
    },
    inputRoot: {
        /* Input text colour */
        color: "white",
        borderColor: 'white !important',

        fontFamily: 'Roboto Mono, monospace',

        /* White input outline */
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white !important',
            borderWidth: '1px !important',
        },
    },
    '@global': {
        '.MuiSvgIcon-root': {
            color: 'white !important',
        },
    }
}));


function getFeatureForBody(body: Attribute): Attribute {
    const featureMapping = new Map([
        ['Barren', [
            'Alien',
            'Alien Family',
            'Alien Camp',
        ]],
        ['Ocean', [
            'Tsunami',
            'Typhoon',
            'Sharknado',
        ]],
        ['Ice', [
            'Igloo',
            'Spikes',
            'Frozen Titan',
        ]],
        ['Forest', [
            'Grove',
            'Tree of Life',
            'Gaia',
        ]],
        ['Iron', [
            'Iron Cube',
            'Light Magnetism',
            'Strong Magnetism',
        ]],
        ['Desert', [
            'Oasis',
            'Great Pyramid',
            'The All Seeing Eye',
        ]],
        ['Terrestrial', [
            'Shuttle',
            'Mecha',
            'Into the Warp Drive',
        ]],
        ['Toxic', [
            'Toxic Atmosphere',
            'Pestilence',
            'Googly Eyes',
        ]],
        ['Lava', [
            'Lava Lamp',
            'Massive Volcano',
            'Krakatoa',
        ]],
        ['Orphan', [
            'Single Ring',
            'Twin Rings',
            'Triplet Rings',
        ]],
        ['Gas Giant', [
            'Rocks',
            'Rocky Ring',
            'Double Rings',
        ]],
        ['Dwarf', [
            'Dust Ring',
            'Dense Dust Ring',
            'X Rings',
        ]],
        ['Brown Star', [
            'Brown Solar Flares',
            'Brown Dyson Ring',
        ]],
        ['Red Star', [
            'Red Solar Flares',
            'Red Dyson Ring',
        ]],
        ['White Star', [
            'Blue Solar Flares',
            'White Solar Flares',
            'White Dyson Ring',
        ]],
        ['Blue Star', [
            'Blue Solar Flares',
            'Blue Dyson Ring',
        ]],
        ['Yellow Star', [
            'Yellow Solar Flares',
            'Yellow Dyson Ring',
        ]],
        ['Violet Star', [
            'Violet Solar Flares',
            'Violet Dyson Ring',
            'Blue Solar Flares',
            'Blue Dyson Ring',
        ]],
        ['Yellow Black Hole', [
            'Yellow Quasar',
            'Yellow Accretion Disk',
        ]],
        ['Blue Black Hole', [
            'Blue Quasar',
            'Blue Accretion Disk',
        ]],
        ['Pink Black Hole', [
            'Pink Quasar',
            'Pink Accretion Disk',
        ]],
        ['Rainbow Black Hole', [
            'Rainbow Quasar',
            'Rainbow Accretion Disk',
        ]],
    ]);

    const features = featureMapping.get(body.name);

    if (features) {
        const feature = features[Math.floor(Math.random() * features.length)];

        const attribute = defaultImages.features.find((f) => f.name === feature);

        if (attribute) {
            return attribute;
        }
    } else {
        console.log(`Failed to find features for ${body.name}`);
    }

    return {
        name: 'None',
        image: '',
    }
}

function pickRandomFeature(body: Attribute, emptyProbability: number = 0.5): Attribute {
    if (emptyProbability < 0 || emptyProbability > 1) {
        throw new Error('Probability should be between 0 and 1');
    }

    const random = Math.random();

    if (random < emptyProbability) {
        return { name: 'None', image: '' };
    }

    return getFeatureForBody(body);
}

function AttributePicker(props: any) {
    const { setFunc, value, options, label, styles } = props;

    const classes = useInputStyles();

    function handleAttributeChange(event: React.ChangeEvent<{}>, newValue: Attribute | null, setStateFunc: any) {
        if (newValue !== null) {
            setStateFunc(newValue);
        }
    }

    return (
        <Autocomplete
            onChange={(e, v) => handleAttributeChange(e, v, setFunc)}
            value={value}
            options={options}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option, value) => option.name === value.name}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    variant="outlined"
                    InputLabelProps={{ classes: classes }}
                />
            )}
            style={{
                width: '200px',
                ...styles,
            }}
            classes={classes}
        />
    );
}

export function pickRandomAttributeImg(items: any, allowEmpty?: boolean, emptyProbability?: number) {
    if (items.length === 0) {
        return undefined;
    }

    return pickRandomAttribute(items, allowEmpty, emptyProbability).image;
}

export function pickRandomAttribute(items: any, allowEmpty?: boolean, emptyProbability?: number): Attribute {
    if (items.length === 0) {
        return { name: 'None', image: '' };
    }

    const attributes = [...items];
    
    if (allowEmpty) {
        if (emptyProbability) {
            if (emptyProbability < 0 || emptyProbability > 1) {
                throw new Error('Probability should be between 0 and 1');
            }

            const random = Math.random();

            if (random < emptyProbability) {
                return { name: 'None', image: '' };
            }
        } else {
            attributes.push({ name: 'None', image: '' });
        }
    }

    return items[Math.floor(Math.random() * items.length)];
}

export function PlanetPicker(props: IPlanetPickerProps) {
    const [canvas, setCanvas] = React.useState<fabric.StaticCanvas>();

    const {
        backgrounds,
        bodies,
        faces,
        hands,
        features,
        orbits,
        orbits2,
    } = props;

    const availableBackgrounds = backgrounds.concat(defaultImages.backgrounds);
    const availableBodies = bodies.concat(defaultImages.bodies);
    const availableFaces = faces.concat(defaultImages.faces);
    const availableHands = hands.concat(defaultImages.hands);
    const availableFeatures = features.concat(defaultImages.features);
    const availableOrbits = orbits.concat(defaultImages.orbits);
    const availableOrbits2 = orbits2.concat(defaultImages.orbits2);
    
    const backgroundOptions = [...availableBackgrounds];
    const bodyOptions = [...availableBodies];
    const faceOptions = [...availableFaces];
    const handOptions = [...availableHands];
    const featureOptions = [...availableFeatures];
    const orbitsOptions = [...availableOrbits];
    const orbits2Options = [...availableOrbits2];

    const buttonClasses = useButtonStyles();
    const inputClasses = useInputStyles();

    for (const arr of [
        backgroundOptions,
        bodyOptions,
        faceOptions,
        handOptions,
        featureOptions,
        orbitsOptions,
        orbits2Options,
    ]) {
        arr.sort((a, b) => a.name.localeCompare(b.name));

        arr.unshift({
            name: 'None',
            image: '',
        })
    }

    const [backgroundVal, setBackground] = React.useState<Attribute>(pickRandomAttribute(availableBackgrounds));
    const body = pickRandomAttribute(availableBodies);
    const [bodyVal, setBody] = React.useState<Attribute>(body);
    const [facesVal, setFace] = React.useState<Attribute>(pickRandomAttribute(availableFaces));
    const [handsVal, setHands] = React.useState<Attribute>(pickRandomAttribute(availableHands));
    const [orbitsVal, setOrbits] = React.useState<Attribute>(pickRandomAttribute(availableOrbits));
    const [orbits2Val, setOrbits2] = React.useState<Attribute>(pickRandomAttribute(availableOrbits2));
    const [featureVal, setFeature] = React.useState<Attribute>(pickRandomFeature(body));
    const [canvasValue, setCanvasValue] = React.useState({ name: `${CANVAS_SIZE}x${CANVAS_SIZE}`, value: CANVAS_SIZE });

    const { onPlanetChange } = props;

    React.useEffect(() => {
        const canvasObj = new fabric.StaticCanvas(`canvas-${props.id}`, {
            width: canvasValue.value,
            height: canvasValue.value,
        });

        setCanvas(canvasObj);
    }, [props.id, canvasValue.value]);

    React.useEffect(() => {
        if (canvas) {
            const planet = new Planet(
                backgroundVal,
                bodyVal,
                facesVal,
                handsVal,
                featureVal,
                orbitsVal,
                orbits2Val,
            );

            planet.setCanvas(canvas);

            planet.draw(canvasValue.value);

            if (onPlanetChange) {
                onPlanetChange(planet);
            }
        }
    }, [
        onPlanetChange,
        canvas,
        backgroundVal,
        bodyVal,
        facesVal,
        handsVal,
        featureVal,
        orbitsVal,
        orbits2Val,
        canvasValue.value,
    ]);

    function handleRandomButton() {
        if (!canvas) {
            return;
        }

        setBackground(pickRandomAttribute(availableBackgrounds));
        const body = pickRandomAttribute(availableBodies);
        setBody(body);
        setFace(pickRandomAttribute(availableFaces));
        setHands(pickRandomAttribute(availableHands, true, 0.3));
        setFeature(pickRandomFeature(body, 0.33));
        setOrbits(pickRandomAttribute(availableOrbits, true, 0.5));
        setOrbits2(pickRandomAttribute(availableOrbits2, true, 0.5));
    }

    function handleAttributeChange(event: React.ChangeEvent<{}>, newValue: Attribute | null, setStateFunc: any) {
        if (newValue !== null) {
            setStateFunc(newValue);
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <a
                href="https://solestials.com"
                style={{
                    marginLeft: '20px',
                    marginTop: '20px',
                    color: 'white',
                    fontFamily: 'Roboto Mono, monospace',
                    textDecoration: 'none',
                }}
            >
                Home
            </a>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <img
                    style={{
                        width: '300px',
                    }}
                    src={require('./img/logo.png').default}
                    alt="Solestials Logo"
                />
            </div>
            <div style={{
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'center',
                padding: '1rem',
                flexWrap: 'wrap',
            }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '30px',
                        flexWrap: 'wrap',
                    }}
                >
                    <AttributePicker
                        setFunc={setBackground}
                        value={backgroundVal}
                        options={backgroundOptions}
                        label='Background'
                    />
                    <AttributePicker
                        setFunc={setBody}
                        value={bodyVal}
                        options={bodyOptions}
                        label='Body'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                    <AttributePicker
                        setFunc={setFace}
                        value={facesVal}
                        options={faceOptions}
                        label='Face'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                    <AttributePicker
                        setFunc={setHands}
                        value={handsVal}
                        options={handOptions}
                        label='Hands'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: `${canvasValue.value}px`,
                        flexWrap: 'wrap',
                    }}
                >
                    <canvas
                        id={`canvas-${props.id}`}
                        style={{
                            width: `${canvasValue.value}px`,
                            height: `${canvasValue.value}px`,
                        }}
                    >
                    </canvas>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '15px',
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            classes={buttonClasses}
                            style={{
                                width: `${canvasValue.value}px`,
                                fontSize: '16px',
                            }}
                            onClick={handleRandomButton}
                            size="small"
                        >
                            Random
                        </Button>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: '30px',
                        ...props.configLeftStyles,
                    }}
                >
                    <AttributePicker
                        setFunc={setFeature}
                        value={featureVal}
                        options={featureOptions}
                        label='Feature'
                    />
                    <AttributePicker
                        setFunc={setOrbits}
                        value={orbitsVal}
                        options={orbitsOptions}
                        label='Prograde Orbit'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                    <AttributePicker
                        setFunc={setOrbits2}
                        value={orbits2Val}
                        options={orbits2Options}
                        label='Retrograde Orbit'
                        styles={{
                            marginTop: '20px',
                        }}
                    />
                    <Autocomplete
                        onChange={(e, v) => v && setCanvasValue(v)}
                        value={canvasValue}
                        options={[
                            {
                                name: '128x128',
                                value: 128,
                            },
                            {
                                name: '256x256',
                                value: 256,
                            },
                            {
                                name: '512x512',
                                value: 512,
                            },
                            {
                                name: '1024x1024',
                                value: 1024,
                            },
                        ]}
                        getOptionLabel={(option) => option.name}
                        getOptionSelected={(option, value) => option.value === canvasValue.value}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label='Canvas Size'
                                variant="outlined"
                                InputLabelProps={{ classes: inputClasses }}
                            />
                        )}
                        style={{
                            width: '200px',
                            marginTop: '20px',
                        }}
                        classes={inputClasses}
                    />
                </div>
            </div>
        </div>
    );
}
