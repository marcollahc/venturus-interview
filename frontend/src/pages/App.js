import { Link } from 'react-router-dom';
import { Header, Footer, MyTeamsItem, Top5Item } from '../components';

import './App.css';

function App() {
  return (
    <main>
      <Header />
      <section>
        <div className="content__box my-teams">
          <div className="content__box--title">
            <h2 className="content__title">My teams</h2>
            <Link to="/create-your-team" className="my-teams__button-add">+</Link>
          </div>
          <div className="list-teams">
            <div className="list-teams__title">
              <div style={{marginRight: "10px", borderRight: "1px solid #ccc"}}>Name</div>
              <div>Description</div>
            </div>
            <MyTeamsItem name="Real Madrid" description="Real Madrid Team" />
            <MyTeamsItem name="Real Madrid" description="Real Madrid Team" />
          </div>
        </div>
        <div className="top-5-picked-player">
          <div className="content__box top-5">
            <div className="content__box--title">
              <h2 className="content__title">Top 5</h2>
            </div>
            <div className="top-5__list">
              <div className="top-5__box">
                <div className="top-5__box--title">
                  <h3 className="top-5__title">Highest average age</h3>
                </div>
                <div className="top-5__average--list">
                  <Top5Item name="Ajax Ansterdam" average="21.6" />
                </div>
              </div>
              <div className="top-5__box">
                <div className="top-5__box--title">
                  <h3 className="top-5__title">Lowest average age</h3>
                </div>
                <div className="top-5__average--list">
                  <Top5Item name="Ajax Ansterdam" average="21.6" />
                </div>
              </div>
            </div>
          </div>
          <div className="content__box picked-player">
            <div className="picked-player__item">
              <p className="picked-player__title">Most picked player</p>
              <div className="picked-player__info">
                <div className="circle-image__dashed">
                  <div className="circle-image__round"></div>
                </div>
                <div className="picked-player__percent">75%</div>
              </div>
            </div>
            <div className="half-field__line">
              <div className="half-field__circle"></div>
            </div>
            <div className="picked-player__item">
              <p className="picked-player__title">Less picked player</p>
              <div className="picked-player__info">
                <div className="circle-image__round"></div>
                <div className="picked-player__percent">25%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
