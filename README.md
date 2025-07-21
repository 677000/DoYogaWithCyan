瑜伽网站
# DoYogaWithCyan

https://www.yogaedition.com.tw/

https://yogajourney.com.tw/

网站板块：
首页、关于我们、课程介绍（瑜伽、垫上普拉提、私人课程（私教、精品小团课）、呼吸、冥想。。。10min/15min/30min/45min/60min）、
线上课-课程表、线下课-课程表、预约体验、会员定课、最新消息

网站数据库板块：
分为最新消息、瑜伽课程、瑜伽论坛、好物推荐、会员管理等数据库板块。

# 使用notion数据库：
1. 针对Notion空间构建集成：https://www.notion.so/profile/integrations
2. 给集成授予数据库访问权限
3. 保存集成密钥：ntn_W81430474136khOKT6hBH1A8RkTlQPyUTNpcdeyRxWD8z8
4. 获取数据库ID：2371e55d0af580f88ff5f6172ab7b87f?v=2371e55d0af58001967d000c71669184
5. 使用API连接数据库
6. 安装依赖：npm install @notionhq/client dotenv


这个项目提供了一个完整的全栈网站框架，
UI设计，要求简洁，交互响应友好，符合国际标准，响应式，支持多语言切换，支持多设备兼容性，跨浏览器兼容性，

查看npm镜像：npm config get registry
设置npm镜像：npm config set registry https://registry.npmmirror.com

- 创建虚拟环境：
python3 -m venv venv 
- 激活虚拟环境
source venv/bin/activate
- 推出虚拟环境
deactivate

- 关于简洁UI的参考网站：https://kalogirourania.com/

- 无效依赖排查：【depcheck】

## todo:
- 整体网站项目的托管。【阿里云服务器，最少1000+¥/年。vercel免费】✅
- 设置页面404 重定向-建设中...
- 构建工具配置优化（支持热更新、代码分割、懒记载、环境变量。。。）、性能优化、无效依赖排查和删除【depcheck】
- 工具：todo
    - 通过网址，检索公司业务和关键决策人
    - 帮助决策选型
    - 费用预估

## 主要特性
- 🌐 中英文双语支持
- 📱 响应式设计，完美适配移动端和桌面端
- 🎨 现代化UI设计，基于shadcn/ui组件库
- 🚀 快速的前端渲染
- 📝 在线联系表单
- 🔄 实时内容更新

## 全栈开发简洁版

### 技术栈说明
这个全栈网站使用了以下免费的主流技术栈：
1. **前端框架**：Next.js - React框架，提供服务端渲染和静态生成能力
2. **样式**：Tailwind CSS - 实用优先的CSS框架：https://tw-elements.com/docs/standard/components/social-buttons/
3. **UI组件**：shadcn/ui - 基于Radix UI的高质量组件库
4. **后端**：Next.js的服务器组件和服务器操作(Server Actions)
5. **部署平台**：Vercel - 提供免费的托管服务

### 功能特点
1. **响应式设计**：在所有设备上都能良好显示
2. **两个主要页面**：
    1. 首页：包含英雄区域、特性展示和号召行动区域
    2. 联系我们页面：包含联系表单和联系信息
    3. 新闻页面、
    4. 产品与服务页面、
    5. 学习中心页面、
    6. 成果展示页面
3. **服务器操作**：处理联系表单提交
4. **组件化结构**：易于维护和扩展


