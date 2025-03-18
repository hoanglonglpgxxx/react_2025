# CPNs, instances & elements

## CPN: describe of a piece of UI, return React elements

## Instances: created when CPNs are used(giống instance của obj?), each instance has its own state & props

## Elements: JSX is converted to React.createElement() function calls. A React Element is ther result of these function calls. Then React Element was inserted to DOM

- Call trực tiếp hàm chứa CPN thì không tạo được instance => không được add vào DOM
- Pure function: hàm không có side effects(tức không thay đổi biến nào mà nằm ngoài scope; same input luôn trả ra same output)

## How state updates are batched

- Code chỉ chạy 1 render + commit mỗi event handler function => tính năng này giúp code có performance tốt hơn, không bị spam re-render
- Updating state trong React là asynchronous => Biến state(dù là 1 hay nhiều biến trong 1 event handler) được update giá trị không thay đổi giá trị ngay sau khi call setState, mà chỉ thay đổi sau khi re-render

```javascript
//Ex:
const reset = function () {
  setAnswer("");
  console.log(answer); //do re-render chưa xảy ra => state answer này sẽ là giá trị trước khi được update thành ''
  setBest(true);
};
// hàm này sẽ chỉ render + commit 1 lần dù có 2 set state
```

- Muốn change state nhiều lần trong 1 event handler, cần dùng callback Ex:

```javascript
function handleTripleInc() {
  setLikes((likes) => likes + 1);
  setLikes((likes) => likes + 1);
  setLikes((likes) => likes + 1);
}
```

## Batching beyond event handler func

- Chỉ trong React 18+ mới có auto batch event trong timeouts, promises và native events(set event từ DOM)
- Nếu giá trị state hiện tại === giá trị muốn set => không re-render CPN
