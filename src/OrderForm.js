import React from 'react'

const OrderForm = props =>{

    return(
        <form className="container">

            {/* Customers Name */}
            <label
                htmlFor="name">
                    Name<span className="required">*</span><br></br>
                    <input
                        id="name"
                        name="name"
                        type="text"
                    />
            </label>

            <br></br>

            {/* Choose Pizza Size dropdown */}
            <label 
                htmlFor="size"
            >Choose Size<span className="required">*</span><br></br>
                <select 
                    id="size"
                    name="size"
                >
                    <option value="">Select</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra">Extra Large</option>
                </select>
            </label>

            <br></br>

            {/* Choose Pizza Sauce radio btns */}
            <label 
            >Choose Sauce<span className="required">*</span><br></br>
                
                <input
                    id="original" 
                    name="sauce" 
                    type="radio" 
                    value="original" 
                />
                <label htmlFor="original">Original Red</label><br></br>
                <input
                    id="garlic" 
                    name="sauce" 
                    type="radio" 
                    value="garlic" 
                />
                <label htmlFor="garlic">Garlic Ranch</label><br></br>
                <input
                    id="bbq" 
                    name="sauce" 
                    type="radio" 
                    value="bbq" 
                />
                <label htmlFor="bbq">BBQ Sauce</label><br></br>
                <input
                    id="spinach" 
                    name="sauce" 
                    type="radio" 
                    value="spinach" 
                />
                <label htmlFor="spinach">Spinach Alfredo</label>

            </label>

            <br></br>

            {/* Choose Toppings Checkboxes */}
            <label>Add Toppings<br></br>
                
                <input
                    id="pepperoni" 
                    name="pepperoni" 
                    type="checkbox" 
                /><label htmlFor="pepperoni">Pepperoni</label>
                <input
                    id="sausage" 
                    name="sausage" 
                    type="checkbox" 
                /><label htmlFor="sausage">Sausage</label><br></br>
                <input
                    id="cBacon" 
                    name="cBacon" 
                    type="checkbox" 
                /><label htmlFor="cBacon">Canadian Bacon</label>
                <input
                    id="onions" 
                    name="onions" 
                    type="checkbox" 
                /><label htmlFor="onions">Onions</label><br></br>
                <input
                    id="olives" 
                    name="olives" 
                    type="checkbox" 
                /><label htmlFor="olives">Black Olives</label>
                <input
                    id="pineapple" 
                    name="pineapple" 
                    type="checkbox" 
                /><label htmlFor="pineapple">Pineapple</label>

            </label>

            <br></br>

            {/* Special Instructions Textarea */}
            <label htmlFor="special">
                Special Instructions<br></br>
                <textarea
                    id="special"
                    name="special"
                    placeholder="Anything else you'd like to add?">
                </textarea>
            </label>

            <br></br>

            {/* Submit Order Btn */}
            <button type="submit">Place Order</button>

        </form>
    )
}

export default OrderForm