export function Header() {
  return (
    <header className="header py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="uppercase font-bold text-2xl">Logo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
