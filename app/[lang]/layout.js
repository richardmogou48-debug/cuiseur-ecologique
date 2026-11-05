import "../globals.css";
import Link from "next/link";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import { dict, PHONES, WA } from "../../lib/dictionary";

const head = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-head" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return { title: dict[lang].meta.title, description: dict[lang].meta.desc };
}

export default async function Layout({ children, params }) {
  const { lang } = await params;
  const d = dict[lang];
  const other = lang === "fr" ? "en" : "fr";
  return (
    <html lang={lang} className={`${head.variable} ${body.variable}`}>
      <body>
        <header className="bar">
          <Link href={`/${lang}`} className="brand">
            <img src="/logo.jpg" alt="" width="44" height="44" />
            <span>Cuiseur Écologique</span>
          </Link>
          <nav aria-label="Menu">
            <Link href={`/${lang}`}>{d.nav.home}</Link>
            <Link href={`/${lang}/partenariats`}>{d.nav.partners}</Link>
            <Link href={`/${lang}/boutique`} className="pill">{d.nav.shop}</Link>
            <Link href={`/${other}`} className="lang" hrefLang={other}>{other.toUpperCase()}</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="foot">
          <p>{d.footer}</p>
          <p>
            <a href={WA}>WhatsApp</a>
            {PHONES.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
            ))}
          </p>
        </footer>
      </body>
    </html>
  );
}
