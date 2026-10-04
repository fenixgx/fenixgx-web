"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { SiteContent } from "@/lib/content";

type Props = { content: SiteContent };
type HeroSlide = {
  id: string;
  code: string;
  symbol: string;
  logoSrc?: string;
  logoType?: "wordmark" | "symbol";
  label: string;
  title: string;
  body: string;
  readouts: Array<{ label: string; value: string }>;
  href?: string;
};

function Logo({ dark = false }: { dark?: boolean }) {
  return <Image src={dark ? "/assets/fenixgx-emblem-dark.png" : "/assets/fenixgx-emblem.png"} alt="" width={1254} height={1254} className="logo-image" />;
}

function SectionHeading({ index, title, intro }: { index: string; title: string; intro: string }) {
  return <div className="section-heading"><span className="section-index">{index}</span><div><h2>{title}</h2><p>{intro}</p></div></div>;
}

export function FenixGxSite({ content }: Props) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      id: "identity",
      code: "FGX-01",
      symbol: "FGX",
      label: content.identity.module,
      title: "FenixG",
      body: content.identity.location,
      readouts: [
        { label: content.identity.products, value: "IAMenu / Taski" },
        { label: content.identity.system, value: "Operational" },
        { label: content.identity.infrastructure, value: "Nexus" },
      ],
    },
    ...content.products.items.slice(0, 3).map((product, index) => ({
      id: product.name.toLowerCase(),
      code: `0${index + 1}`,
      symbol: product.name === "IAMenu" ? "IAM" : product.name === "Taski" ? "TSK" : "NXS",
      logoSrc: product.name === "IAMenu" ? "/assets/iamenu-logo.svg" : product.name === "Taski" ? "/assets/taski-wordmark.svg" : "/assets/nexus-logo.svg",
      logoType: product.name === "Nexus" ? "symbol" as const : "wordmark" as const,
      label: product.label,
      title: product.name,
      body: product.description,
      readouts: product.data.map((value, readoutIndex) => ({ label: `0${readoutIndex + 1}`, value })),
      href: product.href,
    })),
    {
      id: "automation",
      code: "04",
      symbol: "AUT",
      logoSrc: "/assets/automation-logo.svg",
      logoType: "symbol",
      label: content.automation.label,
      title: content.automation.title,
      body: content.automation.description,
      readouts: content.automation.data.map((value, readoutIndex) => ({ label: `0${readoutIndex + 1}`, value })),
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 7200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    document.documentElement.lang = content.locale;
    const saved = window.localStorage.getItem("fenixgx-theme");
    if (saved === "light" || saved === "dark") {
      window.setTimeout(() => setTheme(saved), 0);
    }
  }, [content.locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("fenixgx-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");
  const currentSlide = slides[activeSlide];
  const currentSlideLabel = currentSlide.label.replace(/^\d+\s*·\s*/, "");

  return (
    <div className="site-shell">
      <header className="site-header wrap">
        <a className="brand" href={`/${content.locale}`} aria-label="FenixGx, volver al inicio">
          <span className="brand-mark" aria-hidden="true"><Logo dark /><span className="light-logo"><Logo /></span></span>
          <span>FenixGx</span><span className="brand-detail">Matriz de software propio</span>
        </a>
        <div className="header-right">
          <nav className="header-nav" aria-label="Navegación principal">
            <a href="#empresa">{content.nav.company}</a><a href="#productos">{content.nav.products}</a><a href="#ingenieria">{content.nav.engineering}</a><a href="#contacto">{content.nav.contact}</a>
          </nav>
          <a className="language-switch" href={content.locale === "es" ? "/en" : "/es"}>{content.languageLabel}</a>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}>{theme === "dark" ? "☼" : "●"}</button>
        </div>
      </header>

      <main id="inicio">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy"><span className="eyebrow">{content.hero.eyebrow}</span><h1 id="hero-title">{content.hero.title} <em>{content.hero.accent}</em></h1><p className="hero-lead">{content.hero.lead}</p><div className="hero-actions"><a className="button-link primary" href="#productos">{content.hero.products}<span aria-hidden="true">↘</span></a><a className="button-link" href="#ingenieria">{content.hero.engineering}<span aria-hidden="true">↘</span></a></div></div>
          <div className="hero-visual"><div className="logo-plate carousel-plate"><span className="plate-screw top-left" aria-hidden="true" /><span className="plate-screw bottom-right" aria-hidden="true" /><div className="plate-header"><span>{currentSlide.code} / {currentSlideLabel}</span><span className="plate-status">{content.identity.active}</span></div><div className={`logo-display module-display${currentSlide.logoType === "wordmark" ? " wordmark-display" : ""}`} key={currentSlide.id} aria-live="polite">
            {currentSlide.id === "identity" ? <div className="identity-emblem" aria-hidden="true"><Logo dark /><span className="light-logo"><Logo /></span></div> : <div className={`module-brand ${currentSlide.logoType ?? "symbol"}`} aria-hidden="true">{currentSlide.logoSrc ? <Image src={currentSlide.logoSrc} alt="" width={600} height={250} className="module-logo" /> : <><span>{currentSlide.symbol}</span><small>FGX / {currentSlide.code}</small></>}</div>}
            <div className={`identity-wordmark module-copy${currentSlide.logoType === "wordmark" ? " wordmark-copy" : ""}`}><div className={currentSlide.id === "identity" ? "identity-name" : currentSlide.logoType === "wordmark" ? "sr-only" : `module-title${currentSlide.id === "automation" ? " module-title-long" : ""}`}>{currentSlide.title}{currentSlide.id === "identity" && <span>X</span>}</div>{currentSlide.id === "identity" ? <span className="identity-company"><strong>{content.identity.company}</strong>{currentSlide.body}</span> : <><p className="module-description">{currentSlide.body}</p>{currentSlide.href && <a className="module-link" href={currentSlide.href} target="_blank" rel="noreferrer">{currentSlide.href.replace("https://", "")} ↗</a>}</>}</div>
          </div><div className="logo-readouts">{currentSlide.readouts.map((readout) => <div className="logo-readout" key={`${currentSlide.id}-${readout.label}`}><span>{readout.label}</span><strong>{readout.value}</strong></div>)}</div><div className="carousel-controls"><button className="carousel-arrow" type="button" onClick={() => setActiveSlide((current) => (current - 1 + slides.length) % slides.length)} aria-label={content.carousel.previous}>←</button><div className="carousel-dots" role="tablist" aria-label={content.carousel.select}>{slides.map((slide, index) => <button className={`carousel-dot${index === activeSlide ? " active" : ""}`} type="button" role="tab" aria-selected={index === activeSlide} aria-label={`${content.carousel.select}: ${slide.title}`} onClick={() => setActiveSlide(index)} key={slide.id} />)}</div><button className="carousel-arrow" type="button" onClick={() => setActiveSlide((current) => (current + 1) % slides.length)} aria-label={content.carousel.next}>→</button></div></div><p className="micro panel-caption">{currentSlide.id === "identity" ? content.identity.caption : `${currentSlide.label} · FenixGx`}</p></div>
        </section>

        <section className="section" id="empresa"><div className="wrap"><SectionHeading index={content.company.index} title={content.company.title} intro={content.company.intro} /><div className="identity-grid"><div className="identity-statement"><p>{content.company.statement} <span>{content.company.statementAccent}</span></p></div><div className="identity-note"><p>{content.company.note}</p><span className="micro">{content.company.noteMeta}</span></div></div><div className="principles">{content.company.principles.map((principle) => <article className="principle" key={principle.title}><strong>{principle.title}</strong><p>{principle.body}</p></article>)}</div></div></section>

        <section className="section" id="productos"><div className="wrap"><SectionHeading index={content.products.index} title={content.products.title} intro={content.products.intro} /><div className="products-layout"><ProductCard product={content.products.items[0]} /><div className="product-side"><ProductCard product={content.products.items[1]} /><ProductCard product={content.products.items[2]} /></div></div></div></section>

        <section className="section" id="ingenieria"><div className="wrap"><SectionHeading index={content.engineering.index} title={content.engineering.title} intro={content.engineering.intro} /><div className="engineering-grid"><div className="engineering-copy"><h3>{content.engineering.heading}</h3><p>{content.engineering.body}</p><span className="micro">{content.engineering.label}</span></div><div className="build-system">{content.engineering.steps.map((step, index) => <article className="build-step" key={step.title}><span className="build-step-number">{String(index + 1).padStart(2, "0")}</span><h4>{step.title}</h4><p>{step.body}</p></article>)}</div></div><div className="engineering-spec">{content.engineering.metrics.map((metric) => <div className="spec-cell" key={metric.label}><span className="data-label">{metric.label}</span><span className="data-value">{metric.value}</span></div>)}</div></div></section>

        <section className="section" id="contacto"><div className="wrap"><SectionHeading index={content.contact.index} title={content.contact.title} intro={content.contact.intro} /><div className="contact-grid"><div className="contact-statement"><h3>{content.contact.heading}</h3><p>{content.contact.body}</p></div><div className="contact-links"><a className="contact-link" href={`mailto:${content.contact.email}`}><span>{content.contact.email}</span><span aria-hidden="true">↗</span></a><a className="contact-link" href="https://www.linkedin.com/in/rodolfo-giannotti/" target="_blank" rel="noreferrer"><span>{content.contact.linkedin}</span><span aria-hidden="true">↗</span></a><a className="contact-link" href="https://github.com/fenixgx" target="_blank" rel="noreferrer"><span>{content.contact.github}</span><span aria-hidden="true">↗</span></a></div></div></div></section>
      </main>

      <footer className="site-footer wrap"><div className="footer-legal"><strong>FenixGx</strong> · {content.footer}</div><div className="footer-mark">FGX/</div></footer>
    </div>
  );
}

function ProductCard({ product }: { product: SiteContent["products"]["items"][number] }) {
  const card = <article className={`product-card${product.featured ? " featured" : ""}${product.internal ? " nexus" : ""}`}><div className="product-top"><div><span className="product-label">{product.label}</span><h3>{product.name}</h3><p className="product-description">{product.description}</p><div className="product-data">{product.data.map((item) => <span key={item}>{item}</span>)}</div></div><span className="product-number">{product.code}</span></div><div className="product-bottom">{product.internal ? <span className="internal-tag">No se vende · Se usa para construir</span> : <a className="product-link" href={product.href ?? "#"} target="_blank" rel="noreferrer">{product.href?.replace("https://", "")} <span aria-hidden="true">↗</span></a>}</div></article>;
  return card;
}
