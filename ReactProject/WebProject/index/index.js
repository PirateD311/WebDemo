/**
 * Created by Administrator on 2015/10/7.
 */
var Header=React.createClass({
    render:function(){
        return (
            <header className="header">
                <h3>{this.props.data}</h3>
            </header>
        )
    }
});

var CategoryBox=React.createClass({
    render:function(){
        return (
            <div className="CategoryBox">
                <b>{this.props.CategoryName}</b>
            </div>
        )
    }
});

