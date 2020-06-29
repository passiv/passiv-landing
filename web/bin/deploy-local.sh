#!/bin/bash

yarn run build
rm -rf /var/www/passiv/site
cp -r public /var/www/passiv/site
sudo systemctl reload nginx
