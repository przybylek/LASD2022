const PeopleList = ({ people }) => (
  <ul className="fa-ul">
    {people.map((person) =>
      <li key={person.join()} className='my-2'>
        <i className="fas fa-li fa-user"/>
        <p className='mb-0'>
          <strong>{person.slice(0, 2).join(', ')}</strong>
        </p>
        {person.slice(2).join(', ')}
      </li>
    )}
  </ul>
)

export default PeopleList
