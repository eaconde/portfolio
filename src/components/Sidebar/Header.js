import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, headings, avatar }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image avatar48">
          <img height="128px" src={avatar} alt="" />
        </span>

        <h1 id="title">{title}</h1>
        {headings.map(heading => {
          return <p>{heading.title}</p>;
        })}

      </Link>
    </div>
  );
}
