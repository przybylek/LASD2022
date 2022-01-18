import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/*
import Moment from 'react-bootstrap/Moment';
*/

const Program = () => (
  <Container className="bg-light section pb-4">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor my-4'>Program and Proceedings</h2>

    <Row className="justify-content-center">
      <Col xs lg="1"> 
      </Col>

      <Col xs lg="2"> 
        <Image fluid src='/LNBIP_LASD22.jpg' alt='LNBIP_LASD22'/>
      </Col>
      <Col>
        <p>
	<h3>Lean and Agile Software Development</h3>
	<h4>6th International Conference, LASD 2022, Virtual Event, January 22, 2022, Proceedings</h4>
	<h3>Free online access to <a href="https://link.springer.com/book/10.1007/978-3-030-94238-0">LNBIP, volume 438</a></h3>          
        </p>
      </Col>
      <Col xs lg="1"> 
      </Col>

    </Row>

    <p className='my-4'>Time zone of the conference: GMT+1 (Central European Standard Time)</p>

	
    <Table bordered>
      <tbody>	
        <tr className='text-center table-primary'><th>Saturday, Jan. 22</th><th>Session 1 (Chair: <em>...</em>)</th></tr>
		<tr><td className='text-nowrap'>11:05 - 11:10</td><td>Connectivity and Webex testing</td></tr>
        <tr><td className='text-nowrap'>11:10 - 11:20</td><td>Conference opening; <em>Adam Przybyłek</em></td></tr>
        <tr><td className='text-nowrap'>11:20 - 12:15</td><td>Promises of Model-Driven Development in an Agile Context; <em>Raman Ramsin</em></td></tr>
        <tr><td className='text-nowrap'>12:15 - 13:00</td><td>Q&A:
		      <ul>
			<li><a href='https://youtu.be/N07nq7xH7g0'>How a 4-day Work Week and Remote Work affect Agile Software Development Teams</a><br /><em>Julia Topp, Jan Hendrik Hille, Michael Neumann and David Mötefindt</em></li>
			<li><a href='https://youtu.be/acn0UhbAIHM'>Modeling and model transformation as a service: Towards an agile approach to model-driven development</a><br /><em>Adel Vahdati and Raman Ramsin</em></li>
			<li><a href='https://drive.google.com/drive/folders/1-RtCBEX3ler-M6iLfXj0HhjXCAQ9yduV?usp=sharing'>Towards Agile Mutation Testing using Branch Coverage based Prioritization Technique</a><br /><em>Sangharatna Godboley and Durga Prasad Mohapatra</em></li>
			<li><a href='https://youtu.be/K_9SeOx5NWo'>Agility based Coverage Improvement</a><br /><em>Swadhin Kumar Barisal, Arpita Dutta, Sangharatna Godboley, Bibhudatta Sahoo and Durga Prasad Mohapatra</em></li>
			<li><a href='https://youtu.be/kKoVr_mh1lE'>A Complete Unit Test Framework for Agile Software Development</a><br /><em>Arpita Dutta</em></li>
		      </ul>
        </td></tr>
        <tr><th className='text-center table-secondary' colSpan={2}>Break </th></tr>
        <tr className='text-center table-primary'><th>Saturday, Jan. 22</th><th>Session 2 (Chair: <em>...</em>)</th></tr>
        <tr><td className='text-nowrap'>14:00 - 14:55</td><td>Agility in Software 2.0 – Notebook Interfaces and MLOps with Buttresses and Rebars <br /><em>Markus Borg</em></td></tr>
        <tr><td className='text-nowrap'>14:55 - 15:40</td><td>Q&A:
		      <ul>
			<li><a href=''>Impact of Turkish National Culture on Agile Software Development in Turkey</a><br /><em>Aysegul Gelmis, Necmettin Ozkan, Ali J. Ahmad and Mehmet Guray Guler</em></li>
			<li><a href='https://youtu.be/MfIs3ADWNuQ'>The Integrated List of Agile Practices - A Tertiary Study</a><br /><em>Michael Neumann</em></li>
			<li><a href='https://youtu.be/kICMBmkRgyE'>Develop sustainable software with a lean ISO 14001 setup facilitated by the efiS framework</a><br /><em>Alexander Poth and Elisabeth Nunweiler</em></li>
			<li><a href='https://youtu.be/nsXcI6fpjyw'>Agile Teams Working from Home during the Covid-19 Pandemic: A Literature Review on New Advantages and Challenges</a><br /><em>Necmettin Ozkan, Oya Erdil and Mehmet Şahin Gök</em></li>
			<li><a href='https://youtu.be/BLRPJS77Aq4'>Effort Estimation in Agile Software Development: A Exploratory Study of Practitioners’ Perspective</a><br /><em>Sandeep Rc, Mary Sánchez-Gordón, Ricardo Colomo-Palacios and Monica Kristiansen</em></li>
			<li><a href='https://youtu.be/VKmxyvLQm5w'>Project Management issues while using Agile Methodology</a><br /><em>Shariq Aziz Butt, Piñeres Espitia G, Paola Ariza-Colpas and Muhammad Imran Tariq</em></li>
		      </ul>
        </td></tr>
        <tr><td className='text-nowrap'>15:40 - 15:50</td><td>Conference closing; <em>Ivan Luković</em>
			<ul>
			<li>Papers selected for post-conference publication in <a href="http://www.comsis.org">ComSIS</a> (IF: 1.167) and <a href="https://www.journals.elsevier.com/journal-of-computer-languages">Cola</a> (IF: 1.271)</li>
			<li>Other opportunities for 2022: <a href="https://adbis2022.polito.it/">MADEISD@ADBIS</a>, <a href="https://www.fedcsis.org/2022/mdasd">MDASD@FedCSIS</a>, <a href="https://www.fedcsis.org/2022/pers">PeRS@FedCSIS</a></li>		
			</ul></td></tr>
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

