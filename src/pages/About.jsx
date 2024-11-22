import { myExperience, myEducation } from "../constanst/about";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./about.css";

export const Resume = () => {
  return (
    <section className="section__resume--home">
      <div className="section_resume-cards">
        <div className="card">
          <div className="card-body">
            <h2 className="card_title">Acerca de mi</h2>
            <p className="card-text style_about">
              💫🚀 Impulsada por los desafíos, decidí dar un gran paso en mi
              carrera:{" "}
              <strong>
                pasé de ser Ingeniera Industrial, con 5 años de experiencia en
                Calidad y Mejora Continua, a Desarrolladora Web.
              </strong>
            </p>
            <p className="card-text style_about">
              Siempre tuve el deseo de explorar el mundo de la programación, y
              lo hice realidad a través de Laboratoria, colaborando en equipo 
              en diversos proyectos, lo que me permitió crecer 
              tanto profesional como personalmente.
            </p>
            <p className="card-text style_about">
              Recientemente{" "}
              <strong>
                completé mi primer curso en Java y sigo aprendiendo con
                entusiasmo, profundizando en React y JavaScript.
              </strong>
            </p>
          </div>
        </div>

        <div className="card car_color">
          <div className="card-body">
            <h2 className="card_title-color">Experiencia</h2>
            <p className="card-text">
              <ul className="experience_list">
                {myExperience[0].items.map((item, index) => (
                  <li key={index} className="style_experience">
                    <p className="item_position">{item.position}.</p>
                    <p>{item.company}</p>
                    <p>{item.duration}</p>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>

        <div className="card car_color">
          <div className="card-body">
            <h2 className="card_title-color">Educación</h2>
            <p className="card-text">
              <ul className="education_list">
                {myEducation[0].items.map((item, index) => (
                  <li key={index} className="style_education">
                    <p className="item_institution">{item.institution}.</p>
                    <p>{item.degree}</p>
                    <p>{item.year}</p>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
