"use client";

import { ReactNode } from "react";

import StoreProvider from "@/state/redux";

const Providers = ({ children }: { children: ReactNode }) => (
  <StoreProvider>{children}</StoreProvider>
);

export { Providers };
