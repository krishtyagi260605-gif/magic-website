# Stage 1: Build dependencies
FROM python:3.12-slim AS builder

WORKDIR /app

# Install dependencies
COPY backend/pyproject.toml ./
RUN pip install .

# Stage 2: Serve
FROM python:3.12-slim AS runner

WORKDIR /app

COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin

# Copy source code
COPY backend ./backend

EXPOSE 8000

ENV PYTHONPATH=/app/backend

CMD ["uvicorn", "backend.app.main:app", "--host", "0.0.0.0", "--port", "8000"]
