#!/bin/bash

COMMIT_MESSAGE="$VERCEL_GIT_COMMIT_MESSAGE"

if [[ "$COMMIT_MESSAGE" == *"[build-vercel]"* ]]; then
  echo "✅ Commit message contains [build-vercel] – proceeding with build."
  exit 1
else
  echo "⏭️ Commit message does NOT contain [build-vercel] – skipping build."
  exit 0
fi