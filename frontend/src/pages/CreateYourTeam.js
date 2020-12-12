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
                                    <input id="team-name" />
                                </div>
                                <div className="form-field">
                                    <label className="form-field__label" for="description">Description</label>
                                    <textarea id="description"></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="form-field">
                                    <label className="form-field__label" for="team-website">Team website</label>
                                    <input id="team-website" />
                                </div>
                                <div className="form-field">
                                    <label className="form-field__label" for="team-type">Team type</label>
                                    <input type="radio" name="team-type" /> Real
                                    <input type="radio" name="team-type" /> Fantasy
                                </div>
                                <div className="form-field">
                                    <label className="form-field__label" for="tags">Tags</label>
                                    <textarea id="tags"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default CreateYourTeam;
