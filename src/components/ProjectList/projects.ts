import img from '../../images/bruce-mars.jpg'

const emptyProject = {
    empty: true,
    name: "",
    imageSrc: "",
    title: "",
    description: "",
    demo: "",
    github: "",
};

export default [
    {
        name: "gameConcentration",
        imageSrc: img,
        title: "Game of Concentration",
        description: "Project created as an interview challenge, to review functionality. Memory game for 2 players.",
        demo: "https://concentration-memory-game.netlify.app",
        github: "https://github.com/svarggas/game-concentration",
    },
    {
        name: "recipeApp",
        imageSrc: img,
        title: "Recipe App",
        description: "React app where you can find recipies based on your search. Powered by Edaman API.",
        demo: "https://edaman-recipe-app.netlify.app",
        github: "https://github.com/svarggas/recipe-app",
    },
    {
        name: "personalGalery",
        imageSrc: img,
        title: "Personal Galery",
        description: "Upload your favorite pictures and display them as a grid. Powered by IMGUR API.",
        demo: "https://imgur-galery.netlify.app",
        github: "https://github.com/svarggas/Vue-galery",
    },
    {
        name: "youtubeVideoSearch",
        imageSrc: img,
        title: "Youtube Video Search",
        description: "Example of a video search application. Powered by Youtube API.",
        demo: "https://vue-youtube-clone.netlify.app",
        github: "https://github.com/svarggas/Youtube-API",
    },
    {
        name: "gaia",
        imageSrc: img,
        title: "Canada's Best Atracttions",
        description: "Cool paralax landing page highliting some of Canada's best attactions.",
        demo: "https://gaia-canada.netlify.app",
        github: "https://github.com/svarggas/Gaia-FrontEnd",
    },
    emptyProject
];