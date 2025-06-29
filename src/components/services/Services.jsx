import { Component } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
class Services extends Component {
  render() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Intuitive and user-friendly interface designs</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Interactive prototypes for better visualization</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Mobile-first responsive design approach</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>User research and persona development</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Wireframing and information architecture</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Visual design and branding consistency</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Usability testing and iteration</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Custom website development with React.js</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Responsive and mobile-optimized sites</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Backend development using Node.js</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Database design and management</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>API development and integration</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Performance optimization</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Deployment and hosting solutions</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Engaging website content writing</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Technical documentation</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Blog writing and content strategy</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Social media content</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Email marketing content</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>SEO-optimized content</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Copywriting for conversions</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default Services;
