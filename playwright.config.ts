import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests',workers:2,use:{launchOptions:{executablePath:'/usr/bin/chromium',args:['--no-sandbox','--disable-dev-shm-usage']},headless:true},reporter:'list'});
