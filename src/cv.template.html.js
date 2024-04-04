const cv = (data, dists, { url }) =>
  `<!doctype html>
  <html lang="en">
    <partial name="head" data="${encodeURI(
      JSON.stringify({
        url,
        name: "cv",
        lang: "en",
        type: "cv",
        meta: {
          title: "CV",
          description: "CV",
        },
      }),
    )}"></partial>
    <body>
      <div class="wrapper">
        <header>
          <article>
            <h1>Jakub Sowiński</h1>
            <h3>
              <span class="architect-fg">architect</span
              ><span class="developer-fg">developer</span
              ><span class="leader-fg">leader</span
              ><span class="teacher-fg">teacher</span>
            </h3>
            <h4>
              <span
                ><a
                  href="https://www.google.com/maps/place/Warsaw"
                  target="_blank"
                  >Warsaw, Poland</a
                ></span
              ><span
                ><a href="https://swn.ski/" target="_blank">www.swn.ski</a></span
              ><span
                ><a href="mailto:j@swn.ski" target="_blank">j@swn.ski</a></span
              ><span>
                <a href="tel:+48730535018" target="_blank"
                  >+48 730-535-018</a
                ></span
              >
            </h4>
          </article>
        </header>
        <main>
          <section id="about">
            <h3>About me</h3>
            <div class="content">
              <div id="description">
                <p>
                  I am a highly skilled and driven software enthusiast who excels
                  in working with both computer and another human being. I have
                  over 15 years of experience in software development with
                  particular focus on full-stack web development, over 5 years of
                  experience in software architecture, and over 5 years of
                  experience in leadership and teaching with heavy focus on
                  programming and architecture.
                </p>
                <p>
                  I am looking for an interesting, meaningful project, which would
                  allow me to directly impact world for the better, be it through
                  the product itself, or through company culture and values, close
                  cooperation with my coworkers, sharing my knowledge and learning
                  from others, so that we all can grow.
                </p>
              </div>
              <div id="photo">
                <partial name="img" data="${encodeURI(
                  JSON.stringify({
                    src: "me1.jpg",
                    alt: data.labels["en"].pages.home.intro.imgAlt,
                    lazy: false,
                  }),
                )}"></partial>
              </div>
            </div>
          </section>
          <section id="workexp">
            <h3>Recent work experience</h3>
            <article>
              <div class="header">
                <h2>Solution Architect</h2>
                <h4>
                  <small
                    >April 2022 — January 2024 | StepStone Services in Warsaw,
                    Poland</small
                  >
                </h4>
                <small class="tags">
                  <span class="architect-bg">architect</span><span>soa</span
                  ><span>eda</span><span>microfrontends</span
                  ><span>design system</span><span>monorepo</span
                  ><span>javascript</span><span>nextjs</span><span>aws</span
                  ><span>kafka</span><span>wmf</span><span>bff</span
                  ><span>ci/cd</span><span>rfc</span><span>adr</span
                  ><span>tech radar</span><span>security</span
                  ><span>performance</span><span>a11y</span><span>i18n</span
                  ><span>l10n</span><span>architectural patterns</span
                  ><span>ddd</span><span>c4 model</span><span>archimate</span
                  ><span>jira</span><span>scrum</span><span>mentoring</span>
                </small>
              </div>
              <div class="content">
                <div>
                  <p>
                    As a solution architect in Stepstone, I was solely responsible
                    for designing, documenting, and governing implementation of
                    global approach for Stepstone's core product to frontend
                    development. The task was to create a solution that could
                    support tens of different brands across multiple continents
                    with the same codebase, highly integrated with configuration
                    store, data platform, and other projects that embodied
                    company's efforts towards globalization. The solution had to
                    take into account all concerns in regards to security,
                    performance, accessibility, internationalization,
                    releasability, scalability, and developers experience, among
                    other things. The task was completed with the help of
                    microfrontend approach with centralized templating solution
                    based on NextJS and centralized design systems build with
                    React and a little bit of Weback Module Federation.
                  </p>
                  <p>
                    Additionally, as a solution architect, I was involved in
                    recruitment, job interviews, peer-to-peer evaluations,
                    mentoring for developers, etc. I reported to director of
                    architecture, who reported directly to CTO, and I cooperated
                    with C-level leadership on a daily basis.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      Cooperation with all scrum teams in the project in regards
                      to frontend development
                    </li>
                    <li>Cooperation with internal client on C level</li>
                    <li>Cooperation with architecture department</li>
                    <li>Designing and documenting architecture</li>
                    <li>Negotiating requirements and solutions with business</li>
                    <li>
                      Explaining architecture to developers and governing
                      implementation
                    </li>
                    <li>Facilitating job interviews and internal evaluations</li>
                    <li>Facilitating internal trainings</li>
                  </ul>
                </div>
              </div>
            </article>
            <article>
              <div class="header">
                <h2>JavaScript Chapter Lead</h2>
                <h4>
                  <small
                    >July 2022 — January 2024 | StepStone Services in Warsaw,
                    Poland</small
                  >
                </h4>
                <small class="tags">
                  <span class="leader-bg">leader</span
                  ><span class="developer-bg">developer</span
                  ><span>javascript</span><span>typescript</span
                  ><span>nodejs</span><span>react</span><span>coaching</span
                  ><span>mentoring</span>
                </small>
              </div>
              <div class="content">
                <div>
                  <p>
                    JavaScript chapter lead was an additional role that I assumed
                    as an informal leader of Stepstone's community of JavaScript
                    developers, when the company was formalizing such initiatives
                    in the form of "chapters". The job was to build a community of
                    developers working with particular programming language, in
                    this case JavaScript, and help them become more efficient. It
                    included facilitating meetings, gathering feedback, defining
                    competency matrix, defining coding standards and good
                    practices, defining and evaluating trainings needs, organizing
                    trainings, creating employee development plans, and sharing
                    knowledge, among other things.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>Leading community of JavaScript developers</li>
                    <li>Defining and documenting competency matrix</li>
                    <li>
                      Defining and documenting coding standards and good practices
                    </li>
                    <li>Defining and evaluating trainings needs</li>
                    <li>Organizing trainings for developers</li>
                    <li>Creating and evaluating employee development plans</li>
                    <li>Writing tutorials for internal documentation</li>
                    <li>Writing articles for company's tech blog</li>
                  </ul>
                </div>
              </div>
            </article>
            <article>
              <div class="header">
                <br />
                <h2>Lecturer in Software Architecture</h2>
                <h4>
                  <small
                    >September 2021 — present | Polish-Japanese Academy of
                    Information Technology in Warsaw, Poland</small
                  >
                </h4>
                <small class="tags">
                  <span class="teacher-bg">teacher</span
                  ><span class="architect-bg">architect</span
                  ><span>design patterns</span><span>architectural patterns</span
                  ><span>soa</span><span>eda</span><span>microfrontends</span
                  ><span>ddd</span><span>dbc</span><span>uml</span
                  ><span>c4 model</span><span>zachmann</span><span>togaf</span>
                </small>
              </div>
              <div class="content">
                <div>
                  <p>
                    As a lecturer in software engineering at a university, I am
                    responsible for creating entire course for my students,
                    facilitating classes on a weekly basis (lectures and
                    laboratories), and assessing progress of my students through
                    homework and exams.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      Creating software architecture course for Master's students
                    </li>
                    <li>Facilitating classes (lectures and laboratories)</li>
                    <li>Evaluating students</li>
                  </ul>
                </div>
              </div>
            </article>
            <article>
              <div class="header">
                <h2>Computer Programming Teacher</h2>
                <h4>
                  <small
                    >September 2021 — June 2023 | Academic High School of
                    Polish-Japanese Academy of Information Technology in Warsaw,
                    Poland</small
                  >
                </h4>
                <small class="tags">
                  <span class="teacher-bg">teacher</span
                  ><span class="developer-bg">developer</span><span>java</span
                  ><span>python</span><span>javascript</span><span>oop</span
                  ><span>git</span>
                </small>
              </div>
              <div class="content">
                <div>
                  <p>
                    As a computer programming teacher in high school, I was
                    responsible for creating entire course for my students,
                    facilitating lessons on a weekly basis, and assessing progress
                    of my students through homework and exams, as well as helping
                    them with other challenges of a daily life, such as tying
                    their shoes.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      Creating computer programming course for high school
                      students
                    </li>
                    <li>Facilitating lessons</li>
                    <li>Evaluating students</li>
                  </ul>
                </div>
              </div>
            </article>
            <article>
              <div class="header">
                <h2>Software Architect</h2>
                <h4>
                  <small
                    >April 2019 — March 2022 | StepStone Services in Warsaw,
                    Poland</small
                  >
                </h4>
                <small class="tags">
                  <span class="architect-bg">architect</span><span>soa</span
                  ><span>eda</span><span>microfrontends</span
                  ><span>javascript</span><span>nextjs</span><span>aws</span
                  ><span>kafka</span><span>wmf</span><span>bff</span
                  ><span>ci/cd</span><span>rfc</span><span>adr</span
                  ><span>design patterns</span><span>architectural patterns</span
                  ><span>grafana</span><span>elk</span><span>datadog</span
                  ><span>dynatrace</span><span>ddd</span><span>c4 model</span
                  ><span>jira</span><span>scrum</span><span>mentoring</span>
                </small>
              </div>
              <div class="content">
                <div>
                  <p>
                    As a software architect in Stepstone, I mainly cooperated with
                    centralized architecture department, while supporting a number
                    of multi-national scrum teams, which worked on various parts
                    of Stepstone's core products. The job was multi-dimensional: I
                    was working with architecture team on defining and documenting
                    global architectural standards and guidelines; I was working
                    with product development teams on designing architecture for
                    their product, governing its implementation, making technical
                    decisions, and mentoring developers; I was working with
                    business on defining their goals and negotiating solutions,
                    while offering technical subject matter expertise.
                  </p>
                  <p>
                    Additionally, as a software architect, I was involved in
                    recruitment, job interviews, peer-to-peer evaluations,
                    mentoring for developers, among other things. I also remained
                    an informal leader of Stepstone's community of JavaScript
                    developers, in which I was responsible for defining and
                    guarding software development standards and guidelines.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>Cooperation with development teams</li>
                    <li>Cooperation with internal clients</li>
                    <li>Cooperation with architecture department</li>
                    <li>Designing and documenting architecture</li>
                    <li>Negotiating requirements and solutions with business</li>
                    <li>
                      Explaining architecture to developers and governing
                      implementation
                    </li>
                    <li>Leading community of JavaScript developers</li>
                    <li>Mentoring developers</li>
                    <li>Facilitating job interviews and internal evaluations</li>
                    <li>Facilitating internal trainings</li>
                    <li>
                      Giving talks on international software development
                      conferences
                    </li>
                    <li>Writing articles for company's tech blog</li>
                  </ul>
                </div>
              </div>
            </article>
            <article>
              <div class="header">
                <h2>Senior Software Engineer</h2>
                <h4>
                  <small
                    >September 2017 — March 2019 | StepStone Services in Warsaw,
                    Poland</small
                  >
                </h4>
                <small class="tags">
                  <span class="developer-bg">developer</span><span>soa</span
                  ><span>eda</span><span>html</span><span>css-in-js</span
                  ><span>javascript</span><span>typescript</span><span>react</span
                  ><span>nodejs</span><span>.net</span><span>mssql</span
                  ><span>nosql</span><span>wmf</span><span>bff</span
                  ><span>ssr</span><span>git</span><span>ci/cd</span
                  ><span>docker</span><span>kubernetes</span><span>nginx</span
                  ><span>design patterns</span><span>tdd</span><span>ddd</span
                  ><span>dbc</span><span>swagger</span><span>jira</span
                  ><span>scrum</span><span>coaching</span><span>mentoring</span>
                </small>
              </div>
              <div class="content">
                <div>
                  <p>
                    As a senior software engineer in Stepstone, I cooperated with
                    a number of multi-national scrum teams, which worked on
                    various parts of Stepstone's core products. At the time, the
                    project's codebase was mostly refactored to service-oriented
                    and event-driven architecture with React, TypeScript, NodeJS,
                    .NET, and RabbitMQ. It's also around that time that Stepstone
                    started transition of its frontend codebase to microfrontends,
                    and I took more interest in frontend development.
                  </p>
                  <p>
                    Additionally, as a senior software engineer, I was involved in
                    many tasks not directly related to software development, such
                    as recruitment and job interviews, peer-to-peer coachings and
                    evaluations, and close cooperation with architecture
                    department on establishing coding standards and guidelines. I
                    was also heavily involved in Stepstone's community of
                    JavaScript developers, leading meetings, facilitating
                    trainings, and giving talks, including those on external,
                    international software development conferences.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>Cooperation with development teams</li>
                    <li>Cooperation with internal clients</li>
                    <li>Cooperation with architecture department</li>
                    <li>Full-stack development</li>
                    <li>Monitoring and maintenance of the product</li>
                    <li>Quality assurance</li>
                    <li>Code reviews</li>
                    <li>Leading community of JavaScript developers</li>
                    <li>Coaching developers</li>
                    <li>Facilitating job interviews and internal evaluations</li>
                    <li>Facilitating internal trainings</li>
                    <li>
                      Giving talks on international software development
                      conferences
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <!-- </section>
          <section id="workexp2"> -->
            <h3><br />Other work experience</h3>
            <article style="margin: 0">
              <div class="header">
                <h4>
                  Software Engineer
                  <small
                    >July 2015 — August 2017 | StepStone Services in Warsaw,
                    Poland</small
                  >
                </h4>
                <small class="tags">
                  <span class="developer-bg">developer</span><span>monolith</span
                  ><span>html</span><span>sass</span><span>javascript</span
                  ><span>typescript</span><span>pwa</span><span>nodejs</span
                  ><span>php</span><span>adobe coldfusion</span><span>mssql</span
                  ><span>api</span><span>rabbitmq</span><span>git</span
                  ><span>ci/cd</span><span>docker</span><span>kubernetes</span
                  ><span>apache</span><span>tdd</span><span>ddd</span
                  ><span>dbc</span><span>swagger</span><span>jira</span
                  ><span>scrum</span>
                </small>
              </div>
              <!-- <div class="content">
                <div>
                  <p>
                    As a software engineer in Stepstone, I was a member of a
                    multi-national scrum team, which worked on various parts of
                    Stepstone's core products. At the time, the project's codebase
                    was a monolith implemented with Adobe Coldfusion. Therefore, I
                    went through a number of trainings, obtained Adobe Coldfusion
                    9 ACE certification, and participated in meticulous process of
                    careful refactor of the codebase to service-oriented and
                    event-driven architecture with various programming languages,
                    mostly TypeScript and PHP, all while developing and
                    maintaining the product.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>Work in a scrum team</li>
                    <li>
                      Cooperation with internal client on our next iteration
                    </li>
                    <li>Full-stack development</li>
                    <li>Monitoring and maintenance of the product</li>
                    <li>Quality assurance</li>
                    <li>Code reviews</li>
                  </ul>
                </div>
              </div> -->
            </article>
            <article style="margin: 0">
              <div class="header">
                <h4>
                  Software Engineer
                  <small
                    >October 2014 — July 2015 | Pretius in Warsaw, Poland</small
                  >
                </h4>
                <small class="tags">
                  <span class="developer-bg">developer</span><span>html</span
                  ><span>css</span><span>sass</span><span>javascript</span
                  ><span>jquery</span><span>plsql</span><span>oracle apex</span
                  ><span>bash</span><span>git</span><span>agile</span>
                </small>
              </div>
              <!-- <div class="content">
                <div>
                  <p>
                    As a software engineer in Pretius, I was a member of a small,
                    agile team, which was responsible for development and
                    maintenance of internal systems for large external clients
                    like Play and Orange. The job was mostly focused on JavaScript
                    and jQuery development on frontend and PL/SQL development on
                    backend, with heavy utilization of Oracle Application Express
                    and bash scripts.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>Work in an agile team</li>
                    <li>Contact with clients</li>
                    <li>Full-stack development</li>
                    <li>Monitoring and maintenance of the product</li>
                    <li>Quality assurance</li>
                    <li>Code reviews</li>
                  </ul>
                </div>
              </div> -->
            </article>
            <article style="margin: 0">
              <div class="header">
                <h4>
                  Founder, Lead Web Developer
                  <small
                    >September 2012 — June 2013 | RandomCREATION in Łódź,
                    Poland</small
                  >
                </h4>
                <small class="tags">
                  <span class="developer-bg">developer</span
                  ><span class="leader-bg">leader</span><span>html</span
                  ><span>css</span><span>javascript</span><span>php</span
                  ><span>.net</span><span>mysql</span><span>apache</span
                  ><span>git</span>
                </small>
              </div>
              <!-- <div class="content">
                <div>
                  <p>
                    During my time at the Technical University of Łódź, I have
                    founded a small IT startup, where I lead a team of a couple of
                    co-students. Together we designed, developed, hosted, and
                    maintained websites for small business owners, usually with
                    the help of HTML, CSS, JavaScript, PHP, .NET, MySQL, Apache,
                    and Git.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>Work in a team of developers</li>
                    <li>Contact with clients</li>
                    <li>UX design</li>
                    <li>Full-stack development with hosting</li>
                    <li>Quality assurance</li>
                    <li>Code reviews</li>
                  </ul>
                </div>
              </div> -->
            </article>
            <article style="margin: 0">
              <div class="header">
                <h3></h3>
                <h4>
                  Freelance Web Developer
                  <small>June 2009 — September 2014</small>
                </h4>
                <small class="tags">
                  <span class="developer-bg">developer</span><span>html</span
                  ><span>css</span><span>javascript</span><span>php</span
                  ><span>wordpress</span><span>mysql</span><span>apache</span>
                </small>
              </div>
              <!-- <div class="content">
                <div>
                  <p>
                    As a freelance web developer, I was working directly with my
                    clients, usually small business owners. I designed, developed,
                    hosted, and maintained small websites for them, usually with
                    the help of HTML, CSS, JavaScript, PHP, WordPress, MySQL.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>Contact with clients</li>
                    <li>UX design</li>
                    <li>Full-stack development with hosting</li>
                  </ul>
                </div>
              </div> -->
            </article>
          </section>
          <section id="education">
            <h3>Education</h3>
            <div class="content">
              <div>
                <div class="header">
                  <small
                    >2009 — 2013 | Technical University of Łódź, Poland</small
                  >
                  <h4>Information Technology</h4>
                </div>
                <ul>
                  <li>
                    Information Technology at International Faculty of Engineering
                  </li>
                  <li>Full time BSc studies in English</li>
                </ul>
              </div>
              <div>
                <div class="header">
                  <small
                    >2011 — 2012 | Fontys Hogeschool Eindhoven, Netherlands</small
                  >
                  <h4>Information Technology</h4>
                </div>
                <ul>
                  <li>
                    Software Engineering at Information and Communication
                    Technologies Faculty
                  </li>
                  <li>Full time BSc studies in English</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="trainings">
            <h3>Notable trainings</h3>
            <div class="content">
              <div>
                <h4>2022</h4>
                <ul>
                  <li>"Empower and Lead" by Bespoke Business Training Ltd</li>
                </ul>
                <h4>2021</h4>
                <ul>
                  <li>"Building applications with NestJS" by Sages</li>
                  <li>"Personal excellence" by THM</li>
                </ul>
                <h4>2020</h4>
                <ul>
                  <li>"Building business solutions" by THM</li>
                  <li>
                    "Reactive programming using React, Redux, and ES6" by Bottega
                    IT Minds
                  </li>
                </ul>
                <h4>2019</h4>
                <ul>
                  <li>"Event storming" by Bottega IT Minds</li>
                  <li>"TypeScript and React" by Bottega IT Minds</li>
                </ul>
                <h4>2018</h4>
                <ul>
                  <li>"Aware IT expert" by Bottega IT Minds</li>
                  <li>"Me as a mentor" by Bottega IT Minds</li>
                  <li>"Scrum experience" by Agile Rebels</li>
                </ul>
              </div>
              <div>
                <h4>2017</h4>
                <ul>
                  <li>"Commitment-based Management" by Vision Consulting</li>
                  <li>"Functional Testing" by Bottega IT Minds</li>
                  <li>
                    "How to prepare and give public speeches - practical
                    techniques" by Bottega IT Minds
                  </li>
                  <li>"Scrum basics" by Agile Rebels</li>
                </ul>
                <h4>2016</h4>
                <ul>
                  <li>Adobe ColdFusion 9 ACE certification</li>
                  <li>
                    "Acceptance testing of web applications" by Bottega IT Minds
                  </li>
                  <li>"Design and architectural patterns" by Bottega IT Minds</li>
                  <li>
                    "Design and implementation of REST API and microservices using
                    modern PHP stack" by Bottega IT Minds
                  </li>
                  <li>"TypeScript" by Bottega IT Minds</li>
                  <li>
                    "Test Driven Development and Code Review" by Bottega IT Minds
                  </li>
                  <li>
                    "Unit Testing and Test Driven Development" by Bottega IT Minds
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section id="contributions">
            <div class="content">
              <div>
                <h3>Notable talks</h3>
                <ul>
                  <li>
                    Micro frontends: how single codebase handle different brands
                    and devices @ Axel Springer Media & Tech Con 2023
                    (YouTube.com/AxelSpringerKnowledgeBase)
                  </li>
                  <a
                    href="https://www.youtube.com/watch?v=Il9O2vchlRg"
                    target="_blank"
                    ><li>
                      Micro frontends: extending SOA to frontend development @
                      Devoxx Poland 2019 (YouTube.com/Devoxx)
                    </li></a
                  >
                  <a
                    href="https://www.youtube.com/watch?v=lkl_C3CObp0"
                    target="_blank"
                    ><li>
                      Micro frontends: extending SOA to frontend development @
                      Infoshare 2019 (YouTube.com/Infoshare)
                    </li></a
                  >
                  <a
                    href="https://www.youtube.com/watch?v=n1Be_RzXzjQ"
                    target="_blank"
                    ><li>
                      Modern web development: React PWA with Push Notifications
                      (case study) @ Code Europe Autumn 2017
                      (YouTube.com/CodeEurope)
                    </li></a
                  >
                  <a
                    href="https://www.youtube.com/watch?v=Gl8vucNqtZQ"
                    target="_blank"
                    ><li>
                      Practical tips for JavaScript optimisation @ Code Europe
                      Spring 2017 (YouTube.com/CodeEurope)
                    </li></a
                  >
                </ul>
              </div>
              <div>
                <h3>Notable articles</h3>
                <ul>
                  <a
                    href="https://medium.com/stepstone-tech/microfrontends-extending-service-oriented-architecture-to-frontend-development-part-1-120b71c87b68"
                    target="_blank"
                    ><li>
                      Microfrontends — part 1: extending service-oriented
                      architecture to frontend development
                      (Medium.com/StepStone-Tech)
                    </li></a
                  >
                  <a
                    href="https://medium.com/stepstone-tech/microfrontends-part-2-integration-and-communication-3385bc242673"
                    target="_blank"
                    ><li>
                      Microfrontends — part 2: integration and communication
                      (Medium.com/StepStone-Tech)
                    </li></a
                  >
                  <a
                    href="https://medium.com/stepstone-tech/microfrontends-part-3-tools-and-processes-for-development-and-maintenance-50d47c41ddaf"
                    target="_blank"
                    ><li>
                      Microfrontends — part 3: tools and processes for development
                      and maintenance (Medium.com/StepStone-Tech)
                    </li></a
                  >
                </ul>
                <h3>Notable projects</h3>
                <ul>
                  <a href="https://github.com/soofka/swappi" target="_blank"
                    ><li>
                      Simple Web App Processing Interface (GitHub.com/soofka)
                    </li></a
                  >
                  <a
                    href="https://github.com/soofka/netlify-plugin-chromium"
                    target="_blank"
                    ><li>Chromium plugin for Netlify (GitHub.com/soofka)</li></a
                  >
                  <a
                    href="https://github.com/soofka/webpack-bundle-content-validator"
                    target="_blank"
                    ><li>
                      Content validator plugin for Webpack (GitHub.com/soofka)
                    </li></a
                  >
                </ul>
              </div>
            </div>
          </section>
          <section id="others">
            <div class="content">
              <div>
                <h3>Languages</h3>
                <ul>
                  <li>Polish: native language</li>
                  <li>English: full professional proficiency</li>
                  <li>French: basic proficiency</li>
                </ul>
              </div>
              <div>
                <h3>Miscellaneous</h3>
                <ul>
                  <li>Driving license cat. B</li>
                  <li>
                    Charity JavaScript teacher at
                    <a href="https://girlsjs.pl/" target="_blank">girlsjs.pl</a>
                  </li>
                  <li>I like music and space</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <p>
            <small
              ><em
                >I agree to the processing of personal data provided in this
                document for realising the recruitment process pursuant to the
                Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018,
                item 1000) and in agreement with Regulation (EU) 2016/679 of the
                European Parliament and of the Council of 27 April 2016 on the
                protection of natural persons with regard to the processing of
                personal data and on the free movement of such data, and repealing
                Directive 95/46/EC (General Data Protection Regulation).</em
              ></small
            >
          </p>
        </footer>
      </div>
    </body>
  </html>`;

export default {
  generate: (data) =>
    data.pages
      .filter((pageData) => pageData.template === "cv")
      .map((pageData) => ({
        name: pageData.id,
        content: (data, dists) => cv(data, dists, pageData),
        resetContentHash: true,
        contentHashSalt: pageData.id,
      })),
};
