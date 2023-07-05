import { useNavigate, Link } from "react-router-dom";

export const ButtonBack = () => {

    return (
        <div className='wrapper-back-button'>
            <Link to='/' className='button-back'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 25 24"
                    fill='none'
                >
                    <line
                        x1="1.35355"
                        y1="0.646447"
                        x2="24.3536"
                        y2="23.6464"
                        stroke="black"
                    />
                    <line
                        y1="-0.5"
                        x2="32.5269"
                        y2="-0.5"
                        transform="matrix(-0.707107 0.707107 0.707107 0.707107 24 1)"
                        stroke="black"
                    />
                </svg></Link>
        </div>
    )
}


export const ButtonHome = () => {
    const navigate = useNavigate();

    return (
        <div className='wrapper-back-button'>
            <button type='button' className='button-home' onClick={() => {
                    navigate('/', {replace: true})
                }}>Home</button>
        </div>
    )
}