# REACT PROJECTS

# LEARNING VID 5 FOLDER 24

NOTE MUA BĂNG DÍNH

- USEEFFECT RUN 2 LẦN TRONG DEVELOPMENT MODE

XEM LẠI VID 4-10 folder 11 ĐỂ NẮM HOW REACT WORKS

- Có key khác nhau tức instance khác nhau(là các cpn khác nhau) => để reset value
- tạo cpn nhanh = rfc
- npm create vite@latest
- 09 cần json-server
- thêm vào usersnippet "importCSSModule": {
  "prefix": "csm",
  "scope": "javascript,typescript,javascriptreact",
  "body": ["import styles from './${TM_FILENAME_BASE}.module.css'"],
  "description": "Import CSS Module as `styles`"
  }
- Dùng context API để pass trực tiếp prop từ cha đến con cấp nhỏ hơn thay vì truyền từ từ theo từng cấp
  -- Khi update value, các CPN con nhận value đó cũng re-render
- trick khi CPN con không cẩn re-render theo state nhưng vẫn bị re-render theo thằng cha, có thể truyền con dưới dạng children prop để khi change state k bị re-render con nữa (tương tự với khi sử dụng Context API và truyền vào children prop)

-Memoization: execute a pure func once, save result in memory, call again will only return value of the previous result (if same input - new input will calc new result)

- **memo** func: used to create a CPN that wont be re-rendered when its parent re-renders(as long as the props stay the same between renders) - only use for HEAVY & SLOW RENDERING CPN

- ctrl ,-> inline suggest -> disable

- KHÔNG nên lưu ảnh trực tiếp trong MongoDB (dù là GridFS hay Base64), nên lưu trong firebase/cloudinary, trong DB chỉ chứa metadata và ảnh dạng array
- Nếu bạn dùng NestJS, thì nên làm theo cách 2:
  → Client gửi file lên NestJS → NestJS gửi ảnh đến Cloudinary → lưu URL ảnh vào MongoDB.
