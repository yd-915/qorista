export const RELAYS = [
  "wss://relay.current.fyi",
  "wss://nostr.bitcoiner.social",
  "wss://nos.lol/",
  "wss://relay.nostr.info",
  "wss://relay.snort.social",
  "wss://offchain.pub/",
  // "wss://nostr.nostrelay.org",
  // "wss://relay.nostr.ch",
  // "wss://nostr.onsats.org",
  // "wss://nostr-relay.wlvs.space",
  // "wss://nostr.zebedee.cloud",
];

export const HOST = "https://blogstack.io";

export const DUMMY_PROFILE_API = (seed: string) => {
  const style:
    | "adventurer"
    | "adventurer-neutral"
    | "avataaars"
    | "avataaars-neutral"
    | "big-ears"
    | "big-ears-neutral"
    | "big-smile"
    | "bottts"
    | "bottts-neutral"
    | "croodles"
    | "croodles-neutral"
    | "fun-emoji"
    | "icons"
    | "identicon"
    | "initials"
    | "lorelei"
    | "lorelei-neutral"
    | "micah"
    | "miniavs"
    | "open-peeps"
    | "personas"
    | "pixel-art"
    | "pixel-art-neutral" = "identicon";
  return `https://api.dicebear.com/5.x/${style}/svg?seed=${seed}`;
};

export const VALIDATION = {
  required: "Required",
};
