variable "project_name" {
  description = "Project name — used as a prefix for all AWS resources"
  type        = string
  default     = "nodejs-ec2-app"
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
  description = "RSA public key for EC2 key pair"
  type        = string
}
