rm -R -Force build/*
node --experimental-sea-config sea-config.json
node -e "require('fs').copyFileSync(process.execPath, 'build/index.exe')" 
signtool remove /s build/index.exe 
npx postject build/index.exe NODE_SEA_BLOB build/index.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
