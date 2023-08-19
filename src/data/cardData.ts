export type CardType = {
    id: number
    title: string
    info: string
    img: string
    content: {
        id: number
        component: 'text' | 'code' | 'image' | 'paragraph'
        text?: string
        code?: string
        image?: string
        paragraph?: string
    }[]
}
export let CardData: CardType[] = [
    {
        id: 1,
        title: "Web Development",
        info: "I can build beautiful and scalable web apps using HTML, CSS and React.js",
        img: "https://lh3.googleusercontent.com/51moDkmVWptBFXRReuACKocS_fsOoYtfT-C78onEUKeRr7ky4l_ZsuZMK2AnE7-MPRbLzcKTAIFmNyyN7ACo0-eygmXaGeR0ItYtRcYNE8-_L8RHqkA=w960",
        content: [
            { id: 1, component: 'text', text: 'Today I want to share my experience with React.' },
            { id: 2, component: 'code', text: 'function helloWorld(){return "Hello World"}' },
            {
                id: 3, component: "paragraph", text: " Though my own family did not make miso at home, it was indispensable to us nonetheless, as it was (and still is) in all Japanese kitchens. Misoshiru, or miso soup, is served almost every day—either with rice and pickled vegetables as a complete (if frugal) meal, or on its own as the standard breakfast. I use miso as a base for all kinds of sauces and dressings, and like many people, I believe it to be essential when braising or grilling fish, especially strong-flavored mackerel. And I wouldn't cook beef without it.     "   }
            
        ]

    },
    {
        id: 2,
        title: "App Development",
        info: "I can build beautiful and scalable mobile apps using Flutter and Dart",
        img: "https://lh3.googleusercontent.com/aiJojq_gpPLqLhU0PZH6Dog-OjIMti_hiclF_6oqxucGuvywn_AEtu2Qrk2f4WxEhRWMjXkz8qXpTCGoj5TZ0DUCEZ5UIXnXTSIu_7ndg2dTNmQbdkCO=w960",
        content: [
            { id: 1, component: 'text', text: 'React is an amazing library for building user interfaces.' },
        ]

    },
    {
        id: 3,
        title: "UI/UX Design",
        info: "I can design beautiful and scalable UI/UX using Figma and Adobe XD",
        img: "https://lh3.googleusercontent.com/mLGakWFjdX3zGBIhCUWqzjlj3gUXOY8hOed_ISzomlpNmjKWUiqCFyNGGAZFneVaK30v4GUpjn7lyIsI2Z7KPvMKrYkumzBr2nwbVe3BQKRkpam3sA=w960",
        content: [
            {
                id: 3
                , component: 'code', text: 'function helloWorld(){return "Hello World"}'
            }
        ]

    },

]
