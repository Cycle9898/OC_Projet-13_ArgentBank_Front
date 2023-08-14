type Props = {
    accountTitle: string,
    amount: number,
    amountDescription: string
}

function AccountOverview({ accountTitle,amount,amountDescription }: Props) {
    return (
        <section className="account">
            <div className="account__content">
                <h3 className="account__content__title">{accountTitle}</h3>

                <p className="account__content__amount">
                    {amount.toLocaleString("en-US",{ style: "currency",currency: "USD" })}
                </p>

                <p className="account__content__description">{amountDescription}</p>
            </div>

            <div className="account__content cta">
                <button className="account__content__transaction-btn">View transactions</button>
            </div>
        </section>
    );
}

export default AccountOverview;