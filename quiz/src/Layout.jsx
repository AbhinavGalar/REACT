import { Link, Outlet } from "react-router-dom";
import "./App.css";
function Layout() {
  return (
    <>
      <section id="secondnav">
        <article class="ar3">
          <div>
            <Link style={{textDecoration:"none"}} to="/quiz">Quiz</Link>
          </div>
          <div>
            <Link style={{textDecoration:"none"}} to="/streams">Streams</Link>
          </div>
          <div>
            <Link style={{textDecoration:"none"}} to="/events">Events</Link>
          </div>
          <div>
            <Link style={{textDecoration:"none"}} to="/play">Play & Win</Link>
          </div>
          <div>
            <Link style={{textDecoration:"none"}} to="/sports">Sports</Link>
          </div>
          <div>
            <Link style={{textDecoration:"none"}}>Activities</Link>
          </div>
        </article>
        <article class="ar4">
          <div>
            <Link style={{textDecoration:"none"}}>Listyourachivement</Link>
          </div>
          <div>
            <Link style={{textDecoration:"none"}}>Compition</Link>
          </div>
          <div>
            <Link style={{textDecoration:"none"}} to="/signup">Signup</Link>
          </div>

          {/* <div><a href="#">GIFTARDS</a></div> */}
        </article>
      </section>
      {/* ===============================third navvv============== */}
      <section id="thirdnav">
        <article class="ar5">
          <div>
            <a href="#">LIVE CLASSES</a>
          </div>
          <div>
            <a href="#">ONLINE COURSES</a>
          </div>
          <div>
            <a href="#">ONLINE TEST</a>
          </div>
          <div>
            <a href="#">ONLINE TEST</a>
          </div>
        </article>
      </section>

      <div>
        <Outlet />
      </div>

      <section id="footer">
        <article class="f">
          <div>
            <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/6792157ffa3e2e9204d4a3b6_%5Bcm%5D%20Brand.svg"></img>
          </div>
        </article>
        <article class="f1">
          <div>
            <a href="The Quizz Blog">The Quizz Blog</a>
          </div>
          <div>
            <a href="Teacher Resources">Teacher Resources</a>
          </div>
          <div>
            <a href="Certified Educators">Certified Educators</a>
          </div>
          <div>
            <a href="State Test Prep">State Test Prep</a>
          </div>
          <div>
            <a href="Quizizz for Work">Quizizz for Work</a>
          </div>
          <div>
            <a href="Help Center">Help Center</a>
          </div>
          <div>
            <a href="Teacher Panel">Teacher Panel</a>
          </div>
          <div>
            <a href="IQAPS">IQAPS</a>
          </div>
          <div>
            <a href="AI Toolkit">AI Toolkit</a>
          </div>
          <div>
            <a href="Accessibility and Inclusion">
              Accessibility and Inclusion
            </a>
          </div>
          <div>
            <a href="Sitemap">Sitemap</a>
          </div>
          <div>
            <a href="Terms of Service">Terms of Service</a>
          </div>
        </article>
        <article class="f2">
          <div>
            <a href="Worksheets">Worksheets</a>
          </div>
          <div>
            <a href="Reseller Program">Reseller Program</a>
          </div>
          <div>
            <a href="Privacy Policy">Privacy Policy</a>
          </div>
          <div>
            <a href="Privacy Center">Privacy Center</a>
          </div>
          <div>
            <a href="Careers">Careers</a>
          </div>
          <div>
            <a href="Contact Support">Contact Support</a>
          </div>
          <div>
            <a href="About Us">About Us</a>
          </div>
        </article>
        <article class="f3">
          <div class="fi">
            <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/60aca2b71ab9a563ffecf204_google%20play.webp"></img>
          </div>
          <div class="fi1">
            <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/60aca2b71ab9a50fe9ecf205_apple%20app%20store.webp"></img>
          </div>
        </article>
      </section>
    
    </>
  );
}
export default Layout;
