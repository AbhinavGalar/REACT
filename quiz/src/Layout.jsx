import "./App.css";
function Layout() {
  return (
    <>
      <section id="secondnav">
        <article class="ar3">
          <div>
            <a href="#">QUIZ</a>
          </div>
          <div>
            <a href="#">STREAMS</a>
          </div>
          <div>
            <a href="#">Events</a>
          </div>
          <div>
            <a href="#">Play & WIN</a>
          </div>
          <div>
            <a href="#">SPORTS</a>
          </div>
          <div>
            <a href="#">ACTIVITIES</a>
          </div>
        </article>
        <artice class="ar4">
          <div>
            <a href="#">LISTYOURACHIEVEMNT</a>
          </div>
          <div>
            <a href="#">COMPETITION</a>
          </div>
          <div>
            <a href="#">SIGNUP</a>
          </div>
          {/* <div><a href="#">GIFTARDS</a></div> */}
        </artice>
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

      {/* ==hero section============== */}
      <section id="hero">
        <article>
            <div>
                <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/66c58ca09cfed2280f16c31d_Asset%20Right.svg"></img>
            </div>
        </article>
        <article class="texts">
       <div class="h1">
        <h1>Introducing Instructional suite </h1>
       </div>

       <div class="h2">
<h1>"I had no idea quizizz</h1>
       </div>

       <div class="h3">
        <h1>could do that"</h1>
       </div>
<div class="h4">
    <h1>- Almost everybody</h1>
</div>
<hr class="line"></hr>

   <div class="h4">
    <h1>Create and deliver bell-to-bell curriculum<br></br>
    resources that meet the needs of every student.</h1>
   </div>
        </article>

        <article class="button">
        <div class="btn1">teachers<br></br>
        Sign Up For Free 
        </div>
<div class="btn2">
  Admins <br></br>
  Learn More 
</div>
        </article>
      </section>
    </>
  )
}
export default Layout;
