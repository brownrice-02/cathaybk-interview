# Answer 5

## 題目

**Can you explain the problem with the following code, and how to fix it.**
```jsx
class Count extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.handleAddCount = this.handleAddCount.bind(this);
	}
	handleAddCount(){
		this.setState({ count: this.state.count + 1 });
		this.setState({ count: this.state.count + 1 });
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		return (
			<div><h2>{this.state.count}</h2>
				<button onClick={this.handleAddCount}>Add</button>
			</div>
		);
	}
}

ReactDOM.render(
	<Count />,
	document.getElementById('root')
);
```

## 我的回答
上述題目中程式的問題在於 setState 是非同步的，會跑完整個 handleAddCount() 才會渲染。

### 修復方式
改成使用函數形式的 setState，接受先前的狀態，確保每次都是基於最新的狀態進行更新。這樣就能夠正確地將計數值增加三次。
```jsx
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    // 使用函數形式的 setState 以確保基於先前的狀態進行更新
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById('root'));
```