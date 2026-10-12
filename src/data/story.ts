import type { ImageMetadata } from 'astro';

import featStory from '../assets/feat-story.jpg';

export type Story = {
    title: string;
    topic: string;
    readTime: string;
    snippet: string;
    cover: ImageMetadata;
    coverAlt: string;
    body: string[];
}

export const featuredStory: Story = {
    title: "From mission gardens to the world’s No. 2: a short history of Vietnamese coffee",
    topic: "History",
    readTime: "2 min",
    snippet: "How a few French-planted arabica trees in 1857 became a robusta empire, a phin on every table, and a café culture built on condensed milk and patience. The story runs through colonial plantations in the Central Highlands, decades of war and rationing, and the Đổi Mới reforms of 1986 that turned a struggling crop into the country’s great export.",
    cover: featStory,
    coverAlt: "People working with coffee beans",
    body: [
        "Viet coffee all started with a random experiment: French colonials tucked a few arabica plants into the soil of northern Vietnam. That little experiment ended up putting a whole country on the world's coffee map! The plants struggled with the heat though, so farmers turned to Robusta, a tougher, bolder bean.",
        "Then war hit, and the story went quiet. The industry stayed small and local to Vietnam, and farms were eventually placed under government control, which slowed things down even more. It wasn't until 1986 that reforms opened up the economy and let people farm for themselves. They flooded into the Central Highlands, where the rich red volcanic soil was perfect for Robusta.",
        "In about 15 years, Vietnam went from coffee bystander to the world's second-largest exporter, right behind Brazil. A lot of the instant coffee you drink probably came from Vietnam.",
        "So how did condensed milk become such an important ingredient? Fresh milk was hard to find in the French colonial days, so sweetened condensed milk got swapped in. The coffee drips slowly through a phin right at your table, onto just the right amount of condensed milk. Then in 1940s Hanoi, a bartender named Nguyễn Văn Giảng ran short on milk and whisked egg yolks with sugar instead. That's how we got cà phê trứng, a silky, custardy egg coffee (something I still need to try).",
        "Viet coffee is something I truly enjoy. Whether I'm out with friends looking for a nice spot to sip and relax, or I have a lot of work to do and need to lock in, it always has me coming back for more!",
    ],
}
