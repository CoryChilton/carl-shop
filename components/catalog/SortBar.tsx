export default function SortBar({ 
  sortOption, 
  changeSortOption 
} : { 
  sortOption: string,
  changeSortOption: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  return (
    <div className="inline-block ml-10">
      <div className="inline-block mr-10">
        Sort by:
      </div>
      <select onChange={changeSortOption} className="border">
        <option>Featured</option>
        <option>Alphabetically, A-Z</option>
        <option>Alphabetically, Z-A</option>
        <option>Price, low to high</option>
        <option>Price, high to low</option>
      </select>
    </div>
  )
}
