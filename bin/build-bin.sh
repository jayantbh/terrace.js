wp ./bin/index.js -o ./bin/_index.generated.js --target='node';
cat ./bin/node-shebang.txt > ./bin/index.generated.js;
cat ./bin/_index.generated.js >> ./bin/index.generated.js;
rm ./bin/_index.generated.js;
