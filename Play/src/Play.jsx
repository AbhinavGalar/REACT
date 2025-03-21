import "./App.css";

function Play(){
    return(
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
            <a href="">Play & WIN</a>
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
<section id="play">
<article class="p1">
    <div><img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/6792157ffa3e2e9204d4a3b6_%5Bcm%5D%20Brand.svg"></img></div>
</article>
<article class="play1">
<div class="h1">START YOUR QUIZZ</div>

<article class="play2">
<div class="quiz-container">
        <h1>Multiple Choice Quiz</h1>
        <div id="question-container">
            <p id="question">What is the full form HTML?</p>
            <div id="choices">
                <button class="choice" onclick="checkAnswer(0)">HYPER TEXT MAKE LANGUAGE</button>
                <button class="choice" onclick="checkAnswer(1)">HYPER MARK LANGUAGE</button>
                <button class="choice" onclick="checkAnswer(2)">HYPER </button>
                <button class="choice" onclick="checkAnswer(3)">HTMPER TEXT LAGUAGE</button>
            </div>
        </div>
        <div id="result" class="hidden">
            <h2 id="result-text"></h2>
            <button id="next-btn" onclick="nextQuestion()">Next Question</button>
        </div>
    </div>
</article>
</article>
</section>

</>
    )
}
export default Play