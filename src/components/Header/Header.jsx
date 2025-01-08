import ActionBar from "./ActionBar";

export default function Header() {
  return (
    <div className="w-full h-10 flex items-center justify-between">
      <p className="text-secondary w-full text-center">Amirtaha Afkhami Goli - Visual Studio Code</p>
      <ActionBar />
      <svg className="size-8 absolute left-2">
        <use xlinkHref="/src/assets/img/sprite.svg#vscode-icon"></use>
      </svg>
    </div>
  )
}