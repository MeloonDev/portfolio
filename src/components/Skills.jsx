import { useState } from "react";
import "./Skills.scss";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaGitAlt } from "react-icons/fa";
import { SiStyledcomponents, SiJavascript } from "react-icons/si";

const descArray = [
  "*najedź kursorem na kartę, żeby wyświetlić opis",
  "HTML jest standardowym językiem znaczników, służącym do tworzenia stron internetowych, co zasadniczo czyni go podstawą całego Internetu! To za jego pomocą komunikujemy się z przeglądarkami i mówimy im, jak mają uporządkować zawartość witryny w tytuły, nagłówki, akapity, obrazy, łącza, listy, formularze, tabele i inne elementy.",
  "CSS zawiera reguły opisujące w jaki sposób przeglądarka internetowa ma wyświetlać zawartość dokumentów HTML. Za pomocą arkuszy CSS można opisać wiele właściwości prezentacji elementów strony: wybrać kolor tekstu, wypełnienie tła, rodzaj czcionki, ustawić odstępy między elementami czy zdefiniować położenie jednego elementu względem drugiego.",
  "JavaScript jest to język programowania, nazywany skryptem, który służy do wykonania złożonych funkcji na stronach internetowych: aktualizowania i zmieniania HTML i CSS, obliczania, manipulowania i weryfikacji danych i innych. Wykonuje to za każdym razem, gdy strona internetowa wyświetla informacje statyczne.",
  "SASS jest to preprocesor CSS pozwalający tworzyć arkusze stylów szybciej i dużo czytelniej. Plik zawierający kod SASS zapisywany jest z rozszerzeniem .sass bądź .scss i wzbogaca napisanie arkuszy stylów o dodatkowe funkcje takie jak zmienne, albo obliczenia.",
  "React jest tak zwaną biblioteką języka programowania JavaScript. Wykorzystuje się ją podczas tworzenia interfejsów użytkownika dla różnego typu aplikacji. Dzięki niej można stworzyć bardzo złożony interfejs, składający się z małych, oddzielonych od siebie elementów.",
  "Styled-components powstało z myślą o łatwym i użytecznym sposobie stylowania elementów HTML-a i opiera się na podejściu CSS-in-JS, według którego szablon powinien być ściśle związany z JavaScriptem.",
  "Git to rozproszony system kontroli wersji, który pozwala na niezależne zmiany w jednym kodzie, prowadzone w różnych gałęziach.",
];

const Skills = () => {
  const [isHovering, setIsHovering] = useState(descArray[0]);

  const handleMouseOver = (number) => {
    setIsHovering(descArray[number]);
  };

  return (
    <div id="skills" className="skills-container">
      <div className="skills-section">
        <div data-aos="zoom-in-right" className="skills-description">
          <h2>
            Umiejętności<span>.</span>
          </h2>
          <p>{isHovering}</p>
        </div>
        <div data-aos="zoom-in-left" className="skills-icons">
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(1)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <FaHtml5 />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(2)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <FaCss3Alt />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(3)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <SiJavascript />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(4)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <FaSass />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(5)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <FaReact />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(6)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <SiStyledcomponents />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(7)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <FaGitAlt />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
