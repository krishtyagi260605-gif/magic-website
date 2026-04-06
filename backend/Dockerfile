# Build dependencies
FROM python:3.12-slim AS builder

WORKDIR /app

# Copy backend source code first
COPY backend ./backend

# Install dependencies from pyproject.toml
RUN pip install ./backend

# Stage 2: Serve
FROM python:3.12-slim AS runner

WORKDIR /app

# Copy installed packages from builder
COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin

# Copy source code again for the runner
COPY backend ./backend

EXPOSE 8000

ENV PYTHONPATH=/app/backend
ENV PYTHONUNBUFFERED=1

CMD ["uvicorn", "backend.app.main:app", "--host", "0.0.0.0", "--port", "8000"]
