import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import Filter from './Filter';

const data = [{
  "year": "2014",
  "votes": "757074",
  "title": "Guardians of the Galaxy",
  "runtime": "121",
  "revenue": "333.13",
  "rating": "8.1",
  "rank": "1",
  "metascore": "76",
  "genre": [
    "Action",
    "Adventure",
    "Sci-Fi"
  ],
  "director": "James Gunn",
  "description": "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",
  "actors": [
    "Chris Pratt",
    "Vin Diesel",
    "Bradley Cooper",
    "Zoe Saldana"
  ]
},
{
  "year": "2012",
  "votes": "485820",
  "title": "Prometheus",
  "runtime": "124",
  "revenue": "126.46",
  "rating": "7",
  "rank": "2",
  "metascore": "65",
  "genre": [
    "Adventure",
    "Mystery",
    "Sci-Fi"
  ],
  "director": "Ridley Scott",
  "description": "Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.",
  "actors": [
    "Noomi Rapace",
    "Logan Marshall-Green",
    "Michael Fassbender",
    "Charlize Theron"
  ]
},
{
  "year": "2016",
  "votes": "157606",
  "title": "Split",
  "runtime": "117",
  "revenue": "138.12",
  "rating": "7.3",
  "rank": "3",
  "metascore": "62",
  "genre": [
    "Horror",
    "Thriller"
  ],
  "director": "M. Night Shyamalan",
  "description": "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.",
  "actors": [
    "James McAvoy",
    "Anya Taylor-Joy",
    "Haley Lu Richardson",
    "Jessica Sula"
  ],
}];

export default function Table() {
  return (
    <Table.Wrapper>
      <Filter />
      <div className="table-display">{data.map(movie => <Row {...movie} key={movie.title} />)}</div>
    </Table.Wrapper>
  );
}

Table.Wrapper = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 0;
  }

  .table-display {
    @media (max-width: 1024px) {
      width: 90%;
      overflow-x: scroll;
    }
  }
`;
