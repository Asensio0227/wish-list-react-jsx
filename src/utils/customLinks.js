import { links, social } from '../data';
import { Link } from 'react-router-dom'

const CustomLinks = () => {
  return (
    <>
      <article className="links-container">
        <div className="links">
          {links.map((link) => {
            const { id, path, text } = link
            return (
              <div key={id}>
                <Link to={path}>
                  {text}
                </Link>
              </div>
            )
          })}
        </div>
      </article>
      <ul className="social-icons">
        {social.map((icons) => {
          const { icon, id, url } = icons;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
};

export default CustomLinks