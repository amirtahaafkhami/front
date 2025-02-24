import Filebar from "../Sidebar/Filebar";
import Sidebar from "../Sidebar/Sidebar";
import Carousel from "./Carousel";

function createItem(item) {
  return (
    <li className="flex items-center mb-3 last-of-type:mb-0">
      <div className="size-1.5 bg-slate-50 rounded-full mr-2"></div>
      <p className="me-8 text-xl">{item.title}</p>
      <a href={item.link} target="_blank" className="text-[#61A9D5]">{item.description}</a>
    </li>
  )
}
export default function Main() {
  const data = [
    {
      title: "Designers Forum",
      link: "#",
      description: "A platform for designers"
    },
    {
      title: "Web dev 1",
      link: "#",
      description: "Main projects of my course"
    },
    {
      title: "Which Course?",
      link: "#",
      description: "My reviews on different courses",
    }
  ];
  const articles = [
    {
      title: "How to get a job after years of courses?"
    },
    {
      title: "What the hell is going on today, after AI???"
    },
    {
      title: "How to scape the COURSE HELL?"
    }
  ];
  const techs = ["js", "react", "node", "next", "tailwind", "mongo", "graphql", "socket"];
  return (
    <main className="w-full bg-tertiary flex font-JetbrainsMono text-[#ccc]">
      {/* <Sidebar /> */}
      {/* <Filebar /> */}
      <div className="size-full grid grid-rows-2 grid-cols-2">
        <div className="p-10 col-span-2 flex flex-col">
          <h1 className="text-6xl">
            I am Amirtaha Afkhami Goli.
          </h1>
          <p className="text-3xl mt-5">
            Full Stack Web Developer. Working with JS ❤️
          </p>
          <p className="text-2xl mt-4 flex items-center"><span className="size-3 bg-secondary inline-block rounded-full mr-4"></span>Web Designer, Team Manager, Programming Teacher
            {/* {<!-- <a href="#" className="text-[#61A9D5] ml-6 cursor-pointer">Who am I?</a> -->} */}
          </p>
          <Carousel techs={techs} />
        </div>
        <div className="pl-20">
          <h2 className="text-3xl mb-6 -ml-5">Currently Working On:</h2>
          <ul className="font-IosevkaSlab font-semibold">
            {data.map(createItem)}
            <a id="button">See more projects...<span className="inline-block relative left-0"><svg className="size-5 inline-block ml-3 transition-all"><use xlinkHref="/src/assets/img/sprite.svg#arrow-right"></use></svg></span></a>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl mb-6 -ml-5">Read More, Written by Me:</h2>
          <ul className="font-IosevkaSlab font-semibold">
            {articles.map(createItem)}
            <a id="button">Read more articles...<span className="inline-block relative left-0"><svg className="size-5 inline-block ml-3 transition-all"><use xlinkHref="/src/assets/img/sprite.svg#arrow-right"></use></svg></span></a>
          </ul>
        </div>
      </div>
    </main>
  )
}