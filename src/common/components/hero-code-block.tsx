export async function HeroCodeBlock() {
  return (
    <>
      <div className="relative w-full rounded-xl p-0.5">
        <div className="code-border-anim" />
        <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#0a0a0f_0,transparent_85%),radial-gradient(at_49%_30%,#0a0a0f_0,transparent_85%),radial-gradient(at_14%_26%,#0a0a0f_0,transparent_85%),radial-gradient(at_0%_64%,#1e293b_0,transparent_85%),radial-gradient(at_41%_94%,#8842C0_0,transparent_85%),radial-gradient(at_100%_99%,#ec4899_0,transparent_85%)] p-6 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]">
          <div className="flex items-center justify-between pb-4">
            <span className="text-base font-semibold text-white">app.ts</span>
            {/* <button className="rounded-full bg-[#8842C0] px-3 py-1.5 text-xs font-medium text-[#0a0a0f] transition hover:bg-[#ec4899] hover:text-white">
              Copy
            </button> */}
          </div>
          <pre className="m-0 overflow-x-auto rounded-lg bg-transparent p-0 text-sm leading-relaxed whitespace-pre text-blue-100">
            <code>
              <span className="text-[#8842C0]">import</span>{' '}
              <span className="text-[#e0e0e0]">{'{'}</span> Traque{' '}
              <span className="text-[#e0e0e0]">{'}'}</span>{' '}
              <span className="text-[#8842C0]">from</span>{' '}
              <span className="text-[#ec4899]">&apos;@traque/core&apos;</span>;
              <br />
              <br />
              <span className="text-[#8842C0]">const</span>{' '}
              <span className="text-[#ffd60a]">traque</span> ={' '}
              <span className="text-[#8842C0]">new</span>{' '}
              <span className="text-[#ffd60a]">Traque</span>(
              <span className="text-[#e0e0e0]">{'{'}</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#ec4899]">apiKey</span>:
              process.env.<span className="text-[#ffd60a]">TRAQUE_API_KEY</span>
              ,<br />
              &nbsp;&nbsp;<span className="text-[#ec4899]">serviceUrl</span>:
              process.env.
              <span className="text-[#ffd60a]">TRAQUE_SERVICE_URL</span>,<br />
              <span className="text-[#e0e0e0]">{'}'}</span>);
              <br />
              <br />
              traque.<span className="text-[#ffd60a]">captureException</span>(
              <span className="text-[#8842C0]">new</span>{' '}
              <span className="text-[#ffd60a]">Error</span>(
              <span className="text-[#ec4899]">&apos;Hello, Traque!&apos;</span>
              ));
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}
