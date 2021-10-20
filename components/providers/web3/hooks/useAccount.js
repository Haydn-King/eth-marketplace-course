import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0x4dfc396a24dffc2e6e4219c8644e419ac92d01f3dd2de609d6bc7bd00911909b": true,
  "0x898044ce519a58483be2a41e8db5f45edf61849a3a4dc8d28b0a19ea3beeb07e": true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      if (!account) {
        throw new Error(
          "Cannot retreive an account. Please, refresh the browser!"
        );
      }
      return account;
    }
  );

  useEffect(() => {
    const mutator = (accounts) => mutate(accounts[0] ?? null);
    provider?.on("accountsChanged", mutator);

    return () => {
      provider?.removeListener("accountsChanged", mutator);
    };
  }, [provider]);

  return {
    data,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};
