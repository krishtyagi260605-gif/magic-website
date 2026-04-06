import asyncio
from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.graphs.orchestrator import run_magic_workflow
from app.schemas.agent import AgentRequest, AgentResponse

router = APIRouter()


@router.get("/health")
async def healthcheck() -> dict[str, str]:
    return {"status": "ok", "service": "magic-backend"}


@router.post("/orchestrate", response_model=AgentResponse)
async def orchestrate(payload: AgentRequest) -> AgentResponse:
    return run_magic_workflow(payload)


@router.get("/magic-thoughts")
async def stream_magic_thoughts():
    """
    A 'zest' of magic agentic AI logic. 
    Streams simulated reasoning steps for the UI to showcase.
    """
    thoughts = [
        "Initializing Magic Core v1.4.2...",
        "Scanning vector space for relevant contexts...",
        "Applying logic gates to intent: 'MILLION_DOLLAR_UX' detected.",
        "Synthesizing visual fragments into cinematic coherence...",
        "Warming up LangGraph toolchain for orchestration...",
        "Validating execution guardrails: All green.",
        "Streaming response via high-signal neural bridge...",
        "Magic Studio operational."
    ]

    async def thought_generator():
        for thought in thoughts:
            yield f"data: {thought}\n\n"
            await asyncio.sleep(1.2)

    return StreamingResponse(thought_generator(), media_type="text/event-stream")

