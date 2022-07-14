import Container from 'react-bootstrap/Container'

const About = () => (
  <Container className='section'>
    <a className='target' id='about'/>
    <h2 className='display-4 anchor'>About</h2>
    <p>
      The evolution of software development methods is driven by the perennial quest on how to organize projects for better productivity. Plan-driven methods recommend spending much effort and resources to comprehensively capture all requirements and elaborate a big up-front design. Although they succeeded in projects where all properties of the software system could be specified in detail, they were unable to meet the dynamism, unpredictability and changing conditions that characterize today's competitive business environment. Thereby, traditional methods were superseded by lightweight methods based on iterative and incremental software development, frequent feedback from the customer, and an agile mindset. Agile methods have not only acknowledged that business requirements change, but also that customers are unable to definitively express their needs up front. Accordingly, agile teams start with a small set of core requirements to initiate the project and develop a working product. This working product becomes the basis for further discussions with the customer and new features are incrementally deliver on top of it. Later on, the software industry also started to adopt practices from lean manufacturing as a means of further waste elimination by removing all non-value-adding activities.
    </p>
    <p>
      While agile as well as lean software development has already become mainstream in industry and a strong community has crystallized around the new way of thinking, making the transition to the new mindset is still challenging for many companies. Thereby, the practical implementation of Scrum, Kanban or other method often deviates from the proposed framework. Such misalignment usually hides some dysfunctions which, if removed, would allow the company to take full advantage of the agile method.
    </p>
    <p>
      Besides, even though agile methods were originally designed for single, small teams, many organizations have increasingly adopted them in large-scale projects with multiple development teams. Scaling agile software development is complex and brings new challenges, including:
    </p>
    <ul>
      <li>coordination and communication between teams;</li>
      <li>coordination of distributed projects;</li>
      <li>lack of up-front architecture;</li>
      <li>adoption of agile methods in units other than software development departments, such as product management, marketing, and sales.</li>
    </ul>
    <p>
      The objective of LASD is to extend the state-of-the-art in lean and agile software development and spread best practices and stories of successful transitions. Our conference has become a prominent forum where practitioners, researchers, and academics meet to share and discuss their concerns, experience, and research findings.
    </p>
  </Container>
)

export default About
