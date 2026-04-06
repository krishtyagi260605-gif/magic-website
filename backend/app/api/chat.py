from fastapi import APIRouter, Request
from pydantic import BaseModel
from app.core.notify import send_admin_notification
import asyncio
import random

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str
    status: str
    reasoning_steps: list[str]

@router.post("/chat", response_model=ChatResponse)
async def chat_handler(payload: ChatRequest):
    """
    Handle incoming chat queries from the frontend.
    1. Sends a notification to the owner (Krish Tyagi).
    2. Generates a 'Sisi' architect response with multi-step reasoning.
    """
    user_msg = payload.message
    
    # Notify the Architect (Owner)
    send_admin_notification(user_msg, metadata={"origin": "MagicHub", "bot_persona": "Sisi"})
    
    # Reasoning steps based on query intent (simulated)
    reasoning_steps = [
        "Initializing Magic Logic Hub...",
        f"Analyzing intent: '{user_msg[:20]}...'",
        "Mapping to Magic Ecosystem modules...",
        "Retrieving architectural context from LlamaIndex...",
        "Synthesizing optimal solution architecture...",
        "Finalizing Sisi protocol response."
    ]
    
    # Simulated reasoning/reply logic
    responses = [
        "Your vision aligns with the Magic Studio's core ethos. I've mapped this to our Agentic AI module for deep execution.",
        "Precision is the hallmark of a Magic build. I have logged your query and signaled the Lead Architect.",
        "The architecture required for this is high-signal. Sisi has initialized the necessary retrieval nodes.",
        "System synthesis complete. I've captured your requirements and integrated them into our development backlog.",
        "A fascinating expansion of the ecosystem. I've alerted Krish Tyagi to review this architectural proposal."
    ]
    
    selected_reply = random.choice(responses)
    
    # Simulate a brief reasoning pause per step
    await asyncio.sleep(1.2) 
    
    return ChatResponse(
        reply=selected_reply,
        status="notified",
        reasoning_steps=reasoning_steps
    )
