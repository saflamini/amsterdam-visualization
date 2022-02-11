import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
  query Visualization {
    accountTokenSnapshots(
      where: {token: "0x263026e7e53dbfdce5ae55ade22493f828922965", totalOutflowRate_gt: "0"}
      orderBy: totalOutflowRate
      orderDirection: desc
    ) {
      totalOutflowRate
      account {
        id
        outflows {
          receiver {
            id
          }
        }
      }
    }
  }
`;

export default function AccountTokens() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"><svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const accountTokenSnapshots = data.accountTokenSnapshots.slice(0, 4);
  console.log(accountTokenSnapshots);
  return (

    <div className={styles.grid}>
      {accountTokenSnapshots.map((account) => (
        <div key={account.totalOutflowRate} className={styles.card}>
          <h3><a href="#country-name" aria-hidden="true" className="aal_anchor" id="country-name"><svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>{account.totalOutflowRate}</h3>
          <p>
            {account.account.id}
          </p>
        </div>
      ))}
    </div>
  );
}