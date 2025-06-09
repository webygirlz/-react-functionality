import {Link, useLoaderData} from 'react-router-dom';

function Home() {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      this is home page 
      <ul>
      {users?.map((item,index)=>(
        <li key={index}>{item.firstName}</li>
      ))}
      </ul>
      <Link to='add-user'>Add user</Link>
    </div>
  )
}
export default Home;