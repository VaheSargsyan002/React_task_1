import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

type QuoteResponse = {
  quote: string;
  author: string;
};

function QuoteBox() {
  const { data, error, isLoading } = useSWR<QuoteResponse>(
    "https://dummyjson.com/quotes/random",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      refreshWhenOffline: false,
    },
  );

  if (isLoading) {
    return (
      <article className="card quote-box">
        <p className="section-label">Today&apos;s Quote</p>
        <p className="quote-state">Loading quote...</p>
      </article>
    );
  }

  if (error) {
    return (
      <article className="card quote-box">
        <p className="section-label">Today&apos;s Quote</p>
        <p className="quote-state">Could not load quote.</p>
      </article>
    );
  }

  return (
    <article className="card quote-box">
      <p className="section-label">Today&apos;s Quote</p>
      <h3>Daily Quote</h3>
      <p className="quote-text">{data?.quote}</p>
      <small className="quote-author">{data?.author}</small>
    </article>
  );
}

export default QuoteBox;
