import { useState } from 'react';
import { headerContentful } from '../utils/contentful';
import NavLink from './NavLink';
import ImageLink from './ImageLink';

export default function Navigation({ props }) {
  const [openMenu, setOpenMenu] = useState(false);
  const dataContentful = headerContentful(props);
  const { logo, navLinks } = dataContentful;

  const handleMenuMobile = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="header">
      <ImageLink
        url={logo.fields.image.fields.file.url}
        alternativeText={logo.fields.altText}
        linkUrl="/"
        className="navigation__logo"
      />
      <ul className={openMenu ? 'navigation menuDisplay' : 'navigation'}>
        {navLinks.map((component) => (
          <NavLink
            key={component.fields.identifier}
            linkLabel={component.fields.linkLabel}
            linkUrl={component.fields.linkUrl}
          />
        ))}
      </ul>

      <button
        type="button"
        className="header__burguer-menu"
        onClick={handleMenuMobile}
      >
        ☰
      </button>
    </nav>
  );
}
