
export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-12"
      style={{
        background: "linear-gradient(180deg, var(--bg), var(--panel2))",
        color: "var(--text)",
        borderTop: "1px solid var(--nav-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <div
                aria-hidden
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                W
              </div>
              <div>
                <div style={{ color: "var(--accent-from)", fontWeight: 700 }}>Wellnex</div>
                <div style={{ color: "var(--muted)", fontSize: 13 }}>Systems</div>
              </div>
            </div>

            <p className="mt-4" style={{ color: "var(--muted)", maxWidth: 380 }}>
              Connecting people, providers and data for better outcomes — personalized, private and delightful.
            </p>

            <div className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
              <div>hello@wellnex.example</div>
              <div className="mt-1">+1 (555) 123-4567</div>
            </div>
          </div>

          <div className="flex gap-8 md:justify-center">
            <div>
              <h4 className="font-semibold mb-3" style={{ color: "var(--text)" }}>Product</h4>
              <ul style={{ color: "var(--muted)", lineHeight: 2 }}>
                <li><a href="/features" className="hover:underline" style={{ color: "var(--muted)" }}>Features</a></li>
                <li><a href="/apps" className="hover:underline" style={{ color: "var(--muted)" }}>Apps</a></li>
                <li><a href="/coming-soon" className="hover:underline" style={{ color: "var(--muted)" }}>Coming Soon</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3" style={{ color: "var(--text)" }}>Company</h4>
              <ul style={{ color: "var(--muted)", lineHeight: 2 }}>
                <li><a href="/about" className="hover:underline" style={{ color: "var(--muted)" }}>About</a></li>
                <li><a href="/contact" className="hover:underline" style={{ color: "var(--muted)" }}>Contact</a></li>
                <li><a href="/privacy" className="hover:underline" style={{ color: "var(--muted)" }}>Privacy</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold" style={{ color: "var(--text)" }}>Stay in the loop</h4>
            <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>Subscribe for product updates, invites and tips.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const el = e.currentTarget.querySelector("input");
                if (el && el.value) {
                  try { navigator.clipboard?.writeText(el.value); } catch {}
                  el.value = "";
                  alert("Thanks — we'll reach out (demo behaviour).");
                }
              }}
              className="mt-4 flex gap-2"
            >
              <input
                type="email"
                aria-label="Email for newsletter"
                placeholder="you@domain.com"
                className="flex-1 px-4 py-2 rounded-lg border outline-none"
                style={{
                  background: "var(--bg)",
                  color: "var(--text)",
                  borderColor: "var(--nav-border)",
                }}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg font-semibold"
                style={{
                  background: "linear-gradient(90deg,var(--accent-from),var(--accent-to))",
                  color: "black",
                }}
              >
                Subscribe
              </button>
            </form>

            <div className="mt-4 flex items-center gap-3" aria-hidden>
              <a href="#" className="rounded-full p-2" style={{ background: "transparent" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 4.01c-.7.31-1.45.52-2.24.62.8-.48 1.43-1.24 1.72-2.15-.74.44-1.57.76-2.44.94C18.3 2.5 17.1 2 15.78 2c-2.3 0-4.17 1.86-4.17 4.16 0 .33.04.65.11.96-3.46-.17-6.53-1.83-8.58-4.35-.36.62-.57 1.34-.57 2.1 0 1.45.74 2.73 1.87 3.48-.69-.02-1.34-.21-1.91-.52v.05c0 2.03 1.44 3.73 3.35 4.12-.35.09-.72.14-1.1.14-.27 0-.53-.03-.79-.07.53 1.64 2.06 2.83 3.88 2.86-1.43 1.12-3.24 1.79-5.2 1.79-.34 0-.68-.02-1.01-.06 1.86 1.2 4.07 1.9 6.44 1.9 7.72 0 11.95-6.4 11.95-11.94v-.54c.82-.6 1.53-1.35 2.09-2.21-.74.33-1.53.55-2.36.65.85-.51 1.49-1.31 1.8-2.27z" fill="currentColor" /></svg>
              </a>
              <a href="#" className="rounded-full p-2" style={{ background: "transparent" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14h-2v-6h2v6zm1-6h2.2v.9h.03c.3-.55 1.04-1.13 2.14-1.13 2.29 0 2.71 1.5 2.71 3.46V17h-2v-2.2c0-.52-.01-1.19-.72-1.19-.71 0-.82.55-.82 1.12V17h-2v-6z" fill="currentColor" /></svg>
              </a>
              <a href="#" className="rounded-full p-2" style={{ background: "transparent" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2.04c-5.49 0-9.96 4.47-9.96 9.96 0 4.41 2.86 8.15 6.83 9.46.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.116 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.59 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A9.97 9.97 0 0021.96 14c0-5.49-4.47-9.96-9.96-9.96z" fill="currentColor" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--nav-border)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div style={{ color: "var(--text2)" }}>© {new Date().getFullYear()} Wellnex Systems — All rights reserved.</div>
            <div style={{ color: "var(--text2)" }} className="flex gap-4">
              <a href="/terms" className="hover:underline">Terms</a>
              <a href="/privacy" className="hover:underline">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
