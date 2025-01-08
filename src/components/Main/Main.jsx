import Filebar from "../Sidebar/Filebar";
import Sidebar from "../Sidebar/Sidebar";

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
      title: "Test 1",
      link: "#",
      description: "Test Proj :)"
    },
    {
      title: "Test 2",
      link: "#",
      description: "yet another Test Proj :)"
    }
  ];
  const articles = [
    {
      title: "How to get a job after years of courses?"
    },
    {
      title: "What the hell is going on today, after AI???"
    }
  ];
  const techs = ["js", "react", "node", "next", "tailwind", "mongo", "graphql", "socket"];
  const carouselInner = document.querySelector("#carousel div");
  const carouselContent = Array.from(document.querySelectorAll("#carousel img"));
  carouselContent.forEach(item => {
    const duplicatedItems = item.cloneNode(true);
    carouselInner.appendChild(duplicatedItems);
    carouselInner.style.animation = "move 12s linear infinite";
  });
  return (
    <main className="h-[calc(100%-2.5rem)] w-full bg-tertiary flex font-JetbrainsMono text-[#ccc]">
      <Sidebar />
      <Filebar />
      <div className="size-full grid grid-rows-2 grid-cols-2">
        <div className="p-10 col-span-2 flex flex-col">
          <h1 className="text-6xl">
            I am Amirtaha Afkhami Goli.
          </h1>
          <p className="text-3xl mt-5">
            Full Stack Web Developer. Working with JS ❤️
          </p>
          <p className="text-2xl mt-4 flex items-center"><span className="size-3 bg-secondary inline-block rounded-full mr-4"></span>Web Designer, Team Manager, Programming Teacher</p>
          <div id="carousel" className="self-center flex gap-10 items-center mt-4">
            <div>
              {techs.map((tech) => (
                <img className="h-16" key={tech} src={`./src/assets/img/${tech}.png`} alt={tech} />
              ))}
            </div>
          </div>
        </div>
        <div className="pl-20">
          <h2 className="text-3xl mb-6 -ml-5">Currently Working On:</h2>
          <ul className="font-FiraCode font-semibold">
            {data.map(createItem)}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl mb-6 -ml-5">Read More, Written by Me:</h2>
          <ul className="font-FiraCode font-semibold">
            {articles.map(createItem)}
          </ul>
        </div>
      </div>
    </main>
  )
}