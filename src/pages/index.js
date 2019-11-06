import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import filtek from '../assets/images/projects/filtek.png';
import thebellevue from '../assets/images/projects/thebellevue.png';
import winandlizwedding from '../assets/images/projects/winandlizwedding.png';
import reimbursement from '../assets/images/projects/reimbursement.png';
import uhswebportal from '../assets/images/projects/uhswebportal.png';
import uni from '../assets/images/projects/uni.png';
import pgw from '../assets/images/projects/pgw.png';
import molave from '../assets/images/projects/molave.png';
import banner2 from '../assets/images/banner2.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Say Hello!', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Eric</strong>
            </h2>
            <br />
            <h3>
              Technical Architect | Web Developer 
            </h3>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Some of the notable projects I did or had collaboration with other teams on.
            Capacity is either a software developer or as a technical architect.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="http://thebellevue.com/" className="image fit" 
                  target="_blank" rel="noopener noreferrer">
                  <img src={thebellevue} alt="" />
                </a>
                <header>
                  <h3>The Bellevue - Hotels & Resorts</h3>
                </header>
              </article>
              <article className="item">
                <a href="#" className="image fit" 
                  target="_blank" rel="noopener noreferrer">
                  <img src={molave} alt="" />
                </a>
                <header>
                  <h3>Globe - Sim Bulk Query</h3>
                </header>
              </article>
              <article className="item">
                <a href="#" className="image fit" 
                  target="_blank" rel="noopener noreferrer">
                  <img src={reimbursement} alt="" />
                </a>
                <header>
                  <h3>Stratpoint - Reimbursement System</h3>
                </header>
              </article>
            </div>

            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={winandlizwedding} alt="" />
                </a>
                <header>
                  <h3>Win & Liz Wedding</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={uni} alt="" />
                </a>
                <header>
                  <h3>Globe - Pay2Globe</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={filtek} alt="" />
                </a>
                <header>
                  <h3>3M ESPE - Filtek: OneAndDone</h3>
                </header>
              </article>
            </div>

            <div className="col-4 col-12-mobile">
            <article className="item">
                <a href="#" className="image fit" 
                  target="_blank" rel="noopener noreferrer">
                  <img src={uhswebportal} alt="" />
                </a>
                <header>
                  <h3>UHS - Web Portal</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pgw} alt="" />
                </a>
                <header>
                  <h3>Globe - Payment Service</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={banner2} alt="" />
          </a>

          <p>
            I'm a Technical Architect currently specializing with 
            <a 
              href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-09-06&ci=AWS00591965"
              target="_blank"
              rel="noopener noreferrer"
            > AWS cloud solutions</a>.
            I have working experience with DevOps, Serverless technologies, Database management,
            API Services, and end-to-end software development. My previous works and 
            collaborations include various systems including but not limited to 
            eCommerce, ERP, CRM, Inventory Management, Reimbursement Systems, 
            Reservation and Booking, high traffic, real-time transaction processing
            as well as high volume batch file processing.
          </p>
          <br />
          <p>
            A Rubyist by heart, I also previously worked on a project which involves in 
            communicating with security system devices (IoTs i.e., cameras, alarms, sensors, etc)
            and present its corresponding data via a management portal. The changes I
            made to this system has yielded increased usability, visibility, and performance of the system. 
            I have also reduced the number of bugs in their application by implementing 
            end-to-end tests which greatly increased user satisfaction.
          </p>
          <br />
          <p>
            Personally and as a professional, I can (and often do) work alone with 
            no supervision required. However, I find it more engaging and more rewarding 
            to work and collaborate with a team that cares about the client and the 
            product as much as I do learning from each other along the way.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Say Hello!</h2>
          </header>

          <p>
            I'm currently available for freelance, collaboration, or full-time work. 
            If you're interested in working with me, please get in touch by sending me
            a message by filling up the form below. Or feel free to just say hi, I would like that too!
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    {/* <PageFooter /> */}
  </Layout>
);

export default IndexPage;
