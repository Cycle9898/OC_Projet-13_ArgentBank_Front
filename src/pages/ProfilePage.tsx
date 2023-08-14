import AccountOverview from "../components/AccountOverview";
import { userAccounts } from "../data/mockedAccounts";

function ProfilePage() {
    return (
        <main className="bg-dark">
            <div className="profile-header">
                <h1>Welcome back<br /><span style={{ color: "red" }}>TODO fetch name</span>!</h1>
                <button className="profile-header__edit-button">Edit Name</button>
            </div>

            <h2 className="sr-only">Accounts</h2>

            {userAccounts.map(account => <AccountOverview
                key={account.id}
                accountTitle={account.accountTitle}
                amount={account.amount}
                amountDescription={account.amountDescription} />)}
        </main>
    );
}

export default ProfilePage;