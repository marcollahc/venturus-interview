import { Link } from 'react-router-dom';
import { Header, Footer, MyTeamsItem, Top5Box, PickedPlayerItem } from '../components';

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
              <Top5Box title="Highest average age" />
              <Top5Box title="Lowest average age" />
            </div>
          </div>
          <div className="content__box picked-player">
            <PickedPlayerItem title="Most picked player" percent="75%" dashed={true} />
            <div className="half-field__line">
              <div className="half-field__circle"></div>
            </div>
            <PickedPlayerItem title="Less picked player" percent="25%" dashed={false} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
