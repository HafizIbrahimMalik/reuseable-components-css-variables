import './ProductListing.scss'
import CardListing from '../../ui/card-listing/CardListing'
function ProductListing() {
    let data = [
        {
            name: 'Arslan',
            age: 27,
            cnic: 1231234
        },
        {
            name: 'Ali',
            age: 22,
            cnic: 435
        },
        {
            name: 'Ibrahim',
            age: 2,
            cnic: 3456
        }
    ]
    return (
        <>
                <CardListing data={data}>All Lisiting</CardListing>
                <CardListing data={data}>featured Lsitign</CardListing>
                <CardListing data={data}>Recent Listing</CardListing>
                <CardListing data={data}>Global lisitninfg</CardListing>
        </>
    )
}
export default ProductListing