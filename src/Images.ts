import { Attribute } from './Types';

export interface LoadedAttribute {
    name: string;
    image: {
        default: string;
    }
}

const loadedAdditionalAssets: LoadedAttribute[] = [
    {
        name: 'Mushroom2',
        image: require(`${__dirname}/img/assets/bodies/Mushroom 2.png`),
    },
];

const loadedBackgrounds: LoadedAttribute[] = [
    {
        name: 'Black',
        image: require(`${__dirname}/img/assets/backgrounds/Black.png`),
    },
    {
        name: 'Brown',
        image: require(`${__dirname}/img/assets/backgrounds/Brown.png`),
    },
    {
        name: 'Green',
        image: require(`${__dirname}/img/assets/backgrounds/Green.png`),
    },
    {
        name: 'Purple',
        image: require(`${__dirname}/img/assets/backgrounds/Purple.png`),
    },
    {
        name: 'Teal',
        image: require(`${__dirname}/img/assets/backgrounds/Teal.png`),
    },
    {
        name: 'Wine',
        image: require(`${__dirname}/img/assets/backgrounds/Wine.png`),
    },
    {
        name: 'Space Yellow',
        image: require(`${__dirname}/img/assets/backgrounds/Space Yellow.png`),
    },
    {
        name: 'Space Green',
        image: require(`${__dirname}/img/assets/backgrounds/Space Green.png`),
    },
    {
        name: 'Space Blue',
        image: require(`${__dirname}/img/assets/backgrounds/Space Blue.png`),
    },
    {
        name: 'Space Violet',
        image: require(`${__dirname}/img/assets/backgrounds/Space Violet.png`),
    },
    {
        name: 'Space Red',
        image: require(`${__dirname}/img/assets/backgrounds/Space Red.png`),
    },
    {
        name: 'Nebula',
        image: require(`${__dirname}/img/assets/backgrounds/Nebula.png`),
    },
    {
        name: 'Solana Void',
        image: require(`${__dirname}/img/assets/backgrounds/SolanaVoid.png`),
    },
    {
        name: 'Spiral',
        image: require(`${__dirname}/img/assets/backgrounds/Spiral.png`),
    },
    {
        name: 'Eye',
        image: require(`${__dirname}/img/assets/backgrounds/Eye.png`),
    },
];

const loadedBodies: LoadedAttribute[] = [
    {
        name: 'Barren',
        image: require(`${__dirname}/img/assets/bodies/Barren.png`),
    },
    {
        name: 'Blue Black Hole',
        image: require(`${__dirname}/img/assets/bodies/Black Hole Blue.png`),
    },
    {
        name: 'Pink Black Hole',
        image: require(`${__dirname}/img/assets/bodies/Black Hole Pink.png`),
    },
    {
        name: 'Rainbow Black Hole',
        image: require(`${__dirname}/img/assets/bodies/Black Hole Rainbow.png`),
    },
    {
        name: 'Yellow Black Hole',
        image: require(`${__dirname}/img/assets/bodies/Black Hole Yellow.png`),
    },
    {
        name: 'Desert',
        image: require(`${__dirname}/img/assets/bodies/Desert.png`),
    },
    {
        name: 'Dwarf',
        image: require(`${__dirname}/img/assets/bodies/Dwarf.png`),
    },
    {
        name: 'Forest',
        image: require(`${__dirname}/img/assets/bodies/Forest.png`),
    },
    {
        name: 'Gas Giant',
        image: require(`${__dirname}/img/assets/bodies/GasGiant.png`),
    },
    {
        name: 'Ice',
        image: require(`${__dirname}/img/assets/bodies/Ice.png`),
    },
    {
        name: 'Iron',
        image: require(`${__dirname}/img/assets/bodies/Iron.png`),
    },
    {
        name: 'Lava',
        image: require(`${__dirname}/img/assets/bodies/Lava.png`),
    },
    {
        name: 'Ocean',
        image: require(`${__dirname}/img/assets/bodies/Ocean.png`),
    },
    {
        name: 'Orphan',
        image: require(`${__dirname}/img/assets/bodies/Orphan.png`),
    },
    {
        name: 'Blue Star',
        image: require(`${__dirname}/img/assets/bodies/Star Blue.png`),
    },
    {
        name: 'Brown Star',
        image: require(`${__dirname}/img/assets/bodies/Star Brown.png`),
    },
    {
        name: 'Violet Star',
        image: require(`${__dirname}/img/assets/bodies/Star Violet.png`),
    },
    {
        name: 'White Star',
        image: require(`${__dirname}/img/assets/bodies/Star White.png`),
    },
    {
        name: 'Yellow Star',
        image: require(`${__dirname}/img/assets/bodies/Star Yellow.png`),
    },
    {
        name: 'Red Star',
        image: require(`${__dirname}/img/assets/bodies/StarRed.png`),
    },
    {
        name: 'Terrestrial',
        image: require(`${__dirname}/img/assets/bodies/Terrestrial.png`),
    },
    {
        name: 'Toxic',
        image: require(`${__dirname}/img/assets/bodies/Toxic.png`),
    },
    {
        name: 'Mushroom',
        image: require(`${__dirname}/img/assets/bodies/Mushroom 1.png`),
    },
];

