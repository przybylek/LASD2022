const PeopleList = ({ people }) => (
  <ul>
    {people.map((person) =>
      <li key={person.join()} className='my-2'>
        <p className='mb-0'>
          <strong>{person.slice(0, 2).join(', ')}</strong>
        </p>
        {person.slice(2).join(', ')}
      </li>
    )}
  </ul>
)

export default PeopleList
