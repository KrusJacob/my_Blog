"use client";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       retry: 1,
  //     },
  //   },
  // });
  return (
    // <QueryClientProvider client={queryClient}>
    <SessionProvider>{children}</SessionProvider>
    // </QueryClientProvider>
  );
};