const loadedFaces: LoadedAttribute[] = [
    {
        name: 'Smile',
        image: require(`${__dirname}/img/assets/faces/Smile.png`),
    },
    {
        name: 'Uwu',
        image: require(`${__dirname}/img/assets/faces/uwu.png`),
    },
    {
        name: 'Serious',
        image: require(`${__dirname}/img/assets/faces/Serious.png`),
    },
    {
        name: 'Pouty',
        image: require(`${__dirname}/img/assets/faces/Pouty.png`),
    },
    {
        name: 'Glasses',
        image: require(`${__dirname}/img/assets/faces/Glasses.png`),
    },
    {
        name: 'Surprise',
        image: require(`${__dirname}/img/assets/faces/Surprise.png`),
    },
    {
        name: 'Smirk',
        image: require(`${__dirname}/img/assets/faces/Smirk.png`),
    },
    {
        name: 'Embarrassed',
        image: require(`${__dirname}/img/assets/faces/Embarrassed.png`),
    },
    {
        name: 'Laugh',
        image: require(`${__dirname}/img/assets/faces/Laugh.png`),
    },
    {
        name: 'Suspecting',
        image: require(`${__dirname}/img/assets/faces/Suspecting.png`),
    },
    {
        name: 'Angry',
        image: require(`${__dirname}/img/assets/faces/Angry.png`),
    },
    {
        name: 'Crying',
        image: require(`${__dirname}/img/assets/faces/Crying.png`),
    },
    {
        name: 'Mischievous',
        image: require(`${__dirname}/img/assets/faces/Mischievous.png`),
    },
    {
        name: 'Kissing',
        image: require(`${__dirname}/img/assets/faces/Kissing.png`),
    },
    {
        name: 'Hearts',
        image: require(`${__dirname}/img/assets/faces/Hearts.png`),
    },
];

