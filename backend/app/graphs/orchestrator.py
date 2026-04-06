from typing import TypedDict

from langgraph.graph import END, StateGraph

from app.schemas.agent import AgentRequest, AgentResponse, AgentStep


class WorkflowState(TypedDict):
    prompt: str
    domain: str
    wants_retrieval: bool
    trace: list[AgentStep]
    research_notes: list[str]
    summary: str


def plan_node(state: WorkflowState) -> WorkflowState:
    trace = state["trace"] + [
        AgentStep(
            node="planner",
            status="completed",
            detail=f"Framed a premium delivery plan for the {state['domain']} domain.",
        )
    ]
    research_notes = state["research_notes"] + [
        "Prioritize business outcomes, observability, and motion-driven UX."
    ]
    return {**state, "trace": trace, "research_notes": research_notes}


def retrieval_node(state: WorkflowState) -> WorkflowState:
    detail = (
        "Skipped retrieval and relied on in-graph priors."
        if not state["wants_retrieval"]
        else "Prepared the workflow contract for a LlamaIndex query engine."
    )
    trace = state["trace"] + [
        AgentStep(node="retriever", status="completed", detail=detail)
    ]
    research_notes = state["research_notes"] + [
        "Use LlamaIndex for multi-source retrieval with citation support."
    ]
    return {**state, "trace": trace, "research_notes": research_notes}


def synthesis_node(state: WorkflowState) -> WorkflowState:
    summary = (
        f"Magic should answer '{state['prompt']}' with a cinematic frontend, "
        "FastAPI service contracts, and LangGraph-managed orchestration."
    )
    trace = state["trace"] + [
        AgentStep(
            node="synthesizer",
            status="completed",
            detail="Merged planning and retrieval context into an execution summary.",
        )
    ]
    return {**state, "trace": trace, "summary": summary}


def build_graph():
    graph = StateGraph(WorkflowState)
    graph.add_node("plan", plan_node)
    graph.add_node("retrieve", retrieval_node)
    graph.add_node("synthesize", synthesis_node)
    graph.set_entry_point("plan")
    graph.add_edge("plan", "retrieve")
    graph.add_edge("retrieve", "synthesize")
    graph.add_edge("synthesize", END)
    return graph.compile()


def run_magic_workflow(payload: AgentRequest) -> AgentResponse:
    graph = build_graph()
    result = graph.invoke(
        {
            "prompt": payload.prompt,
            "domain": payload.domain,
            "wants_retrieval": payload.wants_retrieval,
            "trace": [],
            "research_notes": [],
            "summary": "",
        }
    )

    return AgentResponse(
        summary=result["summary"],
        recommended_stack=[
            "Next.js 15 + React 19 + Tailwind CSS v4",
            "FastAPI + Pydantic v2",
            "LangGraph + LlamaIndex",
            "GSAP + Framer Motion + Three.js",
        ],
        trace=result["trace"],
    )

