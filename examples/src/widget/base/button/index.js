/**
 * Created by william on 2017/6/1.
 */
var Button = React.createClass({
    render:function(){
        return (
            <input type="button" value={this.props.value}/>
        )
    }
})

module.exports = Button;