const loadedHands: LoadedAttribute[] = [

    {
        name: 'Banana',
        image: require(`${__dirname}/img/assets/hands/Banana.png`),
    },
    {
        name: 'Bear',
        image: require(`${__dirname}/img/assets/hands/Bear.png`),
    },
    {
        name: 'Beer',
        image: require(`${__dirname}/img/assets/hands/Beer.png`),
    },
    {
        name: 'Boxing Glove',
        image: require(`${__dirname}/img/assets/hands/Boxing Glove.png`),
    },
    {
        name: 'Coffee',
        image: require(`${__dirname}/img/assets/hands/Coffee.png`),
    },
    {
        name: 'Cookie',
        image: require(`${__dirname}/img/assets/hands/Cookie.png`),
    },
    {
        name: 'Emerald',
        image: require(`${__dirname}/img/assets/hands/Emerald.png`),
    },
    {
        name: 'Foam Finger',
        image: require(`${__dirname}/img/assets/hands/Foam Finger.png`),
    },
    {
        name: 'Ice Cream Cone',
        image: require(`${__dirname}/img/assets/hands/Ice Cream Cone.png`),
    },
    {
        name: 'Joint',
        image: require(`${__dirname}/img/assets/hands/Joint.png`),
    },
    {
        name: 'Mushroom',
        image: require(`${__dirname}/img/assets/hands/Mushroom.png`),
    },
    {
        name: 'Potato',
        image: require(`${__dirname}/img/assets/hands/Potato.png`),
    },
    {
        name: 'Quartz',
        image: require(`${__dirname}/img/assets/hands/Quartz.png`),
    },
    {
        name: 'Rose',
        image: require(`${__dirname}/img/assets/hands/Rose.png`),
    },
    {
        name: 'Ruby',
        image: require(`${__dirname}/img/assets/hands/Ruby.png`),
    },
    {
        name: 'Sapphire',
        image: require(`${__dirname}/img/assets/hands/Sapphire.png`),
    },
    {
        name: 'Topaz',
        image: require(`${__dirname}/img/assets/hands/Topaz.png`),
    },
    {
        name: 'Wand',
        image: require(`${__dirname}/img/assets/hands/Wand.png`),
    },
    {
        name: 'Watergun',
        image: require(`${__dirname}/img/assets/hands/Watergun.png`),
    },
    {
        name: 'Watermelon Slice',
        image: require(`${__dirname}/img/assets/hands/Watermelon Slice.png`),
    },
];

