import './CardListing.scss'
import Card from '../card/Card'
function CardListing({ children, data }) {
    return (
        <>
            <h1>{children}</h1>
            <div className="card-wrapper">
                {data.map((item, index) => {
                    return <Card key={index} data={item} />
                })
                }
            </div>
        </>
    )
}
export default CardListing