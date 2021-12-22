import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'


const Program = () => (
  <Container className="bg-light section">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor'>Program</h2>
    <p>Time zone of the conference: GMT+1 (Central European Standard Time)</p>

	
    <Table bordered>
      <tbody>	
        <tr className='text-center table-primary'><th>Saturday, Jan. 22</th><th>Session 1 (Chair: <em>...</em>)</th></tr>
		<tr><td className='text-nowrap'>11:05 - 11:10</td><td>Connectivity and Webex testing</td></tr>
        <tr><td className='text-nowrap'>11:10 - 11:20</td><td>Conference opening; <em>Adam Przybyłek</em></td></tr>
        <tr><td className='text-nowrap'>11:20 - 12:15</td><td>Promises of Model-Driven Development in an Agile Context; <em>Raman Ramsin</em></td></tr>
        <tr><td className='text-nowrap'>12:15 - 13:00</td><td>Q&A:
          <ul>
			<li><a href='https://youtu.be/N07nq7xH7g0'>How a 4-day Work Week and Remote Work affect Agile Software Development Teams</a><br /><em>Julia Topp, Jan Hendrik Hille, Michael Neumann and David Mötefindt</em></li>
			<li><a href=''>Modeling and model transformation as a service: Towards an agile approach to model-driven development</a><br /><em>Adel Vahdati and Raman Ramsin</em></li>
			<li><a href=''>Towards Agile Mutation Testing using Branch Coverage based Prioritization Technique</a><br /><em>Sangharatna Godboley and Durga Prasad Mohapatra</em></li>
			<li><a href=''>Agility based Coverage Improvement</a><br /><em>Swadhin Kumar Barisal, Arpita Dutta, Sangharatna Godboley, Bibhudatta Sahoo and Durga Prasad Mohapatra</em></li>
			<li><a href=''>A Complete Unit Test Framework for Agile Software Development</a><br /><em>Arpita Dutta</em></li>
          </ul>
        </td></tr>
        <tr><th className='text-center table-secondary' colSpan={2}>Break </th></tr>
        <tr className='text-center table-primary'><th>Saturday, Jan. 22</th><th>Session 2 (Chair: <em>...</em>)</th></tr>
        <tr><td className='text-nowrap'>14:00 - 14:55</td><td>Agility in Software 2.0 – Notebook Interfaces and MLOps with Buttresses and Rebars <br /><em>Markus Borg</em></td></tr>
        <tr><td className='text-nowrap'>14:55 - 15:40</td><td>Q&A:
          <ul>
			<li><a href=''>Impact of Turkish National Culture on Agile Software Development in Turkey</a><br /><em>Aysegul Gelmis, Necmettin Ozkan, Ali J. Ahmad and Mehmet Guray Guler</em></li>
			<li><a href='https://youtu.be/MfIs3ADWNuQ'>The Integrated List of Agile Practices - A Tertiary Study</a><br /><em>Michael Neumann</em></li>
			<li><a href=''>Develop sustainable software with a lean ISO 14001 setup facilitated by the efiS framework</a><br /><em>Alexander Poth and Elisabeth Nunweiler</em></li>
			<li><a href=''>Agile Teams Working from Home during the Covid-19 Pandemic: A Literature Review on New Advantages and Challenges</a><br /><em>Necmettin Ozkan, Oya Erdil and Mehmet Şahin Gök</em></li>
			<li><a href=''>Effort Estimation in Agile Software Development: A Exploratory Study of Practitioners' Perspective</a><br /><em>Sandeep Rc, Mary Sánchez-Gordón, Ricardo Colomo-Palacios and Monica Kristiansen</em></li>
			<li><a href='https://youtu.be/VKmxyvLQm5w'>Project Management issues while using Agile Methodology</a><br /><em>Shariq Aziz Butt, Piñeres Espitia G, Paola Ariza-Colpas and Muhammad Imran Tariq</em></li>
          </ul>
        </td></tr>
        <tr><td className='text-nowrap'>15:40 - 15:50</td><td>Conference closing </td></tr>
      </tbody>
    </Table>

  </Container>
)

export default Program


/*
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
*/

