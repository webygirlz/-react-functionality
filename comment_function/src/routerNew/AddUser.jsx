import { Form } from "react-router-dom"
function AddUser() {
  return (
    <div>
      <h1>Add user</h1>
      <Form method="post">
        <label>
            Name:<input type="text" name="name" required/>
        </label>
        <br/>
        <label>
            Email:<input type="email" name="email" required/>
        </label><br/>
        <button type="submit">Add user</button>
      </Form>
    </div>
  )
}
export default AddUser;