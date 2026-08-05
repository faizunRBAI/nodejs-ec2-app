variable "project_name" {
  description = "Project name — used as a prefix for all AWS resources"
  type        = string
}

variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "us-east-1"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "ssh_public_key" {
  description = "RSA public key injected into the EC2 key pair by the platform"
  type        = string
}
