import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CoffeeCart = ({ coffee }) => {
  const { _id, name, taste, category, details, photoURL } = coffee;

  const handleDelete = _id =>{
    fetch(`http://localhost:8000/coffee/${_id}`, {method:'delete'})
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount === 1){
        alert("One item deleted successfully.");
      }
      else{
        alert("Deletion Failed");
      }
    })
  }



  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={photoURL} alt={`${name} image`} /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{taste}</p>
        <p>{category}</p>
        <p>{details}</p>

        <div className="card-actions justify-end">
          <div className="join join-vertical lg:join-horizontal">
            <button className="btn join-item bg-green-500">View</button>
            <Link className="btn join-item bg-blue-500" to={`/updatecoffee/${_id}`}>Edit</Link>
            <button onClick={()=>handleDelete(_id)} className="btn join-item bg-red-500">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCart.propTypes = {
  coffee: PropTypes.object
}

export default CoffeeCart;