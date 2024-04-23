import Input from "./Input";

const AddCoffee = () => {
  const fields = ['name', 'chef', 'supplier', 'taste', 'category', 'details', 'photoURL'];

  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoURL = form.photoURL.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photoURL };
    console.log(newCoffee);

    fetch('http://localhost:8000/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          // form.reset();
          // alert("This coffee is added to database successfully.");
        }
        else{
          alert("Something's wrong. Please try again.");
        }
      }
      )
  }

  return (
    <div>
      <div className="bg-[#F4F3F0] flex flex-col justify-center border lg:px-40 text-center">
        <div className="text-gray-700 text-[45px] font-normal font-['Rancho']">Add New Coffee</div>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        <form onSubmit={handleAddCoffee} className="coffee-input-form grid grid-cols-2 gap-x-6">
          {
            fields.map(input => <Input key={input} inputType={input} className='input-field' />)
          }
          <button className="input">Add Coffee</button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;