import React from 'react';
import { navigate } from 'gatsby-link';
import { graphql, StaticQuery } from 'gatsby';
import map from '../img/map.png';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  render() {
    const { info } = this.props;
    return (
      <section className="section mb-2">
        <div className="container">
          <div className="content">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="columns">
                  <div className="column">
                    <h3 className="margin-b-2 is-size-3 is-uppercase	has-text-weight-semibold has-text-centered is-family-primary has-text-primary">
                      CONTACT US
                    </h3>
                    <div className="Contact--Details">
                      <label>ADDRESS</label>
                      <span className="Contact--Details--Item" target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {info.address}
                      </span>
                      <div className="columns margin-t-2 is-flex-start">
                        <div className="column">
                          <label>EMAIL</label>
                          <br />
                          <a
                            className="Contact--Details--Item"
                            href={`mailto:${info.email}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>{' '}
                            {info.email}
                          </a>
                          <label>Phone</label>
                          <br />
                          <a
                            className="Contact--Details--Item"
                            href={`tel:${info.phone}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <rect
                                x="5"
                                y="2"
                                width="14"
                                height="20"
                                rx="2"
                                ry="2"></rect>
                              <line x1="12" y1="18" x2="12" y2="18"></line>
                            </svg>{' '}
                            {info.phone}
                          </a>
                        </div>
                        <div className="column is-7">
                          <img className="map" src={map} alt="map" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-5">
                    <h3 className="margin-b-2 is-size-3 is-uppercase has-text-weight-semibold has-text-centered is-family-primary has-text-primary">
                      TELL ME MORE
                    </h3>
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}>
                      <input type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label>
                          Don’t fill this out:{' '}
                          <input
                            name="bot-field"
                            onChange={this.handleChange}
                          />
                        </label>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input
                            placeholder="Name"
                            className="input"
                            type={'text'}
                            name={'name'}
                            onChange={this.handleChange}
                            id={'name'}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input
                            placeholder="Email"
                            className="input"
                            type={'email'}
                            name={'email'}
                            onChange={this.handleChange}
                            id={'email'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <textarea
                            placeholder="Message"
                            className="textarea"
                            name={'message'}
                            onChange={this.handleChange}
                            id={'message'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <button
                          className="button is-link is-fullwidth"
                          type="submit">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query ContactFormQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
          frontmatter {
            phone
            email
            address
          }
        }
      }
    `}
    render={(data) => <ContactForm info={data.markdownRemark.frontmatter} />}
  />
);
