import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../components/img/8.jpg";
import Trip2 from "../components/img/9.jpg";
import Trip3 from "../components/img/7.jpg";



function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations." 
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Bali"
                    text="Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations." 
                />
                <TripData
                    image={Trip3}
                    heading="Trip in Malaysia"
                    text="Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations.Just type lorem in html to generate a paragraph of dummy text. Control how much text is generated with a number suffix, such as lorem10 to generate 10 words of dummy text. You can also combine lorem with other Emmet abbreviations." 
                />
            </div>
        </div>
    );
}

export default Trip;