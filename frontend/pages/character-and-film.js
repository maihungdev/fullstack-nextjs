import React from 'react';
import SampleComponent from '../components/SampleComponent' 
export default class Character extends React.Component {
  static async getInitialProps({ query }) {
    const filmId = query.filmId;
    const characterId = query.characterId;
    return { filmId, characterId };
  }
  render() {
    const { filmId, characterId } = this.props;
    return (
      <>
       <SampleComponent title='Index Page' linkTo='/other' fid={filmId}/>
        <p>{this.props.characterId}{this.props.filmId}</p>
        </>
    );
  }
}
