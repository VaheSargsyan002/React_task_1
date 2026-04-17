type FetchError = Error & {
  info?: unknown;
  status?: number;
};

export const fetcher = async <T>(...args: [RequestInfo, any?]): Promise<T> => {
  const res = await fetch(...args);

  if (!res.ok) {
    const error: FetchError = new Error(
      "An error occured while fetching the data",
    );
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};
