export default function SortBar({ 
  sortOption, 
  changeSortOption 
} : { 
  sortOption: string,
  changeSortOption: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  return (
    <div className="inline-block">
      <div className="inline-block mr-8">
        Sort by:
      </div>
      <select onChange={changeSortOption} className="border opacity-75 hover:opacity-100 cursor-pointer">
        <option>Featured</option>
        <option>Alphabetically, A-Z</option>
        <option>Alphabetically, Z-A</option>
        <option>Price, low to high</option>
        <option>Price, high to low</option>
      </select>
    </div>
  )
}
