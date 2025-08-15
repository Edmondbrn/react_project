import FormField from "../FormUtils/FormField";


function LoginForm() {


    return (
        <div className='p-3 bg-info'>
            <div className='d-flex justify-content-center align-items-center min-vh-100'>
                <div className='container border border-2 border-black rounded w-50 p-3 shadow p-3 mb-5 bg-body'>
                    <h2 className='text-center'>Login page</h2>   

                    <FormField
                        label = "Mail"
                        name = "email"
                        type = "text"
                        value = ""

                    />


                </div> 
            </div>
        </div>
    );

}

export default LoginForm;