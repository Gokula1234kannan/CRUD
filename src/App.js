import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [inputData, setInputData]=useState({
    fname:'',
    lname:'',
    email:'',
    phone:''
  });

  const handleInputChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputData({...inputData, [name]:value});
  }

  const [savedData, setSavedData] = useState([]);

  const handleSubmit=()=>{
    if(isEditing){
      const tempArray = savedData.map((data,index)=>{
        return index === editIndex ? inputData:data;  
      })

      setSavedData(tempArray);
    }else{
      setSavedData([...savedData, inputData]);
      console.log(inputData);
    }

    setInputData({fname:'',
    lname:'',
    email:'',
    phone:''});
  }


  const handleDelete=(index)=>{

    console.log(index);
    const tempArray = [...savedData];
    tempArray.splice(index,1);
    setSavedData(tempArray)
  }

  const[isEditing,setIsEditing] = useState(false);

  const [editIndex,setEditIndex] = useState();


  const handleEdit=(index)=>{
    setIsEditing(true);
    setEditIndex(index);
    setInputData(savedData[index]);
  }

  return (
    <>
      <h1 className="heading">CRUD OPERATION </h1>
      <div className="container mt-4">
      
        <div className="row">
          {/* form */}
         
          <div className="col-6">
      
            <div class="mb-3">
              <input
                type="text"
                name="fname"
                placeholder="fname" 
                value={inputData.fname}
                className="form-control"
                onChange={handleInputChange} required
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="lname"
                placeholder="lname"
                value={inputData.lname}
                className="form-control"
                onChange={handleInputChange} required
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={inputData.email}
                className="form-control"
                onChange={handleInputChange} required
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                name="phone"
                placeholder="phone"
                className="form-control"
                value={inputData.phone}
                onChange={handleInputChange} required
              />
            </div>
           

            <div class="mb-3">
              <button
                type="submit"
                className="btn btn-primary inputbutton"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
      
      

          {/*table */}
          <div className="col-6">
            <div className="card overflow-auto">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>First</th>
                      <th>Last</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Settings</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedData.map((data, index) => {
                      return (
                        <tr>
                          <th>{index + 1}</th>
                          <td>{data.fname}</td>
                          <td>{data.lname}</td>
                          <td>{data.email}</td>
                          <td>{data.phone}</td>
                          <td>
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={() => handleEdit(index)}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              type="submit"
                              className="btn btn-danger"
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
