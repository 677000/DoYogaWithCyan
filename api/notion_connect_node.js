// // 在文件顶部添加
// if (typeof global.process === 'undefined') {
//     global.process = {
//         stdout: { isTTY: false },
//         env: {},
//         versions: { node: '22.12.0' } // 根据你的 Node 版本调整
//     };
// }


const { Client } = require('@notionhq/client');
const fetch = require('node-fetch');
// const { get } = require('http');
// const process = require('process');
// global.process = process;

// 现在可以安全地使用 dotenv
// const dotenv = require('dotenv');

/**
 * 确保已安装所有依赖: npm install @notionhq/client dotenv node-fetch@2
 * 安装node-fetch: npm install node-fetch@2
 * 确认 Node.js 版本 >= 14（推荐使用 18+）
 * 检查 .env 文件是否正确配置
 */

// 加载环境变量
// dotenv.config();

// 初始化 Notion 客户端
const notion = new Client({
    auth: process.env.NOTION_API_KEY,
    fetch: fetch, // 显式设置 fetch 实现
});

// 数据库 ID
const databaseId = process.env.DATABASE_ID;

// 获取数据库内容
async function getDatabaseContent() {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
        });
        console.log('Database content:', response.results);
        return response.results;
    } catch (error) {
        console.error('Error retrieving database content:', error);
        return [];
    }
}

// 向数据库添加记录
async function addRecordToDatabase(properties) {
    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties,
        });
        console.log('Record added successfully!');
        return response;
    } catch (error) {
        console.error('Error adding record:', error);
        return null;
    }
}

// 示例：添加一个新记录
// async function main() {
//     // 根据你的数据库结构调整属性
//     const newRecord = {
//         "Name": {
//             "title": [
//                 {
//                     "text": {
//                         "content": "新项目"
//                     }
//                 }
//             ]
//         },
//         "Status": {
//             "select": {
//                 "name": "进行中"
//             }
//         },
//         "Priority": {
//             "number": 2
//         }
//     };
    
//     // 添加记录
//     await addRecordToDatabase(newRecord);
    
//     // 获取并打印数据库内容
//     const records = await getDatabaseContent();
//     console.log(`数据库中有 ${records.length} 条记录`);
// }

// // 运行主函数
// main();    

module.exports = { getDatabaseContent, addRecordToDatabase };