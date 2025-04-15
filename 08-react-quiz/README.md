# Lý do dùng useReducer

1. Khi CPNs có quá nhiều **state variables và state updates**, chia ra trong nhiều event handlers trong toàn bộ CPN
2. Khi **multiple state updates** cần xảy ra đồng thời (như khi phản cùng 1 event ex "bắt đầu game")
3. Khi update 1 phần state phụ thuộc vào 1 hoặc nhiều phần state khác
   => Chỉ dùng useState là k đủ trong các case này

# Quản lý state bằng useReducer

- khi xử lý các state phức tạp
- lưu các phần của state liên quan vào 1 **state obj**
- cần có **reducer**: hàm chứa mọi logic để update state, LUÔN trả về state kế tiếp, nhận vào state hiện tại và action,giống setState() nhưng mạnh hơn
- **action** là obj mô tả cách update state
- **dispatch**: hàm dùng để trigger state updates, bằng cách gửi **actions** từ **event handlers** đến **reducer**
