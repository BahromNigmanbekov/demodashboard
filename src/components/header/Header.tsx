import "./Header.css"
import { FaSearch } from 'react-icons/fa'

function Header() {
  return (
    <div className="header-top">
      <h1>Hello Bahrom 👋🏼,</h1>

      <form className='form' action="">
        <FaSearch/>
        <input type="text" placeholder='search'/>
      </form>
    </div>
  )
}

export default Header
