import requests
import json

# Notion API 配置
NOTION_API_KEY = "ntn_W81430474136khOKT6hBH1A8RkTlQPyUTNpcdeyRxWD8z8"
DATABASE_ID = "2371e55d0af580f88ff5f6172ab7b87f?v=2371e55d0af58001967d000c71669184"
NOTION_API_URL = "https://api.notion.com/v1"

# 设置请求头
headers = {
    "Authorization": f"Bearer {NOTION_API_KEY}",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28"
}

# 获取数据库内容
def get_database_content():
    url = f"{NOTION_API_URL}/databases/{DATABASE_ID}/query"
    response = requests.post(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
        return None

# 向数据库添加记录
def add_record_to_database(properties):
    url = f"{NOTION_API_URL}/pages"
    
    payload = {
        "parent": {"database_id": DATABASE_ID},
        "properties": properties
    }
    
    response = requests.post(url, headers=headers, data=json.dumps(payload))
    
    if response.status_code == 200:
        print("记录添加成功!")
        return response.json()
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
        return None

# 示例：添加一个新记录
if __name__ == "__main__":
    # 根据你的数据库结构调整属性
    new_record = {
        "Name": {
            "title": [
                {
                    "text": {
                        "content": "新项目"
                    }
                }
            ]
        },
        "Status": {
            "select": {
                "name": "进行中"
            }
        },
        "Priority": {
            "number": 2
        }
    }
    
    # 添加记录
    add_record_to_database(new_record)
    
    # 获取并打印数据库内容
    database_content = get_database_content()
    if database_content:
        print(f"数据库中有 {len(database_content['results'])} 条记录")    