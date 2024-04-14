import Mountain1 from "../components/img/8.jpg";
import Mountain2 from "../components/img/9.jpg";
import Mountain3 from "../components/img/7.jpg";
import Mountain4 from "../components/img/6.jpg";
import "./DestinationStyles.css"
import DestinationData from "./DestinationData";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tour give youthe opportunity</p>
            <DestinationData
                heading="Taal Volcano, Batangas"
                text="Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations."
                className="first-des"
                img1={Mountain1}
                img2={Mountain2}
            />
            <DestinationData
                heading="Bali, Indonesia"
                text="Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations."
                className="first-des-reverse"
                img1={Mountain3}
                img2={Mountain4 }
            />
        </div>
    )
}
export default Destination;