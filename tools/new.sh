#!/usr/bin/env bash
#
# 一条命令新建博客文章，自动填好文件名 + front matter。
#
# 用法:
#   ./tools/new.sh "文章标题"                         # 普通文章
#   ./tools/new.sh "文章标题" -c 分类 -t tag1,tag2     # 指定分类和标签
#   ./tools/new.sh "随便想到的" -n                     # 随笔/碎碎念 (Reflection)
#   ./tools/new.sh "只给自己看的" -d                   # 私密草稿 -> _drafts/，永不发布
#
# 草稿预览: bundle exec jekyll serve --drafts
# 生成后会自动用 VS Code 打开 (有 code 命令的话)。

set -euo pipefail

# ---- 解析参数 -------------------------------------------------------------
TITLE=""
CATEGORY=""
TAGS=""
IS_NOTE=0
IS_DRAFT=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    -c|--category) CATEGORY="$2"; shift 2 ;;
    -t|--tags)     TAGS="$2";     shift 2 ;;
    -n|--note)     IS_NOTE=1;     shift   ;;
    -d|--draft)    IS_DRAFT=1;    shift   ;;
    -*)            echo "未知参数: $1" >&2; exit 1 ;;
    *)             TITLE="$1";    shift   ;;
  esac
done

if [[ -z "$TITLE" ]]; then
  echo "用法: ./tools/new.sh \"文章标题\" [-c 分类] [-t tag1,tag2] [-n] [-d]" >&2
  exit 1
fi

# ---- 定位仓库根目录 -------------------------------------------------------
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
POSTS_DIR="$ROOT/_posts"
DRAFTS_DIR="$ROOT/_drafts"

# ---- 日期 / 文件名 --------------------------------------------------------
# 时间带 +0800，和你已有文章保持一致；改时区就改这里的 TZ。
DATE_FULL="$(TZ='Asia/Shanghai' date '+%Y-%m-%d %H:%M:%S +0800')"
DATE_DAY="$(TZ='Asia/Shanghai' date '+%Y-%m-%d')"

# slug: 转小写、空格转连字符、去掉文件名非法字符 (中文保留)
SLUG="$(echo "$TITLE" \
  | tr '[:upper:]' '[:lower:]' \
  | sed -e 's/[[:space:]]\{1,\}/-/g' -e 's#[/\\:*?"<>|]##g')"

if [[ "$IS_DRAFT" -eq 1 ]]; then
  mkdir -p "$DRAFTS_DIR"
  FILE="$DRAFTS_DIR/${SLUG}.md"   # 草稿不需要日期前缀
else
  FILE="$POSTS_DIR/${DATE_DAY}-${SLUG}.md"
fi

if [[ -e "$FILE" ]]; then
  echo "文件已存在: $FILE" >&2
  exit 1
fi

# ---- front matter 默认值 --------------------------------------------------
if [[ "$IS_NOTE" -eq 1 ]]; then
  : "${CATEGORY:=Reflection}"
  : "${TAGS:=随笔}"
fi
: "${CATEGORY:=Uncategorized}"
: "${TAGS:=}"

# tags: 逗号分隔转成 [a, b, c]
if [[ -n "$TAGS" ]]; then
  TAGS_FMT="[$(echo "$TAGS" | sed 's/[[:space:]]*,[[:space:]]*/, /g')]"
else
  TAGS_FMT="[]"
fi

# ---- 写文件 ---------------------------------------------------------------
# 注意: 标题写在 front matter 的 title，正文里不要再写 "# 大标题"。
cat > "$FILE" <<EOF
---
title: ${TITLE}
date: ${DATE_FULL}
categories: [${CATEGORY}]
tags: ${TAGS_FMT}   # 标签一律小写
---

正文从这里开始。标题已经在上面 front matter 里了，不要再写 # 一级标题。
EOF

echo "✅ 已创建: ${FILE#$ROOT/}"

# ---- 自动打开 -------------------------------------------------------------
if command -v code >/dev/null 2>&1; then
  code "$FILE"
fi
