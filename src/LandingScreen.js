import React, { useState } from 'react';
import './LandingScreen.css';

const faqItems = [
    {
        q: 'Czym jest Netflix?',
        a: 'Netflix to serwis streamingowy oferujący szeroką gamę filmów, seriali, anime, programów dokumentalnych i nie tylko — na tysiącach urządzeń z dostępem do internetu.',
    },
    {
        q: 'Ile kosztuje korzystanie z serwisu Netflix?',
        a: 'Ceny planów zaczynają się od kwoty zbliżonej do tej, którą widzisz na stronie Netflix. Bez umów i bez dodatkowych opłat. Możesz anulować w każdej chwili.',
    },
    {
        q: 'Gdzie mogę oglądać?',
        a: 'Oglądaj w domu lub w podróży – na telewizorze, telefonie, tablecie czy komputerze. Wystarczy zalogować się na swoje konto i zacząć oglądać.',
    },
    {
        q: 'Jak zrezygnować z członkostwa?',
        a: 'Możesz anulować członkostwo online w kilku kliknięciach – bez opłat za anulowanie. Twoje konto będzie aktywne do końca bieżącego okresu rozliczeniowego.',
    },
    {
        q: 'Jakie materiały mogę oglądać w Netflixie?',
        a: 'Od produkcji oryginalnych po filmy i seriale licencyjne – znajdziesz tu rozrywkę na każdy nastrój, dla dorosłych i dla dzieci.',
    },
    {
        q: 'Czy Netflix jest odpowiedni dla dzieci?',
        a: 'Tak. Możesz tworzyć profile dla dzieci z kontrolą rodzicielską i ograniczeniami treści odpowiednimi dla wieku.',
    },
];

function LandingScreen({ onGoLogin }) {
    const [email, setEmail] = useState('');
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onGoLogin(email);
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="landing">
            <div className="landing__overlay">
                <header className="landing__nav">
                    <div className="landing__navLeft">
                        <img
                            className="landing__logo"
                            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                            alt="Netflix"
                        />
                    </div>
                    <div className="landing__navRight">
                        <div className="landing__langSelect">
                            <span className="landing__langIcon">🌐</span>
                            <select>
                                <option value="pl" defaultValue="pl">
                                    Polski
                                </option>
                                <option value="en">English</option>
                            </select>
                        </div>
                        <button className="landing__loginButton" onClick={onGoLogin}>
                            Zaloguj się
                        </button>
                    </div>
                </header>

                <main className="landing__hero">
                    <div className="landing__center">
                        <h1>Filmy, seriale i wiele więcej bez ograniczeń</h1>
                        <h2>Już od 33 zł. Anuluj w każdej chwili.</h2>
                        <p>
                            Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto.
                        </p>

                        <form className="landing__form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Adres e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="button" onClick={onGoLogin}>
                                Rozpocznij <span className="landing__arrow">›</span>
                            </button>
                        </form>
                    </div>
                </main>
            </div>

            <div className="landing__curveContainer">
                <div className="landing__curve"></div>
            </div>

            <section className="landing__section landing__section--reasons">
                <div className="landing__sectionInner">
                    <h2>Więcej powodów, aby dołączyć</h2>
                    <div className="landing__cards">
                        <div className="landing__card">
                            <h3>Oglądaj na telewizorze</h3>
                            <p>
                                Oglądaj na telewizorach Smart TV, konsolach, odtwarzaczach multimedialnych i
                                nie tylko.
                            </p>
                        </div>
                        <div className="landing__card">
                            <h3>Pobierz ulubione tytuły</h3>
                            <p>
                                Zapisz ulubione tytuły, aby zawsze mieć coś do obejrzenia offline.
                            </p>
                        </div>
                        <div className="landing__card">
                            <h3>Oglądaj wszędzie</h3>
                            <p>
                                Oglądaj filmy i seriale bez ograniczeń na telefonie, tablecie, laptopie i TV.
                            </p>
                        </div>
                        <div className="landing__card">
                            <h3>Utwórz profil dla dzieci</h3>
                            <p>
                                Daj dzieciom bezpieczną przestrzeń z ulubionymi bohaterami i kontrolą rodzicielską.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="landing__section landing__section--faq">
                <div className="landing__sectionInner">
                    <h2>Często zadawane pytania</h2>
                    <div className="landing__faqList">
                        {faqItems.map((item, index) => (
                            <div key={index} className="landing__faqItem">
                                <button
                                    className="landing__faqQuestion"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{item.q}</span>
                                    <span className="landing__faqIcon">
                                        {openFaq === index ? '✕' : '+'}
                                    </span>
                                </button>
                                {openFaq === index && (
                                    <div className="landing__faqAnswer">
                                        <p>{item.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="landing__faqEmail">
                        <p>
                            Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto.
                        </p>
                        <form className="landing__form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Adres e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">
                                Rozpocznij <span className="landing__arrow">›</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="landing__footer">
                <div className="landing__footerInner">
                    <p className="landing__footerPhone">
                        Pytania? Zadzwoń pod numer 00 800 112 4392
                    </p>
                    <div className="landing__footerLinks">
                        <a href="#!">Często zadawane pytania</a>
                        <a href="#!">Centrum pomocy</a>
                        <a href="#!">Konto</a>
                        <a href="#!">Praca</a>
                        <a href="#!">Warunki korzystania</a>
                        <a href="#!">Prywatność</a>
                        <a href="#!">Ustawienia plików cookie</a>
                        <a href="#!">Informacje prawne</a>
                    </div>
                    <div className="landing__footerLang">
                        <div className="landing__langSelect landing__langSelect--footer">
                            <span className="landing__langIcon">🌐</span>
                            <select>
                                <option value="pl">Polski</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                    </div>
                    <p className="landing__footerBrand">Netflix Polska (klon)</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingScreen;
