# MongoDB 
* ( 示例：myDB->student )

### 1.安装
> [官网][0]

### 2.环境变量  
> C:\Program Files\MongoDB\Server\3.4\bin

### 3.创建数据库存储文件夹
> C:\mongo

### 4.MongoDB开机(保持状态)
> * $ mongod --dbpath c:\mongo  [mongoVUE中collections无法展开,故使用下行命令][1] 
> * $ mongod --storageEngine mmapv1 --dbpath c:\mongo 

### 5.连接数据库
> $ mongo
> #### 1.查看
> * 所有数据库: $ show dbs
> * 当前数据库: $ db
> * 当前集合: $ show collections     
> #### 2.新建或进入某个数据库
> $ use myDB
> #### 3.增,同时创建了student这个collection
> $ db.student.insert({"name":"tom","age":25,"sex":"boy"});
> #### 4.删
> * 删除数据库: $ db.student.drop();
> * 删除全部数据: $ db.student.remove({});
> * 删除匹配数据: $ db.student.remove({"name":"tom"});
> * 删除一个数据: $ db.student.remove({"name":"tom"}，{justOne:true});
> #### 5.改
> * 单匹配: $ db.student.update({"name":"tom"},{$set:{"age":26}});
> * 多匹配: $ db.student.update({"age":{$gt:20}},{$set:{"age":18}},{multi:true});
> * 全匹配: $ db.student.update({},{$set:{"age":26}},{multi:true});
> * 完整替换，重写JSON: $ db.student.update({"name":"tom"},{"age":26});
> #### 6.查
> * 所有文档: $ db.student.find();
> * 条件查询: $ db.student.find({"age":25});
> * 条件域查询: $ db.student.find({"age":{$gt:13}});
> * 多条件且查询: $ db.student.find({"age":13,"score.yuwen":2});
> * 多条件或查询: $ db.student.find({$or:[{"age":13},{"age":9}]});
> * 分页查询: $ db.student.find().skip(10).limit(10);
> * 总数查询: $ db.student.find().count();
> #### 7.排序
> $ db.student.find().sort({"score.yuwen":-1,age":1});

### 6.导入数据库：注意在目录环境下
> $ mongoimport --db myDB --collection student --drop --file f:\from.json

[0]: https://www.mongodb.com
[1]: http://www.th7.cn/db/nosql/201608/200715.shtml
