"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import { theme } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => {
    const emotionCache = createCache({ key: "css", prepend: true });
    emotionCache.compat = true;

    const prevInsert = emotionCache.insert;
    let inserted: string[] = [];

    emotionCache.insert = (...args) => {
      const serialized = args[1];
      if (emotionCache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    // Expose flush for useServerInsertedHTML via the cache object.
    (
      emotionCache as typeof emotionCache & { __flush?: () => string[] }
    ).__flush = () => {
      const prev = inserted;
      inserted = [];
      return prev;
    };

    return emotionCache;
  });

  useServerInsertedHTML(() => {
    const flush = (
      cache as typeof cache & { __flush?: () => string[] }
    ).__flush;
    const names = flush?.() ?? [];
    if (names.length === 0) return null;

    let styles = "";
    for (const name of names) {
      const value = cache.inserted[name];
      if (typeof value === "string") {
        styles += value;
      }
    }

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
