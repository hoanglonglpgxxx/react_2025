# REACT PROJECTS

# LEARNING VID 3 FOLDER 19

NHỚ COMMIT NHA!

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
