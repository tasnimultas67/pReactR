import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className='flex justify-center items-center flex-col h-[100vh]'>
            <h1 className='text-4xl font-bold '>Error</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={handleBack} className='mt-5 border py-2 px-4 rounded bg-indigo-600 text-white border-indigo-600'>Back to Home</button>
        </div>
    );
};

export default Error;