import React from 'react'
import ball from "./assets/logo.png";
import london from "./assets/london.png";
import newyork from "./assets/newyork.png";
import washington from "./assets/washington.png";
import library from "./assets/library.png";
import basketball from "./assets/basketball.png";
import user1 from "./assets/user1.jpg";
import user2 from "./assets/user2.jpg";
import cafeteria from "./assets/cafeteria.png";
const App = () => {
  return (
    <div>
      <section className="header"> 
        <nav> 
          <a href="Index.html">
            <img src={ball}alt="Logo" />
          </a> 
          <div className="nav-links" id="navLINKS"> 
            <i className="fas fa-times" onClick={() => {}}></i> 
            <ul> 
              <li><a href="">HOME</a></li> 
              <li><a href="">ABOUT</a></li> 
              <li><a href="">COURSE</a></li> 
              <li><a href="">BLOG</a></li> 
              <li><a href="">CONTACT</a></li> 
            </ul> 
          </div> 
          <i className="fas fa-bars" onClick={() => {}}></i> 
        </nav>
      </section>

      <section className="text-box">
          <h1>WORLD'S BIGGEST UNIVERSITY</h1>
          <p>Making website is now one of the easiest thing in the world. You 
              just need to learn HTML, CSS,<br/> Javascript and you are good to go.
          </p>
          <a href="" className="hero-btn">Visit us To Know More</a>
      </section>

      {/* <!-- COURSE --> */}
      <section className="course">
            <h1>Courses We Offer</h1>
            <p>Lorem ipsum dolofgr fdtegfr eyrgdyyt erfdsgrsgdgr etdfdfg</p>
            <div className="row">
              <div className="course-col">
                  <h3>intermediate</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                       totam minus culpa error voluptate corrupti ut, unde seq</p>
                </div>
                <div className="course-col">
                  <h3>Degree</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                       totam minus culpa error voluptate corrupti ut, unde seq</p>
                </div>
                <div className="course-col">
                  <h3>Post Graduation</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                       totam minus culpa error voluptate corrupti ut, unde seq</p>
                </div>
            </div>
      </section>

      {/* <!-- CAMPUS --> */}
      <section className="campus">
          <h1>Our Global Campus</h1>
             <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Fugiat, labore animi deserunt ipsa quos omnis.
             </p>

             <div className="row">
                  <div className="campus-col">
                        <img src={london}alt="London" />
                         <div className="layer">
                          <h3>LONDON</h3>
                         </div>
                    </div>
                    <div className="campus-col">
                        <img src={newyork} alt="New York" />
                         <div className="layer">
                          <h3>NEW YORK</h3>
                         </div>
                    </div>
                    <div className="campus-col">
                         <img src={washington} alt="Washington" />
                         <div className="layer">
                          <h3>WASHINGTON</h3>
                         </div>
                    </div>
             </div>
      </section>

      {/* <!-- FACILITIES --> */}
      <section className="facilities">
          <h1> Our facilities</h1>
          <p>
              Lorem ipsum dolor sit amet
               consectetur adipisicing elit. Explicabo ullam dignissimos ad. Veritatis, ratione perspiciatis!
          </p>

          <div className="row">
              <div className="facilities-col">
                 <img src={library} alt="Library" />
                 <h3>WORLD CLASS LIBRARY</h3>
                 <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nam quasi nesciunt enim ipsam delectus pariatur.
                 </p>
              </div>
              <div className="facilities-col">
                 <img src={basketball} alt="Basketball" />
                 <h3>LARGEST PLAY GROUND</h3>
                 <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nam quasi nesciunt enim ipsam delectus pariatur.
                 </p>
              </div>
              <div className="facilities-col">
                 <img src={cafeteria} alt="Cafeteria" />
                 <h3>TASTY AND HEALTHY FOOD</h3>
                 <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nam quasi nesciunt enim ipsam delectus pariatur.
                 </p>
              </div>
          </div>
      </section>

      {/* <!-- TESTIMONIALS --> */}
      <section className="testimonials">
          <h1> WHAT OUR STUDENT SAYS</h1>
          <p>
              Lorem ipsum dolor sit amet
               consectetur adipisicing elit. Explicabo ullam dignissimos ad. Veritatis, ratione perspiciatis!
          </p>

          <div className="row">
              <div className="testimonials-col">
                  <img src={user1} alt="User 1" />
                  <div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                          Quia, a sunt laboriosam nisi odio ad.
                      </p>
                      <h3>CHRISTINE BERLEY</h3>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa-solid fa-star" style={{ WebkitTextStroke: '1px #f44336', color: 'transparent' }}></i>
                  </div>
              </div>
              <div className="testimonials-col">
                  <img src={user2} alt="User 2" />
                  <div>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                          Quia, a sunt laboriosam nisi odio ad.
                      </p>
                      <h3>DAVID BYER</h3>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
              </div>
          </div>
      </section>

      {/* <!-- CALL TO ACTION --> */}
      <section className="cta">
            <h1>Enroll For Our Various Online Courses <br/>Anywhere From The World</h1>
            <a href="" className="hero-btn">CONTACT US</a>
      </section>   

      {/* <!-- FOOTER --> */}
      <section className="footer">
          <h4>ABOUT US</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odio consequatur, quam magni<br/> 
              nesciunt placeat omnis reiciendis provident quas ipsam! Vero alias commodi tenetur dolor.</p>
              <div className="icon">
                 <i className="fa-brands fa-facebook"></i> 
                 <i className="fa-brands fa-twitter"></i> 
                 <i className="fa-brands fa-instagram"></i> 
                 <i className="fa-brands fa-linkedin"></i>  
              </div>
              <p>Made With <i className="fa-solid fa-heart"></i> By Easy Tutorials</p>
      </section>
    </div>
  )
}

export default App
