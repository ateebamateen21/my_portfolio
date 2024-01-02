import React from "react";
import "../../styles/globals.css";
import styles from "../../styles/projects.module.css";

const Projects = () => {
  return (
    <>
      <div className="projects ">
        <section className="container py-12">
          <div className="py-10 ">
            <h1 className="text-3xl font-bold text-center">Projects</h1>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <input
                type="radio"
                name="slide"
                id="c1"
                defaultChecked
                className={styles.inputField}
              />
              <label htmlFor="c1" className={styles.card}>
                <div className={styles.row}>
                  <div className={styles.icon}>1</div>
                  <div className={styles.description}>
                    <h4>Simple Todo App</h4>
                    <p>
                      This single todo is made with ReactJS. It has features
                      like adding date, tags and priority.
                    </p>
                  </div>
                </div>
              </label>
              <input
                type="radio"
                name="slide"
                id="c2"
                className={styles.inputField}
              />
              <label htmlFor="c2" className={styles.card}>
                <div className={styles.row}>
                  <div className={styles.icon}>2</div>
                  <div className={styles.description}>
                    <h4>Bicycle Test UI</h4>
                    <p>A ReactJS UI project using mini React-CSS libraries</p>
                  </div>
                </div>
              </label>
              <input
                type="radio"
                name="slide"
                id="c3"
                className={styles.inputField}
              />
              <label htmlFor="c3" className={styles.card}>
                <div className={styles.row}>
                  <div className={styles.icon}>3</div>
                  <div className={styles.description}>
                    <h4>Multi Todo App</h4>
                    <p>React + Redux used to make sub-lists todo (soon)</p>
                  </div>
                </div>
              </label>
              <input
                type="radio"
                name="slide"
                id="c4"
                className={styles.inputField}
              />
              <label htmlFor="c4" className={styles.card}>
                <div className={styles.row}>
                  <div className={styles.icon}>4</div>
                  <div className={styles.description}>
                    <h4>Food Fool</h4>
                    <p>A recipe blod using NEXT JS and Contentful (soon)</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
