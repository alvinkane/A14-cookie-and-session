# User Authentication
一個使用Node.js + Express製作的使用者帳密驗證機制，與A13相異處為使用cookie and session維持登入狀態

## 功能
1. 使用者輸入帳密(目前只能輸入在資料庫的帳密)
2. 使用者輸入的帳密與資料庫資料不合會跳出提示
3. 使用者輸入對的帳密，會到welcome page
4. 使用者登入後可以保持登入狀態
5. 使用者可以登出


## 安裝流程：
1. 打開terminal, clone此專案
    ```
    git clone https://github.com/alvinkane/A14-cookie-and-session.git
    ```
2. 移到存取的資料夾(A14-cookie-and-session)
3. 安裝npm套件
    ```
    npm install
    ```
4. 安裝nodemon套件(若有可省略)
5. 在專案內創造一個env檔案，並在其中輸入MongoDB connection string
    ```
    MONGODB_ENV=mongodb+srv://<username>:<password>@<cluster>.pk4dwnp.mongodb.net/restaurant-list?retryWrites=true&w=majority
    ```
6. 匯入種子檔案
   ```
   npm run seed
   ```
7. 出現 'userSeeder done!' 代表成功
8. 執行專案
    ```
    npm run dev
    ```
9. 出現 "This is listening on http://localhost:3000" 'mongodb connected'代表成功
10. 開啟任一瀏覽器輸入This is listening on http://localhost:3000

## 登入頁面

![index](https://user-images.githubusercontent.com/118908615/229295547-ed3d9f8c-d44e-457e-8b1a-711ace0351ca.png)
## welcome頁面

![welcome](https://user-images.githubusercontent.com/118908615/229343156-3179fafa-0f26-4fcb-8455-4b01b8dcfd77.png)


## 測試帳號密碼
Email: tony@stark.com  
Password: iamironman


## 使用版本
node: 14.16.0  
npm: 6.14.11  
nodemon: 2.0.21
