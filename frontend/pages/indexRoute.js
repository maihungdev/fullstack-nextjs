import React from 'react'
import { Link } from '../routes'
export default () => (
  <>
  <ul>
    <li><Link route="character" id="1"><a>Luke Skywalker</a></Link></li>
    <li><Link route="character" id="2"><a>C-3PO</a></Link></li>
    <li><Link route="film" id="1"><a>A New Hope</a></Link></li>
    <li><Link route="film" id="2"><a>The Empire Strikes Back</a></Link></li>
    <li>
      <Link route="character-and-film" characterId="1" filmId="2">
        <a>The Empire Strikes Back and Luke Skywalker</a>
      </Link>
    </li>
  </ul>
  </>
)