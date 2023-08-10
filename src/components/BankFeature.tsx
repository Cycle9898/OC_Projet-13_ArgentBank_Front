type Props = {
    altText: string,
    iconURL: string,
    title: string,
    text: string
}

function BankFeature({ altText,iconURL,title,text }: Props) {
    return (
        <article className="feature-item">
            <img src={iconURL} alt={altText} className="feature-item__icon" />
            <h3 className="feature-item__title">{title}</h3>
            <p className="feature-item__text">{text}</p>
        </article>
    );
}

export default BankFeature;