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
                    <label
                    >Choose Sauce<span className="required">*</span><br></br>

                        <input
                            id="original"
                            name="sauce"
                            type="radio"
                            onChange={onInputChange}
                            value="original"
                        />
                        <label htmlFor="original">Original Red</label><br></br>
                        <input
                            id="garlic"
                            name="sauce"
                            type="radio"
                            onChange={onInputChange}
                            value="garlic"
                        />
                        <label htmlFor="garlic">Garlic Ranch</label><br></br>
                        <input
                            id="bbq"
                            name="sauce"
                            type="radio"
                            onChange={onInputChange}
                            value="bbq"
                        />
                        <label htmlFor="bbq">BBQ Sauce</label><br></br>
                        <input
                            id="spinach"
                            name="sauce"
                            type="radio"
                            onChange={onInputChange}
                            value="spinach"
                        />
                        <label htmlFor="spinach">Spinach Alfredo</label>

                    </label>
                </div>

                <br></br>

                {/* Choose Toppings Checkboxes */}
                <label>Add Toppings<br></br>

                    <input
                        id="pepperoni"
                        name="pepperoni"
                        type="checkbox"
                        onChange={onCheckboxChange} 
                        checked={values.toppings.pepperoni} 
                    /><label htmlFor="pepperoni">Pepperoni</label>
                    <input
                        id="sausage"
                        name="sausage"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.sausage}
                    /><label htmlFor="sausage">Sausage</label><br></br>
                    <input
                        id="cBacon"
                        name="cBacon"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.cBacon}
                    /><label htmlFor="cBacon">Canadian Bacon</label>
                    <input
                        id="onions"
                        name="onions"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.onions}
                    /><label htmlFor="onions">Onions</label><br></br>
                    <input
                        id="olives"
                        name="olives"
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.toppings.olives}
                    /><label htmlFor="olives">Black Olives</label>
                    <input
                        id="pineapple"
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
                        name="special"
                        placeholder="Anything else you'd like to add?"
                        onChange={onInputChange}
                        value={values.special}
                    ></textarea>
                </label>

                <br></br>

                {/* Submit Order Btn */}
                <button type="submit" disabled={disabled}>Place Order</button>

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