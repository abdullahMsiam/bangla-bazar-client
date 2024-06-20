import { useLoaderData, useNavigate, } from "react-router-dom";

const UpdateProduct = () => {

    const data = useLoaderData();
    const navigate = useNavigate();

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

        fetch(`https://bangla-bazar-server.onrender.com/products/${data?._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount > 0) {
                    alert("Update success")
                    navigate("/dashboard/all-products")

                }
            })
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl">Update product</h1>
            <div className="card shrink-0 w-full md:w-[600px] shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label"><span className="label-text">Product Name</span></label>
                        <input name="name" type="text" placeholder="name" defaultValue={data?.name} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Rating</span></label>
                        <input name="rating" type="text" defaultValue={data?.rating} placeholder="Ratings" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Discount</span></label>
                        <input name="discount" type="number" defaultValue={data?.discount} placeholder="Discount" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label"><span className="label-text">In stock</span></label>
                        <input name="stock" type="number" defaultValue={data?.stock} placeholder="available product count" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Price</span></label>
                        <input name="price" type="number" defaultValue={data?.price} placeholder="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Image Url</span></label>
                        <input name="image" type="text" defaultValue={data?.image_url} placeholder="image url" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-outline bg-white" type="submit" value="Update The product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;