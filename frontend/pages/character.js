import React from 'react';


export default class Character extends React.Component {
  static async getInitialProps({ query }) {
    //return fetch(`https://swapi.co/api/films/${query.id}`).then(x => x.json())
    const id = query.id;
    return { id };
  }
  render() {
    const { id } = this.props;
    {
      console.log(this.props.id);
    }
    return (
        <p>{this.props.id}</p>
    );
  }
}
