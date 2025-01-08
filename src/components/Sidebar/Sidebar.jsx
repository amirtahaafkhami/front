export default function Sidebar() {
  return (
    <div className="h-full w-12 pl-2 flex justify-between items-center py-1 flex-col bg-primary">
      <div className="mt-4 flex flex-col gap-y-8">
        <svg className="size-8 transition-all cursor-pointer text-secondary hover:text-white ">
          <use xlinkHref="./src/assets/img/sprite.svg#clipboard-document"></use>
        </svg>
        <svg className="size-8 transition-all cursor-pointer text-secondary hover:text-white ">
          <use xlinkHref="./src/assets/img/sprite.svg#fingerprint"></use>
        </svg>
        <svg className="size-8 transition-all cursor-pointer text-secondary hover:text-white ">
          <use xlinkHref="./src/assets/img/sprite.svg#code-bracket"></use>
        </svg>
      </div>
      <svg className="size-8 transition-all cursor-pointer text-secondary hover:text-white mb-1">
        <use xlinkHref="./src/assets/img/sprite.svg#cog-8"></use>
      </svg>
    </div>
  )
}