import { useEffect } from "react"
import { Bars } from "../icons/Bars"
import "./Nav.scss"
import PropTypes from "prop-types"
import { HashLink } from "react-router-hash-link"
import { handleNavPage, handleNavSection } from "../../utils/links"

const navTitles = [
  { title: "Projects" },
  { title: "Book Notes", navSection: false },
  // { title: "Letters" },
  { title: "Contact" },
]

const handleScroll = () => {
  if (window.scrollY < 10) {
    const nav = document.querySelector("nav")
    nav.classList.add("show")
  }

  let prevScrollPos = window.scrollY
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav")
    const currentScrollPos = window.scrollY

    prevScrollPos > currentScrollPos
      ? nav.classList.add("show")
      : nav.classList.remove("show")

    prevScrollPos = currentScrollPos
  })
}

const NavLink = ({ link: { title, navSection = true } }) => {
  return navSection ? (
    <li>
      <HashLink to={handleNavSection(title)}>{title}</HashLink>
    </li>
  ) : (
    <li>
      <HashLink to={handleNavPage(title)}>{title}</HashLink>
    </li>
  )
}

export default function Nav() {
  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <nav>
      <a id="logo" href="/">
        OG.
      </a>
      <input type="checkbox" name="bars-checkbox" id="bars-checkbox" />
      <label htmlFor="bars-checkbox" className="bars-label">
        <Bars className="bars" />
      </label>
      <ul>
        {navTitles?.map((link, i) => (
          <NavLink key={i} link={link} />
        ))}
      </ul>
    </nav>
  )
}

NavLink.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    navSection: PropTypes.bool,
  }).isRequired,
}
