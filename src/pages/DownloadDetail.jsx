import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Download as DownloadIcon,
  ExternalLink,
  FileText,
} from "lucide-react";
import downloadData from "../data/downloadData";

export default function DownloadDetail() {
  const { slug } = useParams();
  const item = downloadData.find((n) => n.slug === slug);

  if (!item) {
    return (
      <main className="min-h-screen bg-white">
        <section className="container-x mx-auto max-w-2xl py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-puRed">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-heading font-heading">
            Document not found
          </h1>
          <p className="mt-3 text-base text-body/60">
            The link may be broken, or the document has been removed.
          </p>
          <Link
            to="/download"
            className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-puRed transition-colors hover:text-puDark"
          >
            <ArrowLeft
              size={18}
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Back to all downloads
          </Link>
        </section>
      </main>
    );
  }

  const isPdf = item.type === "pdf";
  const directHref = isPdf ? item.pdf : item.link;

  return (
    <main className="min-h-screen bg-white">
      <section className="section">
        <div className="container-x mx-auto max-w-7xl">
          <Link
            to="/download"
            className="group inline-flex items-center gap-2 text-base font-medium text-body/60 transition-colors hover:text-puRed"
          >
            <ArrowLeft
              size={18}
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Back to downloads
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:gap-16">
            <div className="lg:pt-2">
              <h1 className="text-2xl font-bold leading-[1.3] tracking-tight text-heading font-heading md:text-3xl lg:text-[2rem]">
                {item.title}
              </h1>

              {item.subtitle && (
                <p className="mt-6 text-base leading-relaxed text-body/75 md:text-[17px]">
                  {item.subtitle}
                </p>
              )}

              <p className="mt-6 text-sm text-body/55">{item.date}</p>
              {directHref && (
                <a
                  href={directHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-puDark px-7 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-puRed"
                >
                  {isPdf ? (
                    <>
                      <DownloadIcon size={17} aria-hidden />
                      Download PDF
                    </>
                  ) : (
                    <>
                      <ExternalLink size={17} aria-hidden />
                      Open Link
                    </>
                  )}
                </a>
              )}
            </div>
            <div>
              {isPdf && item.pdf && (
                <div className="overflow-hidden rounded-2xl border border-heading/10 bg-[#fafaf7] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)]">
                  <iframe
                    src={item.pdf}
                    title={item.title}
                    className="h-[85vh] min-h-[640px] w-full"
                  />
                </div>
              )}

              {item.type === "link" && (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-heading/10 bg-[#fafaf7] p-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-puRed/10 text-puRed">
                    <FileText size={28} aria-hidden />
                  </span>
                  <p className="mt-6 text-lg font-semibold text-heading">
                    This document is hosted externally
                  </p>
                  <p className="mt-2 text-sm text-body/65">
                    Click the button to open it in a new tab.
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-puDark px-7 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-puRed"
                  >
                    <ExternalLink size={17} aria-hidden />
                    Open Link
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
