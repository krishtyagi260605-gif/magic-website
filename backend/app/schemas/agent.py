from typing import Literal

from pydantic import BaseModel, Field


class AgentRequest(BaseModel):
    prompt: str = Field(min_length=12, description="User objective for the workflow.")
    domain: Literal["finance", "healthcare", "supply-chain", "general"] = "general"
    wants_retrieval: bool = True


class AgentStep(BaseModel):
    node: str
    status: Literal["pending", "running", "completed"]
    detail: str


class AgentResponse(BaseModel):
    summary: str
    recommended_stack: list[str]
    trace: list[AgentStep]

