import Container from 'react-bootstrap/Container'

const KeynoteSpeakers = () => (
  <Container className='section'>
    <a className='target' id='keynotes'/>
    <h2 className='display-4 anchor'>Keynotes</h2>

    <h3>Markus Borg</h3>
    <dl>
      <dt>Keynote title</dt>
      <dd>
        Agility in Software 2.0 - Notebook Interfaces and MLOps
      </dd>
      <dt>Short Biography</dt>
      <dd>Dr. Markus Borg is a senior researcher with RISE Research Institutes of Sweden AB. He is also an adjunct lecturer at Lund University from where he obtained a PhD in software engineering in 2015. His research interests include empirical software engineering, machine learning, and software testing. Before embarking on the research career, Markus worked at ABB as a software engineer in safety-critical process automation. Markus is also a board member of Swedsoft, an independent non-profit organization with the mission to increase the competitiveness of Swedish software.
      </dd>
    </dl>


    <h3>Raman Ramsin</h3>
    <dl>
      <dt>Keynote title</dt>
      <dd>
        The promises of model-driven development in an agile context
      </dd>
    </dl>


  </Container>
)

export default KeynoteSpeakers


//<h3>To be announced later...</h3>

/*

    <dl>
      <dt>Keynote title</dt>
      <dd></dd>

      <dt>Short Biography</dt>
      <dd>
      </dd>
    </dl>
*/


