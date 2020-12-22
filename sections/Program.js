import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const Program = () => (
  <Container className="bg-light section">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor'>Program</h2>
    <Table bordered>
      <tbody>
        <tr><th className='text-center table-primary' colSpan={2}>Session 1 (Chair: <em>...</em>)</th></tr>
        <tr><td className='text-nowrap'>11:10 - 11:20</td><td>Conference opening; <em>Adam Przybyłek</em></td></tr>
        <tr><td className='text-nowrap'>11:20 - 12:15</td><td>Agility Yesterday, Today & Tomorrow; <em>Philipp Diebold</em></td></tr>
        <tr><td className='text-nowrap'>12:15 - 13:00</td><td>Q&A:
          <ul>
            <li>Women in Agile: The Impact of Organizational Support for Women's Advancement on Teamwork Quality and Performance in Agile Software Development Teams<br /><em>Asli Yüksel Aksekili and Christoph Johann Stettina</em></li>
            <li>The state of Agile Software Development Teams during the Covid-19 pandemic<br /><em>Krzysztof Marek, Ewelina Wińska and Włodzimierz Dąbrowski</em></li>
            <li>The Sars-Cov-2 Pandemic and Agile Methodologies in Software Development: A Multiple Case Study in Germany<br /><em>Michael Neumann, Yevgen Bogdanov, Martin Lier and Lars Baumann</em></li>
            <li>Agile Project Development Facing Issues in Pandemic Situation the COVID-19<br /><em>Shariq Aziz Butt, Sanjay Misra, Muhammad Waqas Ajnum and Syed Areeb Hassan</em></li>
            <li>Implementing Lean Principles in Scrum to Adapt to Remote Work in a Covid-19 Impacted Software Team<br /><em>Leigh Griffin</em></li>
            <li>MSFL: A model for Fault Localization using Mutation-Spectra technique<br /><em>Arpita Dutta and Sangharatna Godboley</em></li>
          </ul>
        </td></tr>
        <tr><th className='text-center table-secondary' colSpan={2}>Coffee break </th></tr>
        <tr><th className='text-center table-primary' colSpan={2}>Session 2 (Chair: <em>...</em>)</th></tr>
        <tr><td className='text-nowrap'>14:00 - 14:55</td><td>Pair Programming: An Empirical investigation in an Agile Software Development environment <br /><em>Sanjay Misra</em></td></tr>
        <tr><td className='text-nowrap'>14:55	- 15:40</td><td>Q&A:
          <ul>
            <li>Achieving Agility in IT Project Portfolios – a systematic literature review<br /><em>Joseph Puthenpurackal Chakko, Tim Huygh and Steven De Haes</em></li>
            <li>A Systematic Literature Review on Implementing Non-functional Requirements in Agile Software Development: Issues and Facilitating Practices<br /><em>Aleksander Jarzębowicz and Paweł Weichbroth</em></li>
            <li>Product Roadmapping Processes for an Uncertain Market Environment: A Grey Literature Review<br /><em>Stefan Trieflinger, Jürgen Münch, Emre Bogazköy, Jan Schneider, Patrick Eißler, Bastian Roling and Dominic Lang</em></li>
            <li>Experience vs Data: A Case for More Data-informed Retrospective Activities<br /><em>Christoph Matthies and Franziska Dobrigkeit</em></li>
            <li>Reducing the uncertainty of agile software development using a random forest classification algorithm<br /><em>Ewelina Wińska, Estera Kot and Włodzimierz Dąbrowski</em></li>
            <li>Business-Oriented approach to Requirements Elicitation in a Scrum project<br /><em>Michał Sosnowski, Michał Bereza, Yen Ying Ng</em></li>
          </ul>
        </td></tr>
        <tr><td className='text-nowrap'>15:40 - 15:50</td><td>Conference closing </td></tr>
      </tbody>
    </Table>
  </Container>
)

export default Program
