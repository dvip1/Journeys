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
        isDropCap?: boolean
    }[]
}
export let CardData: CardType[] = [
    {
        id: 1,
        title: "Web Development",
        info: "I can build beautiful and scalable web apps using HTML, CSS and React.js",
        img: "https://lh3.googleusercontent.com/51moDkmVWptBFXRReuACKocS_fsOoYtfT-C78onEUKeRr7ky4l_ZsuZMK2AnE7-MPRbLzcKTAIFmNyyN7ACo0-eygmXaGeR0ItYtRcYNE8-_L8RHqkA=w960",
        content: [
            {
                id: 1,
                component: "paragraph",
                text:
                  "Though my own family did not make miso at home, it was indispensable to us nonetheless, as it was (and still is) in all Japanese kitchens. Misoshiru, or miso soup, is served almost every day—either with rice and pickled vegetables as a complete (if frugal) meal, or on its own as the standard breakfast. I use miso as a base for all kinds of sauces and dressings, and like many people, I believe it to be essential when braising or grilling fish, especially strong-flavored mackerel. And I wouldn't cook beef without it.",
                isDropCap: true,
              },
              {
                id: 2,
                component: "paragraph",
                text:
                  "I decided that I needed to try on The Bra. Full disclosure: there is no undergarment in the world that would gird my loins enough to prepare me for combat. I shy away from quarrels; I am afraid of bear spray. Clothes and gear, however, are another story, and, surprisingly, we owe many of the things that we wear and use every day to the military: beanies, cargo pants, T-shirts, trenchcoats, and aviator glasses—and can we agree that sanitary napkins count as gear? Duct tape, Cheetos, and Silly Putty all have military origins. And, of course, the bra.",
                isDropCap: false,
              },



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
