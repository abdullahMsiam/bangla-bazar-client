
const AddProduct = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const price = form.price.value;
        const stock = form.stock.value;
        const discount = form.discount.value;
        const rating = form.rating.value;
        const image_url = form.image.value;

        const product = { name, price, stock, discount, rating, image_url, }


        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Process success!");
                }
            })
    }

    const defaultImg = "https://img.freepik.com/free-psd/fruits-composition-isolated_23-2151360726.jpg?t=st=1718862173~exp=1718865773~hmac=21e0f10a8fd75c279cab2a8591c3627ecc46f204891656d4df60a90818abe2bf&w=826";
    return (
        <div className="flex flex-col items-center justify-center bg-white mb-4">
            <h1 className="text-3xl mt-4">Add a product</h1>
            <div className="card shrink-0 w-full md:w-[600px] shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label"><span className="label-text">Product Name</span></label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Rating</span></label>
                        <input name="rating" type="text" placeholder="Ratings" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Discount</span></label>
                        <input name="discount" type="number" placeholder="Discount" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label"><span className="label-text">In stock</span></label>
                        <input name="stock" type="number" placeholder="available product count" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Price</span></label>
                        <input name="price" type="number" placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Image Url</span></label>
                        <input name="image" type="text" defaultValue={defaultImg} placeholder="image url" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-success btn-outline bg-white" type="submit" value="Add product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;