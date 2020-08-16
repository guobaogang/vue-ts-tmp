const path = require('path');
const fs = require('fs');
const basePath = path.resolve(__dirname, '../src');
const dirName = process.argv[2];

if (!dirName) {
    console.log('请输入组件名称');
    return;
}

if (fs.existsSync(`${basePath}/component/${dirName}`)) {
    console.log('该组件已存在，请检查');
    return;
}

const vueTmp = `<template>
<div class="${dirName}-wrap">{{pageName}}</div>
</template>

<script src="./${dirName}.ts" lang="ts"></script>

<style lang="less">
@import "./${dirName}.less";
</style>`;

const tsTmp = `export default {
    name: "${dirName}",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    data() {
        return {
            pageName: "${dirName}",
        };
    }
};`;

const lessTmp = `.${dirName}-wrap{
    color: aqua;
}`;

fs.mkdirSync(`${basePath}/component/${dirName}`);
process.chdir(`${basePath}/component/${dirName}`);
fs.writeFileSync(`${dirName}.vue`, vueTmp);
fs.writeFileSync(`${dirName}.ts`, tsTmp);
fs.writeFileSync(`${dirName}.less`, lessTmp);

process.exit(0);