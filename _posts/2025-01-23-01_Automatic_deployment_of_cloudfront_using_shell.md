---
 layout : post
 title : Automatic deployment of cloudfront using shell
 tags: [AWS,config,shell,macos,cloudfront]
---

1. Cloudfront and S3 repository must be set up.
2. The AWS-CLI tool must be installed on the system where you auto-deploy.
3. You must complete the AWS-CLI connection environment settings.
4. Tested on MacBook pro (m2) zShell.
5. Contents marked with [] in the code below must be modified to suit the environment.

```bash
cat .build.sh
#!/bin/bash

# Setting up aws profiles for automatic deployment
#
#cat ~/.aws/config
#[profile deploy-s3]
#region = ap-southeast-1
#output = json
#cat ~/.aws/credentials
#[deploy-s3]
#aws_access_key_id =
#aws_secret_access_key =

rm -rf dist
npm dedupe
npm audit fix
npm run lint
npm run build
npm run deploy
npm run invalidate
```

```bash
cat package.json| jq .scripts

{
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "deploy": "aws s3 sync [./dist] s3://[website-name] --profile=deploy-s3",
  "invalidate": "aws cloudfront create-invalidation --profile=deploy-s3 --distribution-id [distribution-id] --paths /\\*",
  "preview": "vite preview"
}
```
