import React from 'react'

const OrderForm = props => {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
        orders
    } = props

    return (
        <div>
            <form className="container" onSubmit={onSubmit}>

                {/* Customers Name */}
                <label
                    htmlFor="name">
                    Name<span className="required">*</span><br></br>
                    <input
                        id="name"
                        data-cy="name"
                        name="name"
                        type="text"
                        onChange={onInputChange}
                        value={values.name}
                    />
                </label>
                {errors.name.length > 2 ? (<p className="error">{errors.name}</p>) : null}

                <br></br>

                {/* Choose Pizza Size dropdown */}
                <label
                    htmlFor="size"
                >Choose Size<span className="required">*</span><br></br>
                    <select
                        id="size"
                        data-cy="size"
                        name="size"
                        onChange={onInputChange}
                        value={values.size}
                    >
                        <option value="">Select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="extra">Extra Large</option>
                    </select>
                </label>
                {errors.size.length > 0 ? (<p className="error">{errors.size}</p>) : null}
                <br></br>

                {/* Choose Pizza Sauce radio btns */}
                <div>
                    <p>Choose Sauce</p>

                    <input
                        id="original"
                        data-cy="original"
                        name="sauce"
                        type="radio"
                        onChange={onInputChange}
                        value="original"
                        checked={values.sauce === 'original' ? true : false}
                    />
                    <label htmlFor="original">Original Red</label><br></br>
                    <input
                        id="garlic"
                        data-cy="garlic"
                        name="sauce"
                        type="radio"
                        onChange={onInputChange}
                        value="garlic"
                        checked={values.sauce === 'garlic' ? true : false}
                    />
                    <label htmlFor="garlic">Garlic Ranch</label><br></br>
                    <input
                        id="bbq"
                        data-cy="bbq"
                        name="sauce"
                        type="radio"
                        onChange={onInputChange}
                        value="bbq"
                        checked={values.sauce === 'bbq' ? true : false}
                    />
                    <label htmlFor="bbq">BBQ Sauce</label><br></br>
                    <input
                        id="spinach"
                        data-cy="spinach"
                        name="sauce"
                        type="radio"
                        onChange={onInputChange}
                        value="spinach"
                        checked={values.sauce === 'spinach' ? true : false}
                    />
                    <label htmlFor="spinach">Spinach Alfredo</label>


                </div>

                <br></br>

                {/* Choose Toppings Checkboxes */}
                <label>Add Toppings<br></br>

                    <input
                        id="pepperoni"
                        data-cy="pepperoni"
                        name="pepperoni"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.pepperoni}
                    /><label htmlFor="pepperoni">Pepperoni</label>
                    <input
                        id="sausage"
                        data-cy="sausage"
                        name="sausage"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.sausage}
                    /><label htmlFor="sausage">Sausage</label><br></br>
                    <input
                        id="cBacon"
                        data-cy="cBacon"
                        name="cBacon"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.cBacon}
                    /><label htmlFor="cBacon">Canadian Bacon</label>
                    <input
                        id="onions"
                        data-cy="onions"
                        name="onions"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.onions}
                    /><label htmlFor="onions">Onions</label><br></br>
                    <input
                        id="olives"
                        data-cy="olives"
                        name="olives"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.olives}
                    /><label htmlFor="olives">Black Olives</label>
                    <input
                        id="pineapple"
                        data-cy="pineapple"
                        name="pineapple"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.pineapple}
                    /><label htmlFor="pineapple">Pineapple</label>

                </label>

                <br></br>

                {/* Special Instructions Textarea */}
                <label htmlFor="special">
                    Special Instructions<br></br>
                    <textarea
                        id="special"
                        data-cy="special"
                        name="special"
                        placeholder="Anything else you'd like to add?"
                        onChange={onInputChange}
                        value={values.special}
                    ></textarea>
                </label>

                <br></br>

                {/* Submit Order Btn */}
                <button
                    data-cy="submit"
                    type="submit"
                    disabled={disabled}
                >
                    Place Order
                </button>

            </form>

            <div className="container">
                <h3>Order List:</h3>
                <pre>
                    {JSON.stringify(orders, null, 1)}
                </pre>
            </div>

        </div>
    )
}

export default OrderForm