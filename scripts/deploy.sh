#!/bin/bash
npm run build
npm run format
npm run lint 
npm run tsc
npm run test 
npm run cypress:ci
vc -f && vc --prod -f # deploys to vercel
echo "DEPLOYED TO PRODUCTION ✅"
