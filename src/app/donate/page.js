const monthlyDonationOptions = [
  {
    amount: 1,
    url: "https://buy.stripe.com/cN2bMv9khcRU61G001",
  },
  {
    amount: 10,
    url: "https://buy.stripe.com/7sI4k32VTf02gGkaEG",
  },
  {
    amount: 25,
    url: "https://buy.stripe.com/28oaIr7c9f0289O7sv",
  },
  {
    amount: 50,
    url: "https://buy.stripe.com/4gwaIr6854lo3Ty4gk",
  },
  {
    amount: 100,
    url: "https://buy.stripe.com/9AQ3fZcwt0581Lq8wB",
  },
  {
    amount: 250,
    url: "https://buy.stripe.com/9AQaIr0NL058bm0eV0",
  },
  {
    amount: 500,
    url: "https://buy.stripe.com/fZeeYH3ZX2dgcq4dQX",
  },
  {
    amount: 1000,
    url: "https://buy.stripe.com/5kAg2L5415pscq4dQY",
  },
];

export default function Donate() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <p className="text-2xl">
          Unnamed Group relies on donations to keep our projects running. As a
          registered non-profit, all donations are used to fund our projects and
          pay for our running costs.
        </p>
        <p className="text-2xl">
          There are a couple of ways you can donate to us. You can either make a
          one-off donation, or you can set up a monthly recurring donation.
        </p>
      </header>

      <article
        id="singleDonation"
        className="flex flex-col space-y-4 text-justify"
      >
        <h2 className="text-2xl font-bold">Single Donations</h2>
        <p>
          To make a single donation, simply{" "}
          <a
            href="https://donate.stripe.com/5kA6sbbsp2dggGkbII"
            className="text-yellow-300 underline"
          >
            click here
          </a>{" "}
          and select the amount you wish to donate.
        </p>
      </article>
      <article
        id="monthlyDonations"
        className="flex flex-col space-y-4 text-justify"
      >
        <h2 className="text-2xl font-bold">Monthly Donations</h2>
        <p>
          To make a monthly donation, simply select the amount you wish to give
          from the options below.
        </p>
        <p>
          If you wish to donate a different amount monthly, please{" "}
          <a
            href="mailto:donations@unnamed.group"
            className="text-yellow-300 underline"
          >
            contact us
          </a>{" "}
          and we will set up a custom donation link for you.
        </p>
        <ul className="flex flex-col space-y-4">
          {monthlyDonationOptions.map((option) => (
            <li key={option.amount}>
              <a
                href={option.url}
                className="text-yellow-300 underline"
                target="_blank"
                rel="noreferrer"
              >
                Donate <b>£{option.amount}</b> monthly
              </a>
            </li>
          ))}
        </ul>
        <p>
          <b>Already donating monthly?</b> You can{" "}
          <a
            href="https://billing.stripe.com/p/login/14k5mideO5y15cQ8ww"
            className="text-yellow-300 underline"
            target="_blank"
            rel="noreferrer"
          >
            manage your subscription
          </a>{" "}
          on Stripe.
        </p>
      </article>
    </div>
  );
}
