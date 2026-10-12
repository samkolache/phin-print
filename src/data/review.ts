export type ReviewCard = {
    id : number;
    rating: number;
    drink: string;
    location: string;
    desc: string;
    date: string;
    restName: string;
}

export const reviewCards: ReviewCard[] = [
    {
        id: 1,
        rating: 9.0,
        drink: "Vietnamese Condensed Milk Coffee",
        location: "Katy, Texas",
        desc: "An amazing viet coffee with a beautiful presentation. Each sip was sweet, with the coffee flavor boldly hitting in the aftertaste.",
        date: "2026-07-15",
        restName: "Madame Mai"
    },
    {
        id: 2,
        rating: 8.0,
        drink: "Salted Cookie Butter Vietnamese Coffee",
        location: "Austin, Texas",
        desc: "An unexpected twist on a familiar coffee. Does it work though?",
        date: "2026-09-11",
        restName: "Lavi"
    },
    {
        id: 3,
        rating: 8.8,
        drink: "Traditional Vietnamese Coffee",
        location: "New York, New York",
        desc: "One of the best tasting traditional coffees. A bit too strong for me, not enough sweet",
        date: "2026-08-26",
        restName: "Hien From Vietnam"
    },
    {
        id: 4,
        rating: 8.5,
        drink: "Vietnamese Coffee",
        location: "Katy, Texas",
        desc: "The spot that got me into viet coffees. A consistent, bold flavor",
        date: "2026-07-17",
        restName: "Tom n Toms"
    },
    {
        id: 5,
        rating: 8.4,
        drink: "Classic Vietnamese Coffee",
        location: "Austin, Texas",
        desc: "Nice interior, nice coffee, an overall solid pick",
        date: "2026-09-17",
        restName: "Dam Coffee Bar"
    },
]
