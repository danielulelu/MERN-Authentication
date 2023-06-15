import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner
            animation="border"
            role="status"
            style={{
                width: '100px', height: '100vh', margin: 'auto',  
            }}
        ></Spinner>
    )
}

export default Loader;