const loadedFeatures: LoadedAttribute[] = [

    {
        name: 'Alien Camp',
        image: require(`${__dirname}/img/assets/features/Alien Camp.png`),
    },
    {
        name: 'Alien Family',
        image: require(`${__dirname}/img/assets/features/Alien Family.png`),
    },
    {
        name: 'Alien.png',
        image: require(`${__dirname}/img/assets/features/Alien.png`),
    },
    {
        name: 'Blue Accretion Disk.png',
        image: require(`${__dirname}/img/assets/features/Blue Accretion Disk.png`),
    },
    {
        name: 'Blue Dyson Ring.png',
        image: require(`${__dirname}/img/assets/features/Blue Dyson Ring.png`),
    },
    {
        name: 'Blue Dyson Ring2.png',
        image: require(`${__dirname}/img/assets/features/Blue Dyson Ring2.png`),
    },
    {
        name: 'Blue Quasar.png',
        image: require(`${__dirname}/img/assets/features/Blue Quasar.png`),
    },
    {
        name: 'Blue Solar Flares.png',
        image: require(`${__dirname}/img/assets/features/Blue Solar Flares.png`),
    },
    {
        name: 'Brown Dyson Ring.png',
        image: require(`${__dirname}/img/assets/features/Brown Dyson Ring.png`),
    },
    {
        name: 'Brown Dyson Ring2.png',
        image: require(`${__dirname}/img/assets/features/Brown Dyson Ring2.png`),
    },
    {
        name: 'Brown SolarFlares.png',
        image: require(`${__dirname}/img/assets/features/Brown SolarFlares.png`),
    },
    {
        name: 'Dense DustRing.png',
        image: require(`${__dirname}/img/assets/features/Dense DustRing.png`),
    },
    {
        name: 'Double Ring.png',
        image: require(`${__dirname}/img/assets/features/Double Ring.png`),
    },
    {
        name: 'DustRing.png',
        image: require(`${__dirname}/img/assets/features/DustRing.png`),
    },
    {
        name: 'Frozen Titan.png',
        image: require(`${__dirname}/img/assets/features/Frozen Titan.png`),
    },
    {
        name: 'Gaia.png',
        image: require(`${__dirname}/img/assets/features/Gaia.png`),
    },
    {
        name: 'Googly Eyes.png',
        image: require(`${__dirname}/img/assets/features/Googly Eyes.png`),
    },
    {
        name: 'GreatPyramid.png',
        image: require(`${__dirname}/img/assets/features/GreatPyramid.png`),
    },
    {
        name: 'Grove.png',
        image: require(`${__dirname}/img/assets/features/Grove.png`),
    },
    {
        name: 'Ice Spikes.png',
        image: require(`${__dirname}/img/assets/features/Ice Spikes.png`),
    },
    {
        name: 'Igloo.png',
        image: require(`${__dirname}/img/assets/features/Igloo.png`),
    },
    {
        name: 'Into the Warp Drive.png',
        image: require(`${__dirname}/img/assets/features/Into the Warp Drive.png`),
    },
    {
        name: 'Iron Cube.png',
        image: require(`${__dirname}/img/assets/features/Iron Cube.png`),
    },
    {
        name: 'Krakatoa.png',
        image: require(`${__dirname}/img/assets/features/Krakatoa.png`),
    },
    {
        name: 'Lava Lamp.png',
        image: require(`${__dirname}/img/assets/features/Lava Lamp.png`),
    },
    {
        name: 'Light Magnetism.png',
        image: require(`${__dirname}/img/assets/features/Light Magnetism.png`),
    },
    {
        name: 'Massive Volcano.png',
        image: require(`${__dirname}/img/assets/features/Massive Volcano.png`),
    },
    {
        name: 'Mecha.png',
        image: require(`${__dirname}/img/assets/features/Mecha.png`),
    },
    {
        name: 'Mushroom Field.png',
        image: require(`${__dirname}/img/assets/features/Mushroom Field.png`),
    },
    {
        name: 'Mushroom Trio.png',
        image: require(`${__dirname}/img/assets/features/Mushroom Trio.png`),
    },
    {
        name: 'Mushroom.png',
        image: require(`${__dirname}/img/assets/features/Mushroom.png`),
    },
    {
        name: 'Oasis.png',
        image: require(`${__dirname}/img/assets/features/Oasis.png`),
    },
    {
        name: 'Pestilence.png',
        image: require(`${__dirname}/img/assets/features/Pestilence.png`),
    },
    {
        name: 'Pink Accretion Disk.png',
        image: require(`${__dirname}/img/assets/features/Pink Accretion Disk.png`),
    },
    {
        name: 'Pink Quasar.png',
        image: require(`${__dirname}/img/assets/features/Pink Quasar.png`),
    },
    {
        name: 'Rainbow Accretion Disk.png',
        image: require(`${__dirname}/img/assets/features/Rainbow Accretion Disk.png`),
    },
    {
        name: 'Rainbow Quasar.png',
        image: require(`${__dirname}/img/assets/features/Rainbow Quasar.png`),
    },
    {
        name: 'Red Dyson Ring.png',
        image: require(`${__dirname}/img/assets/features/Red Dyson Ring.png`),
    },
    {
        name: 'Red Dyson Ring2.png',
        image: require(`${__dirname}/img/assets/features/Red Dyson Ring2.png`),
    },
    {
        name: 'Red SolarFlares.png',
        image: require(`${__dirname}/img/assets/features/Red SolarFlares.png`),
    },
    {
        name: 'Rocks.png',
        image: require(`${__dirname}/img/assets/features/Rocks.png`),
    },
    {
        name: 'RockyRing.png',
        image: require(`${__dirname}/img/assets/features/RockyRing.png`),
    },
    {
        name: 'Sharknado.png',
        image: require(`${__dirname}/img/assets/features/Sharknado.png`),
    },
    {
        name: 'Shuttle.png',
        image: require(`${__dirname}/img/assets/features/Shuttle.png`),
    },
    {
        name: 'SingleRing.png',
        image: require(`${__dirname}/img/assets/features/SingleRing.png`),
    },
    {
        name: 'Strong Magnetism.png',
        image: require(`${__dirname}/img/assets/features/Strong Magnetism.png`),
    },
    {
        name: 'The All Seeing Eye.png',
        image: require(`${__dirname}/img/assets/features/The All Seeing Eye.png`),
    },
    {
        name: 'ToxicAtmosphere.png',
        image: require(`${__dirname}/img/assets/features/ToxicAtmosphere.png`),
    },
    {
        name: 'Tree of Life.png',
        image: require(`${__dirname}/img/assets/features/Tree of Life.png`),
    },
    {
        name: 'Triplet Rings.png',
        image: require(`${__dirname}/img/assets/features/Triplet Rings.png`),
    },
    {
        name: 'Tsunami.png',
        image: require(`${__dirname}/img/assets/features/Tsunami.png`),
    },
    {
        name: 'TwinRings.png',
        image: require(`${__dirname}/img/assets/features/TwinRings.png`),
    },
    {
        name: 'Typhoon.png',
        image: require(`${__dirname}/img/assets/features/Typhoon.png`),
    },
    {
        name: 'Violet Dyson Ring.png',
        image: require(`${__dirname}/img/assets/features/Violet Dyson Ring.png`),
    },
    {
        name: 'Violet Dyson Ring2.png',
        image: require(`${__dirname}/img/assets/features/Violet Dyson Ring2.png`),
    },
    {
        name: 'Violet Solar Flares.png',
        image: require(`${__dirname}/img/assets/features/Violet Solar Flares.png`),
    },
    {
        name: 'White Dyson Ring.png',
        image: require(`${__dirname}/img/assets/features/White Dyson Ring.png`),
    },
    {
        name: 'White Dyson Ring2.png',
        image: require(`${__dirname}/img/assets/features/White Dyson Ring2.png`),
    },
    {
        name: 'White Solar Flares.png',
        image: require(`${__dirname}/img/assets/features/White Solar Flares.png`),
    },
    {
        name: 'X Rings.png',
        image: require(`${__dirname}/img/assets/features/X Rings.png`),
    },
    {
        name: 'Yellow Accretion Disk.png',
        image: require(`${__dirname}/img/assets/features/Yellow Accretion Disk.png`),
    },
    {
        name: 'Yellow Dyson Ring.png',
        image: require(`${__dirname}/img/assets/features/Yellow Dyson Ring.png`),
    },
    {
        name: 'Yellow Dyson Ring2.png',
        image: require(`${__dirname}/img/assets/features/Yellow Dyson Ring2.png`),
    },
    {
        name: 'Yellow Quasar.png',
        image: require(`${__dirname}/img/assets/features/Yellow Quasar.png`),
    },
    {
        name: 'Yellow Solar Flares.png',
        image: require(`${__dirname}/img/assets/features/Yellow Solar Flares.png`),
    },
];

