import { Header, Footer } from '../components';

import './App.css';
import './CreateYourTeam.css';

function CreateYourTeam() {
    return (
        <main>
            <Header />
            <section>
                <div className="content__box create-your-team">
                    <div className="content__box--title">
                        <h2 className="content__title">Create your team</h2>
                    </div>

                    <div className="team-information">
                        <div className="content__box--subtitle">
                            <h3 className="content__subtitle">TEAM INFORMATION</h3>
                        </div>
                        <form className="form form-columns">
                            <div>
                                <div className="form-field">
                                    <label className="form-field__label" for="team-name">Team name</label>
                                    <input id="team-name" className="form-field__input" />
                                </div>
                                <div className="form-field">
                                    <label className="form-field__label" for="description">Description</label>
                                    <textarea id="description" className="form-field__textarea" style={{ height: '196px' }}></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="form-field">
                                    <label className="form-field__label" for="team-website">Team website</label>
                                    <input id="team-website" className="form-field__input" />
                                </div>
                                <div className="form-field">
                                    <label className="form-field__label" for="team-type">Team type</label>
                                    <div className="form-field__radio">
                                        <input type="radio" name="team-type" /> Real 
                                        <input type="radio" name="team-type" /> Fantasy 
                                    </div>
                                </div>
                                <div className="form-field">
                                    <label className="form-field__label" for="tags">Tags</label>
                                    <textarea id="tags" className="form-field__textarea" style={{ height: '125px' }}></textarea>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="team-information">
                        <div className="content__box--subtitle">
                            <h3 className="content__subtitle">CONFIGURE SQUAD</h3>
                        </div>
                        <div className="custom-team">
                            <div className="formation-team">
                                <div className="form-field">
                                    <label className="form-field__label" for="formation">Formation</label>
                                    <select id="formation" className="form-field__input form-field__select">
                                        <option>3 - 2 - 2 - 3</option>
                                        <option>3 - 2 - 3 - 1</option>
                                        <option>3 - 4 - 3</option>
                                        <option>3 - 5 - 2</option>
                                        <option>4 - 2 - 3 - 1</option>
                                        <option>4 - 3 - 1 - 1</option>
                                        <option>4 - 3 - 2</option>
                                        <option>4 - 4 - 2</option>
                                        <option>4 - 5 - 1</option>
                                        <option>5 - 4 -1</option>
                                    </select>
                                </div>
                                <div className="team-map">
                                    <div className="team-map__player">+</div>
                                    <div className="team-map__player">+</div>
                                    <div className="team-map__player">+</div>
                                    <div className="team-map__player">+</div>
                                    <div className="team-map__player">+</div>
                                    <div className="team-map__player">+</div>
                                    <div className="team-map__player">+</div>
                                    <div className="team-map__player">+</div>
                                    <div className="team-map__player">+</div>
                                    <div className="team-map__player">+</div>
                                    <div className="team-map__player">+</div>
                                </div>
                                <button className="team-information__button--save">Save</button>
                            </div>
                            <div className="search-player">
                                <div className="form-field">
                                    <label className="form-field__label" for="search-player">Search player</label>
                                    <input id="search-player" className="form-field__input" />
                                </div>
                                <div className="players-list">
                                    <div className="players-list__item">
                                        <div className="players-list__name-age">
                                            <p><strong>Name:</strong> Cristiano Ronaldo</p>
                                            <p><strong>Age:</strong> 34</p>
                                        </div>
                                        <div className="players-list__nationality">
                                            <p><strong>Nationality:</strong> Portuguese</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default CreateYourTeam;
