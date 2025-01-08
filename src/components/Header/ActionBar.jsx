export default function ActionBar() {
  return (
    <div className="h-full flex items-center gap-2 flex-row-reverse absolute right-2">
      <div className="size-4 bg-red-500 rounded-full cursor-pointer"></div>
      <div className="size-4 bg-yellow-400 rounded-full cursor-pointer"></div>
      <div className="size-4 bg-green-600 rounded-full cursor-pointer"></div>
    </div>
  )
}