const loadedOrbits: LoadedAttribute[] = [
    {
        name: 'Ape',
        image: require(`${__dirname}/img/assets/orbits/Ape.png`),
    },
    {
        name: 'Broken Shield',
        image: require(`${__dirname}/img/assets/orbits/Broken Shield.png`),
    },
    {
        name: 'Buzz',
        image: require(`${__dirname}/img/assets/orbits/Buzz.png`),
    },
    {
        name: 'C-Type Asteroid',
        image: require(`${__dirname}/img/assets/orbits/C-Type Asteroid.png`),
    },
    {
        name: 'Castle In The Sky',
        image: require(`${__dirname}/img/assets/orbits/Castle In The Sky.png`),
    },
    {
        name: 'Cheese Moon',
        image: require(`${__dirname}/img/assets/orbits/Cheese Moon.png`),
    },
    {
        name: 'Cozy Coupe',
        image: require(`${__dirname}/img/assets/orbits/Cozy Coupe.png`),
    },
    {
        name: 'Cthulu',
        image: require(`${__dirname}/img/assets/orbits/Cthulu.png`),
    },
    {
        name: 'Cubebot',
        image: require(`${__dirname}/img/assets/orbits/Cubebot.png`),
    },
    {
        name: 'Drillbot',
        image: require(`${__dirname}/img/assets/orbits/Drillbot.png`),
    },
    {
        name: 'Extraterrestrial',
        image: require(`${__dirname}/img/assets/orbits/Extraterrestrial.png`),
    },
    {
        name: 'Eye',
        image: require(`${__dirname}/img/assets/orbits/Eye.png`),
    },
    {
        name: 'Falcon 1',
        image: require(`${__dirname}/img/assets/orbits/Falcon 1.png`),
    },
    {
        name: 'Floating Kingdom',
        image: require(`${__dirname}/img/assets/orbits/Floating Kingdom.png`),
    },
    {
        name: 'Infected Eye',
        image: require(`${__dirname}/img/assets/orbits/Infected Eye.png`),
    },
    {
        name: 'Invader',
        image: require(`${__dirname}/img/assets/orbits/Invader.png`),
    },
    {
        name: 'Kthanid',
        image: require(`${__dirname}/img/assets/orbits/Kthanid.png`),
    },
    {
        name: 'Laika',
        image: require(`${__dirname}/img/assets/orbits/Laika.png`),
    },
    {
        name: 'Luna',
        image: require(`${__dirname}/img/assets/orbits/Luna.png`),
    },
    {
        name: 'Meteor Shower',
        image: require(`${__dirname}/img/assets/orbits/Meteor Shower.png`),
    },
    {
        name: 'Meteor',
        image: require(`${__dirname}/img/assets/orbits/Meteor.png`),
    },
    {
        name: 'Monke',
        image: require(`${__dirname}/img/assets/orbits/Monke.png`),
    },
    {
        name: 'Moon',
        image: require(`${__dirname}/img/assets/orbits/Moon.png`),
    },
    {
        name: 'Neil',
        image: require(`${__dirname}/img/assets/orbits/Neil.png`),
    },
    {
        name: 'S-Type Asteroid',
        image: require(`${__dirname}/img/assets/orbits/S-Type Asteroid.png`),
    },
    {
        name: 'Satellite',
        image: require(`${__dirname}/img/assets/orbits/Satellite.png`),
    },
    {
        name: 'Saturn V',
        image: require(`${__dirname}/img/assets/orbits/Saturn V.png`),
    },
    {
        name: 'Shield',
        image: require(`${__dirname}/img/assets/orbits/Shield.png`),
    },
    {
        name: 'Starman',
        image: require(`${__dirname}/img/assets/orbits/Starman.png`),
    },
    {
        name: 'Voyager',
        image: require(`${__dirname}/img/assets/orbits/Voyager.png`),
    },
    {
        name: 'Leaf',
        image: require(`${__dirname}/img/assets/orbits/Leaf.png`),
    },
    {
        name: 'Cloud',
        image: require(`${__dirname}/img/assets/orbits/Cloud.png`),
    },
]

