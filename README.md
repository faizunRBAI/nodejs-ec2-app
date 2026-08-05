# nodejs-ec2-app

A production-ready **Node.js / NestJS** application deployed on **AWS EC2** (t3.micro, us-east-1) behind nginx, managed by systemd and provisioned with Terraform + Ansible via GitHub Actions CI/CD.

---

## Stack

| Layer        | Technology              |
|-------------|-------------------------|
| Runtime      | Node.js 20 (LTS)        |
| Framework    | NestJS 10               |
| Proxy        | nginx (port 80 → 3000)  |
| Process mgr  | systemd                 |
| IaC          | Terraform (AWS EC2, SG, EIP) |
| Config mgmt  | Ansible                 |
| CI/CD        | GitHub Actions          |
| Cloud        | AWS us-east-1           |

---

## Local Development

```bash
# Install dependencies
npm install

# Start in watch mode
npm run start:dev

# Open http://localhost:3000
```

---

## Endpoints

| Method | Path         | Description              |
|--------|-------------|--------------------------|
| GET    | `/`          | Landing page (HTML UI)   |
| GET    | `/health`    | Health check (JSON)      |
| GET    | `/api/info`  | App info (JSON)          |

---

## Deploy

Deployments are fully automated via GitHub Actions. Push to `main` to trigger:

1. **lint** — ESLint checks
2. **test** — Jest unit tests
3. **provision** — Terraform creates/updates EC2, SG, Elastic IP
4. **configure** — Ansible installs Node.js, nginx, deploys app, starts systemd service
5. **verify** — Health check against the live EC2 IP

---

## SSH Access

```bash
# Get the Elastic IP from AWS console or Terraform output
ssh -i <your-private-key> ubuntu@<ELASTIC_IP>

# View app logs
sudo journalctl -u nodejs-ec2-app -f

# Check nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Restart the app
sudo systemctl restart nodejs-ec2-app
```

---

## Infrastructure

All Terraform resources live in `infra/`:

- `main.tf` — EC2 instance, Security Group, Key Pair, Elastic IP
- `variables.tf` — Input variables
- `outputs.tf` — Instance IP, ID, App URL

State is stored remotely in the platform-managed S3 bucket.

---

## Cost Estimate

~**$8–10/month** for t3.micro + Elastic IP in us-east-1 (low traffic).

---

## Optional Enhancements

- 🔒 HTTPS/TLS via Let's Encrypt + certbot
- 📊 CloudWatch monitoring + alarms
- 🗄️ RDS PostgreSQL database
- ⚖️ ALB + Auto Scaling Group for HA
- 🪣 S3 for static assets / file uploads
