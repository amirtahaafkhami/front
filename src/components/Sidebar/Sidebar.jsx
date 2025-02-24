export default function Sidebar({ setCurrentPage }) {
  return (
    <div className="w-12 px-2 flex justify-between items-center py-1 flex-col bg-primary">
      <div className="mt-4 flex flex-col gap-y-8">
        <svg 
          onClick={() => setCurrentPage("Files")}
          className="size-8 transition-all cursor-pointer text-secondary hover:text-white"
        >
          <use xlinkHref="/src/assets/img/sprite.svg#folder"></use>
        </svg>
        <svg 
          onClick={() => setCurrentPage("Projects")}
          className="size-8 transition-all cursor-pointer text-secondary hover:text-white"
        >
          <use xlinkHref="/src/assets/img/sprite.svg#clipboard-document"></use>
        </svg>
        <svg 
          onClick={() => setCurrentPage("About")}
          className="size-8 transition-all cursor-pointer text-secondary hover:text-white"
        >
          <use xlinkHref="/src/assets/img/sprite.svg#fingerprint"></use>
        </svg>
        <svg 
          onClick={() => setCurrentPage("Skills")}
          className="size-8 transition-all cursor-pointer text-secondary hover:text-white"
        >
          <use xlinkHref="/src/assets/img/sprite.svg#code-bracket"></use>
        </svg>
      </div>
      <svg className="size-8 transition-all cursor-pointer text-secondary hover:text-white mb-4">
        <use xlinkHref="/src/assets/img/sprite.svg#cog"></use>
      </svg>
    </div>
  );
}