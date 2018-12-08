import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { NextAuth } from 'next-auth/client';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return {
      session: await NextAuth.init({ req }),
    };
  }

  constructor(props) {
    super(props);
    this.handleSignOutSubmit = this.handleSignOutSubmit.bind(this);
  }

  handleSignOutSubmit(event) {
    event.preventDefault();
    NextAuth.signout()
      .then(() => {
        Router.push('/auth/callback');
      })
      .catch(err => {
        Router.push('/auth/error?action=signout');
      });
  }

  render() {
    return <SignInMessage {...this.props} />;
  }
}

export class SignInMessage extends React.Component {
  render() {
    if (this.props.session.user) {
      return (
        <React.Fragment>
          <p>
            <Link href="/auth">
              <a>Manage Account</a>
            </Link>
          </p>
          <form
            id="signout"
            method="post"
            action="/auth/signout"
            onSubmit={this.handleSignOutSubmit}
          >
            <input
              name="_csrf"
              type="hidden"
              value={this.props.session.csrfToken}
            />
            <button type="submit">Sign out</button>
          </form>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p>
            <Link href="/auth">
              <a>Sign in</a>
            </Link>
          </p>
        </React.Fragment>
      );
    }
  }
}
