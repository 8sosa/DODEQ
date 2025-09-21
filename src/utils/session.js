// utils/session.ts
export function getSessionId() {
  if (typeof window === "undefined") return ""; // SSR guard

  let id = localStorage.getItem("sessionId");
  if (!id) {
    id = crypto.randomUUID(); // generates unique ID
    localStorage.setItem("sessionId", id);
  }
  return id;
}
