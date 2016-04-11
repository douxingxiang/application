# bit get and set component
- 批量获取/查询bit值
- 设置单个bit值

## bit存储设计
将bit映射到32位int字段上去，数据表设计为
- uid: int(4), 用户ID
- type: int(4), int key的编号
- value: int(4)，int 的值
- primary key(uid, type)

## 类结构
- const类，定义应用中各个bit分段的取值范围
- table类，负责与数据库交互
- data manager类，负责缓存、与table类交互
- controller类，负责上层应用管理bit
