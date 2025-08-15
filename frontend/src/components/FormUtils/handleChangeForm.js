
/**
 * Function to handle the change on a form field component to change value in memory
 * @param {*} formData the object with the information about the form fiels (name: value)
 * @param {*} setFormData a setter from react useState to update the form field object
 * @returns the handler function
 */
export function handleChange(formData, setFormData) {
    const handler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    return handler;
}