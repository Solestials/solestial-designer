import { Attribute } from './Types';

export interface LoadedAttribute {
    name: string;
    image: {
        default: string;
    }
}

const loadedBackgrounds: LoadedAttribute[] = [
    {
        name: 'Black',
        image: require(`${__dirname}/../assets/backgrounds/Black.png`),
    },
    {
        name: 'Brown',
        image: require(`${__dirname}/../assets/backgrounds/Brown.png`),
    },
    {
        name: 'Green',
        image: require(`${__dirname}/../assets/backgrounds/Green.png`),
    },
    {
        name: 'Purple',
        image: require(`${__dirname}/../assets/backgrounds/Purple.png`),
    },
    {
        name: 'Teal',
        image: require(`${__dirname}/../assets/backgrounds/Teal.png`),
    },
    {
        name: 'Wine',
        image: require(`${__dirname}/../assets/backgrounds/Wine.png`),
    },
    {
        name: 'Space Yellow',
        image: require(`${__dirname}/../assets/backgrounds/Space Yellow.png`),
    },
    {
        name: 'Space Green',
        image: require(`${__dirname}/../assets/backgrounds/Space Green.png`),
    },
    {
        name: 'Space Blue',
        image: require(`${__dirname}/../assets/backgrounds/Space Blue.png`),
    },
    {
        name: 'Space Violet',
        image: require(`${__dirname}/../assets/backgrounds/Space Violet.png`),
    },
    {
        name: 'Space Red',
        image: require(`${__dirname}/../assets/backgrounds/Space Red.png`),
    },
    {
        name: 'Nebula',
        image: require(`${__dirname}/../assets/backgrounds/Nebula.png`),
    },
    {
        name: 'Solana Void',
        image: require(`${__dirname}/../assets/backgrounds/SolanaVoid.png`),
    },
    {
        name: 'Spiral',
        image: require(`${__dirname}/../assets/backgrounds/Spiral.png`),
    },
    {
        name: 'Eye',
        image: require(`${__dirname}/../assets/backgrounds/Eye.png`),
    },
];

const loadedBodies: LoadedAttribute[] = [
    {
        name: 'Barren',
        image: require(`${__dirname}/../assets/bodies/Barren.png`),
    },
    {
        name: 'Blue Black Hole',
        image: require(`${__dirname}/../assets/bodies/Black Hole Blue.png`),
    },
    {
        name: 'Pink Black Hole',
        image: require(`${__dirname}/../assets/bodies/Black Hole Pink.png`),
    },
    {
        name: 'Rainbow Black Hole',
        image: require(`${__dirname}/../assets/bodies/Black Hole Rainbow.png`),
    },
    {
        name: 'Yellow Black Hole',
        image: require(`${__dirname}/../assets/bodies/Black Hole Yellow.png`),
    },
    {
        name: 'Desert',
        image: require(`${__dirname}/../assets/bodies/Desert.png`),
    },
    {
        name: 'Dwarf',
        image: require(`${__dirname}/../assets/bodies/Dwarf.png`),
    },
    {
        name: 'Forest',
        image: require(`${__dirname}/../assets/bodies/Forest.png`),
    },
    {
        name: 'Gas Giant',
        image: require(`${__dirname}/../assets/bodies/GasGiant.png`),
    },
    {
        name: 'Ice',
        image: require(`${__dirname}/../assets/bodies/Ice.png`),
    },
    {
        name: 'Iron',
        image: require(`${__dirname}/../assets/bodies/Iron.png`),
    },
    {
        name: 'Lava',
        image: require(`${__dirname}/../assets/bodies/Lava.png`),
    },
    {
        name: 'Ocean',
        image: require(`${__dirname}/../assets/bodies/Ocean.png`),
    },
    {
        name: 'Orphan',
        image: require(`${__dirname}/../assets/bodies/Orphan.png`),
    },
    {
        name: 'Blue Star',
        image: require(`${__dirname}/../assets/bodies/Star Blue.png`),
    },
    {
        name: 'Brown Star',
        image: require(`${__dirname}/../assets/bodies/Star Brown.png`),
    },
    {
        name: 'Violet Star',
        image: require(`${__dirname}/../assets/bodies/Star Violet.png`),
    },
    {
        name: 'White Star',
        image: require(`${__dirname}/../assets/bodies/Star White.png`),
    },
    {
        name: 'Yellow Star',
        image: require(`${__dirname}/../assets/bodies/Star Yellow.png`),
    },
    {
        name: 'Red Star',
        image: require(`${__dirname}/../assets/bodies/StarRed.png`),
    },
    {
        name: 'Terrestrial',
        image: require(`${__dirname}/../assets/bodies/Terrestrial.png`),
    },
    {
        name: 'Toxic',
        image: require(`${__dirname}/../assets/bodies/Toxic.png`),
    },
];

