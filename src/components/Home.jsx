import React from "react"

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <a href="https://github.com/felipeshcolnik?tab=repositories" target='blank' >
            <img id="gitHub-Icon" src="/images/github.jpg" alt="gitHub-Icon"/>
          </a>
        </header>
        <section className="title-container"> 
          <main className="title-content">
            <img id="dev-icon" src="/images/dev-icon.png" alt="dev-icon"/>
            <h1 className="title-fullName">Felipe Shcolnik</h1>
            <h2 id="job">Software Developer</h2>
          </main>
        </section>
        <section className="about-me">
          <h2 id="about-me-title">About Me</h2>
          <div className="about-content">
            <div class="polaroid-div">
              <div class="polaroid-pict">
                <img src="./images/foto_perfil_felipe.jpeg" alt="rosto de Felipe Shcolnik"/>
                <div class="polaroid-caption">"that's Me"</div>
              </div>
            </div>
            <p id="about-text">I'm Felipe Shcolnik, Full Stack Web Developer graduated in 2022 at Trybe. I am very excited to start this new professional career.<br/><br/> I am originally from Rio de Janeiro, Brazil.Currently I don't have a fixed residence, which makes me learn from each different experience.<br/><br/> By doing our best, we can reach anywhere.<br/>#respect nature #respect the human being</p>
          </div>
        </section>
        <section id="skills">
          <div className="col-md-12">
            <h2 id="skill-title">Skills</h2>
          </div>
          <div className="col-md-12 text-center">
            <ul className="skill-list">
              <img className= "skill-icon" src="/images/icon_css.png" alt="css icon"/>
              <img className= "skill-icon" src="/images/icon_python.png" alt="python icon"/>
              <img className= "skill-icon" src="/images/icon_javascript.png" alt="javascript icon"/>
              <img className= "skill-icon" src="/images/icon_mysql.png" alt="mysql icon"/>
              <img className= "skill-icon" src="/images/icon_express.png" alt="express icon"/><br/>
              <img className= "skill-icon" src="/images/icon_html.png" alt="html icon"/>
              <img className= "skill-icon" src="/images/icon_mongodb.png" alt="mongoDb icon"/>
              <img className= "skill-icon" src="/images/icon_nodejs.png" alt="nodejs icon"/>
              <img className= "skill-icon" src="/images/icon_react.png" alt="react icon"/>
            </ul>
          </div>
        </section>
        <div className="projects-container">
          <h2 id="projects-title">Projects</h2>
          <div className="projects">
            <div className= "project-frame">
              <a href="https://github.com/felipeshcolnik/Wallet-Manager" target="_blank" rel="noopener noreferrer">
                <img className= "project-pict" id="project-wallet" src="/images/icon-wallet.jpeg" alt="contries coins"/>
                <p>online expense sheet with real-time<br/> exchange rate API</p>
              </a>
            </div>
            <div className= "project-frame">
              <a href="https://github.com/felipeshcolnik/AppReceitas-BackEnd" target="_blank" rel="noopener noreferrer">
                <img className= "project-pict" id="project-recipes" src="/images/icon-recipes.jpg" alt="food ingredients"/>
                <p>Back-End code from a recipes App where<br/>you can search, add or edit a recipe</p>
              </a>
            </div>
            <div className= "project-frame">
              <a href="https://github.com/felipeshcolnik/PixelArt" target="_blank" rel="noopener noreferrer">
                <img className= "project-pict" id="project-pixel" src="/images/icon-pixel.jpg" alt="human face in pixels"/>
                <p>Website where you can draw anything<br/>setting the pixel size and color you want to print</p>
              </a>
            </div>
            <div className= "project-frame">
              <a href="https://github.com/felipeshcolnik/Books-Manager-Api" target="_blank" rel="noopener noreferrer">
                <img className= "project-pict" id="project-books" src="/images/icon-books.jpg" alt="choosing a book from a shelf"/>
                <p>Integration of API with SQL database<br/>where you can search, add, edit or delete a book from you library</p>
              </a>
            </div>
            <div className= "project-frame">
              <a href="https://github.com/felipeshcolnik/DataFlight_Mongo" target="_blank" rel="noopener noreferrer">
                <img className= "project-pict" id="project-datafly" src="/images/icon-airport2.jpg" alt="airport departure screen"/>
                <p>lines of code using mongoDb to filter and lookup<br/>different informations from a database flies</p>
              </a>
            </div>
          </div>
        </div>
        <footer>
          <ul id='footer_ul'>
            <a href="https://www.linkedin.com/in/felipe-shcolnik-7b7b8383/" target='blank' >
              <img className='footer-icons' src='images/linkedin.png' alt="linkedin logo"/>
            </a>
            <a href="https://www.instagram.com/shcol/" target='blank'>
              <img className='footer-icons' src='images/insta.png' alt='instagram logo'/>
            </a>
            <a href="https://github.com/felipeshcolnik?tab=repositories" target='blank' >
              <img className='footer-icons' src='images/github_footer.png'alt='github logo'/>
            </a>
          </ul>
        </footer>
      </div>
    )
  }
}

export default Home;