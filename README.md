Hướng dẫn cài đặt:
B1: Clone file git của dự án về máy
B2: Chạy file "client" bằng lệnh "npm start", nếu chưa có React thì hãy "npm i react".
B3: Thay đổi file Firebase bằng account của bạn trong file "firebase.js"
B4: Thay đổi file ".env" bằng cách thay URI_key của mongodb của bạn.
B5: Chạy file "server" bằng lệnh "npm start", nếu chưa có nodemon thì hãy "npm i nodemon"
B6: Tải POSTMAN để có thể:(vì lý do trong quá trình hoàn thiện nên có vài tính năng chưa thế cập nhật kịp thời)
-Tạo tài khoản: POST(http://localhost:10000/api/auth/signup)
-Đăng nhập: POST(http://localhost:10000/api/auth/signin)
-Xóa User: Delete(http://localhost:10000/api/users/<id người cần xóa>)
-Thêm người đăng kí: PUT(http://localhost:10000/api/users/sub/<id người muốn đăng kí>)
-Xóa Video: Delete(http://localhost:10000/api/videos/<id người cần xóa>)

Lưu ý không thể tùy tiện xóa account không phải của mình
Nếu bạn không thể vào được, hãy giữ URI_key mặc định
Và đăng nhập với các tài khoản sau:
1. Tư Duy Sáng Tạo | Abcd@123456
2. Kĩ Năng Sống | Abcd@123456
3. Lịch Sử Việt Nam | Abcd@123456
4. admin | Abcd@123456

Truy cập vào website sau đó đăng kí và đăng nhập.
Để thêm được video trên góc phải sẽ có biểu tượng cho người người thêm video vào.
Video sẽ được cập nhật vào database của account đó và sẽ lưu cho đến những lần đăng nhập tiếp theo.
Có 2 chế độ xem:  
  + Page HOME sẽ hiển thị toàn bộ video của các channels.
  + Page CHANNELS sẽ hiển thị những kênh mà mình lưu ý muốn xem nhiều.
Sau khi chọn video muốn xem thì sẽ có phần đề xuất để cho trẻ có thể xem tiếp những video khác cùng chủ để mà không phải thoát ra.
Có chế độ chuyển màu cho website để trẻ tránh bị nhàm chán.
Có phần hiển thị CHAT để cho các trẻ có thể giao tiếp với những chuyên gia về tâm lý (nếu có thể).
