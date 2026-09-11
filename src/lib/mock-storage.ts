import { useCallback, useEffect, useState } from "react";

export interface UserProfile {
  name: string;
  email: string;
}

export interface Preferences {
  market: "NSE";
  theme: "light" | "dark";
  notifications: boolean;
}

const keys = {
  profile: "stocksignal-profile",
  session: "stocksignal-session",
  watchlist: "stocksignal-watchlist",
  preferences: "stocksignal-preferences",
};

const defaults: Preferences = { market: "NSE", theme: "light", notifications: true };

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("stocksignal-storage", { detail: key }));
}

export function useStoredState<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(fallback);

  useEffect(() => {
    setValue(read(key, fallback));
    const sync = () => setValue(read(key, fallback));
    window.addEventListener("storage", sync);
    window.addEventListener("stocksignal-storage", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("stocksignal-storage", sync);
    };
  }, [key]);

  const update = useCallback((next: T | ((current: T) => T)) => {
    setValue((current) => {
      const resolved = typeof next === "function" ? (next as (current: T) => T)(current) : next;
      write(key, resolved);
      return resolved;
    });
  }, [key]);

  return [value, update] as const;
}

export const useProfile = () => useStoredState<UserProfile>(keys.profile, { name: "Student User", email: "student@example.com" });
export const useSession = () => useStoredState(keys.session, false);
export const useWatchlist = () => useStoredState<string[]>(keys.watchlist, ["RELIANCE", "TCS", "INFY", "HDFCBANK"]);
export const usePreferences = () => useStoredState<Preferences>(keys.preferences, defaults);
