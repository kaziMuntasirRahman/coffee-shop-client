import { useLoaderData } from "react-router-dom";
import Input from "./Input";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {_id} = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const updatedCoffee = { name, chef, supplier, taste, category, details, photoURL };
    console.log(updatedCoffee);

    fetch(`http://localhost:8000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data) {
          // form.reset();
          alert("This coffee is updated to database successfully.");
        }
        else{
          alert("Something's wrong. Please try again.");
        }
      }
      )
  }


  return (
    <div>
      <div>
        <div className="bg-[#F4F3F0] flex flex-col justify-center border lg:px-40 text-center">
          <div className="text-gray-700 text-[45px] font-normal">Update Coffee Detail of: <span className="font-['Rancho']">{name}</span></div>
          <form onSubmit={handleUpdateCoffee} className="coffee-input-form grid grid-cols-2 gap-x-6">
            <Input inputType="name" className='input-field' />
            <Input inputType="chef" className='input-field' />
            <Input inputType="supplier" className='input-field' />
            <Input inputType="taste" className='input-field' />
            <Input inputType="category" className='input-field' />
            <Input inputType="details" className='input-field' />
            <Input inputType="photoURL" className='input-field' />
            <button className="input">Update Details Coffee</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;