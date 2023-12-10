#!/usr/bin/env sh

# 忽略错误
# set -e

# 构建
npm run build

# 进入待发布的目录
cd docs/.vitepress/dist

git remote add origin https://github.com/verney-design/docs.git
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f origin main

# cd -