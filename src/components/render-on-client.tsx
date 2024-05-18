"use client";

import { Fragment, PropsWithChildren, useEffect, useState } from "react";

interface RenderOnClientProps extends PropsWithChildren {
  valueToServerRendered?: string;
}

export function RenderOnClient({
  children,
  valueToServerRendered,
}: RenderOnClientProps): JSX.Element | null {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) return <Fragment>{children}</Fragment>;

  return <Fragment>{valueToServerRendered}</Fragment> ?? null;
}
