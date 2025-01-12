export default function Carousel(props) {
  return (
    <div className="flex justify-center w-full">
      <div id="logos" className="overflow-hidden whitespace-nowrap relative">
        <div>
          {props.techs.map((tech) => (
            <img className="h-16" key={tech} src={`/src/assets/img/${tech}.png`} alt={tech} />
          ))}
        </div>
        <div>
          {props.techs.map((tech) => (
            <img className="h-16" key={tech} src={`/src/assets/img/${tech}.png`} alt={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}