const loadedOrbits2: LoadedAttribute[] = [
    {
        name: 'Ape',
        image: require(`${__dirname}/img/assets/orbits2/Ape.png`),
    },
    {
        name: 'Broken Shield',
        image: require(`${__dirname}/img/assets/orbits2/Broken Shield.png`),
    },
    {
        name: 'Buzz',
        image: require(`${__dirname}/img/assets/orbits2/Buzz.png`),
    },
    {
        name: 'C-Type Asteroid',
        image: require(`${__dirname}/img/assets/orbits2/C-Type Asteroid.png`),
    },
    {
        name: 'Castle In The Sky',
        image: require(`${__dirname}/img/assets/orbits2/Castle In The Sky.png`),
    },
    {
        name: 'Cheese Moon',
        image: require(`${__dirname}/img/assets/orbits2/Cheese Moon.png`),
    },
    {
        name: 'Cozy Coupe',
        image: require(`${__dirname}/img/assets/orbits2/Cozy Coupe.png`),
    },
    {
        name: 'Cthulu',
        image: require(`${__dirname}/img/assets/orbits2/Cthulu.png`),
    },
    {
        name: 'Cubebot',
        image: require(`${__dirname}/img/assets/orbits2/Cubebot.png`),
    },
    {
        name: 'Drillbot',
        image: require(`${__dirname}/img/assets/orbits2/Drillbot.png`),
    },
    {
        name: 'Extraterrestrial',
        image: require(`${__dirname}/img/assets/orbits2/Extraterrestrial.png`),
    },
    {
        name: 'Eye',
        image: require(`${__dirname}/img/assets/orbits2/Eye.png`),
    },
    {
        name: 'Falcon 1',
        image: require(`${__dirname}/img/assets/orbits2/Falcon 1.png`),
    },
    {
        name: 'Floating Kingdom',
        image: require(`${__dirname}/img/assets/orbits2/Floating Kingdom.png`),
    },
    {
        name: 'Infected Eye',
        image: require(`${__dirname}/img/assets/orbits2/Infected Eye.png`),
    },
    {
        name: 'Invader',
        image: require(`${__dirname}/img/assets/orbits2/Invader.png`),
    },
    {
        name: 'Kthanid',
        image: require(`${__dirname}/img/assets/orbits2/Kthanid.png`),
    },
    {
        name: 'Laika',
        image: require(`${__dirname}/img/assets/orbits2/Laika.png`),
    },
    {
        name: 'Luna',
        image: require(`${__dirname}/img/assets/orbits2/Luna.png`),
    },
    {
        name: 'Meteor Shower',
        image: require(`${__dirname}/img/assets/orbits2/Meteor Shower.png`),
    },
    {
        name: 'Meteor',
        image: require(`${__dirname}/img/assets/orbits2/Meteor.png`),
    },
    {
        name: 'Monke',
        image: require(`${__dirname}/img/assets/orbits2/Monke.png`),
    },
    {
        name: 'Moon',
        image: require(`${__dirname}/img/assets/orbits2/Moon.png`),
    },
    {
        name: 'Neil',
        image: require(`${__dirname}/img/assets/orbits2/Neil.png`),
    },
    {
        name: 'S-Type Asteroid',
        image: require(`${__dirname}/img/assets/orbits2/S-Type Asteroid.png`),
    },
    {
        name: 'Satellite',
        image: require(`${__dirname}/img/assets/orbits2/Satellite.png`),
    },
    {
        name: 'Saturn V',
        image: require(`${__dirname}/img/assets/orbits2/Saturn V.png`),
    },
    {
        name: 'Shield',
        image: require(`${__dirname}/img/assets/orbits2/Shield.png`),
    },
    {
        name: 'Starman',
        image: require(`${__dirname}/img/assets/orbits2/Starman.png`),
    },
    {
        name: 'Voyager',
        image: require(`${__dirname}/img/assets/orbits2/Voyager.png`),
    },
    {
        name: 'Leaf',
        image: require(`${__dirname}/img/assets/orbits2/Leaf.png`),
    },
    {
        name: 'Cloud',
        image: require(`${__dirname}/img/assets/orbits2/Cloud.png`),
    },
]

export const backgrounds: Attribute[] = loadedBackgrounds.map((l) => ({ name: l.name, image: l.image.default }));
export const bodies: Attribute[] = loadedBodies.map((l) => ({ name: l.name, image: l.image.default }));
export const faces: Attribute[] = loadedFaces.map((l) => ({ name: l.name, image: l.image.default }));
export const hands: Attribute[] = loadedHands.map((l) => ({ name: l.name, image: l.image.default }));
export const features: Attribute[] = loadedFeatures.map((l) => ({ name: l.name, image: l.image.default }));
export const orbits: Attribute[] = loadedOrbits.map((l) => ({ name: l.name, image: l.image.default }));
export const orbits2: Attribute[] = loadedOrbits2.map((l) => ({ name: l.name, image: l.image.default }));
export const additionalAssets: Attribute[] = loadedAdditionalAssets.map((x) => ({ name: x.name, image: x.image.default }));
