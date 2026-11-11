import { currentNewsletter } from '../data/newsletterEditions';

export default function NewsletterPage() {
  return (
    <main className="bg-[#fffefa] text-[#171727]">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-8">
        <h1 className="text-2xl font-bold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          {currentNewsletter.title}
        </h1>
        <a href={currentNewsletter.url} className="text-sm font-bold text-[#6657c8] underline underline-offset-4">
          Open full-page reader
        </a>
      </div>
      <iframe
        src={currentNewsletter.url}
        title={`${currentNewsletter.title} interactive flipbook`}
        allow="fullscreen"
        allowFullScreen
        className="block w-full border-0"
        style={{ height: '100svh' }}
      />
    </main>
  );
}
