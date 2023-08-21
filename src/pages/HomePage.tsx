import HeroBanner from "../components/HeroBanner";
import BankFeature from "../components/BankFeature";
import chatIcon from "../assets/icon/icon-chat.png";
import moneyIcon from "../assets/icon/icon-money.png";
import securityIcon from "../assets/icon/icon-security.png";

type FeaturesData = {
    id: number,
    altText: string,
    iconURL: string,
    title: string,
    text: string
}

function HomePage() {
    // Static data that need to be displayed on Home Page
    const featuresData: FeaturesData[] = [
        {
            id: 1,
            altText: "Chat Icon",
            iconURL: chatIcon,
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            id: 2,
            altText: "Money Icon",
            iconURL: moneyIcon,
            title: "More savings means higher rates",
            text: "The more you save with us, the higher your interest rate will be!"
        },
        {
            id: 3,
            altText: "Security Icon",
            iconURL: securityIcon,
            title: "Security you can trust",
            text: "We use top of the line encryption to make sure your data and money is always safe."
        }
    ];

    return (
        <main>
            <HeroBanner />

            <section className="features">
                <h2 className="sr-only">Features</h2>

                {featuresData.map(feature => <BankFeature key={feature.id}
                    altText={feature.altText}
                    iconURL={feature.iconURL}
                    title={feature.title}
                    text={feature.text} />)}
            </section>
        </main>
    )
}

export default HomePage;