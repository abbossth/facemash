import Card from "../card/card"

const CardContainer = () => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default CardContainer