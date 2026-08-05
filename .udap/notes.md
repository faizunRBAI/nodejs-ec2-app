# nodejs-ec2-app — Build Notes

## Project
- Node.js 20 / NestJS 10 on AWS EC2 t3.micro (us-east-1)
- No database
- nginx reverse proxy (port 80 → 3000)
- systemd process manager
- Default VPC reused (6 subnets, us-east-1)

## Status
- [x] Project meta approved
- [x] Architecture designed (architecture.d2)
- [x] Pipeline designed (.udap/pipeline.yaml)
- [x] Design confirmed
- [x] Plan approved (Tier 1, low risk)
- [x] Scaffold: node/nestjs
- [x] Terraform IaC: infra/main.tf, variables.tf, outputs.tf
- [x] Ansible: ansible/site.yml, files/nginx-app.conf, files/app.service
- [x] README.md written
- [ ] validate_project
- [ ] test_project
- [ ] create_repo_and_push
- [ ] deploy

## Key Decisions
- Ubuntu 22.04 LTS AMI (Canonical) — SSH_USER=ubuntu
- Elastic IP for stable public address across instance replacements
- ansible-core installed via pip in configure stage (no assumed tooling)
- App files copied via Ansible synchronize; npm install + build on server
- systemd ExecStart uses absolute node path /usr/bin/node for reliability
- verify stage re-reads terraform output directly (self-sufficient job rule)
- NodeSource repo for Node.js 20 (not Ubuntu default repo which ships older Node)

## Gotchas
- ansible.posix.synchronize (not ansible.builtin) — requires ansible.posix collection
- GitHub masks PROJECT_NAME in job outputs — verify stage reads IP from terraform directly
- t3.micro is free-tier eligible for first 12 months on new AWS accounts
