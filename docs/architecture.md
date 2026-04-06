# Magic Architecture

## Data Flow

```mermaid
flowchart LR
    A["User Request"] --> B["Next.js Concierge / Agent UI"]
    B --> C["FastAPI Gateway"]
    C --> D["LangGraph Supervisor"]
    D --> E["Planner Agent"]
    D --> F["Retriever Agent"]
    D --> G["Delivery Agent"]
    F --> H["LlamaIndex Query Engine"]
    H --> I["Vector Store / Knowledge Base"]
    H --> J["Structured Sources<br/>Docs, Sheets, CRM, APIs"]
    E --> K["Tool Router"]
    K --> L["Excel Automation"]
    K --> M["SaaS / Internal APIs"]
    K --> N["Analytics / BI"]
    G --> O["Streaming Response"]
    O --> B
```

## Recommended Repository Structure

```text
magic/
├── apps/
│   └── web/
│       ├── app/
│       ├── components/
│       ├── lib/
│       └── public/
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── graphs/
│   │   └── schemas/
│   └── pyproject.toml
├── agents/
│   └── workflows/
└── docs/
```

## Integration Notes

- `LangGraph` owns the state machine, retries, branching, and tool coordination.
- `LlamaIndex` plugs into the retriever node and can expose one or more query engines depending on domain.
- `FastAPI` streams node progress to the frontend so the agent showcase can reflect token flow and tool status in near real time.
- `Next.js` handles the premium brand layer, conversion surfaces, and future authenticated dashboards.

