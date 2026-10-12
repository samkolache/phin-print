import type { ImageMetadata } from 'astro';

import madameMai from '../assets/madame-mai.jpg';
import lavi from '../assets/lavi.jpeg';
import hein from '../assets/hein.jpg';
import tomNToms from '../assets/tomntoms.jpeg';
import dam from '../assets/dam.jpeg';

export type ReviewScores = {
    aroma: number;
    body: number;
    sweetness: number;
    balance: number;
}

export type ReviewCard = {
    id : number;
    rating: number;
    drink: string;
    location: string;
    desc: string;
    date: string;
    restName: string;
    cover?: ImageMetadata;
    coverAlt?: string;
    ordered: string;
    price: string;
    scores: ReviewScores;
    notes: string[];
    body: string[];
    verdict: string;
    wouldReturn: boolean;
}

export const reviewCards: ReviewCard[] = [
    {
        id: 1,
        rating: 9.0,
        drink: "Vietnamese Condensed Milk Coffee",
        location: "Katy, Texas",
        desc: "I love the presentation of this coffee, it hurts me to stir it up. The owner is very sweet and I always have a great conversation when I visit.",
        date: "2026-07-15",
        restName: "Madame Mai",
        cover: madameMai,
        coverAlt: "Hand holding a layered iced Vietnamese coffee in a Madame Mai cup over a green lawn",
        ordered: "Cà phê sữa đá",
        price: "$6.50",
        scores: { aroma: 9.0, body: 9.0, sweetness: 9.5, balance: 8.5 },
        notes: ["Condensed milk", "Dark chocolate", "Caramel"],
        body: [
            "I love the presentation of this coffee, it hurts me to stir it up. The owner is very sweet and I always have a great conversation when I visit.",
            "This coffee could be a 10/10 if it was a bit stronger. It has a good balance but I feel the sweetness takes over at times. I also don't feel too much of a focus boost after drinking this coffee. Still one of my favorite coffees out there!",
        ],
        verdict: "My current go-to when I am back in my hometown",
        wouldReturn: true,
    },
    {
        id: 2,
        rating: 8.0,
        drink: "Salted Cookie Butter Vietnamese Coffee",
        location: "Austin, Texas",
        desc: "After moving to Austin this was one of the first places I tried a viet coffee. I arrived and found out it was a food truck in downtown! I decided to try their 'in rotation' drinks, leading me to order the Cookie Butter",
        date: "2026-09-11",
        restName: "Lavi",
        cover: lavi,
        coverAlt: "Hand holding an iced coffee in a Lavi cup against a blue sky above Austin rooftops",
        ordered: "Salted cookie butter, iced",
        price: "$8.00",
        scores: { aroma: 9.0, body: 7.5, sweetness: 9.0, balance: 6.0 },
        notes: ["Cookie butter", "Sea salt", "Toffee"],
        body: [
            "After moving to Austin this was one of the first places I tried a viet coffee. I arrived and found out it was a food truck in downtown! I decided to try their 'in rotation' drinks, leading me to order the Cookie Butter",
            "I loved the coffee, but not as a viet coffee. I thought the cookie butter really overpowered the coffee taste. The balance just wasn't there for me.",
        ],
        verdict: "Don't mess with the classics",
        wouldReturn: true,
    },
    {
        id: 3,
        rating: 8.8,
        drink: "Traditional Vietnamese Coffee",
        location: "New York, New York",
        desc: "I was in New York for a wedding and decided to find the highest rated shop for coffee. Hien came up and the inside was stunning. You are able to choose your sweetness and caffeine as well! I decided to let the barista decide and surprise me",
        date: "2026-08-26",
        restName: "Hien From Vietnam",
        cover: hein,
        coverAlt: "Hand holding an iced Vietnamese coffee in front of the Hien From Vietnam storefront",
        ordered: "Cà phê sữa nóng",
        price: "$8.70",
        scores: { aroma: 9.5, body: 9.0, sweetness: 6.0, balance: 6.5 },
        notes: ["Cocoa nib", "Classic", "Roasted nuts"],
        body: [
            "I was in New York for a wedding and decided to find the highest rated shop for coffee. Hien came up and the inside was stunning. You are able to choose your sweetness and caffeine as well! I decided to let the barista decide and surprise me",
            "I thought the coffee was way too strong, but that's how traditional ones are. It did give me a stomach ache after as well as my sister. This one's on me though, I should have picked the levels. Awesome experience though in the heart of Chinatown!",
        ],
        verdict: "Pick your levels wisely!",
        wouldReturn: true,
    },
    {
        id: 4,
        rating: 8.5,
        drink: "Vietnamese Coffee",
        location: "Katy, Texas",
        desc: "This is my go-to coffee when I need to lock in. Every time I go to this coffee shop, order the viet, I get so much work done. The taste isn't the best, but the caffeine content is perfect.",
        date: "2026-07-17",
        restName: "Tom n Toms",
        cover: tomNToms,
        coverAlt: "Hand holding an iced Vietnamese coffee in a Tom N Toms cup in a sunny backyard",
        ordered: "Vietnamese coffee, iced",
        price: "$6.50",
        scores: { aroma: 8.5, body: 9.0, sweetness: 8.0, balance: 8.5 },
        notes: ["Dark roast", "Caramel", "Condensed milk"],
        body: [
            "This is my go-to coffee when I need to lock in. Every time I go to this coffee shop, order the viet, I get so much work done. The taste isn't the best, but the caffeine content is perfect.",
            "The coffee doesn't taste like the others, it tastes a bit more milky. The coffee flavor is definitely missing and the sweetness is kind of there. It was my first viet coffee and really helps me study. Which is why I love it and will always return here.",
        ],
        verdict: "To lock in? Yes? For the taste? Almost",
        wouldReturn: true,
    },
    {
        id: 5,
        rating: 7.5,
        drink: "Classic Vietnamese Coffee",
        location: "Austin, Texas",
        desc: "I remember having this coffee for the first time after visiting Austin for Halloween. I was tired from the night before and was excited to try a new spot. The taste wasn't anything special, and it didn't wake me up",
        date: "2026-09-17",
        restName: "Dam Coffee Bar",
        cover: dam,
        coverAlt: "Hand holding an iced coffee in a Dam Coffee Bar cup under a cloudy sky",
        ordered: "Classic Vietnamese Coffee",
        price: "$6.25",
        scores: { aroma: 8.0, body: 8.0, sweetness: 7.0, balance: 6.0 },
        notes: ["Milk chocolate", "Brown sugar", "Hazelnut"],
        body: [
            "I remember having this coffee for the first time after visiting Austin for Halloween. I was tired from the night before and was excited to try a new spot. The taste wasn't anything special, and it didn't wake me up",
            "The ambience inside is nice, very good study spot with a lot of students. I've heard their matcha is good, but the coffee wasn't the best.",
        ],
        verdict: "Good vibes, decent coffee",
        wouldReturn: true,
    },
]
