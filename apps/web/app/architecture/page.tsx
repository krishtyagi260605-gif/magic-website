export default function ArchitecturePage() {
  return (
    <main className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
        <div className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">Architecture</div>
        <h1 className="mt-4 text-4xl font-[family-name:var(--font-display)] uppercase leading-tight text-white md:text-5xl">
          LlamaIndex and LangGraph are wired as complementary layers.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
          LangGraph should own the state machine, retries, and tool routing. LlamaIndex belongs inside the retrieval node so the orchestration loop can query domain knowledge without collapsing application logic into the retriever.
        </p>

        <div className="mt-10 rounded-[28px] border border-white/10 bg-slate-950/55 p-6">
          <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-slate-200">
{`flowchart LR
    A["User Request"] --> B["Next.js Concierge / Agent UI"]
    B --> C["FastAPI Gateway"]
    C --> D["LangGraph Supervisor"]
    D --> E["Planner Agent"]
    D --> F["Retriever Agent"]
    D --> G["Delivery Agent"]
    F --> H["LlamaIndex Query Engine"]
    H --> I["Vector Store / Knowledge Base"]
    H --> J["Structured Sources: Docs, Sheets, CRM, APIs"]
    E --> K["Tool Router"]
    K --> L["Excel Automation"]
    K --> M["SaaS / Internal APIs"]
    K --> N["Analytics / BI"]
    G --> O["Streaming Response"]
    O --> B`}
          </pre>
        </div>
      </div>
    </main>
  );
}