### 部署步骤
1. 在GitHub上创建一个新仓库并上传代码
2. 注册Vercel账号(免费)：[https://vercel.com](https://vercel.com)
3. 在Vercel上导入GitHub仓库
4. Vercel会自动检测Next.js项目并配置构建设置
5. 点击"Deploy"按钮完成部署
6. 部署完成后，Vercel会提供一个域名(例如：your-project.vercel.app)


### 本地开发
1. 克隆仓库到本地
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
4. 在浏览器中访问：`http://localhost:3000`




## 优化网站UI设计与功能增强
### 1. UI设计优化
- **简洁现代设计**：采用了更加简洁、现代的设计风格，减少视觉干扰
- **一致性**：在所有页面保持一致的设计语言和组件样式
- **动画效果**：添加了平滑的过渡动画，提升用户体验
- **色彩方案**：使用了更加协调的色彩方案，支持深色模式
- **卡片布局**：使用卡片组件展示内容，提高可读性和视觉层次


### 2. 多语言支持
- 实现了完整的中英文双语支持
- 添加了语言切换器，可以在任何页面切换语言
- 使用上下文API管理语言状态，确保全站一致性
- 本地存储用户语言偏好


### 3. 响应式设计
- 所有页面完全响应式，适配从手机到桌面的各种设备
- 针对移动设备优化了导航和布局
- 使用Tailwind CSS的响应式类实现不同屏幕尺寸的布局调整


### 4. 主题支持
- 添加了亮色/暗色主题切换功能
- 支持系统主题自动检测
- 主题切换无闪烁


### 5. 新增页面
- **新闻动态页面**：展示公司新闻和行业动态
- **产品与服务页面**：展示公司提供的产品和服务
- **学习中心页面**：提供教程、指南和资源
- **成果展示页面**：展示项目案例和客户评价


### 6. 交互优化
- 添加了平滑的页面过渡动画
- 改进了导航体验，当前页面高亮显示
- 添加了选项卡组件，方便内容分类浏览
- 优化了表单交互和反馈


### 7. 跨浏览器兼容性
- 使用标准CSS属性和特性
- 添加了必要的前缀和回退方案
- 使用现代JavaScript特性，同时确保广泛兼容性


### 8. 性能优化
- 使用Next.js的图像优化功能
- 组件懒加载
- 优化动画性能




## 项目结构补充说明
```plaintext
├── app/                      # Next.js 应用主目录
│   ├── layout.tsx           # 根布局组件
│   ├── page.tsx             # 首页组件
│   ├── globals.css          # 全局样式
│   ├── actions.ts           # 服务器端动作【后端】
│   ├── contact/             # 联系页面目录
│   │   └── page.tsx
│   ├── news/               # 新闻页面目录
│   │   └── page.tsx
│   ├── products/          # 产品页面目录
│   │   └── page.tsx
│   ├── learning/         # 学习中心页面目录
│   │   └── page.tsx
│   └── showcase/        # 成果展示页面目录
│       └── page.tsx
│
├── components/          # 共享组件目录（前端）
│   ├── header.tsx      # 页头组件
│   ├── footer.tsx      # 页脚组件
│   ├── language-switcher.tsx  # 语言切换组件
│   ├── theme-toggle.tsx       # 主题切换组件
│   ├── theme-provider.tsx     # 主题提供者组件
│   └── ui/             # UI组件库
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── sheet.tsx
│       ├── tabs.tsx
│       └── textarea.tsx
│
├── lib/                # 工具库目录
│   ├── utils.ts       # 通用工具函数
│   └── i18n/          # 国际化相关
│       ├── context.tsx    # 语言上下文（前端）
│       └── translations.ts # 翻译文件（前端）
│
└── public/            # 静态资源目录
```

### 前端部分 (Client-Side)

前端代码主要包括：
1. **页面组件** 

```plaintext
app/
├── page.tsx          # 首页
├── contact/page.tsx  # 联系页面
├── news/page.tsx     # 新闻页面
├── products/page.tsx # 产品页面
├── learning/page.tsx # 学习中心页面
└── showcase/page.tsx # 成果展示页面
```

2. **共享组件** 
```plaintext
components/
├── header.tsx           # 页头导航
├── footer.tsx           # 页脚
├── language-switcher.tsx # 语言切换器
├── theme-toggle.tsx      # 主题切换器
└── ui/                  # UI组件库
```

3. **前端工具和配置**
```plaintext
lib/
├── i18n/               # 国际化支持
│   ├── context.tsx     # 语言上下文
│   └── translations.ts  # 翻译文件
└── utils.ts            # 通用工具函数
```

### 后端部分 (Server-Side)
后端代码主要包括：
1. **服务器端动作** 
```plaintext
app/
└── actions.ts          # 服务器端动作处理
```

- 处理表单提交
- 处理API请求
- 数据库操作（如果有）


2. **API路由** 
```plaintext
app/api/               # API路由（如果需要可以添加）
└── route.ts          # API端点定义
```

3. **服务器端组件** 
- Next.js的页面默认是服务器端组件
- 使用 'use client' 指令的组件是客户端组件


### 关键技术特性

1. **前端技术栈** 
- Next.js 14+ (React框架)
- Tailwind CSS (样式)
- shadcn/ui (UI组件库)
- Framer Motion (动画)
- next-themes (主题支持)


2. **后端技术栈** 
- Next.js Server Actions (服务器端动作)
- Next.js API Routes (API路由)
- 可扩展的数据库集成


3. **性能优化** 
- 服务器端渲染 (SSR)
- 图片优化
- 代码分割
- 客户端路由


4. **国际化支持** 
- 使用React Context进行语言状态管理
- 支持多语言切换
- 本地化存储


5. **主题支持** 
- 亮色/暗色主题
- 系统主题检测
- 主题持久化


### 部署说明
该项目可以部署到Vercel平台 ，它会自动处理：

- 构建优化
- CDN分发
- SSL证书
- 持续部署
- 环境变量管理


### 扩展建议

1. **后端扩展**
- 添加数据库连接（如MongoDB、PostgreSQL）
- 实现用户认证
- 添加更多API端点


2. **前端扩展**
- 添加更多交互功能
- 实现更多动画效果
- 添加更多页面组件


3. **性能优化**
- 实现增量静态再生成（ISR）
- 添加缓存策略
- 优化资源加载

# 规划后台管理系统
让我规划一个后台管理系统：
1. 需要添加的功能：
- 管理员认证系统（登录、注册、权限管理）
- 内容管理（新闻、产品、学习资源、案例展示）
- 用户管理（管理员账户管理）
- 文件上传管理（图片等媒体文件）
- 多语言内容管理


2. 技术选择：
- 数据库：Prisma + PostgreSQL（可靠且支持关系型数据）
- 认证：NextAuth.js（现在改名为Auth.js）
- 文件存储：Vercel Blob（用于存储上传的图片等文件）
- 表单处理：react-hook-form + zod（表单验证和处理）
- UI组件：继续使用shadcn/ui保持一致性


3. 数据结构设计：
- 用户（管理员）表
- 内容表（新闻、产品等）
- 媒体文件表
- 权限表

## 后台管理系统的基础框架
包含了以下功能：
1. **数据库设计**
- 使用Prisma作为ORM
- 设计了用户、新闻、产品、资源、案例等数据模型
- 支持多语言内容存储

2. **认证系统**
- 使用NextAuth.js实现认证
- 支持邮箱密码登录
- 角色权限控制（管理员和编辑）

3. **后台界面**
- 响应式布局
- 侧边栏导航
- 数据表格展示
- 分页和搜索功能
**添加更多功能页面**
- 新建/编辑新闻页面
- 新建/编辑产品页面
- 新建/编辑学习资源页面
- 新建/编辑案例展示页面
- 用户管理页面
- 系统设置页面

4. **内容管理**
- 新闻管理
- 产品管理
- 学习资源管理
- 案例展示管理

5. **添加文件上传功能**
- 集成Vercel Blob存储
- 图片上传组件
- 图片预览和裁剪

6. **添加富文本编辑器**
- 集成TipTap或其他编辑器
- 支持图片插入
- 支持多语言内容编辑

7. **添加数据验证**
- 使用Zod进行表单验证
- API请求验证
- 错误处理

8. **添加更多功能**
- 内容版本控制
- 定时发布
- 数据导入导出
- 操作日志
- 数据备份

让我们开始实现这个后台管理系统。
首先，我们需要设置数据库和认证系统：
![alt text](image.png)



## Unused dependencies
* @hookform/resolvers
* autoprefixer
* zod
* @prisma/client
* @auth/core
* nodemailer
* prisma
* typescript
* h3
* express
* @tiptap/pm
* @tiptap/core
* uploadthing
* @auth/prisma-adapter
* next-auth
* bcryptjs
* @tanstack/react-table
* @tiptap/react
* @uploadthing/react
* @tiptap/starter-kit
* @tiptap/extension-image
* @tiptap/extension-link
* @tiptap/extension-placeholder
* @tiptap/extension-table
* @tiptap/extension-table-row
* @tiptap/extension-table-cell
* @tiptap/extension-table-header
* @tiptap/extension-code-block
* @tiptap/extension-underline
Unused devDependencies
* @types/node
* postcss
* typescript


# 如何在react项目中通过云服务器google drive获取静态资源
要在 React 项目中通过 Google Drive 获取静态资源，可按以下步骤操作：

### 1. 准备工作
- **创建 Google Cloud 项目**：
    - 访问 [Google Cloud Console](https://console.cloud.google.com/)。
    - 点击左上角的项目下拉菜单，选择“新建项目”，输入项目名称和 ID，然后点击“创建”。
- **启用 Google Drive API**：
    - 在 Google Cloud Console 中，点击左侧导航栏的“API 和服务” -> “库”。
    - 在搜索框中输入“Google Drive API”，选择该 API 并点击“启用”。
- **创建凭证**：
    - 点击左侧导航栏的“API 和服务” -> “凭证”。
    - 点击“创建凭证”，选择“OAuth 客户端 ID”。
    - 配置 OAuth 同意屏幕，选择用户类型（外部或内部），并填写应用名称、支持邮箱等信息。
    - 在“创建 OAuth 客户端 ID”页面，选择应用类型为“Web 应用程序”，添加授权重定向 URI（例如 `http://localhost:3000` 用于本地开发）。
    - 点击“创建”，会生成客户端 ID 和客户端密钥，保存好这些信息。
    客户端ID：8998846555-m8k6cbkvifam9a729486bqjf32b6tl3g.apps.googleusercontent.com
    密钥：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


### 2. 安装依赖
在 React 项目中，安装 `googleapis` 库，用于与 Google Drive API 进行交互。
```bash
npm install googleapis
```


### 3. 在 React 组件中获取 Google Drive 中的静态文件中的视频资源
1. 分享 Google Drive 视频文件
- 打开 Google Drive 中的视频文件。
- 点击“共享”按钮，将文件设置为“任何人拥有链接均可查看”。

google drive 的文件 public共享给任何人：https://drive.google.com/drive/folders/1owSVQTPCoCDM6I115muIRBmTWCNszRpg?usp=sharing
google drive 文件的视频链接：https://drive.google.com/file/d/1S0-GErFdQxaPClNlm7-9w_BmaHGshFJq/view?usp=sharing

2. 获取文件 ID
- 复制文件的共享链接，链接格式通常为 `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`。
- 提取其中的 `FILE_ID`。

3. 在 React 组件中获取视频资源
a. 使用公开访问链接：
如果文件已经设置为公开访问，你可以直接使用以下格式的链接来嵌入视频：
```jsx
import React from 'react';

const VideoComponent = () => {
    const fileId = 'YOUR_FILE_ID';
    const videoUrl = `https://drive.google.com/uc?id=${fileId}`;

    return (
        <video width="640" height="360" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoComponent;
```

b. 使用 Google Drive API（需要 API 密钥）
如果你想使用 API 来获取视频资源，可以使用 `fetch` 或 `axios` 等工具发送请求。
```jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoComponent = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const fileId = 'YOUR_FILE_ID';
    const apiKey = 'YOUR_API_KEY';

    useEffect(() => {
        const getVideoUrl = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
                    {
                        headers: {
                            'Authorization': `Bearer ${apiKey}`
                        }
                    }
                );
                setVideoUrl(response.request.responseURL);
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };

        getVideoUrl();
    }, [fileId, apiKey]);

    return (
        <div>
            {videoUrl && (
                <video width="640" height="360" controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default VideoComponent;
```

注意事项:
- **CORS 问题**：如果遇到跨域资源共享（CORS）问题，你可能需要在服务器端进行代理，或者使用 Google 提供的 CORS 代理。
- **API 配额**：使用 Google Drive API 有一定的配额限制，确保你的使用量在配额范围内。

### 4. 使用资源
获取到文件列表后，你可以根据文件的 ID 生成下载链接，以便在 React 应用中使用这些静态资源。
https://drive.google.com/file/d/1S0-GErFdQxaPClNlm7-9w_BmaHGshFJq/view?usp=drive_link

```jsx
const downloadUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`;
```
要访问这个链接，需要在请求头中添加授权信息。你可以使用 `fetch` 或 `axios` 等工具发送请求：
```jsx
const accessToken = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;
fetch(downloadUrl, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
}).then((response) => {
  if (response.ok) {
    return response.blob();
  }
  throw new Error('Network response was not ok');
}).then((blob) => {
  // 处理下载的文件
  const url = URL.createObjectURL(blob);
  // 例如，创建一个链接供用户下载
  const link = document.createElement('a');
  link.href = url;
  link.download = file.name;
  link.click();
  URL.revokeObjectURL(url);
}).catch((error) => {
  console.error('Error downloading file:', error);
});
```

### 注意事项
- **安全问题**：确保妥善保管客户端 ID 和客户端密钥，不要将其暴露在公开代码中。
- **权限问题**：确保你的 Google Drive 文件具有适当的共享权限，以便应用程序可以访问它们。
- **配额限制**：Google Drive API 有一定的使用配额限制，需要注意不要超出限制。

# SEO metadata in layout.tsx
在网站 SEO 中，Metadata（元数据）起着至关重要的作用，以下是其具体作用及描述方法：
- 帮助搜索引擎理解页面内容：Metadata 中的关键词、描述等信息可以告诉搜索引擎页面的主题和重点，有助于搜索引擎准确地对页面进行分类和索引，提高页面在搜索结果中的相关性和排名。
- 吸引用户点击：在搜索结果中，标题和描述等 Metadata 会展示给用户，清晰、有吸引力的 Metadata 能够吸引用户的注意力，提高页面的点击率，从而增加网站的流量。
- 提供页面的额外信息：例如，机器人元数据可以告诉搜索引擎蜘蛛哪些页面可以抓取，哪些不可以抓取，以及页面的更新频率等信息，有助于搜索引擎更高效地抓取和索引网站页面。

## 描述方法
- 标题（Title）
1. 准确概括页面内容：要准确反映页面的核心主题，让用户和搜索引擎能够快速了解页面的主要内容。例如，一个关于 “苹果手机最新款功能介绍” 的页面，标题可以是 “苹果手机最新款功能全面解析”。
2. 包含关键词：合理地将目标关键词融入标题中，有助于提高页面在相关关键词搜索结果中的排名。但要注意避免关键词堆砌，确保标题自然流畅。
3. 控制长度：一般建议标题长度在 50-60 个字符左右，以免在搜索结果中被截断，影响用户体验和点击率。

## 描述（Description）
1. 简洁明了：用简洁的语言概括页面的主要内容，让用户能够在短时间内了解页面的大致内容和价值。
2. 突出亮点：可以强调页面的独特卖点、优势或关键信息，吸引用户点击链接。例如，“本页面详细介绍了苹果手机最新款的创新功能，包括超强拍照性能、全新操作系统等，带你全方位了解苹果手机的魅力。”
3. 包含关键词：与标题类似，描述中也应适当包含目标关键词，但同样要注意自然流畅，避免过度堆砌。
4. 控制长度：描述的长度一般建议在 150-160 个字符左右，既能完整地传达页面信息，又不会在搜索结果中显得过于冗长。

## 关键词（Keywords）
1. 选择相关关键词：要选择与页面内容紧密相关的关键词，这些关键词应该是用户在搜索相关主题时可能会使用的词汇或短语。
2. 避免过度堆砌：虽然关键词对 SEO 很重要，但不要在元数据中大量堆砌关键词，以免被搜索引擎视为作弊行为，导致排名下降。一般建议选择 3-5 个核心关键词，并适当扩展一些相关的长尾关键词。
3. 定期更新：随着网站内容的更新和行业的发展，关键词也可能会发生变化。因此，需要定期对关键词进行评估和更新，以确保其与页面内容和用户搜索习惯保持一致。

除了上述常见的 Metadata，还有一些其他类型的元数据，如机器人元数据（Robots Meta Tags）、规范标签（Canonical Tag）等，它们在网站 SEO 中也都有着各自的重要作用，需要根据网站的具体情况进行合理设置和优化。


# 通过Firebase Firestore，将本地代码与云数据库关联并通过云数据库管理静态资源涉。
本地代码使用的语言是react.js , Next.js, 

### Firebase Firestore
1. **创建Firebase项目**
    - 访问[Firebase控制台](https://console.firebase.google.com/)并登录你的Google账号。
    - 点击“创建项目”，按照提示完成项目创建流程，包括设置项目名称和选择相关配置。
2. **启用Firestore数据库**
    - 在项目控制台中，点击左侧边栏的“Firestore数据库”。
    - 选择“开始使用”，然后选择“测试模式”（适合开发阶段，有一定的免费额度）。选择地理位置后，点击“启用”。
3. **配置本地项目**
    - 在你的Next.js项目目录中，安装Firebase SDK：
```bash
npm install firebase
```
    - 在项目根目录创建一个`firebase.js`文件，用于初始化Firebase应用：
```javascript
import firebase from 'firebase/app';
import 'firebase/firestore';

// 从Firebase控制台的项目设置中获取配置对象
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 初始化Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
```
4. **管理静态资源**
    - 假设你要上传静态资源（如图片）到Firebase Storage，并将其元数据（如文件名、存储路径、大小等）存储到Firestore。
    - 首先，安装`firebase/storage`：
```bash
npm install firebase/storage
```
    - 在需要上传和记录静态资源信息的组件中：
```javascript
import React from'react';
import { db } from '../firebase';
import firebase from 'firebase/app';
import 'firebase/storage';

const uploadAndStoreMetadata = async (file) => {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    const snapshot = await fileRef.put(file);
    const downloadURL = await snapshot.ref.getDownloadURL();

    const metadata = {
        name: file.name,
        size: file.size,
        downloadURL
    };

    await db.collection('staticResources').add(metadata);
};

const MyComponent = () => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            uploadAndStoreMetadata(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
};

export default MyComponent;
```


# 针对 React.js + Next.js 项目与免费云数据库/云存储集成的完整方案，包含主流免费云服务选择、配置步骤和代码示例
免费数据库推荐
- MongoDB Atlas (文档数据库)
- supabase: 实时数据库，SQL，表结构【https://supabase.com/dashboard/project/mojcdgtrpznriqiorlwf】

免费云存储服务推荐：
- Cloudinary (图片/视频管理)
- Supabase Storage