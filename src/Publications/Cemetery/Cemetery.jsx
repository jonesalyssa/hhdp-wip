import React from "react";
import CemeteryCover from "./CemeteryCover.jpeg";
import "./Cemetery.css";

const Cemetery = () => {
  return (
    <main className="cemetery-page">
      <section className="cemetery-hero">
        <div className="cemetery-hero-inner">
          <div className="cemetery-kicker">
            <span className="cemetery-kicker-line" />
            ORIGINAL COMMENTARY / LAND MANAGEMENT
          </div>

          <h1>What the Dead Can Teach Us About Land Management</h1>

          <p className="cemetery-deck">
            America's historic cemeteries reveal an overlooked relationship
            between conservation, cultural preservation, and the landscapes we
            leave behind.
          </p>

          <div className="cemetery-byline">
            <span>BY ALYSSA JONES</span>
            <span className="cemetery-byline-divider">/</span>
            <span>OCTOBER 2026</span>
          </div>
        </div>
      </section>

      <div className="cemetery-feature-image">
        <img src={CemeteryCover} alt="Historic cemetery landscape" />
        <span className="cemetery-image-caption">
          LANDSCAPES OF MEMORY / CONSERVATION BY CONSEQUENCE
        </span>
      </div>

      <article className="cemetery-article">
        <div className="cemetery-article-meta">
          <span>THE ESSAY</span>
          <span className="cemetery-meta-rule" />
          <span>LAND MANAGEMENT & CONSERVATION</span>
        </div>

        <div className="cemetery-prose">
          <p className="cemetery-lead">
            Americans spend a considerable amount of time in October telling
            stories about the dead. We visit haunted houses, watch horror
            movies, and some even wander through graveyards with EMF readers
            hoping to encounter a lost soul. We think of cemeteries as sites to
            grieve and remember our loved ones, mostly associating them with
            death. However, these plots of land serve a greater ecological
            purpose that often goes unrealized. The cultural value we have
            placed on our dead has become an overlooked influence on municipal
            conservation efforts and public land management. Americans are the
            most effective conservationists when we die.
          </p>

          <p>
            Cemeteries cover roughly{" "}
            <a
              href="https://folklife.si.edu/magazine/cemeteries-burials-american-landscape"
              target="_blank"
              rel="noopener noreferrer"
            >
              2 million acres of land
            </a>{" "}
            across the nation. It seems far-fetched, but consider how much land
            we must preserve because we decided to bury our loved ones there.
          </p>

          <p>
            In the early 19th century, America's urbanization faced a problem.{" "}
            <a
              href="https://friendsofmountmoriahcemetery.org/cemeteries-as-windows-into-american-history/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Church cemeteries were overcrowded
            </a>
            , and it became increasingly difficult to develop around burial
            space in growing communities. We needed a solution, and we needed it
            fast. That solution would not only transform how Americans buried
            the dead but would also change how urban Americans experienced
            nature for future generations.
          </p>

          <p>
            Cemeteries were planned in rural areas to avoid taking up valuable
            space in cities. In 1831,{" "}
            <a
              href="https://mountauburn.org/history/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mount Auburn Cemetery opened
            </a>{" "}
            just outside of Boston, Massachusetts. There were winding walkways,
            beautiful hills, and managed landscapes. What was intended to be a
            dignified resting place where the living could grieve and honor the
            dead became a recreation site. Bostonians visited the cemetery to{" "}
            <a
              href="https://www.nps.gov/places/mount-auburn-cemetery.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              escape the city
            </a>{" "}
            for a walk or to enjoy the scenic beauty. It essentially served the
            purpose of a modern neighborhood park.
          </p>

          <p>
            In fact, America’s rural cemetery movement greatly{" "}
            <a
              href="https://www.americanforests.org/article/in-the-garden-cemetery-the-revival-of-americas-first-urban-parks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              inspired the development
            </a>{" "}
            of municipal parks. More than a century{" "}
            <a
              href="https://www.fs.usda.gov/emc/nfma/includes/musya60.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              before modern framework
            </a>{" "}
            for multiple-use lands was formalized in federal policy, urban
            Americans practiced a version of it among the headstones.
          </p>
        </div>

        <aside className="cemetery-pullquote">
          <span className="cemetery-quote-symbol">“</span>
          <blockquote>
            Americans are the most effective conservationists when we die.
          </blockquote>
        </aside>

        <div className="cemetery-prose">
          <p>
            As cities expanded, many historic{" "}
            <a
              href="https://folklife.si.edu/magazine/cemeteries-burials-american-landscape"
              target="_blank"
              rel="noopener noreferrer"
            >
              cemeteries remained relatively unchanged
            </a>
            . Neighborhoods, roads, and infrastructure developed around local
            graveyards, preserving the landscapes created to hold the dead. Over
            the years, these{" "}
            <a
              href="https://www.nationalgeographic.com/animals/article/cemeteries-home-to-diverse-plants-animals"
              target="_blank"
              rel="noopener noreferrer"
            >
              spaces have become
            </a>{" "}
            small ecosystems supporting biodiversity, mature vegetation, and
            habitats for insects and small woodland animals.
          </p>

          <p>
            There is a contradiction we must recognize. While some older
            cemeteries preserve green space, the chemicals used in the{" "}
            <a
              href="https://www.cremation.green/embalming-fluid-environment-impact/"
              target="_blank"
              rel="noopener noreferrer"
            >
              embalming process
            </a>
            ,{" "}
            <a
              href="https://earthfuneral.com/resources/table-how-your-funeral-impacts-the-environment"
              target="_blank"
              rel="noopener noreferrer"
            >
              materials used for caskets
            </a>
            , and even{" "}
            <a
              href="https://www.nps.gov/articles/000/cemetery-preservation-course-landscapes-and-vegetation.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              fertilizers, pesticides, and fuel
            </a>{" "}
            used to maintain the grounds may carry environmental risks.
          </p>

          <p>
            Americans today debate which forests to harvest, which farmland to
            convert to data centers, and which tribal landmarks to preserve.
            Cemeteries, however, have a unique expectation of permanence because
            of the cultural value we place on respecting our dead's final
            resting places.
          </p>

          <p>The value of these sites extends beyond ecology.</p>

          <p>
            Historic cemeteries are vital for preserving evidence of families
            and communities who may otherwise be forgotten.{" "}
            <a
              href="https://www.mountvernon.org/preservation/archaeology/slave-burial-ground-research/why-is-archaeology-at-the-burial-ground-so-important"
              target="_blank"
              rel="noopener noreferrer"
            >
              Burial grounds
            </a>{" "}
            for enslaved people, Indigenous communities, and other marginalized
            groups are especially important because there may be no other
            documentation of their existence.
          </p>

          <p>
            Graveyards may simultaneously be nature preserves, historical
            archives, and cultural landmarks. They demonstrate how land can
            serve one purpose while providing unexpected benefits beyond its
            original purpose.
          </p>

          <p>
            Production and development are inevitable and necessary. Forests
            must be managed, farmland must be cultivated, and infrastructure
            must be developed. As industrialization and development continue, we
            must recognize the inherent ecological value of working landscapes,
            even when they lack the cultural and sentimental significance we
            assign to cemeteries.
          </p>

          <p className="cemetery-conclusion">
            Our collective respect for natural landscapes shouldn't stop at the
            cemetery gates. If we can recognize the ecological value of land we
            dedicate to the dead, we should be equally capable of recognizing it
            in the land used by the living.
          </p>

          <p>
            This Halloween, we should worry less about what's lurking beneath
            the ground and pay more attention to what's growing around historic
            headstones.
          </p>
        </div>
      </article>

      {/* <section className="cemetery-author">
        <div className="cemetery-author-inner">
          <div className="cemetery-author-label">
            <span>ABOUT THE AUTHOR</span>
            <span className="cemetery-author-line" />
          </div>
          <div className="cemetery-author-content">
            <h2>
              Alyssa Jones<span>.</span>
            </h2>
            <p>
              Alyssa Jones is the Principal of{" "}
              <a href="https://hillhavendigital.com/">Hill & Haven</a>, a
              communications and digital content production firm. She also
              serves as an Associate at{" "}
              <a href="https://yourredbridge.com/">Red Bridge</a> and is a
              current Master of Natural Resources student at Virginia Tech.
            </p>
          </div>
        </div>
      </section> */}

      {/* <section className="cemetery-end">
        <div className="cemetery-end-inner">
          <span>HILL & HAVEN / ORIGINAL COMMENTARY</span>
          <h2>
            Ideas worth exploring.
            <br />
            <em>Stories worth telling.</em>
          </h2>
          <a href="/">
            EXPLORE HILL & HAVEN <span>↗</span>
          </a>
        </div>
      </section> */}
    </main>
  );
};

export default Cemetery;
