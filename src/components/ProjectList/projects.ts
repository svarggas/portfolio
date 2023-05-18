import gameConcentration from '../../images/projects/gameConcentration.png';
import recipeApp from '../../images/projects/recipeApp.png';
import personalGalery from '../../images/projects/personalGalery.png';
import youtubeClone from '../../images/projects/youtubeClone.png';
import gaia from '../../images/projects/gaia.png';
import blog from '../../images/projects/blog.png';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        name: "CMS Blog",
        imageSrc: blog,
        title: "CMS Blog",
        description: "Blog managed by Contentful CMS and developed with NextJS as a starter project.",
        demo: "https://cms-blog-next.netlify.app/",
        github: "https://github.com/svarggas/cms-blog",
    },
    {
        name: "gameConcentration",
        imageSrc: gameConcentration,
        title: "Game of Concentration",
        description: "Project created as an interview challenge, to review functionality. Memory game for 2 players.",
        demo: "https://concentration-memory-game.netlify.app",
        github: "https://github.com/svarggas/game-concentration",
    },
    {
        name: "recipeApp",
        imageSrc: recipeApp,
        title: "Recipe App",
        description: "React app where you can find recipies based on your search. Powered by Edaman API.",
        demo: "https://edaman-recipe-app.netlify.app",
        github: "https://github.com/svarggas/recipe-app",
    },
    {
        name: "personalGalery",
        imageSrc: personalGalery,
        title: "Personal Galery",
        description: "Upload your favorite pictures and display them as a grid. Powered by IMGUR API.",
        demo: "https://imgur-galery.netlify.app",
        github: "https://github.com/svarggas/Vue-galery",
    },
    {
        name: "youtubeVideoSearch",
        imageSrc: youtubeClone,
        title: "Youtube Video Search",
        description: "Example of a video search application. Powered by Youtube API.",
        demo: "https://vue-youtube-clone.netlify.app",
        github: "https://github.com/svarggas/Youtube-API",
    },
    {
        name: "gaia",
        imageSrc: gaia,
        title: "Canada's Best Atracttions",
        description: "Cool paralax landing page highliting some of Canada's best attactions.",
        demo: "https://gaia-canada.netlify.app",
        github: "https://github.com/svarggas/Gaia-FrontEnd",
    }
];