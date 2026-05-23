# Deployment

## Deployment modes

### 1. Desktop (local-first)

The target experience for small rescues. One-click install, local SQLite database, no server required.

**Status:** Tauri desktop shell is on the roadmap. Not yet available.

**What it will include:**
- Native app installer for macOS, Windows, Linux
- Bundled Rust API running locally
- Local SQLite database (SQLCipher encrypted)
- First-run setup wizard

### 2. Local network (shelter server)

Run Open Paw on a local office server. Staff access from their desktops without internet.

```bash
# On the server machine
git clone https://github.com/executiveusa/Open-paw-V1.git
cd Open-paw-V1
mkdir -p data
DATABASE_URL=sqlite:./data/openpaw.db API_HOST=0.0.0.0 cargo run --release -p open-paw-api

# Staff access at http://<server-ip>:3001
```

### 3. Docker (self-hosted)

```bash
# Clone and configure
git clone https://github.com/executiveusa/Open-paw-V1.git
cd Open-paw-V1
cp .env.example .env
# Edit .env with your values

# Start services
docker compose up -d

# Check health
curl http://localhost:3001/health
```

Data persists in the `openpaw-data` Docker volume.

## Environment configuration

See `.env.example` for all variables. Critical for production:

```bash
SESSION_SECRET=<openssl rand -hex 32>
DATABASE_URL=sqlite:/app/data/openpaw.db
CORS_ORIGINS=https://your-dashboard-domain.com
RUST_LOG=open_paw_api=info
```

## Reverse proxy (production)

Place Nginx or Caddy in front of the API for TLS termination:

**Nginx example:**
```nginx
server {
    listen 443 ssl;
    server_name api.yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Caddy example (automatic TLS):**
```
api.yourdomain.com {
    reverse_proxy localhost:3001
}
```

## Backup

```bash
# SQLite backup (safe during operation)
sqlite3 /path/to/openpaw.db ".backup /path/to/backup-$(date +%Y%m%d).db"
```

Or copy the database file when the API is stopped.

## Monitoring

The API exposes a health endpoint at `GET /health`. Point your uptime monitor at it.

Structured logs are emitted to stdout in the format controlled by `RUST_LOG`.

## Future: PostgreSQL

PostgreSQL support is on the roadmap for multi-location organizations. When available, set:

```bash
DATABASE_URL=postgres://user:password@host:5432/openpaw
```

The storage crate is designed to support this path without domain changes.
