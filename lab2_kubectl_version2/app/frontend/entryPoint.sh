#!/bin/sh

sed -i "s|{{BACKEND_URI}}|$BACKEND_URI|g" /usr/share/nginx/html/main*.js
sed -i "s|{{GUESTBOOK_NAME}}|$GUESTBOOK_NAME|g" /usr/share/nginx/html/main*.js

exec "$@"