import React from 'react';
import { fabric } from 'fabric';
import { MenuItem, Select, Button, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import * as defaultImages from './Images'; 
import { Attribute } from './Types';
import { Planet } from './Planet';

export interface IPlanetPickerProps {
    /* Need an id so we have a unique canvas per planetpicker */
    id: string;

    /* Style of configuration div on the left */
    configLeftStyles?: React.CSSProperties;

    /* Style of configuration div on the right */
    configRightStyles?: React.CSSProperties;

    /* Styles for the planet picker div */
    styles?: React.CSSProperties;

    /* Include the randomize planet button? */
    includeRandomButton?: boolean;

    /* Include the customize planet attributes inputs? */
    includeConfigurationOptions?: boolean;

    /* Call this function when a new planet is selected / generated */
    onPlanetChange?: (planet: Planet) => void;

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

const CANVAS_SIZE = 256;

function getFeatureForBody(body: Attribute): Attribute {
    const featureMapping = new Map([
        ['Barren', [
            'Alien',
            'Alien Family'
        ]],
        ['Ocean', [
            'Tsunami',
            'Typhoon',
        ]],
        ['Ice', [
            'Igloo',
            'Spikes',
        ]],
        ['Forest', [
            'Grove',
            'Tree of Life',
        ]],
        ['Iron', [
            'Light Magnetism',
            'Strong Magnetism',
        ]],
        ['Desert', [
            'Oasis',
            'Great Pyramid',
        ]],
        ['Terrestrial', [
            'Shuttle',
            'Mecha',
        ]],
        ['Toxic', [
            'Toxic Atmosphere',
            'Pestilence',
        ]],
        ['Lava', [
            'Lava Lamp',
            'Massive Volcano',
        ]],
        ['Orphan', [
            'Twin Rings',
            'Triplet Rings',
        ]],
        ['Gas Giant', [
            'Rocky Ring',
            'Double Rocky Ring',
        ]],
        ['Dwarf', [
            'Dust Ring',
            'X Rings',
        ]],
        ['Brown Star', [
            'Yellow Solar Flares',
            'Yellow Dyson Ring',
            'Brown Solar Flares',
            'Brown Dyson Ring',
        ]],
        ['Red Star', [
            'Red Solar Flares',
            'Red Dyson Ring',
        ]],
        ['White Star', [
            'Yellow Solar Flares',
            'Yellow Dyson Ring',
            'Blue Solar Flares',
            'Blue Dyson Ring',
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
            'Blue Quasar',
            'Blue Accretion Disk',
            'Pink Quasar',
            'Pink Accretion Disk',
            'Rainbow Quasar',
            'Rainbow Accretion Disk',
        ]],
        ['Blue Black Hole', [
            'Yellow Quasar',
            'Yellow Accretion Disk',
            'Blue Quasar',
            'Blue Accretion Disk',
            'Pink Quasar',
            'Pink Accretion Disk',
            'Rainbow Quasar',
            'Rainbow Accretion Disk',
        ]],
        ['Pink Black Hole', [
            'Yellow Quasar',
            'Yellow Accretion Disk',
            'Blue Quasar',
            'Blue Accretion Disk',
            'Pink Quasar',
            'Pink Accretion Disk',
            'Rainbow Quasar',
            'Rainbow Accretion Disk',
        ]],
        ['Rainbow Black Hole', [
            'Yellow Quasar',
            'Yellow Accretion Disk',
            'Blue Quasar',
            'Blue Accretion Disk',
            'Pink Quasar',
            'Pink Accretion Disk',
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
    } = props;

    const availableBackgrounds = backgrounds.concat(defaultImages.backgrounds);
    const availableBodies = bodies.concat(defaultImages.bodies);
    const availableFaces = faces.concat(defaultImages.faces);
    const availableHands = hands.concat(defaultImages.hands);
    const availableFeatures = features.concat(defaultImages.features);
    const availableOrbits = orbits.concat(defaultImages.orbits);
    
    const backgroundOptions = [...availableBackgrounds];
    const bodyOptions = [...availableBodies];
    const faceOptions = [...availableFaces];
    const handOptions = [...availableHands];
    const featureOptions = [...availableFeatures];
    const orbitsOptions = [...availableOrbits];

    for (const arr of [
        backgroundOptions,
        bodyOptions,
        faceOptions,
        handOptions,
        featureOptions,
        orbitsOptions,
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
    const [featureVal, setFeature] = React.useState<Attribute>(pickRandomFeature(body));
    const [canvasSize, setCanvasSize] = React.useState<number>(CANVAS_SIZE);

    const { onPlanetChange } = props;

    React.useEffect(() => {
        const canvasObj = new fabric.StaticCanvas(`canvas-${props.id}`, {
            width: canvasSize,
            height: canvasSize,
        });

        setCanvas(canvasObj);
    }, [props.id, canvasSize]);

    React.useEffect(() => {
        if (canvas) {
            const planet = new Planet(
                backgroundVal,
                bodyVal,
                facesVal,
                handsVal,
                featureVal,
                orbitsVal,
            );

            planet.setCanvas(canvas);

            planet.draw(canvasSize);

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
        canvasSize,
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
    }

    function handleAttributeChange(event: React.ChangeEvent<{}>, newValue: Attribute | null, setStateFunc: any) {
        if (newValue !== null) {
            setStateFunc(newValue);
        }
    }

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'center',
                padding: '1rem',
            }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: `${canvasSize}px`,
                        ...props.styles,
                    }}
                >
                    <canvas
                        id={`canvas-${props.id}`}
                        style={{
                            width: `${canvasSize}px`,
                            height: `${canvasSize}px`,
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
                        {props.includeRandomButton && <Button
                            variant="contained"
                            color="primary"
                            style={{
                                width: `${canvasSize}px`,
                            }}
                            onClick={handleRandomButton}
                            size="small"
                        >
                            Random
                        </Button>}
                    </div>
                </div>

                {props.includeConfigurationOptions &&
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
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setBackground)}
                            value={backgroundVal}
                            options={backgroundOptions}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Background" variant="outlined"/>}
                            style={{
                                width: '200px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setBody)}
                            options={bodyOptions}
                            value={bodyVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Celestial Body" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setFace)}
                            options={faceOptions}
                            value={facesVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Faces" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setHands)}
                            options={handOptions}
                            value={handsVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Hands" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setFeature)}
                            options={featureOptions}
                            value={featureVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Features" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />
                        <Autocomplete
                            onChange={(e, v) => handleAttributeChange(e, v, setOrbits)}
                            options={orbitsOptions}
                            value={orbitsVal}
                            getOptionLabel={(option) => option.name}
                            getOptionSelected={(option, value) => option.name === value.name}
                            renderInput={(params) => <TextField {...params} label="Orbit" variant="outlined"/>}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        />
                        <Select
                            onChange={(e) => setCanvasSize(Number(e.target.value))}
                            value={canvasSize}
                            style={{
                                width: '200px',
                                marginTop: '11px',
                            }}
                        >
                            <MenuItem value={CANVAS_SIZE}>{`${CANVAS_SIZE}x${CANVAS_SIZE}`}</MenuItem>
                            <MenuItem value={128}>128x128</MenuItem>
                            <MenuItem value={256}>256x256</MenuItem>
                            <MenuItem value={512}>512x512</MenuItem>
                            <MenuItem value={1024}>1024x1024</MenuItem>
                        </Select>
                    </div>
                }
            </div>
        </>
    );
}
