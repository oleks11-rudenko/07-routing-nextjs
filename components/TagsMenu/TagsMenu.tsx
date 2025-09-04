'use client';

import Link from 'next/link';
import css from './TagsMenu.module.css';
import { useState } from 'react';

interface TagsMenuProps {
  tags: string[];
}

export default function TagsMenu({ tags }: TagsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes {isOpen ? '▴' : '▾'}
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link href={`/notes/filter/All`} onClick={toggle} className={css.menuLink}>
              All
            </Link>
          </li>
          {tags.map((tag) => (
            <li key={tag} className={css.menuItem}>
              <Link href={`/notes/filter/${tag}`} onClick={toggle} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
