import React from 'react';

export default class Character extends React.Component {
  static async getInitialProps({ query }) {
    //return fetch(`https://swapi.co/api/films/${query.id}`).then(x => x.json())
    const filmId = query.filmId;
    const characterId = query.characterId;
    return { filmId, characterId };
  }
  render() {
    const { filmId, characterId } = this.props;
    {
      console.log(this.props.filmId);
    }
    return (
        <p>{this.props.characterId}{this.props.filmId}</p>
    );
  }
}
