function createFile(info) {
  return (
    <div key={info.key} className="flex text-secondary hover:text-[#ccc] w-full cursor-pointer p-2 hover:bg-[#2C313A] transition-all file-element">
      <svg className="size-4">
        <use xlinkHref={`/src/assets/img/sprite.svg#${info.extention}`}></use>
      </svg>
      <p>{info.name + '.' + info.extention}</p>
    </div>
  )
}

export default function Filebar(props) {
  const data = [
    {
      key: "Main",
      name: "index",
      extention: "html"
    },
    {
      key: "AboutMe",
      name: "about-me",
      extention: "css"
    },
    {
      name: "skills",
      extention: "js"
    },
    {
      name: "services",
      extention: "jsx"
    }
  ];
  const files = document.querySelectorAll(".file-element");
  files.forEach(file => {
    file.addEventListener("click", console.log("clicked"));
  });
  return (
    <div className="h-full w-64 flex flex-col gap-4 items-center bg-primary">
      {data.map(createFile)}
    </div>
  )
}