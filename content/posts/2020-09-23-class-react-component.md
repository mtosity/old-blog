---
template: post
title: React Lifecycle Methods và những thứ liên quan
slug: react-lifecycle-methods
draft: true
date: 2020-09-23T17:25:55.270Z
description: Max gắn gọn React Lifecycle và những thứ liên quan
category: ReactJS
tags:
  - ReactJS
---

### Hiểu về setState trước đã

Chỉ nên gán thẳng `this.state = {...}` chỉ khi ở hàm `constructor` vì gán thẳng thì **react** sẽ không **rerender**, chỉ có `setState` mới trigger rerender

setState là một hàm bất đồng bộ (asynchronous)

```javascript
// assuming this.state = { value: 0 }
this.setState({
  value: 1
});
console.log(this.state.value); // 0
```

```javascript
// assuming this.state = { value: 0 };
// this.state.value = 0
this.setState({ value: this.state.value + 1});
// this.state.value = 0
this.setState({ value: this.state.value + 1});
// this.state.value = 0
this.setState({ value: this.state.value + 1});

// after all setState, this.state.value = 1
```

Vì `setState` là bất đồng bộ nên sau `setState` thì `state` không được update liền nên vẫn sẽ là giá trị cũ

Nhưng nó có callback ở params sau

```javascript
// assuming this.state = { value: 0 }
this.setState(
  {value: 1},
  () => console.log(this.state.value); // 1
);
```

Param đầu của `setState` cũng có thể là một function, `(state) => ({...})`, ở đây `state` là state khi thực hiện câu lệnh `setState`

```javascript
// assuming this.state = { value: 0 };
this.setState((state) => ({ value: state.value + 1})); // state.value = 0
this.setState((state) => ({ value: state.value + 1})); // state.value = 1
this.setState((state) => ({ value: state.value + 1})); // state.value = 2

// after all setState, this.state.value = 3
```

# Lifecycle có 3 giai đoạn chính:

- Mounting: giai đoạn từ lúc component được tạo ra đến khi đẩy vào DOM
- Updating: một update khi state hay props thay đổi -> rerendered
- Unmounting: giai đoạn xoá component khỏi DOM

![react](/media/react-lifecycle.png)

# Mounting

- ## constructor(props)

_Nếu không init state hoặc bind methods thì không cần constructor_

Gọi `super(props)` thì mới xài được `this` trong hàm `constructor()`

```javascript
// Error
class MyComponent extends React.Component {
  constructor() {
    console.log(this); // Reference Error
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

// Good
class MyComponent extends React.Component {
  constructor() {
    super();
    console.log(this); // this logged to console
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

Lý do:

Muốn sử dụng những tinh tuý của react thông qua `this` như `this.props` hay `this.state` trong `MyComponent constructor()` thì `React.Component constructor()` phải được chạy trước và hàm `super()` thực hiện điều đó. `super()` trong JS dùng để gọi `constructor()` của class cha và `MyComponent extends React.Component`.

Truyền props vào `super()` -> `super(props)` thì ở `React.Component constructor()` sẽ gán `props` đó vào `this`, sau đó có thể truy cập `this.props` ở phía dưới.

Vậy tại sao không có `MyComponent constructor()` vẫn xài được `this` như `this.props` hay `this.state`? Do ngoài `MyComponent constructor()` ra thì tất cả các hàm còn lại trong `class MyComponent` đều chạy sau `React.Component constructor()`

```javascript
class MyComponent extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

- ## static getDerivedStateFromProps(props, state)

Well... Docs nói không nên dùng do sẽ làm code rậm rịt và khó hiểu. [You Probably Don't Need Derived State](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html)

`getDerivedStateFromProps` được dùng khi muốn update state khi props thay đổi, giống `UNSAFE_componentWillReceiveProps(nextProps)`, khác ở chỗ vì `getDerivedStateFromProps` là `static` nên nó không truy cập được `this` của component.

Trong hàm là `props` mới truyền vào và `state` hiện tại, return `state` mới thì sẽ rerender, return `null` để không rerender

```javascript
class EmailInput extends Component {
  state = {
    email: this.props.defaultEmail,
    prevPropsUserID: this.props.userID,
  };

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.userID !== state.prevPropsUserID) {
      return {
        prevPropsUserID: props.userID,
        email: props.defaultEmail,
      };
    }
    return null;
  }

  // ...
}
```

- ## render()

Là render đó, nhớ return jsx

- ## componentDidMount()

Chạy ngau sau khi component được mounted, được dùng để fetch dữ liệu remote.

Nên có state ban đầu ở hàm `constructor` (dữ liệu ban đầu để show ví dụ như "", 0, loading = true, [], {},...) để cho component có thứ để render lần đầu rùi ở `componentDidMount` sẽ fetch dữ liệu hay cập nhật dữ liệu rồi `setState` để render thêm một lần nữa. 

Vì nếu fetch dữ liệu trước rùi setState, ví dụ ở hàm lifecycle `UNSAFE_componentWillMount` thì người dùng sẽ cảm thấy website chậm vì fetch data sẽ mất thời gian và trong lúc đó người dùng chả có gì để thấy và tương tác cả

```javascript
componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
```