const loadedFaces: LoadedAttribute[] = [
    {
        name: 'Smile',
        image: require(`${__dirname}/../assets/faces/Smile.png`),
    },
    {
        name: 'Uwu',
        image: require(`${__dirname}/../assets/faces/uwu.png`),
    },
    {
        name: 'Serious',
        image: require(`${__dirname}/../assets/faces/Serious.png`),
    },
    {
        name: 'Pouty',
        image: require(`${__dirname}/../assets/faces/Pouty.png`),
    },
    {
        name: 'Glasses',
        image: require(`${__dirname}/../assets/faces/Glasses.png`),
    },
    {
        name: 'Surprise',
        image: require(`${__dirname}/../assets/faces/Surprise.png`),
    },
    {
        name: 'Smirk',
        image: require(`${__dirname}/../assets/faces/Smirk.png`),
    },
    {
        name: 'Embarrassed',
        image: require(`${__dirname}/../assets/faces/Embarrassed.png`),
    },
    {
        name: 'Laugh',
        image: require(`${__dirname}/../assets/faces/Laugh.png`),
    },
    {
        name: 'Suspecting',
        image: require(`${__dirname}/../assets/faces/Suspecting.png`),
    },
    {
        name: 'Angry',
        image: require(`${__dirname}/../assets/faces/Angry.png`),
    },
    {
        name: 'Crying',
        image: require(`${__dirname}/../assets/faces/Crying.png`),
    },
    {
        name: 'Mischievous',
        image: require(`${__dirname}/../assets/faces/Mischievous.png`),
    },
    {
        name: 'Kissing',
        image: require(`${__dirname}/../assets/faces/Kissing.png`),
    },
    {
        name: 'Hearts',
        image: require(`${__dirname}/../assets/faces/Hearts.png`),
    },
];

const loadedHands: LoadedAttribute[] = [

    {
        name: 'Banana',
        image: require(`${__dirname}/../assets/hands/Banana.png`),
    },
    {
        name: 'Bear',
        image: require(`${__dirname}/../assets/hands/Bear.png`),
    },
    {
        name: 'Beer',
        image: require(`${__dirname}/../assets/hands/Beer.png`),
    },
    {
        name: 'Boxing Glove',
        image: require(`${__dirname}/../assets/hands/Boxing Glove.png`),
    },
    {
        name: 'Coffee',
        image: require(`${__dirname}/../assets/hands/Coffee.png`),
    },
    {
        name: 'Cookie',
        image: require(`${__dirname}/../assets/hands/Cookie.png`),
    },
    {
        name: 'Emerald',
        image: require(`${__dirname}/../assets/hands/Emerald.png`),
    },
    {
        name: 'Foam Finger',
        image: require(`${__dirname}/../assets/hands/Foam Finger.png`),
    },
    {
        name: 'Ice Cream Cone',
        image: require(`${__dirname}/../assets/hands/Ice Cream Cone.png`),
    },
    {
        name: 'Joint',
        image: require(`${__dirname}/../assets/hands/Joint.png`),
    },
    {
        name: 'Mushroom',
        image: require(`${__dirname}/../assets/hands/Mushroom.png`),
    },
    {
        name: 'Potato',
        image: require(`${__dirname}/../assets/hands/Potato.png`),
    },
    {
        name: 'Quartz',
        image: require(`${__dirname}/../assets/hands/Quartz.png`),
    },
    {
        name: 'Rose',
        image: require(`${__dirname}/../assets/hands/Rose.png`),
    },
    {
        name: 'Ruby',
        image: require(`${__dirname}/../assets/hands/Ruby.png`),
    },
    {
        name: 'Sapphire',
        image: require(`${__dirname}/../assets/hands/Sapphire.png`),
    },
    {
        name: 'Topaz',
        image: require(`${__dirname}/../assets/hands/Topaz.png`),
    },
    {
        name: 'Wand',
        image: require(`${__dirname}/../assets/hands/Wand.png`),
    },
    {
        name: 'Watergun',
        image: require(`${__dirname}/../assets/hands/Watergun.png`),
    },
    {
        name: 'Watermelon Slice',
        image: require(`${__dirname}/../assets/hands/Watermelon Slice.png`),
    },
];

