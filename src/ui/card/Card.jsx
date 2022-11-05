import Button from '../button/Button'
import './Card.scss'
function Card({ data }) {
    return (
        <>
            <div className="card-container">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <p><b>Name: </b>{data.name}</p>
                    <p><b>age: </b>{data.age}</p>
                    <p><b>CNIC: </b>{data.cnic}</p>
                </div>
                <div className='btn-container'>
                    <Button paramClass={'btn-cancel'} >cancel</Button>
                    <Button paramClass={'btn-success'}>Done</Button>
                    <Button paramClass={'btn-warning'}>beware</Button>
                </div>
            </div>
        </>
    )
}
export default Card