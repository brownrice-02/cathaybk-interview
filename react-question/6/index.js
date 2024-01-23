var SearchBox = React.createClass({
	timeoutId: null,
  
	render: function() {
	  return <input type="search" name="p" onChange={this.handleOnChange} />;
	},
  
	handleOnChange: function(event) {
	  clearTimeout(this.timeoutId);
  
	  this.timeoutId = setTimeout(() => {
		this.makeAjaxCall(event.target.value);
	  }, 500);
	},
  
	makeAjaxCall: function(value) {
	  // make ajax call
	  console.log("Making ajax call with value:", value);
	}
});
  