const loadedFeatures: LoadedAttribute[] = [
    {
        name: 'Alien Family',
        image: require(`${__dirname}/../assets/features/Alien Family.png`),
    },
    {
        name: 'Alien',
        image: require(`${__dirname}/../assets/features/Alien.png`),
    },
    {
        name: 'Blue Accretion Disk',
        image: require(`${__dirname}/../assets/features/Blue Accretion Disk.png`),
    },
    {
        name: 'Blue Dyson Ring',
        image: require(`${__dirname}/../assets/features/Blue Dyson Ring.png`),
    },
    {
        name: 'Blue Dyson Ring2',
        image: require(`${__dirname}/../assets/features/Blue Dyson Ring2.png`),
    },
    {
        name: 'Blue Quasar',
        image: require(`${__dirname}/../assets/features/Blue Quasar.png`),
    },
    {
        name: 'Blue Solar Flares',
        image: require(`${__dirname}/../assets/features/Blue Solar Flares.png`),
    },
    {
        name: 'Brown Dyson Ring',
        image: require(`${__dirname}/../assets/features/Brown Dyson Ring.png`),
    },
    {
        name: 'Brown Dyson Ring2',
        image: require(`${__dirname}/../assets/features/Brown Dyson Ring2.png`),
    },
    {
        name: 'Brown SolarFlares',
        image: require(`${__dirname}/../assets/features/Brown SolarFlares.png`),
    },
    {
        name: 'Double Rocky Ring',
        image: require(`${__dirname}/../assets/features/Double Ring.png`),
    },
    {
        name: 'Dust Ring',
        image: require(`${__dirname}/../assets/features/DustRing.png`),
    },
    {
        name: 'Great Pyramid',
        image: require(`${__dirname}/../assets/features/GreatPyramid.png`),
    },
    {
        name: 'Grove',
        image: require(`${__dirname}/../assets/features/Grove.png`),
    },
    {
        name: 'Ice Spikes',
        image: require(`${__dirname}/../assets/features/Ice Spikes.png`),
    },
    {
        name: 'Igloo',
        image: require(`${__dirname}/../assets/features/Igloo.png`),
    },
    {
        name: 'Lava Lamp',
        image: require(`${__dirname}/../assets/features/Lava Lamp.png`),
    },
    {
        name: 'Light Magnetism',
        image: require(`${__dirname}/../assets/features/Light Magnetism.png`),
    },
    {
        name: 'Massive Volcano',
        image: require(`${__dirname}/../assets/features/Massive Volcano.png`),
    },
    {
        name: 'Mecha',
        image: require(`${__dirname}/../assets/features/Mecha.png`),
    },
    {
        name: 'Oasis',
        image: require(`${__dirname}/../assets/features/Oasis.png`),
    },
    {
        name: 'Pestilence',
        image: require(`${__dirname}/../assets/features/Pestilence.png`),
    },
    {
        name: 'Pink Accretion Disk',
        image: require(`${__dirname}/../assets/features/Pink Accretion Disk.png`),
    },
    {
        name: 'Pink Quasar',
        image: require(`${__dirname}/../assets/features/Pink Quasar.png`),
    },
    {
        name: 'Rainbow Accretion Disk',
        image: require(`${__dirname}/../assets/features/Rainbow Accretion Disk.png`),
    },
    {
        name: 'Rainbow Quasar',
        image: require(`${__dirname}/../assets/features/Rainbow Quasar.png`),
    },
    {
        name: 'Red Dyson Ring',
        image: require(`${__dirname}/../assets/features/Red Dyson Ring.png`),
    },
    {
        name: 'Red Dyson Ring2',
        image: require(`${__dirname}/../assets/features/Red Dyson Ring2.png`),
    },
    {
        name: 'Red SolarFlares',
        image: require(`${__dirname}/../assets/features/Red SolarFlares.png`),
    },
    {
        name: 'Rocky Ring',
        image: require(`${__dirname}/../assets/features/RockyRing.png`),
    },
    {
        name: 'Shuttle',
        image: require(`${__dirname}/../assets/features/Shuttle.png`),
    },
    {
        name: 'Strong Magnetism',
        image: require(`${__dirname}/../assets/features/Strong Magnetism.png`),
    },
    {
        name: 'Toxic Atmosphere',
        image: require(`${__dirname}/../assets/features/ToxicAtmosphere.png`),
    },
    {
        name: 'Tree of Life',
        image: require(`${__dirname}/../assets/features/Tree of Life.png`),
    },
    {
        name: 'Triplet Rings',
        image: require(`${__dirname}/../assets/features/Triplet Rings.png`),
    },
    {
        name: 'Tsunami',
        image: require(`${__dirname}/../assets/features/Tsunami.png`),
    },
    {
        name: 'Twin Rings',
        image: require(`${__dirname}/../assets/features/TwinRings.png`),
    },
    {
        name: 'Typhoon',
        image: require(`${__dirname}/../assets/features/Typhoon.png`),
    },
    {
        name: 'Violet Dyson Ring',
        image: require(`${__dirname}/../assets/features/Violet Dyson Ring.png`),
    },
    {
        name: 'Violet Dyson Ring2',
        image: require(`${__dirname}/../assets/features/Violet Dyson Ring2.png`),
    },
    {
        name: 'Violet Solar Flares',
        image: require(`${__dirname}/../assets/features/Violet Solar Flares.png`),
    },
    {
        name: 'White Dyson Ring',
        image: require(`${__dirname}/../assets/features/White Dyson Ring.png`),
    },
    {
        name: 'White Dyson Ring2',
        image: require(`${__dirname}/../assets/features/White Dyson Ring2.png`),
    },
    {
        name: 'White Solar Flares',
        image: require(`${__dirname}/../assets/features/White Solar Flares.png`),
    },
    {
        name: 'X Rings',
        image: require(`${__dirname}/../assets/features/X Rings.png`),
    },
    {
        name: 'Yellow Accretion Disk',
        image: require(`${__dirname}/../assets/features/Yellow Accretion Disk.png`),
    },
    {
        name: 'Yellow Dyson Ring',
        image: require(`${__dirname}/../assets/features/Yellow Dyson Ring.png`),
    },
    {
        name: 'Yellow Dyson Ring2',
        image: require(`${__dirname}/../assets/features/Yellow Dyson Ring2.png`),
    },
    {
        name: 'Yellow Quasar',
        image: require(`${__dirname}/../assets/features/Yellow Quasar.png`),
    },
    {
        name: 'Yellow Solar Flares',
        image: require(`${__dirname}/../assets/features/Yellow Solar Flares.png`),
    },
];

