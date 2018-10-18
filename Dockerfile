{\rtf1\ansi\ansicpg1252\cocoartf1671
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww14020\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 ### STAGE 1: Build ###\
\
FROM node:9-alpine as builder\
\
COPY package.json package-lock.json ./\
\
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force\
\
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app\
\
WORKDIR /projecten3-1819-angular-groep4-mindfullness\
\
COPY . .\
\
RUN $(npm bin)/ng build --prod\
\
\
### STAGE 2: Setup ###\
\
FROM nginx:1.13.3-alpine\
\
## Copy our default nginx config\
COPY nginx/default.conf /etc/nginx/conf.d/\
\
## Remove default nginx website\
RUN rm -rf /usr/share/nginx/html/*\
\
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder\
COPY --from=builder /ng-app/dist /usr/share/nginx/html}