const loadedOrbits: LoadedAttribute[] = [
    {
        name: 'Asteroid',
        image: require(`${__dirname}/../assets/orbits/Asteroid.png`),
    },
    {
        name: 'Astronaut',
        image: require(`${__dirname}/../assets/orbits/Astronaut.png`),
    },
    {
        name: 'Civilization',
        image: require(`${__dirname}/../assets/orbits/Civilization.png`),
    },
    {
        name: 'Comet',
        image: require(`${__dirname}/../assets/orbits/Comet.png`),
    },
    {
        name: 'Cthulu',
        image: require(`${__dirname}/../assets/orbits/Cthulu.png`),
    },
    {
        name: 'DrillBot',
        image: require(`${__dirname}/../assets/orbits/DrillBot.png`),
    },
    {
        name: 'Eye',
        image: require(`${__dirname}/../assets/orbits/Eye.png`),
    },
    {
        name: 'Laika',
        image: require(`${__dirname}/../assets/orbits/Laika.png`),
    },
    {
        name: 'Monke',
        image: require(`${__dirname}/../assets/orbits/Monke.png`),
    },
    {
        name: 'Moon',
        image: require(`${__dirname}/../assets/orbits/Moon.png`),
    },
    {
        name: 'Rocket',
        image: require(`${__dirname}/../assets/orbits/Rocket.png`),
    },
    {
        name: 'Satellite',
        image: require(`${__dirname}/../assets/orbits/Satellite.png`),
    },
    {
        name: 'Shield',
        image: require(`${__dirname}/../assets/orbits/Shield.png`),
    },
    {
        name: 'Starman',
        image: require(`${__dirname}/../assets/orbits/Starman.png`),
    },
    {
        name: 'UFO',
        image: require(`${__dirname}/../assets/orbits/UFO.png`),
    },
];

export const backgrounds: Attribute[] = loadedBackgrounds.map((l) => ({ name: l.name, image: l.image.default }));
export const bodies: Attribute[] = loadedBodies.map((l) => ({ name: l.name, image: l.image.default }));
export const faces: Attribute[] = loadedFaces.map((l) => ({ name: l.name, image: l.image.default }));
export const hands: Attribute[] = loadedHands.map((l) => ({ name: l.name, image: l.image.default }));
export const features: Attribute[] = loadedFeatures.map((l) => ({ name: l.name, image: l.image.default }));
export const orbits: Attribute[] = loadedOrbits.map((l) => ({ name: l.name, image: l.image.default }));
